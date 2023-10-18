import { addons } from "@storybook/manager-api";

/* --- MODERN TOKENS --- */
import "@spectrum-css/tokens";

import spectrumTheme from "./SpectrumTheme";

import "prismjs/themes/prism-dark.css";
import "prismjs/themes/prism.css";

import "./storybook-wrapper.css";
import "./storybook-wrapper.js";

addons.setConfig({
    theme: spectrumTheme,
});
