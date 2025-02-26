import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DividerGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			vertical: false,
		},
		{
			testHeading: "Non-HR",
			tag: "div",
			vertical: false,
		},
		{
			testHeading: "Vertical",
			vertical: true,
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
