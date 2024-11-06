import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ClearButtonGroup = Variants({
	Template,
	stateDirection: "row",
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
		{
			testHeading: "Static white - quiet",
			staticColor: "white",
			isQuiet: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	]
});
