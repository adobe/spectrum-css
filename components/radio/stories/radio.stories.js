// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Radio",
	description:
		"A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",
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
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: { type: "boolean" },
		},
		isChecked: {
			name: "Radio selected",
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
			handles: ['click input[type="radio"]'],

		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("radio")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Emphasized = Template.bind({});
Emphasized.args = {
	isEmphasized: true,
	isChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	isDisabled: true,
	isReadOnly: true,
};
