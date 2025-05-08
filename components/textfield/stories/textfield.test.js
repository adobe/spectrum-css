import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TextFieldGroup = Variants({
	Template,
	testData: [{
	}, {
		testHeading: "With value",
		displayLabel: true,
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	}, {
		testHeading: "With placeholder",
		displayLabel: true,
		placeholder: "placeholder@adobe.com"
	}, {
		testHeading: "Invalid with help text",
		isInvalid: true,
		displayLabel: true,
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		helpText: "wilson@adobe.com",
	}, {
		testHeading: "With help text",
		displayLabel: true,
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		helpText: "wilson@adobe.com"
	}, {
		testHeading: "Character count",
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		hasCharacterCount: true,
		characterCount: 50
	}, {
		testHeading: "Character count without label",
		displayLabel: false,
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		hasCharacterCount: true,
		characterCount: 50
	}, {
		testHeading: "With side label, help text, and character count",
		hasCharacterCount: true,
		characterCount: 50,
		displayLabel: true,
		labelPosition: "side",
		helpText: "wilson@adobe.com",
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	}],
	stateData: [{
		testHeading: "Focused",
		isFocused: true,
		include: ["Default", "With value", "With placeholder", "Invalid with help text"],
	}, {
		testHeading: "Keyboard focused",
		isKeyboardFocused: true,
		include: ["Default", "With value", "With placeholder", "Invalid with help text"],
	}, {
		testHeading: "Hover",
		isHovered: true,
		include: ["Default", "With value", "With placeholder", "Invalid with help text"],
	}, {
		testHeading: "Disabled & hover",
		isHovered: true,
		isDisabled: true,
		include: ["Default", "With value", "With placeholder", "Invalid with help text"],
	}, {
		testHeading: "Focus & hover",
		isFocused: true,
		isHovered: true,
		include: ["Default", "With value", "With placeholder", "Invalid with help text"],
	}, {
		testHeading: "Valid",
		isValid: true,
		ignore: ["Invalid with help text"],
	}, {
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Required",
		isRequired: true,
		ignore: ["Character count without label"],
	}, {
		testHeading: "Read-only",
		isReadOnly: true,
	}, {
		testHeading: "Read-only & disabled",
		isReadOnly: true,
		isDisabled: true,
	}, {
		testHeading: "Read-only & disabled hover",
		isReadOnly: true,
		isDisabled: true,
		isHovered: true,
		include: ["With value", "With placeholder"],
	}]
});
