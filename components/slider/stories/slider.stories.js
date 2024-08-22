import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Sizes } from "@spectrum-css/preview/decorators";
import { isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { SliderGroup } from "./slider.test.js";
import { Template } from "./template.js";

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
			description: "Displays the values at each step of the slider",
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
 * Sliders should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. Top labels are the default and are recommended because they work better with long copy, localization, and responsive layouts.
 */
export const Default = SliderGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * If a slider's label is undefined, it should still include an aria-label in HTML (depending on the context, “aria-label” or “aria-labelledby”).
 */
export const WithoutLabel = Template.bind({});
WithoutLabel.args = { 
	label: "",
};
WithoutLabel.tags = ["!dev"];
WithoutLabel.storyName = "Without label";
WithoutLabel.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.args = Default.args;
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * The track of the slider can have a fill. By default, the fill originates from the left side of the track.
 */
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

/**
 * With fill and offset. If the value represents an offset, the fill start can be set to represent the point of origin. This allows the slider fill to start from inside the track.
 */
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

/**
 * A range slider with two handles.
 */
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

/**
 * Spectrum tick slider.
 */
export const Tick = Template.bind({});
Tick.args = {
	...Default.args,
	showTicks: true,
};
Tick.tags = ["!dev"];
Tick.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Spectrum tick slider with tick labels.
 */
export const TickWithLabels = Template.bind({});
TickWithLabels.args = {
	...Default.args,
	showTicks: true,
	showTickLabels: true,
};
TickWithLabels.tags = ["!dev"];
TickWithLabels.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
TickWithLabels.storyName = "Tick with labels";

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

export const Focused = Template.bind({});
Focused.args = {
	...Default.args,
	isFocused: true,
};
Focused.tags = ["!dev"];
Focused.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * A gradient can be added to the track of any slider to give more meaning to the range of values. Tracks with a gradient can also have a fill. A gradient track should not be used for choosing a precise color; use a [color slider](/docs/components-color-slider--docs), [color area](/docs/components-color-area--docs), or [color wheel](/docs/components-color-wheel--docs) instead.
 */
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

/**
 * Labels can be placed either on top or on the side. Side labels are most useful when vertical space is limited.
 */
export const WithSideLabel = Template.bind({});
WithSideLabel.args = {
	...Default.args,
	labelPosition: "side",
};
WithSideLabel.tags = ["!dev"];
WithSideLabel.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
WithSideLabel.storyName = "With side label";

// ********* VRT ONLY ********* //
export const WithForcedColors = SliderGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
