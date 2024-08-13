import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const FloatingActionButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Secondary",
			variant: "secondary",
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
	]
});
