import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const StepperGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Hide stepper",
			hideStepper: true,
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
			testHeading: "Keyboard-focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Invalid + focused",
			isInvalid: true,
			isFocused: true,
		},
		{
			testHeading: "Invalid + keyboard-focused",
			isInvalid: true,
			isKeyboardFocused: true,
		},
		{
			testHeading: "Invalid + disabled + focused",
			isInvalid: true,
			isDisabled: true,
			isFocused: true,
		},
		{
			testHeading: "Invalid + disabled + keyboard-focused",
			isInvalid: true,
			isDisabled: true,
			isKeyboardFocused: true,
		},
	]
});
