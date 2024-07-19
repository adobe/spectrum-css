import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid } from "@spectrum-css/preview/types";
import {
	CheckboxGroup,
	AllVariantsCheckboxGroup,
} from "./template";
import { version } from "../package.json";


/**
 * Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.
 * 
 * ## Usage notes  
 * 
 * Checkboxes should not be used on their own. They should always be used within a [Field group](/docs/components-field-group--docs). Invalid checkboxes are indicated with an alert [Help text](/docs/components-help-text--docs) when included in a Field group.  
 * 
 * When the label is too long for the horizontal space available, it wraps to form another line.  
 */
export default {
	title: "Checkbox",
	component: "Checkbox",
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
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
		},
		isInvalid,
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isChecked: {
			name: "Checked",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: { type: "boolean" },
		},
		isIndeterminate: {
			name: "Checkbox indeterminate",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isReadOnly: {
			name: "Read only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Checkbox",
		size: "m",
		label: "Checkbox",
		isChecked: false,
		isDisabled: false,
		isEmphasized: false,
		isIndeterminate: false,
		isInvalid: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"checkbox\"]"],
		},
		componentVersion: version,
	},
};

export const Default = CheckboxGroup.bind({});
Default.args = {
	id: "default-checkbox",
};
Default.tags = ["!autodocs"];

export const DefaultVariants = AllVariantsCheckboxGroup.bind({});
DefaultVariants.tags = ["autodocs", "!dev"];
DefaultVariants.parameters = {
	chromatic: { disableSnapshot: true }
};
DefaultVariants.storyName = "Default";

export const Emphasized = CheckboxGroup.bind({});
Emphasized.args = {
	id: "checkbox-emphasized",
	isEmphasized: true,
};
Emphasized.tags = ["!autodocs", "!dev"];
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const EmphasizedVariants = AllVariantsCheckboxGroup.bind({});
EmphasizedVariants.args = {
	id: "checkbox-emphasized",
	isEmphasized: true,
};
EmphasizedVariants.tags = ["autodocs", "!dev"];
EmphasizedVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
EmphasizedVariants.storyName = "Emphasized";

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
