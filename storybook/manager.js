import { addons } from "@storybook/manager-api";

import spectrumTheme from "./SpectrumTheme";

import "./storybook-wrapper.css";
import "./storybook-wrapper.js";

addons.setConfig({
    theme: spectrumTheme,
});
