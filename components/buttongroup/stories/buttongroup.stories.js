import { Template } from "./template";

import { Template as Button } from "@spectrum-css/button/stories/button.stories.js";

export default {
	title: "Components/Button group",
	description: "The button group is a collection of buttons.",
	component: "ButtonGroup",
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
			handles: [
				...Button.parameters?.actions?.handles ?? [],
			],
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
