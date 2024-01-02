import { Template } from "./template";

export default {
	title: "Components/Button group",
	component: "ButtonGroup",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("buttongroup")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = { vertical: true };
