import { addons } from "@storybook/manager-api";

import spectrumTheme from "./SpectrumTheme";

import "../assets/scripts/typekit.js";
import "../assets/styles/_themes.css";
import "./storybook-wrapper.css";

addons.setConfig({
    theme: spectrumTheme,
    sidebar: {
        showRoots: false,
    },
});
