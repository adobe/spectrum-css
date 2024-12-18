import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ColorLoupeGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
	],
	stateData: [
		{
			testHeading: "Closed",
			isOpen: false,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	],
});
