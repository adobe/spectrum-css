// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Button group",
	description: "The Button group component is...",
	component: "Buttongroup",
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
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-ButtonGroup",
		size: "m",
		iconName: undefined,
		vertical: false,
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

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			variant: "secondary",
			treatment: "outline",
			label: "No, thanks",
		},
		{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later",

		},
		{
			variant: "primary",
			treatment: "fill",
			label: "Rate now",
		},
	],
};

export const Vertical = Template.bind({});
Vertical.args = {
	vertical: true,
	items: [
		{
			variant: "secondary",
			treatment: "outline",
			label: "No, thanks",
		},
		{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later",
		},
		{
			variant: "primary",
			treatment: "fill",
			label: "Rate now",
		},
	],
};
