import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchgroupGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Small size (compact density)",
			density: "compact",
		},
		{
			testHeading: "Full rounding",
			rounding: "full",
		},
		{
			testHeading: "Regular rounding",
			rounding: "regular",
		},
	],
});
