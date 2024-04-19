import { html } from "lit";

import metadata from "../dist/metadata.json";
import { Template } from "./template";

export default {
	title: "Components/Clear button",
	description: "The clear button component is and in-field button used in Search and Tag",
	component: "ClearButton",
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		variant: { table: { disable: true }},
	},
	args: {
		rootClass: "spectrum-ClearButton",
		size: "m",
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		cssprops: metadata.mods,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const OverBackground = Template.bind({});
OverBackground.args = {
	variant: "overBackground",
};
OverBackground.decorators = [
	Story => html`
		<div style="background-color: rgb(15, 121, 125); padding: 15px 20px;">
			${Story()}
		</div>
	`
];
