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
			testHeading: "Dark",
			variant: "dark",
			wrapperStyles: {
				"background-color": "rgba(255 255 255 / 80%)",
			},
		},
		{
			testHeading: "Light",
			variant: "light",
			wrapperStyles: {
				"background-color": "rgba(0 0 0 / 80%)",
			},
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
