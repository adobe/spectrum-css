import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { ProgressCircleGroup } from "./progresscircle.test";

/**
 * Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
 */
export default {
	title: "Progress circle",
	component: "ProgressCircle",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		isIndeterminate: {
			name: "Indeterminate",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				disable: true,
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white"],
			control: "select",
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
