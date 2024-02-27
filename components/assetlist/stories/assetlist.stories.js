// Import the component markup template
import { Template } from "./template";

import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";

export default {
	title: "Components/Asset list",
	description:
		"A selectable list of Assets, often used inside of Miller Columns.",
	component: "AssetList",
	argTypes: {
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-AssetList",
	},
	parameters: {
		actions: {
			handles: [...Checkbox.parameters.actions.handles],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("assetlist") ? "migrated" : "legacy",
			version: process.env.VERSIONS?.["assetlist"],
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			image: "example-ava.png",
			label: "Shantanu.jpg",
			isSelectable: true,
			ariaLabelledBy: "assetitemlabel-1",
			checkboxId: "checkbox-1"
		},
		{
			iconName: "Document",
			label: "Resource Allocation Documentation should truncate",
			isSelectable: true,
			ariaLabelledby: "assetitemlabel-2",
			checkboxId: "checkbox-2",
		},
		{
			iconName: "Folder",
			label: "Frontend Projects",
			isSelectable: true,
			isBranch: true,
			isSelected: true,
			ariaLabelledby: "assetitemlabel-3",
			checkboxId: "checkbox-3",
		},
		{
			iconName: "Folder",
			label: "Downloads",
			isSelectable: true,
			isBranch: true,
			isSelected: false,
			isNavigated: true,
			ariaLabelledby: "assetitemlabel-4",
			checkboxId: "checkbox-4",
		},
	],
};
