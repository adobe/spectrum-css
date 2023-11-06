import { Template } from "./template";

import { isChecked, isDisabled } from "@spectrum-css/preview/types/states.js";

/** Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected. */
export default {
	title: "Components/Checkbox",
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
		isDisabled,
		isChecked,
		isIndeterminate: {
			name: "Indeterminate",
			type: { name: "boolean" },
			table: {
			type: { summary: "boolean" },
			category: "Component",
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

export const Default = Template.bind({});
Default.args = {
	id: "default-checkbox",
};
