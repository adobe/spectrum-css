import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ColorAreaGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Custom size",
			customWidth: "80px",
			customHeight: "80px",
		},
	],
	stateData: [

		{
			testHeading: "Disabled",
			isDisabled: true,
			isFocused: false,
		},
		{
			testHeading: "Focused",
			isDisabled: false,
			isFocused: true,
		},
	],
});
