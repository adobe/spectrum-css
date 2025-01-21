import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const InfieldProgressCircleGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
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
	stateData: [
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		}
	]
});
