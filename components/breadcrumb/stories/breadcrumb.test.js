import { Variants } from "@spectrum-css/preview/decorators";
import { BreadcrumbTitleHeadings, Template } from "./template.js";

export const BreadcrumbGroup = Variants({
	Template,
	withSizes: false,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Large",
			size: "l",
		},
		{
			testHeading: "Multiline",
			variant: "multiline",
		},
		{
			testHeading: "Multiline with typography headings",
			variant: "multiline",
			withStates: false,
			Template: BreadcrumbTitleHeadings,
			showTruncatedMenu: true,
			showRootContext: true,
			isDragged: true,
		},
	],
	stateData: [
		{
			testHeading: "Nested",
			showTruncatedMenu: true,
		},
		{
			testHeading: "Nested with root context",
			showTruncatedMenu: true,
			showRootContext: true,
		},
		{
			testHeading: "Disabled items and dragged item",
			isDragged: true,
			showTruncatedMenu: true,
			truncatedMenuIsDisabled: true,
			items: [
				{
					label: "Dragged item",
					isDragged: true,
				},
				{
					label: "Disabled sub item",
					isDisabled: true,
				},
				{
					label: "January 2019 assets",
				},
			]
		},
		{
			testHeading: "Hover",
			isDragged: true,
			showTruncatedMenu: true,
			items: [
				{
					label: "Sub item",
					isHovered: true,
				},
				{
					label: "Disabled sub item",
					isDisabled: true,
					isHovered: true,
				},
				{
					label: "January 2019 assets",
					isHovered: true,
				},
			]
		},
		{
			testHeading: "Focus-visible",
			isDragged: true,
			showTruncatedMenu: true,
			items: [
				{
					label: "Sub item",
					isFocused: true,
				},
				{
					label: "January 2019 assets",
					isFocused: true,
				},
			]
		},
	]
});
