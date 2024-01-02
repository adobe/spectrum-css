import { html } from "lit";
import { Template } from "./template";

export default {
	title: "Components/Checkbox",
	description:
		"Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.",
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
		id: "default-checkbox",
		customStorybookStyles: {
			flexDirection: "column",
			gap: undefined,
			padding: "1rem",
		}
	},
	parameters: {
		actions: {
			handles: ['click input[type="checkbox"]'],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("checkbox")
				? "migrated"
				: "legacy",
		},
	},
};

const CheckboxGroup = (args) => html`
	${Template({
		...args,
		iconName: undefined,
		label: "Unchecked",
	})}
	${Template({
		...args,
		isChecked: true,
		label: "Checked",
	})}
	${Template({
		...args,
		isIndeterminate: true,
		label: "Indeterminate",
	})}
		${Template({
		...args,
		isDisabled: true,
		label: "Disabled",
	})}
	${Template({
		...args,
		label: "Overflow label text",
		customStyles: {
			...args.customStyles ?? {},
			"max-inline-size": "100px",
		},
	})}`;

export const Default = CheckboxGroup.bind({});
Default.args = {};

export const Express = CheckboxGroup.bind({});
Express.args = { express: true };
