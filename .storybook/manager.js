import { addons } from "@storybook/manager-api";

import spectrumTheme from "./SpectrumTheme";

import "./storybook-wrapper.css";

/* --- LEGACY TOKENS --- */
import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-light.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

import "@spectrum-css/tokens";

import "./typekit.js";

addons.setConfig({
    theme: spectrumTheme,
    sidebar: {
        showRoots: false,
    },
});
