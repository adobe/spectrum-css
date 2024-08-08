import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const LogicButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "And variant",
		},
		{
			testHeading: "Or variant",
			variant: "or",
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	]
});
