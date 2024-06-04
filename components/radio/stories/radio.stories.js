import { html } from "lit";

import { Template } from "./template";

/**
 * A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
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
			handles: ["click input[type=\"radio\"]"],

		},
	},
};

export const Default = (args) => html`
	<div style="display: flex; flex-direction: column; align-items: flex-start;">
		${Template({
			...args,
			label: "Default"
		})}
		${Template({
			...args,
			isEmphasized: true,
			isChecked: true,
			label: "Emphasized radio button label that is so long it has to wrap",
			customStyles: {
				"max-width": "220px",
			}
		})}
		${Template({
			...args,
			isDisabled: true,
			label: "Disabled"
		})}
		${Template({
			...args,
			isDisabled: true,
			isReadOnly: true,
			label: "Read only"
		})}
	</div>
`;
