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
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Quiet + invalid",
			isQuiet: true,
			isInvalid: true,
		},
	],
	stateData: [
		{
			testHeading: "Hide stepper",
			hideStepper: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Keyboard-focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Disabled + hovered",
			isDisabled: true,
			isHovered: true,
		},
	]
});
