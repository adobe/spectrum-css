import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchgroupGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Compact",
			density: "compact",
		},
		{
			testHeading: "Spacious",
			density: "spacious",
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
			testHeading: "With light borders",
			borderStyle: "lightBorder",
		},
	],
});
