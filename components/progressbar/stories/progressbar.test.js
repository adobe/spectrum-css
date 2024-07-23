import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ProgressBarGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Side label",
			labelPosition: "side",
		},
		{
			testHeading: "Text overflow",
			label: "Storage space remaining for XYZ user"
		},
	],
	stateData: [
		{
			testHeading: "Indeterminate",
			indeterminate: true,
			value: undefined,
		}
	],
});
