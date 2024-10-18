import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const DefaultItems = [
	{
		label: "Nav root",
	},
	{
		label: "Dragged",
		isDragged: true,
	},
	{
		label: "Disabled sub item",
		isDisabled: true,
	},
	{
		label: "January 2019 assets",
	},
];

const NestedItems = [
	{
		iconName: "FolderOpen",
		iconSet: "workflow",
	},
	{
		label: "Dragged",
		isDragged: true,
	},
	{
		label: "Disabled",
		isDisabled: true,
	},
	{
		label: "January 2019 assets",
	},
];

const NestedRootVisibleItems = [
	{
		label: "Nav root",
	},
	{
		iconName: "FolderOpen",
		iconSet: "workflow",
		isDisabled: true,
	},
	{
		label: "Dragged sub item",
		isDragged: true,
	},
	{
		label: "January 2019 assets",
	},
];

export const BreadcrumbGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			items: DefaultItems,
		},
		{
			testHeading: "Default (nested)",
			items: NestedItems,
		},
		{
			testHeading: "Default (nested, root visible)",
			items: NestedRootVisibleItems,
		},
		{
			testHeading: "Compact",
			variant: "compact",
			items: DefaultItems,
		},
		{
			testHeading: "Compact (nested)",
			variant: "compact",
			items: NestedItems,
		},
		{
			testHeading: "Compact (nested, root visible)",
			variant: "compact",
			items: NestedRootVisibleItems,
		},
		{
			testHeading: "Multiline",
			variant: "multiline",
			items: DefaultItems,
		},
		{
			testHeading: "Multiline (nested)",
			variant: "multiline",
			items: NestedItems,
		},
		{
			testHeading: "Multiline (nested, root visible)",
			variant: "multiline",
			items: NestedRootVisibleItems,
		},
	],
	stateData: [
		{
			testHeading: "Dragged, disabled",
			isDragged: true,
		}
	]
});
