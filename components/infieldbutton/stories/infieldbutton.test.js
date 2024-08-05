import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const InfieldButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Position: top",
			position: "top",
		},
		{
			testHeading: "Position: bottom",
			position: "bottom",
		},
		{
			testHeading: "Position: left",
			position: "left",
		},
		{
			testHeading: "Position: right",
			position: "right",
		},
		{
			testHeading: "Stacked",
			isStacked: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
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
			testHeading: "Invalid",
			isInvalid: true,
		},
	],
});
