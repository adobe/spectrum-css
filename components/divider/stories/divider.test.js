import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DividerGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			vertical: false,
			minDimensionValues: true,
		},
		{
			testHeading: "Non-HR",
			tag: "div",
			vertical: false,
			minDimensionValues: true,
		},
		{
			testHeading: "Vertical",
			vertical: true,
			minDimensionValues: true,
		}
	],
});
