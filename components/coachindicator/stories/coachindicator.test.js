import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CoachIndicatorGroup = Variants({
	Template,
	skipBorders: false,
	testData: [
		{
			testHeading: "Default",
			variant: "default",
		},
		{
			testHeading: "Static White",
			staticColor: "white"
		},
	],
	stateData: [
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
	],
});
