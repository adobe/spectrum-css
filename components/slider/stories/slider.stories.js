import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { SliderGroup } from "./slider.test";
import { Template } from "./template";

/**
 * A slider allows users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
 */
export default {
	title: "Slider",
	component: "Slider",
	argTypes: {
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
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		min: {
			name: "Minimum value",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "number" },
		},
		max: {
			name: "Maximum value",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "number" },
		},
		step: {
			name: "Step value",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "number" },
		},
		variant: {
			name: "Styling variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["ramp", "offset", "filled"],
		},
		labelPosition: {
			name: "Label Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["top", "side"],
		},
		fillColor: {
			name: "Fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
			if: { arg: "variant", neq: "ramp" },
		},
		showTicks: {
			name: "Show tick marks",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "variant", neq: "ramp" },
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
		values: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Slider",
		isDisabled: false,
		isFocused: false,
		showTicks: false,
		labelPosition: "top",
		label: "Slider label",
		size: "m",
		min: 10,
		max: 20,
		values: [14],
		step: 2,
	},
	parameters: {
		actions: {
			handles: [
				"mousedown .spectrum-Slider-handle",
				"change .spectrum-Slider-input",
			],
		},
		componentVersion: version,
	},
};

export const Default = SliderGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Filled = Template.bind({});
Filled.args = {
	...Default.args,
	variant: "filled",
};
Filled.tags = ["!dev"];
Filled.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const FilledOffset = Template.bind({});
FilledOffset.args = {
	...Default.args,
	min: 0,
	variant: "offset",
};
FilledOffset.tags = ["!dev"];
FilledOffset.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Ramp = Template.bind({});
Ramp.args = {
	...Default.args,
	variant: "ramp",
};
Ramp.tags = ["!dev"];
Ramp.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Range = Template.bind({});
Range.args = {
	...Default.args,
	values: [14, 16],
};
Range.tags = ["!dev"];
Range.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Tick = Template.bind({});
Tick.args = {
	...Default.args,
	label: undefined,
	showTicks: true,
};
Tick.tags = ["!dev"];
Tick.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Default.args,
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const WithFocus = Template.bind({});
WithFocus.args = {
	...Default.args,
	isFocused: true,
};
WithFocus.tags = ["!dev"];
WithFocus.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Gradient = Template.bind({});
Gradient.args = {
	...Default.args,
	customStyles: {
		"--spectrum-slider-track-color":
			"linear-gradient(to right, red, green 100%)",
		"--spectrum-slider-track-color-rtl":
			"linear-gradient(to left, red, green 100%)",
	},
	label: "Slider label that is long and wraps to the next line",
};
Gradient.tags = ["!dev"];
Gradient.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const SideLabel = Template.bind({});
SideLabel.args = {
	...Default.args,
	labelPosition: "side",
};
SideLabel.tags = ["!dev"];
SideLabel.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = SliderGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
