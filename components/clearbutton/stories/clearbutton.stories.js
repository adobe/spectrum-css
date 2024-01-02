
import { Template } from "./template";

export default {
	title: "Components/Clear button",
	description: "The clear button component is and in-field button used in Search and Tag",
	component: "ClearButton",
	argTypes: {
		staticColor: { table: { disable: true } },
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
			type: process.env.MIGRATED_PACKAGES.includes("clearbutton")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Express = Template.bind({});
Express.args = { express: true };

export const OverBackground = Template.bind({});
OverBackground.args = {
	variant: "overBackground",
	staticColor: "white",
};
