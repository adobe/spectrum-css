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
			testHeading: "Quiet - secondary",
			isQuiet: true,
			variant: "secondary",
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			testHeading: "Static black - secondary",
			staticColor: "black",
			variant: "secondary",
		},
		{
			testHeading: "Static black - quiet",
			staticColor: "black",
			isQuiet: true,
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
		{
			testHeading: "Static white - secondary",
			staticColor: "white",
			variant: "secondary",
		},
		{
			testHeading: "Static white - quiet",
			staticColor: "white",
			isQuiet: true,
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
