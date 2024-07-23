import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ClearButtonGroup = Variants({
	Template,
	stateDirection: "row",
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	]
});
