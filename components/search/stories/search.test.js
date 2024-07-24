import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const SearchGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
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
