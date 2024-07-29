import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ColorSliderGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			wrapperStyles: {
				// Adjust for the indicator
				"padding-inline": "20px",
			},
		},
		{
			testHeading: "Vertical",
			vertical: true,
			wrapperStyles: {
				// Adjust for the indicator
				"padding-block": "20px",
			},
		},
		{
			testHeading: "Alpha",
			gradientStops: ["rgba(0, 0, 0, 1) 0%", "rgba(0, 0, 0, 0) 100%"],
			colorHandleStyle: {
				"--spectrum-picked-color": "rgba(0, 0, 0, 1)",
			},
			wrapperStyles: {
				// Adjust for the indicator
				"padding-inline": "20px",
			},
		},
		{
			testHeading: "With Image",
			gradientType: "image",
			colorHandleStyle: {
				"--spectrum-picked-color": "#df6a7d",
				"inset-inline-start": "50%",
			},
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
