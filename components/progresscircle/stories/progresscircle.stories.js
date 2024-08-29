import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isIndeterminate, size, staticColor } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ProgressCircleGroup } from "./progresscircle.test.js";

/**
 * Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
 */
export default {
	title: "Progress circle",
	component: "ProgressCircle",
	argTypes: {
		size: size(["s", "m", "l"]),
		isIndeterminate,
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-ProgressCircle",
		size: "m",
		isIndeterminate: false,
		staticColor: undefined,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = ProgressCircleGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = ProgressCircleGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const StaticWhite = ProgressCircleGroup.bind({});
StaticWhite.tags = ["!autodocs", "!dev"];
StaticWhite.args = {
	staticColor: "white",
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};
