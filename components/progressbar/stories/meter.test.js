import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./meter.template.js";

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
		/* The gradient story below supports linear-gradients used by Express. For use cases that require a custom 
		linear-gradient for any --mod-*-{fill} properties, set those custom properties in CSS.
		*/
		{
			testHeading: "Gradient support", 
			trackFill: "linear-gradient(to right, hotpink, orange)",
			progressBarFill: "linear-gradient(to left, teal, purple)",
		}
	],
});
