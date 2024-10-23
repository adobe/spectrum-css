import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

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
			testHeading: "Keyboard focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
		},
	]
});
