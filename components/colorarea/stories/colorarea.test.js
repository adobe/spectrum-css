import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ColorAreaGroup = Variants({
	Template,
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
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
	],
});
