import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Color with opacity",
			swatchColor: "rgba(174, 216, 230, 0.3)"
		},
		{
			testHeading: "No rounding",
			rounding: "none"
		},
		{
			testHeading: "Full rounding",
			rounding: "full"
		},
	],
	stateData: [
		{
			testHeading: "No color",
			swatchColor: undefined
		},
		{
			testHeading: "Selected",
			isSelected: true,
		},
	]
});
