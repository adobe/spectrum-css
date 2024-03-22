// Import the component markup template
import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories";

export default {
	title: "Components/Pagination",
	description:
		"The pagination component displays numbered buttons or an input field to allow for navigation",
	component: "Pagination",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				disable: true,
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		variant: {
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-Pagination",
		size: "m",
		variant: "listing",
	},
	parameters: {
		actions: {
			handles: [...ActionButton.parameters.actions.handles],
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
			id: 1,
			label: "1",
			isSelected: true,
		},
		{
			id: 2,
			label: "2",
		},
		{
			id: 3,
			label: "...",
		},
		{
			id: 10,
			label: "10",
		},
	],
};

export const Explicit = Template.bind({});
Explicit.args = {
	variant: "explicit",
};
