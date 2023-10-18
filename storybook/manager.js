import { addons } from "@storybook/manager-api";

/* --- LEGACY EXPRESS TOKENS --- */
import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/expressvars/dist/spectrum-global.css";
import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";

/* --- LEGACY TOKENS --- */
import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-light.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

/* --- MODERN TOKENS --- */
import "@spectrum-css/tokens/dist/index.css";

import "@spectrum-css/typography";

import spectrumTheme from "./SpectrumTheme";

import "prismjs/themes/prism-dark.css";
import "prismjs/themes/prism.css";

import "./storybook-wrapper.css";
import "./storybook-wrapper.js";

addons.setConfig({
    theme: spectrumTheme,
});
