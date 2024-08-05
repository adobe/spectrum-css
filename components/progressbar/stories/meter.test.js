import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const MeterGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
		},
		...["positive", "negative", "notice"].map((fill) => ({
			testHeading: `Fill: ${fill}`,
			fill,
		})),
		{
			testHeading: "Side label",
			labelPosition: "side",
		},
		{
			testHeading: "Text overflow",
			label: "Storage space remaining for XYZ user"
		},
	],
});
