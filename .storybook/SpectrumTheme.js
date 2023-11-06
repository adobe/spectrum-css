import { create } from "@storybook/theming/create";

import logo from "./assets/logo.svg";
import pkg from "./package.json";

export default create({
    base: "light",

    brandTitle: "Spectrum CSS",
    brandUrl: pkg.homepage ?? "https://opensource.adobe.com/spectrum-css",
    brandImage: logo,

    fontBase:
        'adobe-clean, Adobe Clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif',
    fontCode: "'Source Code Pro', Monaco, monospace",

    colorSecondary: "rgb(56, 146, 243)", // var(--spectrum-blue-700)

    // UI
    appBg: "#fff" /* Being applied to the body tag & active state of radio buttons */, // var(--spectrum-gray-50)
    appContentBg: "#f8f8f8" /* Being applied to the arg table */, // var(--spectrum-gray-100)
    appBorderColor: "#d5d5d5", // var(--spectrum-gray-300)
    appBorderRadius: 5,

    // Text colors
    textColor: "#000000", // var(--spectrum-gray-900)

    // Toolbar default and active colors
    barTextColor: "#000000", // var(--spectrum-gray-900)
    barSelectedColor: "#00000099", // var(--spectrum-gray-900)
    barBg: "#fff", // var(--spectrum-gray-50)

    // Form colors
    inputBg: "#fff", // var(--spectrum-gray-50)
    inputBorder: "#d5d5d5", // var(--spectrum-gray-300)
    inputTextColor: "#000000", // var(--spectrum-gray-900)
    inputBorderRadius: 5,
});
