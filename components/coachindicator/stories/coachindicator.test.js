import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CoachIndicatorGroup = Variants({
	Template,
	wrapperStyles: {
		"align-items": "center",
		"justify-content": "center",
		"border-radius": "4px",
		"min-inline-size": "60px",
	},
	testData: [
		{
			testHeading: "Default",
			variant: "default",
		},
		{
			testHeading: "Static white",
			staticColor: "white"
		},
		{
			testHeading: "Static black",
			staticColor: "black"
		},
	],
	stateData: [
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
	],
});
