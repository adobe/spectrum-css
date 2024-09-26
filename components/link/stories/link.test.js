import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const LinkGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Secondary",
			variant: "secondary",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Quiet, Secondary",
			isQuiet: true,
			variant: "secondary",
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
	],
	stateData: [
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Active",
			isActive: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Visited",
			isVisited: true,
		},
	],
});
