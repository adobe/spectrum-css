import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchgroupGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Extra small",
			density: "sizeXS",
		},
		{
			testHeading: "Small",
			density: "sizeS",
		},
		{
			testHeading: "Large",
			density: "sizeL",
		},
		{
			testHeading: "Full rounding",
			rounding: "full",
		},
		{
			testHeading: "Regular rounding",
			rounding: "regular",
		},
		{
			testHeading: "No rounding",
			rounding: "none",
		},
	],
});
