import { Variants } from "@spectrum-css/preview/decorators";
import { Template as ProgressBar } from "./template.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	customClasses = [],
	fill,
	size = "s",
	...item
}, context) => ProgressBar({
	customClasses: [
		...customClasses,
		"spectrum-Meter",
		typeof size !== "undefined" ? `spectrum-Meter--size${size.toUpperCase()}` : null,
		typeof fill !== "undefined" ? `is-${fill}` : null,
	].filter(Boolean),
	size,
	...item,
}, context);


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
