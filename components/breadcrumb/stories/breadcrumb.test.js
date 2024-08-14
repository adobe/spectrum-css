import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const BreadcrumbGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Compact",
			variant: "compact",
		},
		{
			testHeading: "Compact, nested",
			variant: "compact",
			items: [
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub Item",
					isDragged: true,
				},
				{
					label: "Trend",
				},
				{
					label: "January 2019 Assets",
				},
			],
		},
		{
			testHeading: "Multiline (nested, root visible)",
			variant: "multiline",
			items: [
				{
					label: "Nav root",
				},
				{
					iconName: "FolderOpen",
				},
				{
					label: "Trend",
					isDragged: true,
				},
				{
					label: "January 2019 Assets",
				},
			],
		},
		{
			testHeading: "Nested",
			items: [
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub Item",
					isDragged: true,
				},
				{
					label: "Trend",
				},
				{
					label: "January 2019 Assets",
				},
			],
		},
	],
	stateData: [
		{
			testHeading: "Dragged",
			isDragged: true,
		},
		{
			testHeading: "Disabled",
			items: [
				{
					label: "Nav root",
				},
				{
					iconName: "FolderOpen",
					isDisabled: true,
				},
				{
					label: "Trend",
					isDisabled: true,
				},
				{
					label: "January 2019 Assets",
				},
			],
		}
	]
});
