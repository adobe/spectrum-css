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
		}
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
