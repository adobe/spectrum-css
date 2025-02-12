import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { PaginationGroup } from "./pagination.test.js";
import { Template } from "./template.js";

/**
 * The pagination component displays numbered buttons or an input field to allow for navigation.
 */
export default {
	title: "Pagination",
	component: "Pagination",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				category: "Component",
				defaultValue: {
					summary: "listing",
				},
			},
			options: [
				"listing",
				"explicit",
			],
			control: "select",
		},
		items: {
			name: "Items",
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
		packageJson,
		metadata,
	},
};

/**
 * The default listing/page variant uses buttons for each page number.
 */
export const Default = PaginationGroup.bind({});
Default.storyName = "Default (listing)";
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = PaginationGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * Pagination's explicit variant uses the text field component to represent the current page number,
 * and action buttons for the previous and next navigation. It also displays text with the total
 * number of pages.
 */
export const Explicit = Template.bind({});
Explicit.tags = ["!dev"];
Explicit.args = {
	variant: "explicit",
};
Explicit.parameters = {
	chromatic: { disableSnapshot: true },
};
