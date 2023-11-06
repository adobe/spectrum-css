import { html } from "lit";

import { isDisabled } from "@spectrum-css/preview/types/states.js";

import { Template } from "./template";

/** The clear button component is an in-field button used in search and tag to clear the form field or metadata. */
export default {
	title: "Components/Clear button",
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
		isDisabled,
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
			type: process.env.MIGRATED_PACKAGES.includes("clearbutton")
				? "migrated"
				: "legacy",
		},
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
