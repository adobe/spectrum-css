import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import "./assets/index.css";

import logo from "./assets/logo.svg";
import pkg from "./package.json";

// Load global styles
import "@spectrum-css/vars/css/globals/index.css";
import "@spectrum-css/vars/css/components/index.css";

import "@spectrum-css/vars/css/scales/spectrum-medium.css";
import "@spectrum-css/vars/css/themes/spectrum-light.css";

import "./global.js";

addons.setConfig({
	theme: create({
		base: "light",

		brandTitle: "Spectrum CSS",
		brandUrl: pkg.homepage ?? "https://opensource.adobe.com/spectrum-css",
		brandImage: logo,

		fontBase:
			'adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif',
		fontCode: '"Source Code Pro", Monaco, monospace',

		colorSecondary: "rgb(2, 101, 220)",

		// UI
		appBg:
			"rgb(255,255,255)" /* Being applied to the active state of radio buttons */,
		appContentBg: "rgb(255, 255, 255)" /* Being applied to the arg table */,
		appBorderColor: "rgb(213, 213, 213)",
		appBorderRadius: 4,

		// Text colors
		textColor: "rgb(34, 34, 34)",

		// Toolbar default and active colors
		barTextColor:
			"rgb(34, 34, 34)" /* --spectrum-neutral-content-color-default */,
		barSelectedColor: "rgb(2, 101, 220)" /* --spectrum-global-color-blue-900 */,
		// barBg: 'rgb(248, 248, 248)', /* --spectrum-alias-background-color-default */

		// Form colors
		inputBg: "rgb(255, 255, 255)",
		inputBorder: "rgb(177, 177, 177)",
		inputTextColor: "rgb(34, 34, 34)",
		inputBorderRadius: 4,
	}),
	sidebar: {
		showRoots: false,
	},
});
