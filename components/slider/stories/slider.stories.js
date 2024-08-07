import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template, SizingTemplate } from "./template";

/**
 * A slider allows users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
 * 
 * ## Indicating focus
 * Focus must be bubbled up to the parent so its descendants can be styled.
 *
 * Thus, implementations should add the following class to the `.spectrum-Slider` parent class in the following situations:
 *
 * - `.is-disabled`: when the slider is disabled
 * 
 * Implementations should also bubble the following class to the `.spectrum-Slider-controls` parent class in the following situations:

 * - `.is-focused`: when the handle input is focused with the mouse or keyboard
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
		showTickLabels: {
			name: "Show associated tick labels",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "showTicks", truthy: true },
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
		showTickLabels: false,
		labelPosition: "top",
		label: "Slider label",
		size: "m",
		min: 10,
		max: 20,
		values: [14],
		step: 2,
		id: "spectrum-Slider",
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

/**
 * Sliders should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined.
 */
export const Default = Template.bind({});
Default.args = {};

/**
 * If a slider's label is undefined, it should still include an aria-label in HTML (depending on the context, “aria-label” or “aria-labelledby”).
 */
export const WithoutLabel = Template.bind({});
WithoutLabel.args = { 
	label: "",
};
WithoutLabel.tags = ["autodocs", "!dev"];
WithoutLabel.storyName = "Without label";

/**
 * With fill.
 */
export const Filled = Template.bind({});
Filled.args = {
	...Default.args,
	variant: "filled",
};
Filled.tags = ["autodocs", "!dev"];

/**
 * With fill and offset.
 */
export const FilledOffset = Template.bind({});
FilledOffset.args = {
	...Default.args,
	min: 0,
	variant: "offset",
};
FilledOffset.tags = ["autodocs", "!dev"];

export const Ramp = Template.bind({});
Ramp.args = {
	...Default.args,
	variant: "ramp",
};
Ramp.tags = ["autodocs", "!dev"];

/**
 * A range slider with two handles.
 */
export const Range = Template.bind({});
Range.args = {
	...Default.args,
	values: [14, 16],
};
Range.tags = ["autodocs", "!dev"];

/**
 * Spectrum tick slider.
 */
export const Tick = Template.bind({});
Tick.args = {
	showTicks: true,
};
Tick.tags = ["autodocs", "!dev"];

/**
 * Spectrum tick slider with tick labels.
 */
export const TickWithLabels = Template.bind({});
TickWithLabels.args = {
	...Default.args,
	showTicks: true,
	showTickLabels: true,
};
TickWithLabels.tags = ["autodocs", "!dev"];
TickWithLabels.storyName = "Tick with labels";

export const Disabled = Template.bind({});
Disabled.args = {
	...Default.args,
	isDisabled: true,
};
Disabled.tags = ["autodocs", "!dev"];

export const Focused = Template.bind({});
Focused.args = {
	...Default.args,
	isFocused: true,
};
Focused.tags = ["autodocs", "!dev"];

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
Gradient.tags = ["autodocs", "!dev"];

export const WithSideLabel = Template.bind({});
WithSideLabel.args = {
	...Default.args,
	labelPosition: "side",
};
WithSideLabel.tags = ["autodocs", "!dev"];
WithSideLabel.storyName = "With side label";

export const Sizing = SizingTemplate.bind({});
Sizing.args = {};
Sizing.tags = ["autodocs", "!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Focused.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
