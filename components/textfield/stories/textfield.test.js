import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TextFieldGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "With field label",
		displayLabel: true,
		labelText: "Username",
	},
	{
		testHeading: "With side label",
		displayLabel: true,
		labelText: "Username",
		labelPosition: "side",
	},
	{
		testHeading: "With value",
		displayLabel: true,
		labelText: "Username",
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	},
	{
		testHeading: "Text area",
		multiline: true,
	},
	{
		testHeading: "Text area with label",
		displayLabel: true,
		labelText: "Username",
		multiline: true,
	},
	{
		testHeading: "Text area with value",
		displayLabel: true,
		labelText: "Username",
		multiline: true,
		value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	}],
	stateData: [{
		testHeading: "Invalid",
		isInvalid: true,
	}, {
		testHeading: "Valid",
		isInvalid: true,
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
