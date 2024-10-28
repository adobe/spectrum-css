import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./textarea.template";

export const TextAreaGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "Text area with value",
		displayLabel: true,
		value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	},{
		testHeading: "With side label",
		displayLabel: true,
		labelPosition: "side",
		value: "Sit ad magna pariatur id et qui ex non voluptate."
	},{
		testHeading: "With help text",
		displayLabel: true,
		value: "Exercitation ad magna aliqua officia adipisicing ullamco.",
		helpText: "Example help text. Ullamco laborum."
	},{
		testHeading: "Quiet",
		value: "Ullamco id consequat adipisicing veniam sunt ut cupidatat do ullamco.",
		isQuiet: true
	},{
		testHeading: "Quiet, with side label",
		value: "Sunt Lorem consequat quis sunt tempor aliqua ipsum ut.",
		labelPosition: "side",
		isQuiet: true
	}, {
		testHeading: "Character count",
		value: "Sunt Lorem consequat quis sunt tempor aliqua ipsum ut.",
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
