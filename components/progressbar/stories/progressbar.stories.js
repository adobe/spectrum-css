import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isIndeterminate, size, staticColor } from "@spectrum-css/preview/types";
import { ProgressBarGroup } from "./progressbar.test.js";

/**
 * The progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 */
export default {
	title: "Progress bar",
	component: "ProgressBar",
	argTypes: {
		customWidth: { table: { disable: true } },
		size: size(["s", "m", "l", "xl"]),
		isIndeterminate,
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		value: {
			name: "Percent filled",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
			if: { arg: "isIndeterminate", truthy: false },
		},
		trackFill: { table: { disable: true }},
		progressBarFill: { table: { disable: true }},
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "m",
		labelPosition: "top",
		value: 0,
		isIndeterminate: false,
	},
};

export const Default = ProgressBarGroup.bind({});
Default.args = {
	label: "Loading",
	value: 50,
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ProgressBarGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
