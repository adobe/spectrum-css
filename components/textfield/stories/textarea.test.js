import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./textarea.template";

export const TextAreaGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "Text area with value",
		displayLabel: true,
		labelText: "Interests",
		value: "Snowboarding, canoeing, calligraphy, gardening, knitting, child-rearing",
	},{
		testHeading: "Invalid with help text",
		isInvalid: true,
		displayLabel: true,
		labelText: "Interests",
		value: "Snowboarding, canoeing, calligraphy, gardening, knitting, child-rearing",
		helpText: "Describe the interests you'd like to explore through our tutorials."
	},{
		testHeading: "With help text",
		displayLabel: true,
		labelText: "Interests",
		value: "Snowboarding, canoeing, calligraphy, gardening, knitting, child-rearing",
		helpText: "Describe the interests you'd like to explore through our tutorials."
	},{
		testHeading: "Character count",
		labelText: "Interests",
		value: "Snowboarding, canoeing, calligraphy, gardening, knitting, child-rearing",
		hasCharacterCount: true,
		characterCount: 80
	},{
		testHeading: "Character count without label",
		displayLabel: false,
		value: "Snowboarding, canoeing, calligraphy, gardening, knitting, child-rearing",
		hasCharacterCount: true,
		characterCount: 80
	},{
		testHeading: "With side label, help text, and character count",
		displayLabel: true,
		labelPosition: "side",
		labelText: "Interests",
		value: "Snowboarding, canoeing, calligraphy, gardening, knitting, child-rearing",
		hasCharacterCount: true,
		characterCount: 80,
		helpText: "Describe the interests you'd like to explore through our tutorials."
	}],
	stateData: [{
		testHeading: "Focused",
		isFocused: true,
		include: ["Default", "Text area with value", "Invalid with help text"],
	}, {
		testHeading: "Keyboard focused",
		isKeyboardFocused: true,
		include: ["Default", "Text area with value", "Invalid with help text"],
	}, {
		testHeading: "Hover",
		isHovered: true,
		include: ["Default", "Text area with value", "Invalid with help text"],
	}, {
		testHeading: "Focus & hover",
		isFocused: true,
		isHovered: true,
		include: ["Default", "Text area with value", "Invalid with help text"],
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
	}]
});
