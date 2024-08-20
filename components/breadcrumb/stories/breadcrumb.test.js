import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const BreadcrumbGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Default (nested)",
			withStates: false,
			items: [
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub item",
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
			testHeading: "Default (nested, root visible)",
			withStates: false,
			items: [
				{
					label: "Nav root",
				},
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub item",
				},
				{
					label: "January 2019 Assets",
				},
			],
		},
		{
			testHeading: "Compact",
			variant: "compact",
		},
		{
			testHeading: "Compact (nested)",
			withStates: false,
			variant: "compact",
			items: [
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub Item",
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
			testHeading: "Compact (nested, root visible)",
			withStates: false,
			variant: "compact",
			items: [
				{
					label: "Nav root",
				},
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub item",
				},
				{
					label: "January 2019 Assets",
				},
			],
		},
		{
			testHeading: "Multiline",
			variant: "multiline",
		},
		{
			testHeading: "Multiline (nested)",
			withStates: false,
			variant: "multiline",
			items: [
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub Item",
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
			withStates: false,
			variant: "multiline",
			items: [
				{
					label: "Nav root",
				},
				{
					iconName: "FolderOpen",
				},
				{
					label: "Sub item",
				},
				{
					label: "January 2019 Assets",
				},
			],
		},
	],
	stateData: [
		{
			testHeading: "Dragged, disabled",
			isDragged: true,
			isDisabled: true,
			items: [
				{
					label: "Nav root",
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
					label: "January 2019 Assets",
				},
			],
		}
	]
});
