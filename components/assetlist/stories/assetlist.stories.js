import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { AssetListGroup } from "./assetlist.test.js";

import metadata from "../dist/metadata.json";
import packageJson from "../package.json";

/**
 * A selectable list of assets, often used inside of miller columns.
 */
export default {
	title: "Asset list",
	component: "AssetList",
	argTypes: {
		items: { table: { disable: true } },
		isSelectable: {
			name: "Selectable",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-AssetList",
		isSelectable: false,
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
				iconSet: "workflow",
				label: "Resource allocation documentation should truncate",
				isSelectable: true,
				ariaLabelledby: "assetitemlabel-2",
				checkboxId: "checkbox-2",
			},
			{
				iconName: "Folder",
				iconSet: "workflow",
				label: "Front-end Projects",
				isSelectable: true,
				isBranch: true,
				isSelected: true,
				ariaLabelledby: "assetitemlabel-3",
				checkboxId: "checkbox-3",
			},
			{
				iconName: "Folder",
				iconSet: "workflow",
				label: "Downloads",
				isSelectable: true,
				isBranch: true,
				isNavigated: true,
				ariaLabelledby: "assetitemlabel-4",
				checkboxId: "checkbox-4",
			},
		],
	},
	parameters: {
		actions: {
			handles: [...(Checkbox.parameters?.actions?.handles ?? [])],
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

export const Default = AssetListGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = AssetListGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
