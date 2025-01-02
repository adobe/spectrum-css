import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ProgressCircleGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
	],
	stateData: [
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		}
	]
});
