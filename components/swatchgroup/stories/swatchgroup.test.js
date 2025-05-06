import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchgroupGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Small density (compact)",
			density: "sizeS",
		},
		{
			testHeading: "Large density, extra small swatches (spacious)",
			density: "sizeL",
			size: "xs"
		},
		{
			testHeading: "Large density, small swatches (spacious)",
			density: "sizeL",
			size: "s"
		},
		{
			testHeading: "Large density, medium swatches (spacious)",
			density: "sizeL",
			size: "m"
		},
		{
			testHeading: "Large density, large swatches (spacious)",
			density: "sizeL",
			size: "l"
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
