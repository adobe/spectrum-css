import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TextFieldGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "With field label",
		displayLabel: true,
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	},
	{
		testHeading: "With side label",
		displayLabel: true,
		labelPosition: "side",
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	},
	{
		testHeading: "With value",
		displayLabel: true,
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	},{
		testHeading: "With help text",
		displayLabel: true,
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		helpText: "Example help text. Ullamco laborum."
	},{
		testHeading: "Character count",
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		hasCharacterCount: true,
		characterCount: 50
	}],
	stateData: [{
		testHeading: "Invalid",
		isInvalid: true,
	}, {
		testHeading: "Valid",
		isValid: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}, {
		testHeading: "Keyboard focused",
		isKeyboardFocused: true,
	}, {
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Required",
		isRequired: true,
	}, {
		testHeading: "Read-only",
		isReadOnly: true,
	}]
});
