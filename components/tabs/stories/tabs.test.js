import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const ExampleLabelOnlyTabContent = [
	{
		id: "tab-1",
		label: "Selected",
		isSelected: true,
	},
	{
		id: "tab-2",
		label: "Disabled",
		isDisabled: true,
	},
	{
		id: "tab-3",
		label: "Tab 3",
	},
];

export const TabsGroups = Variants({
	Template,
	wrapperStyles: {
		"gap": "80px",
	},
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Quiet emphasized",
			isQuiet: true,
			isEmphasized: true,
		},
		{
			testHeading: "Compact",
			isCompact: true,
			isQuiet: true,
		},
		{
			testHeading: "Compact emphasized",
			isCompact: true,
			isQuiet: true,
			isEmphasized: true,
		},
		{
			testHeading: "Vertical tabs",
			orientation: "vertical",
		},
		{
			testHeading: "Emphasized vertical tabs",
			orientation: "vertical",
			isEmphasized: true,
		},
		{
			testHeading: "Compact vertical tabs",
			orientation: "vertical",
			isCompact: true,
			isQuiet: true,
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
			isQuiet: true,
		},
		{
			testHeading: "With anchor tags",
			useAnchors: true,
		},
	],
	stateData: [
		{
			testHeading: "Label only",
			content: ExampleLabelOnlyTabContent,
		},
		{
			testHeading: "Icon only",
			iconOnly: true
		},
	]
});
