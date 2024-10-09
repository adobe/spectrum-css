import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { SwitchGroup } from "./switch.test.js";
import { DocsSwitchGroup, Template } from "./template.js";

/**
 * A switch is used to turn an option on or off. Switches allow users to select the state of a single option at a time and are best used for communicating activation.
 */
export default {
	title: "Switch",
	component: "Switch",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isEmphasized,
		isDisabled,
		isChecked: {
			...isChecked,
			name: "Selected",
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
	},
	args: {
		rootClass: "spectrum-Switch",
		isDisabled: false,
		isChecked: false,
		isEmphasized: false,
		label: "Switch label",
		size: "m",
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Default = SwitchGroup.bind({});
Default.tags = ["!autodocs"];
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = SwitchGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * Switches can either be selected or not selected. They cannot be in an indeterminate state (unlike
 * [checkboxes](?path=/docs/components-checkbox--docs)). When a switch represents multiple values that are not
 * identical (mixed values), the switch should appear as not selected.
 */
export const DocsDefault = DocsSwitchGroup.bind({});
DocsDefault.storyName = "Default";
DocsDefault.tags = ["!dev"];
DocsDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A switch in a disabled state shows that a selection exists, but is not available in that circumstance. This can be
 * used to maintain layout continuity and communicate that an action may become available later.
 */
export const Disabled = DocsSwitchGroup.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Emphasized switches are optimal for forms, settings, and other scenarios where the switches need to be noticed. Not
 * emphasized (gray) switches are optimal for application panels where all the visual components are monochrome in
 * order to direct focus to the canvas.
 */
export const Emphasized = DocsSwitchGroup.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * When the label is too long for the horizontal space available, it wraps to form another line.
 */
export const WithLongerLabel = DocsSwitchGroup.bind({});
WithLongerLabel.storyName = "Longer label";
WithLongerLabel.tags = ["!dev"];
WithLongerLabel.args = {
	label: "Switch label that is so long it wraps to the next line",
	customStyles: {"max-width": "250px"}
};
WithLongerLabel.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Switches should always have labels. When the label is not defined, a switch becomes standalone. Standalone switches
 * should be used in situations where the context is clear without an associated text label. For example, a switch
 * located at the top of a panel next to the panel's title makes it clear that the switch will enable/disable the panel
 * options.
 */
export const Standalone = DocsSwitchGroup.bind({});
Standalone.tags = ["!dev"];
Standalone.args = {
	label: "",
};
Standalone.parameters = {
	chromatic: { disableSnapshot: true }
};
