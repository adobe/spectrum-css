import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template } from "./template.js";

export const MeterSizingTemplate  = (args, context) => {
	return html`
		${Template({
			...args,
			helpText: "Upgrade membership to get more storage space"
		}, context)}
	`;
};

export const MeterGroup = Variants({
	Template,
	SizeTemplate: MeterSizingTemplate,
	testData: [
		{
			testHeading: "Default",
		},
		...["positive", "negative", "notice"].map((fill) => ({
			testHeading: `Fill: ${fill}`,
			fill,
		})),
		{
			testHeading: "Text overflow",
			label: "Storage space remaining for XYZ user"
		},
		{
			testHeading: "Without label",
			label: undefined,
			showValueLabel: false,
		},
		{
			testHeading: "Without value label",
			showValueLabel: false,
		},
		{
			testHeading: "Help text",
			helpText: "Help text message to add more context",
		},
		/* The gradient story below supports linear-gradients used by Express. For use cases that require a custom
		linear-gradient for any --mod-*-{fill} properties, set those custom properties in CSS.
		*/
		{
			testHeading: "Gradient support",
			trackFill: "linear-gradient(to right, hotpink, orange)",
			progressBarFill: "linear-gradient(to left, teal, purple)",
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
	],
});
