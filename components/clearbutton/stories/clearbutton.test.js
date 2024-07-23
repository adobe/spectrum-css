import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

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
