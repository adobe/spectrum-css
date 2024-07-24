import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const RatingGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Read only",
			isReadOnly: true,
		},
	]
});
