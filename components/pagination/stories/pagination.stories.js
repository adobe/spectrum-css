import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { PaginationGroup } from "./pagination.test";

/**
 * The pagination component displays numbered buttons or an input field to allow for navigation.
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
			table: { disable: true },
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
		componentVersion: version,
	},
};

export const Default = PaginationGroup.bind({});
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
