import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CoachIndicatorGroup = Variants({
	Template,
	skipBorders: false,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Dark",
			variant: "dark",
			wrapperStyles: {
				"background-color": "rgba(248 248 248 / 80%)",
				"border-radius": "4px",
			},
		},
		{
			testHeading: "Light",
			variant: "light",
			wrapperStyles: {
				"background-color": "rgba(0 0 0 / 80%)",
				"border-radius": "4px",
			},
		},
	],
	stateData: [
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
	],
});
