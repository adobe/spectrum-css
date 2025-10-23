import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const items = [
	{
		image: "example-ava.png",
		label: "Shantanu.jpg",
		ariaLabelledBy: "assetitemlabel-1",
		checkboxId: "checkbox-1"
	},
	{
		iconName: "Document",
		iconSet: "workflow",
		label: "Resource allocation documentation should truncate",
		ariaLabelledby: "assetitemlabel-2",
		checkboxId: "checkbox-2",
	},
	{
		iconName: "Folder",
		iconSet: "workflow",
		label: "Front-end projects",
		ariaLabelledby: "assetitemlabel-3",
		checkboxId: "checkbox-3",
		isBranch: true,
	},
	{
		iconName: "Folder",
		iconSet: "workflow",
		label: "Downloads",
		ariaLabelledby: "assetitemlabel-4",
		checkboxId: "checkbox-4",
		isBranch: true,
	},
];
export const AssetListGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			items,
		},
		{
			testHeading: "Selectable",
			isSelectable: true,
		}
	],
	stateData: [{
		testHeading: "Navigated",
		items: items.map((item, idx) => ({ ...item, isNavigated: idx === 2 })),
	}, {
		testHeading: "Selected",
		items: items.map((item, idx) => ({ ...item, isSelected: idx < 2 })),
	}, {
		testHeading: "Focused",
		items: items.map((item, idx) => ({
			...item,
			isFocused: idx % 2
		})),
	}, {
		testHeading: "Hovered",
		items: items.map((item) => ({
			...item,
			isHovered: true
		})),
	}, {
		testHeading: "Hovered + selected",
		items: items.map((item) => ({
			...item,
			isSelected: true,
			isHovered: true
		})),
	}]
});
