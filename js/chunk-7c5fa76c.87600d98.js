(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5fa76c"],{"068f":function(e,t,n){"use strict";var r=n("5530"),o=(n("a9e3"),n("7a23")),a=n("0d59"),c=n("7590"),l=n("050a"),i=n("cdf5"),u=(n("0967"),16/9);t["a"]=Object(l["a"])({name:"QImg",props:Object(r["a"])(Object(r["a"])({},c["b"]),{},{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},width:String,height:String,initialRatio:{type:[Number,String],default:u},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup:function(e,t){var n,l=t.slots,u=t.emit,d=Object(o["ref"])(e.initialRatio),s=Object(c["a"])(e,d),b=[Object(o["ref"])(null),Object(o["ref"])(void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null)],v=Object(o["ref"])(0),f=Object(o["ref"])(!1),m=Object(o["ref"])(!1),g=Object(o["computed"])((function(){return"q-img q-img--".concat(!0===e.noNativeMenu?"no-":"","menu")})),O=Object(o["computed"])((function(){return{width:e.width,height:e.height}})),j=Object(o["computed"])((function(){return"q-img__image ".concat(void 0!==e.imgClass?e.imgClass+" ":"")+"q-img__image--with".concat(!0===e.noTransition?"out":"","-transition")})),p=Object(o["computed"])((function(){return Object(r["a"])(Object(r["a"])({},e.imgStyle),{},{objectFit:e.fit,objectPosition:e.position})}));function h(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function V(e){if(clearTimeout(n),m.value=!1,null===e)return f.value=!1,b[0].value=null,void(b[1].value=null);f.value=!0,b[v.value].value=e}function y(e){var t=e.target;null!==n&&(clearTimeout(n),d.value=0===t.naturalHeight?.5:t.naturalWidth/t.naturalHeight,k(t,1))}function k(e,t){null!==n&&1e3!==t&&(!0===e.complete?q(e):n=setTimeout((function(){k(e,t+1)}),50))}function q(e){null!==n&&(v.value=1===v.value?0:1,b[v.value].value=null,f.value=!1,m.value=!1,u("load",e.currentSrc||e.src))}function _(e){clearTimeout(n),f.value=!1,m.value=!0,b[0].value=null,b[1].value=null,u("error",e)}function x(e,t){return Object(o["h"])("div",{class:"q-img__container absolute-full",key:e},t)}function S(t){var n=b[t].value,a=Object(r["a"])({key:"img_"+t,class:j.value,style:p.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,"aria-hidden":"true",draggable:e.draggable},n);return v.value===t?(a.class+=" q-img__image--waiting",Object.assign(a,{onLoad:y,onError:_})):a.class+=" q-img__image--loaded",x("img"+t,Object(o["h"])("img",a))}function N(){return!0!==f.value?Object(o["h"])("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Object(i["d"])(l[!0===m.value?"error":"default"])):Object(o["h"])("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==l.loading?l.loading():!0===e.noSpinner?void 0:[Object(o["h"])(a["a"],{color:e.spinnerColor,size:e.spinnerSize})])}return Object(o["watch"])((function(){return h()}),V),V(h()),Object(o["onBeforeUnmount"])((function(){clearTimeout(n),n=null})),function(){var t=[];return null!==s.value&&t.push(Object(o["h"])("div",{key:"filler",style:s.value})),!0!==m.value&&(null!==b[0].value&&t.push(S(0)),null!==b[1].value&&t.push(S(1))),t.push(Object(o["h"])(o["Transition"],{name:"q-transition--fade"},N)),Object(o["h"])("div",{class:g.value,style:O.value,role:"img","aria-label":e.alt},t)}}})},"1d8e":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return i}));var r=n("5530"),o=(n("b0c0"),n("7a23")),a={name:String};function c(e){return Object(o["computed"])((function(){return{type:"hidden",name:e.name,value:e.modelValue}}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n,a){t[n](Object(o["h"])("input",Object(r["a"])({class:"hidden"+(a||"")},e.value)))}}function i(e){return Object(o["computed"])((function(){return e.name||e.for}))}},"5e41":function(e,t,n){},"6f72":function(e,t,n){"use strict";n("5e41")},7590:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n("a9e3");var r=n("7a23"),o={ratio:[String,Number]};t["a"]=function(e,t){return Object(r["computed"])((function(){var n=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(n)&&n>0?{paddingBottom:"".concat(100/n,"%")}:null}))}},f7b4:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=function(e){return Object(r["pushScopeId"])("data-v-5cac939d"),e=e(),Object(r["popScopeId"])(),e},a=o((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),c={class:"q-pa-md bg-grey-10 text-white rounded-borders"},l={class:"q-gutter-sm"},i=o((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),u={class:"q-pa-md"},d={class:"row justify-center q-gutter-sm"},s=o((function(){return Object(r["createElementVNode"])("div",{class:"text-overline"},"Overline",-1)})),b=o((function(){return Object(r["createElementVNode"])("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Title",-1)})),v=o((function(){return Object(r["createElementVNode"])("div",{class:"text-caption text-grey"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)}));function f(e,t,n,o,f,m){var g=Object(r["resolveComponent"])("q-checkbox"),O=Object(r["resolveComponent"])("q-card-section"),j=Object(r["resolveComponent"])("q-img"),p=Object(r["resolveComponent"])("q-card"),h=Object(r["resolveComponent"])("q-intersection");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[a,Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(g,{dark:"",modelValue:o.japanese,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.japanese=e}),label:"日漫",color:"orange"},null,8,["modelValue"]),Object(r["createVNode"])(g,{dark:"",modelValue:o.chinese,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.chinese=e}),label:"国漫",color:"red"},null,8,["modelValue"]),Object(r["createVNode"])(g,{dark:"",modelValue:o.american,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.american=e}),label:"美漫",color:"blue"},null,8,["modelValue"]),Object(r["createVNode"])(g,{dark:"",modelValue:o.other,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.other=e}),label:"其他",color:"green"},null,8,["modelValue"])])]),i,Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("div",d,[(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(10,(function(e){return Object(r["createVNode"])(h,{key:e,once:"",transition:"scale",class:"example-item"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{class:"q-ma-sm",flat:"",bordered:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{horizontal:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{class:"q-pt-xs"},{default:Object(r["withCtx"])((function(){return[s,b,v]})),_:1}),Object(r["createVNode"])(O,{class:"col-5 flex flex-center"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{class:"rounded-borders",src:"https://cdn.quasar.dev/img/parallax2.jpg"})]})),_:1})]})),_:1})]})),_:1})]})),_:2},1024)})),64))])])])}var m={setup:function(){return{japanese:Object(r["ref"])(!0),chinese:Object(r["ref"])(!0),american:Object(r["ref"])(!0),other:Object(r["ref"])(!0)}}},g=(n("6f72"),n("6b0d")),O=n.n(g),j=n("0016"),p=n("050a"),h=n("5530"),V=(n("a9e3"),n("99af"),n("b0c0"),n("fb6a"),n("a434"),n("3da5")),y=n("98e0"),k=function(e,t){var n=Object(r["ref"])(null),o=Object(r["computed"])((function(){return!0!==e.disable?null:Object(r["h"])("span",{ref:n,class:"no-outline",tabindex:-1})}));function a(e){var r=t.value;void 0!==e&&0===e.type.indexOf("key")?null!==r&&document.activeElement!==r&&!0===r.contains(document.activeElement)&&r.focus():null!==n.value&&(void 0===e||null!==r&&!0===r.contains(e.target))&&n.value.focus()}return{refocusTargetEl:o,refocusTarget:a}},q=n("1d8e"),_={xs:30,sm:35,md:40,lg:50,xl:60},x=n("d882"),S=n("cdf5"),N=Object(h["a"])(Object(h["a"])(Object(h["a"])(Object(h["a"])({},V["b"]),y["c"]),q["d"]),{},{modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:function(e){return"tf"===e||"ft"===e}},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]}),w=["update:modelValue"],C=function(e,t){var n=Object(r["getCurrentInstance"])(),o=n.props,a=n.slots,c=n.emit,l=n.proxy,i=l.$q,u=Object(V["a"])(o,i),d=Object(r["ref"])(null),s=k(o,d),b=s.refocusTargetEl,v=s.refocusTarget,f=Object(y["a"])(o,_),m=Object(r["computed"])((function(){return void 0!==o.val&&Array.isArray(o.modelValue)})),g=Object(r["computed"])((function(){return!0===m.value?o.modelValue.indexOf(o.val):-1})),O=Object(r["computed"])((function(){return!0===m.value?g.value>-1:o.modelValue===o.trueValue})),j=Object(r["computed"])((function(){return!0===m.value?-1===g.value:o.modelValue===o.falseValue})),p=Object(r["computed"])((function(){return!1===O.value&&!1===j.value})),N=Object(r["computed"])((function(){return!0===o.disable?-1:o.tabindex||0})),w=Object(r["computed"])((function(){return"q-".concat(e," cursor-pointer no-outline row inline no-wrap items-center")+(!0===o.disable?" disabled":"")+(!0===u.value?" q-".concat(e,"--dark"):"")+(!0===o.dense?" q-".concat(e,"--dense"):"")+(!0===o.leftLabel?" reverse":"")})),C=Object(r["computed"])((function(){var t=!0===O.value?"truthy":!0===j.value?"falsy":"indet",n=void 0===o.color||!0!==o.keepColor&&("toggle"===e?!0!==O.value:!0===j.value)?"":" text-".concat(o.color);return"q-".concat(e,"__inner relative-position non-selectable q-").concat(e,"__inner--").concat(t).concat(n)})),I=Object(r["computed"])((function(){var e={type:"checkbox"};return void 0!==o.name&&Object.assign(e,{"^checked":!0===O.value?"checked":void 0,name:o.name,value:!0===m.value?o.val:o.trueValue}),e})),B=Object(q["b"])(I),E=Object(r["computed"])((function(){var e={tabindex:N.value,role:"checkbox","aria-label":o.label,"aria-checked":!0===p.value?"mixed":!0===O.value?"true":"false"};return!0===o.disable&&(e["aria-disabled"]="true"),e}));function T(e){void 0!==e&&(Object(x["k"])(e),v(e)),!0!==o.disable&&c("update:modelValue",z(),e)}function z(){if(!0===m.value){if(!0===O.value){var e=o.modelValue.slice();return e.splice(g.value,1),e}return o.modelValue.concat([o.val])}if(!0===O.value){if("ft"!==o.toggleOrder||!1===o.toggleIndeterminate)return o.falseValue}else{if(!0!==j.value)return"ft"!==o.toggleOrder?o.trueValue:o.falseValue;if("ft"===o.toggleOrder||!1===o.toggleIndeterminate)return o.trueValue}return o.indeterminateValue}function Q(e){13!==e.keyCode&&32!==e.keyCode||Object(x["k"])(e)}function M(e){13!==e.keyCode&&32!==e.keyCode||T(e)}var U=t(O,p);return Object.assign(l,{toggle:T}),function(){var t=U();!0!==o.disable&&B(t,"unshift"," q-".concat(e,"__native absolute q-ma-none q-pa-none"));var n=[Object(r["h"])("div",{class:C.value,style:f.value},t)];null!==b.value&&n.push(b.value);var c=void 0!==o.label?Object(S["b"])(a.default,[o.label]):Object(S["d"])(a.default);return void 0!==c&&n.push(Object(r["h"])("div",{class:"q-".concat(e,"__label q-anchor--skip")},c)),Object(r["h"])("div",Object(h["a"])(Object(h["a"])({ref:d,class:w.value},E.value),{},{onClick:T,onKeydown:Q,onKeyup:M}),n)}},I=Object(r["h"])("div",{key:"svg",class:"q-checkbox__bg absolute"},[Object(r["h"])("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[Object(r["h"])("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),Object(r["h"])("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),B=Object(p["a"])({name:"QCheckbox",props:N,emits:w,setup:function(e){function t(t,n){var o=Object(r["computed"])((function(){return(!0===t.value?e.checkedIcon:!0===n.value?e.indeterminateIcon:e.uncheckedIcon)||null}));return function(){return null!==o.value?[Object(r["h"])("div",{key:"icon",class:"q-checkbox__icon-container absolute flex flex-center no-wrap"},[Object(r["h"])(j["a"],{class:"q-checkbox__icon",name:o.value})])]:[I]}}return C("checkbox",t)}}),E=n("0967"),T=n("3835"),z=n("8b2e"),Q=(n("4fbb"),{threshold:0,root:null,rootMargin:"0px"});function M(e,t,n){var r,o,a;"function"===typeof n?(r=n,o=Q,a=void 0===t.cfg):(r=n.handler,o=Object.assign({},Q,n.cfg),a=void 0===t.cfg||!1===Object(z["b"])(t.cfg,o)),t.handler!==r&&(t.handler=r),!0===a&&(t.cfg=o,void 0!==t.observer&&t.observer.unobserve(e),t.observer=new IntersectionObserver((function(n){var r=Object(T["a"])(n,1),o=r[0];if("function"===typeof t.handler){if(null===o.rootBounds&&!0===document.body.contains(e))return t.observer.unobserve(e),void t.observer.observe(e);var a=t.handler(o,t.observer);(!1===a||!0===t.once&&!0===o.isIntersecting)&&U(e)}}),o),t.observer.observe(e))}function U(e){var t=e.__qvisible;void 0!==t&&(void 0!==t.observer&&t.observer.unobserve(e),delete e.__qvisible)}var L=Object(p["b"])({name:"intersection",mounted:function(e,t){var n=t.modifiers,r=t.value,o={once:!0===n.once};M(e,o,r),e.__qvisible=o},updated:function(e,t){var n=e.__qvisible;void 0!==n&&M(e,n,t.value)},beforeUnmount:U}),H=Object(p["a"])({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup:function(e,t){var n=t.slots,o=t.emit,a=Object(r["ref"])(!0===E["d"].value&&e.ssrPrerender),c=Object(r["computed"])((function(){return void 0!==e.root||void 0!==e.margin||void 0!==e.threshold?{handler:d,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:d})),l=Object(r["computed"])((function(){return!0!==e.disable&&(!0!==E["d"].value||!0!==e.once||!0!==e.ssrPrerender)})),i=Object(r["computed"])((function(){return[[L,c.value,void 0,{once:e.once}]]})),u=Object(r["computed"])((function(){return"--q-transition-duration: ".concat(e.transitionDuration,"ms")}));function d(t){a.value!==t.isIntersecting&&(a.value=t.isIntersecting,void 0!==e.onVisibility&&o("visibility",a.value))}function s(){return!0===a.value?[Object(r["h"])("div",{key:"content",style:u.value},Object(S["d"])(n.default))]:void 0}return function(){var t=e.transition?[Object(r["h"])(r["Transition"],{name:"q-transition--"+e.transition},s)]:s();return Object(S["a"])(e.tag,{class:"q-intersection"},t,"main",l.value,(function(){return i.value}))}}}),P=n("f09f"),A=n("a370"),F=n("068f"),D=n("93dc"),J=n.n(D);const K=O()(m,[["render",f],["__scopeId","data-v-5cac939d"]]);t["default"]=K;J()(m,"components",{QCheckbox:B,QIntersection:H,QCard:P["a"],QCardSection:A["a"],QImg:F["a"]})}}]);
//# sourceMappingURL=chunk-7c5fa76c.87600d98.js.map