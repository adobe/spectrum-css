import { html } from "lit";

import { Template } from "./template";

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
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
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
	},
};

const CheckboxGroup = (args) => html`
	<div style="display: flex; flex-direction: column; padding: 16px">
		${Template({
			...args,
			iconName: undefined,
		})}
		${Template({
			...args,
			isChecked: true,
		})}
		${Template({
			...args,
			isIndeterminate: true,
		})}
		${Template({
			...args,
			isDisabled: true,
		})}
		${Template({
			...args,
			label: "Checkbox with an extraordinarily long label. Please don't do this but if you did, it should wrap text when it gets longer than the container that houses the checkbox with the unacceptably long label",
      customStyles: { "max-inline-size": "200px" },
		})}
	</div>
`;

const AllVariantsCheckboxGroup = (args) => {
	return html`
		<div style="display: flex;">
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Default</h4>
				${CheckboxGroup({
					...args,
				})}
			</div>
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Invalid</h4>
				${CheckboxGroup({
					...args,
					isInvalid: true,
				})}
			</div>
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Disabled</h4>
				${CheckboxGroup({
					...args,
					isDisabled: true,
				})}
			</div>
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Read-Only</h4>
				${CheckboxGroup({
					...args,
					isReadOnly: true,
				})}
			</div>
		</div>
	`;
};

export const Default = CheckboxGroup.bind({});
Default.args = {
	id: "default-checkbox",
};
Default.tags = ["!autodocs"];

/*
 * Stories for the MDX "Docs" only.
 */
export const DefaultVariants = AllVariantsCheckboxGroup.bind({});
DefaultVariants.tags = ["docs-only"];
DefaultVariants.parameters = {
	chromatic: { disableSnapshot: true }
};
DefaultVariants.storyName = "Standard";

export const Emphasized = CheckboxGroup.bind({});
Emphasized.args = {
	id: "checkbox-emphasized",
	isEmphasized: true,
};
Emphasized.tags = ["docs-only", "!autodocs"];
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const EmphasizedVariants = AllVariantsCheckboxGroup.bind({});
EmphasizedVariants.args = {
	id: "checkbox-emphasized",
	isEmphasized: true,
};
EmphasizedVariants.tags = ["docs-only"];
EmphasizedVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
EmphasizedVariants.storyName = "Emphasized";
