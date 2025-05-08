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
			testHeading: "Side by side",
			isInline: true,
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
			testHeading: "Disabled",
			isDisabled: true,
		},
	],
});
