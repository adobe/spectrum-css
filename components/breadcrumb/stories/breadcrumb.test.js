import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const BreadcrumbGroup = Variants({
	Template,
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
			testHeading: "Multiline with small heading",
			variant: "multiline",
			titleHeadingSize: "s",
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
	]
});
