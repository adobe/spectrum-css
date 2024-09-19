import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ProgressCircleGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
	],
	stateData: [
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		}
	]
});
