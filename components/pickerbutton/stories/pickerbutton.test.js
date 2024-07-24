import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

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
		{
			testHeading: "Rounded",
			isRounded: true,
		},
		{
			testHeading: "Position: left",
			position: "left",
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
	]
});
