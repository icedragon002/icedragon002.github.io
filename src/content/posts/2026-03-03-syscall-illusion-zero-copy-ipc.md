---
title: "Zero-Copy IPC between Rust and JS: Bypassing Syscalls with Shared Memory" 
author: "Silas Tang | Axiom 042" 
published: 2026-03-03 
description: "Looking at how to bypass kernel overhead for IPC using shared memory and a lock-free ring buffer between Rust and TypeScript." 
category: "Kernel Space" 
tags: ["Rust", "TypeScript", "IPC", "Memory Management", "NAPI", "Zero-Copy"] 
draft: false
---
> *"The operating system is a collection of things that don't fit into the hardware."* > — **Ken Thompson**

When building systems that bridge a TypeScript gateway and a Rust core, Unix Domain Sockets (UDS) are the standard choice for IPC. They bypass the TCP/IP stack and are generally fast enough for most use cases. However, UDS still relies on `read()` and `write()` syscalls.

In high-throughput scenarios, the overhead of context switching into kernel space, CPU pipeline flushing, and potential TLB invalidation can add up. If you find that the kernel itself is becoming the bottleneck, one practical solution is to bypass it entirely using Memory-Mapped IPC (Shared Memory) combined with a lock-free ring buffer.

## 1. Memory-Mapped IPC

To get true zero-copy communication, we need to share state rather than pass messages back and forth.

On Linux, this involves using `shm_open` or `memfd_create` in the Rust process to allocate a contiguous block of physical RAM, and then mapping it with `mmap`.

```rust
// Rust: Mapping the shared memory segment
let fd = shm_open(name, O_CREAT | O_RDWR, 0600);
ftruncate(fd, BUFFER_SIZE);
let ptr = mmap(null_mut(), BUFFER_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
```

The JS runtime (like Node.js or Bun) maps this exact same file descriptor, exposing it as a raw `SharedArrayBuffer`. At this point, a byte written by Rust is immediately accessible to the JS engine. But sharing memory is straightforward; the real challenge is synchronizing access without locking.

## 2. Managing Concurrency without Futex

If we synchronize access to this shared buffer using standard Mutexes, we risk falling back to a `futex` syscall under contention, which puts the executing thread right back into the kernel queue.

To stay in user space, we need to implement a Single-Producer Single-Consumer (SPSC) lock-free ring buffer based on atomic operations.

### The Memory Ordering Problem

Using the default `Ordering::SeqCst` (Sequentially Consistent) for atomic operations is safe, but it emits memory fences that can impact performance. For a ring buffer, it is more efficient to use `Acquire` and `Release` semantics:

* The Producer (Rust) uses `Ordering::Release` when updating the `tail` index. This ensures that all data written to the buffer is visible to other cores *before* the index update is published.
* The Consumer (JS/TS) uses `Atomics.load` (which implies an `Acquire` barrier) when reading the `tail` index, ensuring it doesn't read the buffer data *before* fetching the latest index.

### Mitigating False Sharing

In a ring buffer, the `head` (read index) and `tail` (write index) atomic variables are frequently updated by different cores.

Modern CPUs load memory into caches in blocks called Cache Lines (typically 64 bytes). If the `head` and `tail` variables sit adjacently in the same 64-byte block, Core A updating the `tail` will invalidate the entire cache line for Core B, even if Core B only wants to read the `head`. This is known as "false sharing" and can cause a noticeable drop in throughput.

To resolve this, we can force the compiler to pad the atomic indices so they sit on separate cache lines:

```rust
// Rust: Forcing cache-line alignment to prevent false sharing
#[repr(C)]
#[repr(align(64))] // Align to typical CPU cache line size
struct CacheAlignedIndex {
    value: AtomicUsize,
}

#[repr(C)]
pub struct RingBufferHeader {
    pub tail: CacheAlignedIndex, // Written by Producer
    pub head: CacheAlignedIndex, // Written by Consumer
}
```

By explicitly padding these variables, the hardware can independently cache and update them without invalidating the other core's L1 cache.

## 3. Memory Layout as the Contract

Even with shared memory, standard serialization formats (like Protobuf or JSON) still require CPU cycles to encode and decode.

If you control both sides of the IPC, the memory layout itself can serve as the contract. By defining data structures with `#[repr(C)]` in Rust, you guarantee a predictable memory layout without implicit padding.

```rust
#[repr(C)]
pub struct SensorData {
    pub timestamp: u64,
    pub velocity: f32,
    pub active: u8,
}
```

On the TypeScript side, the gateway simply casts a `DataView` or a `Float32Array` over the `SharedArrayBuffer` at the specific offset and reads the bytes directly. There is no parsing step—just direct memory offset reads.

## Conclusion

Bypassing the OS for IPC is a significant trade-off. You lose the built-in flow control, safety, and simplicity of standard sockets. In exchange, you take on the responsibility of managing memory barriers, cache alignment, and strict data contracts.

It is definitely not an architecture you need for every service. But when you are pushing high volumes of data between a TS gateway and a Rust backend, and profiling shows that syscall overhead is your actual bottleneck, shared memory is a practical way to squeeze out more performance.
