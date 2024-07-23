import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { ProgressBarGroup } from "./template";

/**
 * The progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 */
export default {
	title: "Progress bar",
	component: "ProgressBar",
	argTypes: {
		customWidth: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		isIndeterminate: {
			name: "Indeterminate state",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white"],
			control: "select",
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
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const StaticWhite = Default.bind({});
StaticWhite.tags = ["!autodocs", "!dev", "test"];
StaticWhite.args = {
	staticColor: "white",
	label: "Loading your fonts, images, and icons",
	value: 50,
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};
