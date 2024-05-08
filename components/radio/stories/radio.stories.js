import { html } from "lit";
import { when } from "lit/directives/when.js";

import { isChecked, isDisabled, isReadOnly } from "@spectrum-css/preview/types";

import { Template } from "./template";

/**
 * A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
 */
export default {
	title: "Components/Radio",
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
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: { type: "boolean" },
		},
		isChecked,
		isDisabled,
		isReadOnly,
	},
	args: {
		rootClass: "spectrum-Radio",
		size: "m",
		label: "Radio label",
		isEmphasized: false,
		isChecked: false,
		isDisabled: false,
		isReadOnly: false,
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-start",
			"gap": "16px",
			"flex-wrap": "wrap",
		}
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"radio\"]"],

		},
		status: {
			type: "migrated",
		},
	},
};

const Radios = (args) => html`
	${Template(args)}
	${when(window.isChromatic(), () => Template({
		...args,
		label: "Radio label that is so long it has to wrap",
		customStyles: {
			"max-inline-size": "220px",
		}
	}))}
`;

export const Default = Radios.bind({});
Default.args = {};

export const WithForcedColors = Radios.bind({});
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
