import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { AssetListGroup } from "./template";

/**
 * A selectable list of assets, often used inside of miller columns.
 */
export default {
	title: "Asset list",
	component: "AssetList",
	argTypes: {
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-AssetList",
	},
	parameters: {
		actions: {
			handles: [...(Checkbox.parameters?.actions?.handles ?? [])],
		},
		componentVersion: version,
	},
};

export const Default = AssetListGroup.bind({});
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
			label: "Resource allocation documentation should truncate",
			isSelectable: true,
			ariaLabelledby: "assetitemlabel-2",
			checkboxId: "checkbox-2",
		},
		{
			iconName: "Folder",
			label: "Front-end Projects",
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

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
