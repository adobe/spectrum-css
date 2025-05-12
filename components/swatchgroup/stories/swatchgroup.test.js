import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchgroupGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default (regular density)",
		},
		{
			testHeading: "Compact density",
			density: "compact",
		},
		{
			testHeading: "Full rounding (regular density)",
			rounding: "full",
		},
		{
			testHeading: "Regular rounding (regular density)",
			rounding: "regular",
		},
	],
});
