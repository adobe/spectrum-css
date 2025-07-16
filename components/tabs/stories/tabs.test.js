import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TabsGroups = Variants({
	Template,
	withSizes: false,
	wrapperStyles: {
		"column-gap": "80px",
	},
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Compact",
			isCompact: true,
		},
		{
			testHeading: "Vertical tabs",
			orientation: "vertical",
		},
		{
			testHeading: "Compact vertical tabs",
			orientation: "vertical",
			isCompact: true,
		},
		{
			testHeading: "Right vertical tabs",
			orientation: "vertical",
			hasRightAlignedTabs: "true",
		},
		{
			testHeading: "Overflow",
			orientation: "overflow",
		},
		{
			testHeading: "Compact overflow",
			orientation: "overflow",
			isCompact: true,
		},
		{
			testHeading: "Hover colors",
			withStates: false,
			content: [
				{
					label: "Hovered unselected tab",
					icon: "Folder",
					isHovered: true,
				},
				{
					label: "Hovered selected tab",
					icon: "Image",
					isSelected: true,
					isHovered: true,
				},
				{
					label: "Unhovered unselected tab",
					icon: "File",
				},
				{
					label: "Disabled tab",
					icon: "Archive",
					isDisabled: true,
				}
			]
		},
		{
			testHeading: "Disabled tabs",
			withStates: false,
			content: [
				{
					label: "Selected tab",
					icon: "Archive",
					isSelected: true,
					isDisabled: true,
				},
				{
					label: "Unselected tab",
					icon: "File",
					isDisabled: true,
				}
			]
		},
		{
			testHeading: "With anchor tags",
			useAnchors: true,
		},
	],
	stateData: [
		{
			testHeading: "Label only",
			labelOnly: true,
		},
		{
			testHeading: "Icon only",
			iconOnly: true,
		},
		{
			testHeading: "Selected tab focused",
			content: [
				{
					label: "Tab 1",
					icon: "Folder",
				},
				{
					label: "Selected focused tab",
					icon: "Image",
					isSelected: true,
					isFocused: true,
				},
				{
					label: "Tab 3",
					icon: "File",
				}
			],
			ignore: ["Overflow", "Compact overflow"],
		}
	]
});
