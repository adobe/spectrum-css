import { Template } from "./template";

/**
 * A switch is used to turn an option on or off. Switches allow users to select the state of a single option at a time.
 */
export default {
	title: "Switch",
	component: "Switch",
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
		isEmphasized: {
			name: "Emphasized",
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
			control: "boolean",
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
};

export const Default = Template.bind({});
Default.args = {};

export const Emphasized = Template.bind({});
Emphasized.args = {
	isEmphasized: true,
	label: "Switch label that is so long it wraps to the next line",
	customStyles: {"max-width": "250px"}
};

export const Checked = Template.bind({});
Checked.args = {
	isChecked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};
