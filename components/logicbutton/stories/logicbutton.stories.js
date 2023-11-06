import { Template } from "./template";

import { isDisabled } from "@spectrum-css/preview/types/states.js";

/** A Logic Button displays an operator within a boolean logic sequence. */
export default {
	title: "Components/Logic button",
	component: "Logicbutton",
	argTypes: {
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["and", "or"],
			control: "inline-radio",
		},
		isDisabled,
	},
	args: {
		rootClass: "spectrum-LogicButton",
		variant: "and",
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("logicbutton")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Or = Template.bind({});
Or.args = {
	variant: "or"
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};
