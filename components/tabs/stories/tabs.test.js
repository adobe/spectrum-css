import { Sizes, Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const ExampleLabelOnlyTabContent = [
	{
		label: "Selected",
		isSelected: true,
	},
	{
		label: "Disabled",
		isDisabled: true,
	},
	{
		label: "Tab 3",
	},
];

export const TabsGroups = Variants({
	Template,
	withSizes: false, // manually add sizes with a different heading at the end of the test data
	wrapperStyles: {
		"column-gap": "80px",
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
		// sizing tests
		{
			testHeading: "Default sizing",
			withBorder: false,
			withHeading: false,
			withWrapperBorder: false,
			withStates: false,
			Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
		},
		{
			testHeading: "Compact sizing",
			isCompact: true,
			withBorder: false,
			withHeading: false,
			withWrapperBorder: false,
			withStates: false,
			Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
		},
		{
			testHeading: "Vertical sizing",
			orientation: "vertical",
			withBorder: false,
			withHeading: false,
			withWrapperBorder: false,
			withStates: false,
			Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
		}
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
