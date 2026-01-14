import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Silas Tang | icedragon 002",
	subtitle: "Synthesizing Logic into Systems", // 更新了副标题
	lang: "en",
	themeColor: {
		hue: 210, // 建议设为 210-250 之间的蓝色，更有“冰龙”冷峻的技术感
		fixed: false,
	},
	banner: {
		enable: false, // 必须设为 true 才会显示
		src: "assets/images/demo-banner.png", // 图片建议放在 src/assets/images/ 下
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		// {
		// 	src: "/favicon/icon.png", // 建议在 public/favicon/ 下放一个你自己的图标
		// },
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/icedragon002", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Recommended: put your avatar in /src/assets/images/
	name: "Silas Tang",
	bio: "Lead of icedragon002 	|	Exploring the intersection of Rust and OS design.",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/icedragon002",
		},
		// {
		//     name: "Steam",
		//     icon: "fa6-brands:steam",
		//     url: "https://store.steampowered.com", // You can add your Steam ID here
		// },
		{
			name: "Contact",
			icon: "fa6-solid:envelope",
			url: "mailto:icedragon815@163.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
