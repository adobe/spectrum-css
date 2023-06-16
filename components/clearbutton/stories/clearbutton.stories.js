// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Clear button",
	description: "The Clear button component is and in-field button used in Search and Tag",
	component: "Clearbutton",
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
			type: process.env.MIGRATED_PACKAGES.includes("clearbutton")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const OverBackground = Template.bind({});
OverBackground.args = {
	variant: "overBackground",
	styles: {
		"background-color": "rgb(15, 121, 125);", 
		"color": "rgb(15, 121, 125);",
		"padding": "15px 20px;"
	}
};
