import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { CloseButtonGroup } from "./closebutton.test.js";

/**
 * A button used to close or dismiss components.
 */
export default {
	title: "Close button",
	component: "CloseButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		staticColor,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-CloseButton",
		size: "m",
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-CloseButton"],
		},
		packageJson: pkgJson,
	},
};

export const Default = CloseButtonGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = CloseButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
