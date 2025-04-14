import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const NumberFieldGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Valid",
			isValid: true,
		},
		{
			testHeading: "Minimum width (100px)",
			wrapperStyles: {
				"inline-size": "100px",
			},
			include: ["Default"]
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
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Focused + hovered",
			isFocused: true,
			isHovered: true,
		},
		{
			testHeading: "Keyboard-focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Keyboard-focused + hovered",
			isKeyboardFocused: true,
			isHovered: true,
		},
		{
			testHeading: "Disabled + hovered",
			isDisabled: true,
			isHovered: true,
		},
		{
			testHeading: "Disabled + focused",
			isDisabled: true,
			isFocused: true,
		},
		{
			testHeading: "Disabled + keyboard-focused",
			isDisabled: true,
			isKeyboardFocused: true,
		},
		{
			testHeading: "Disabled + keyboard-focused",
			isDisabled: true,
			isKeyboardFocused: true,
		},
	]
});
