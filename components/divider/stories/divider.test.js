import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DividerGroup = Variants({
	Template,
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
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
	],
});
