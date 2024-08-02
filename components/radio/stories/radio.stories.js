import { withSizingWrapper } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { BasicGroupTemplate, ChromaticGroupTemplate, Template } from "./template";

/**
 * A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
 * 
 * Radio buttons should not be used on their own, they should always be used within a [field group](?path=/docs/components-field-group--docs). Invalid radio buttons are signified by including
 * [help text](?path=/docs/components-help-text--docs) in a field group. Sample usage for an [invalid radio state](?path=/docs/components-field-group--docs#invalid) is included in the field group documentation.
 */
export default {
	title: "Radio",
	component: "Radio",
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
		name: {
			name: "Name",
			description: "The value of the `name` attribute on the `input` element.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
		},
		isChecked: {
			name: "Selected (checked)",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: { type: "boolean" },
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
		isReadOnly: {
			name: "Read Only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Radio",
		size: "m",
		label: "Label",
		isEmphasized: false,
		isChecked: false,
		isDisabled: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"radio\"]"],
		},
		componentVersion: version,
	},
};

// @todo Make use of Variants() utility so radio has more robust coverage of all states, including hover, focus, etc.
export const Default = (args, context) => {
	return window.isChromatic() ? ChromaticGroupTemplate(args, context) : Template(args, context);
};
Default.tags = ["!autodocs"];

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Standard = BasicGroupTemplate.bind({});
Standard.args = {
	name: "standard",
};
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Radios come in four different sizes: small, medium, large, and extra-large. The medium size is the default.
 */
export const Sizing = BasicGroupTemplate.bind({});
Sizing.args = {
	name: "sizing",
};
Sizing.tags = ["!dev"];
Sizing.decorators = [withSizingWrapper];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The emphasized option provides a visual prominence for the selected radio button. 
 * It is best for forms, settings, lists or grids of assets, and other situations where a
 * radio button needs to be noticed.
 */
export const Emphasized = BasicGroupTemplate.bind({});
Emphasized.args = {
	isEmphasized: true,
	name: "emphasized",
};
Emphasized.tags = ["!dev"];
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = BasicGroupTemplate.bind({});
Disabled.args = {
	isDisabled: true,
	name: "disabled",
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A radio group has a read-only option for when it's in the disabled state but still needs to be shown.
 * This allows for content to be copied, but not interacted with or changed.
 * 
 * - Read-only radio buttons are disabled, but not all disabled radio buttons are read-only.
 * - Read-only radio buttons do not have a focus ring, but the button should be focusable.
 */
export const ReadOnly = BasicGroupTemplate.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.args = {
	isReadOnly: true,
	name: "read-only",
};
ReadOnly.tags = ["!dev"];
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};