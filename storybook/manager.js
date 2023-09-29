import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import logo from "../assets/images/logo.svg";
import pkg from "./package.json";

// Loading typography on every page because it's a useful utility
import "@spectrum-css/typography";

import "./storybook.css";
import "./storybook.js";

const color = localStorage.getItem(`spectrum-color`) ?? window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
const scale = localStorage.getItem(`spectrum-scale`) ?? window.matchMedia("(max-width: 961px)").matches ? 'large' : 'medium';
const theme = localStorage.getItem(`spectrum-theme`) ?? 'spectrum';

addons.setConfig({
  theme: create({
    base: "light",

    brandTitle: "Spectrum CSS",
    brandUrl: pkg.homepage ?? "https://opensource.adobe.com/spectrum-css",
    brandImage: logo,

    fontBase: 'var(--spectrum-sans-font-family-stack)',
    fontCode: 'var(--spectrum-code-font-family-stack)',

    colorSecondary: "var(--spectrum-blue-300)",

    // UI
    appBg: "var(--spectrum-gray-100)" /* Being applied to the active state of radio buttons */,
    appContentBg: "var(--spectrum-gray-100)" /* Being applied to the arg table */,
    appBorderColor: "var(--spectrum-gray-300)",
    appBorderRadius: 5,

    // Text colors
    textColor: "var(--spectrum-gray-900)",

    // Toolbar default and active colors
    barTextColor: "var(--spectrum-gray-900)",
    barSelectedColor: "var(--spectrum-treeview-item-background-color-quiet-selected)",
    barBg: 'var(--spectrum-gray-300)',

    // Form colors
    inputBg: "var(--spectrum-gray-100)",
    inputBorder: "var(--spectrum-gray-300)",
    inputTextColor: "var(--spectrum-gray-900)",
    inputBorderRadius: 5,
  }),
  // sidebar: {
  //   showRoots: false,
  // },
});
