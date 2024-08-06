import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size, staticColor } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * The clear button component is an in-field button used in search and tag.
 */
export default {
	title: "Clear button",
	component: "ClearButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isDisabled,
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-ClearButton",
		size: "m",
		isDisabled: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const OverBackground = Template.bind({});
OverBackground.tags = ["!autodocs", "!dev"];
OverBackground.args = {
	staticColor: "white",
};

export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
