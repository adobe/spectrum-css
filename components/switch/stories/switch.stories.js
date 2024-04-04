import { html } from "lit";
import { when } from "lit/directives/when.js";
import { Template } from "./template";

export default {
	title: "Components/Switch",
	description:
		"A switch is used to turn an option on or off. Switches allow users to select the state of a single option at a time.",
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
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

const SwitchStateStack = (args) => {
	return html`
		${Template({
			...args,
		})}
		${when(window.isChromatic(), () =>
			html`
				${Template({
					...args,
					label: "Switch checked",
					isChecked: true,
				})}
				${Template({
					...args,
					label: "Switch unchecked and disabled and so long it wraps to the next line",
					isDisabled: true,
					customStyles: {"max-width": "250px"}
				})}
				${Template({
					...args,
					label: "Switch checked and disabled",
					isDisabled: true,
					isChecked: true,
				})}
			`
		)}
	`;
};

export const Default = SwitchStateStack.bind({});
Default.args = {};

export const Emphasized = SwitchStateStack.bind({});
Emphasized.args = {
	isEmphasized: true
};
