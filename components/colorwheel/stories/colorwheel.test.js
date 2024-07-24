import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ColorWheelGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With color area",
			isWithColorArea: true,
		},
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
	],
});
