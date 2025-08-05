import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const PickerGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With label",
			label: "Select",
		},
		{
			testHeading: "Quiet",
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
			testHeading: "Disabled",
			isDisabled: true,
		},
	]
});
