import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const NumberFieldGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Hidden stepper",
			hideStepper: true,
		},
		{
			testHeading: "With help text",
			helpText: "Help text is here to assist",
		},
		{
			testHeading: "Side label",
			labelPosition: "side",
		},
		{
			testHeading: "Side label with help text",
			labelPosition: "side",
			helpText: "Help text is here to assist",
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
			helpText: "Help text is here to assist",
		},
		{
			testHeading: "Invalid hidden stepper",
			isInvalid: true,
			hideStepper: true,
			helpText: "Help text is here to assist",
		},
		{
			testHeading: "Minimum width (100px)",
			wrapperStyles: {
				"inline-size": "100px",
			},
		},
		{
			testHeading: "Default + truncation",
			withStates: false,
			value: "1234567890123456789012345678901",
		},
		{
			testHeading: "Hidden Stepper + truncation",
			withStates: false,
			hideStepper: true,
			value: "1234567890123456789012345678901",
		},
		{
			testHeading: "Side label + truncation",
			withStates: false,
			labelPosition: "side",
			value: "1234567890123456789012345678901",
		},
		// {
		// 	testHeading: "Internationalization (Thai)",
		// 	value: "๐๑๒๓๔๕๖๗๘๙๑๐",
		// }
	],
	stateData: [
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
