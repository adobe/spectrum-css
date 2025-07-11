import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isFocused, isHovered, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
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
		size: size(["s", "m", "l", "xl"]),
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
		trackHeight: {
			name: "Track height",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["medium", "large"],
			if: { arg: "variant", neq: "ramp" },
		},
		labelPosition: {
			name: "Label position",
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
		isPrecise: {
			name: "Precise handle control",
			description: "Provides precise control for accurate values.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isEditable: {
			name: "Editable text input",
			description: "Enables text input to also control the slider value.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isEmphasized,
		isActive,
		isHovered,
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
		values: {
			table: { disable: true }
		},
	},
	args: {
		rootClass: "spectrum-Slider",
		isEmphasized: false,
		isActive: false,
		isHovered: false,
		isDisabled: false,
		isFocused: false,
		showTicks: false,
		showTickLabels: false,
		labelPosition: "top",
		label: "Label",
		size: "m",
		min: 0,
		max: 30,
		values: [15],
		step: 5,
		trackHeight: "medium",
		isPrecise: false,
		isEditable: false,
		variant: "filled",
	},
	parameters: {
		actions: {
			handles: [
				"mousedown .spectrum-Slider-handle",
				"change .spectrum-Slider-input",
			],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=842-1056",
		},
		downState: {
			selectors: [".spectrum-Slider-handle:not(:disabled)"],
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

/**
 * Sliders should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. Top labels are the default and are recommended because they work better with long copy, localization, and responsive layouts.
 * The track of the slider can have a fill. By default, the fill originates from the left side of the track when the global direction is LTR and from the right side of the track when the global direction is RTL.
 */
export const Default = SliderGroup.bind({});
Default.args = {
	variant: "filled",
};

// ********* DOCS ONLY ********* //
/**
 * If a slider's label is undefined, it should still include an aria-label in HTML (depending on the context, "aria-label" or "aria-labelledby").
 */
export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
	label: "",
	variant: "filled",
};
WithoutLabel.tags = ["!dev"];
WithoutLabel.storyName = "Without label";
WithoutLabel.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Editable = Template.bind({});
Editable.args = {
	...Default.args,
	isEditable: true,
};
Editable.tags = ["!dev"];
Editable.parameters = {
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
 * If the value represents an offset, the fill start can be set to represent the point of origin. The handle is positoned in the center of the track where the value is 0.
 */
export const Offset = Template.bind({});
Offset.args = {
	...Default.args,
	variant: "offset",
	values: [-15],
};
Offset.tags = ["!dev"];
Offset.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Precise = Template.bind({});
Precise.args = {
	...Default.args,
	isPrecise: true,
};
Precise.tags = ["!dev"];
Precise.parameters = {
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
	values: [10, 20],
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

/**
 * Large track height.
 */
export const TrackHeight = Template.bind({});
TrackHeight.args = {
	...Default.args,
	trackHeight: "large",
};
TrackHeight.tags = ["!dev"];
TrackHeight.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
TrackHeight.storyName = "Large track height";



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

export const Emphasized = Template.bind({});
Emphasized.args = {
	...Default.args,
	isEmphasized: true,
};
Emphasized.tags = ["!dev"];
Emphasized.parameters = {
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
