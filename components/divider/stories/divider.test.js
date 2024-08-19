import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DividerGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			vertical: false,
		},
		{
			testHeading: "Non-HR",
			tag: "div",
		},
		{
			testHeading: "Vertical",
			vertical: true,
		}
	],
});
