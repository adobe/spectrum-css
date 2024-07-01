import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories";
import { PaginationGroup, Template } from "./template";

/**
 * The pagination component displays numbered buttons or an input field to allow for navigation.
 * 
 * The default listing/page variant uses buttons for each page number.  
 */
export default {
	title: "Pagination",
	component: "Pagination",
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
		variant: {
			type: { name: "string" },
			table: {
				category: "Component",
			},
			options: [
				"listing",
				"explicit",
			],
			control: "select",
		},
		items: {
			description: "In the \"listing\" variant, each item represents a page button and its label.",
			table: {
				category: "Content",
			},
			control: "object",
		},
	},
	args: {
		rootClass: "spectrum-Pagination",
		size: "m",
		variant: "listing",
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
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton.parameters?.actions?.handles ?? [])
			],
		},
	},
};

export const Default = PaginationGroup.bind({});
Default.storyName = "Default (Listing)";
Default.args = {};

/**
 * Pagination's explicit variant uses the text field component to represent the current page number,
 * and action buttons for the previous and next navigation. It also displays text with the total
 * number of pages.
 */
export const Explicit = Template.bind({});
Explicit.tags = ["docs-only"];
Explicit.args = {
	variant: "explicit",
};
Explicit.parameters = {
	chromatic: { disableSnapshot: true },
};
