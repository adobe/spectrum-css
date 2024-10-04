import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isQuiet, isReadOnly, isRequired, isValid, size } from "@spectrum-css/preview/types";
import { TextFieldGroup } from "@spectrum-css/textfield/stories/textfield.test.js";
import { HelpTextOptions, Template } from "../../textfield/stories/template";

/**
 * A text area lets a user input a longer amount of text than a standard text field. It can include all of the standard validation options supported by the text field component.
 * 
 * ## Usage notes
 * A multi-line text field using the `<textarea>` element.
*/

export default {
	title: "Text area",
	component: "TextArea",
	argTypes: {
		isValid: {
			...isValid,
			if: { arg: "isInvalid", truthy: false },
		},
		displayLabel: {
			name: "Display field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		labelPosition: {
			name: "Label position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
			if: { arg: "displayLabel", truthy: true },
		},
		labelText: {
			name: "Label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "displayLabel", truthy: true },
		},
		isInvalid: {
			...isInvalid,
			if: { arg: "isValid", truthy: false },
		},
		isFocused,
		isKeyboardFocused,
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		multiline: { table: { disable: true } },
		grows: {
			name: "Grows",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "multiline", truthy: true },
		},
		iconName: {
			table: { disable: true },
		},
		isDisabled,
		isRequired,
		isReadOnly,
		isLoading,
		pattern: { table: { disable: true } },
		value: { table: { disable: true } },
		hasDescription: {
			name: "Help Text",
			description: "A text area can have help text below the field to give extra context or instruction about what a user should input. The description communicates a hint or helpful information.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		description: {
			name: "Help text (description)",
			type: { name: "string" },
			control: { type: "text" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			if: { arg: "hasDescription", eq: true },
		},
		displayCounter: {
			name: "Show counter",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		characterCount: {
			name: "Character counter",
			type: { name: "number" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: { type: "number" },
			if: { arg: "displayCounter", eq: true },
		},
	},
	args: {
		rootClass: "spectrum-Textfield",
		isValid: false,
		isInvalid: false,
		isDisabled: false,
		isRequired: false,
		isReadOnly: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		displayLabel: true,
		displayCounter: false,
		characterCount: 50,
		labelPosition: "top",
		size: "m",
		multiline: true,
		grows: false,
		isQuiet: false,
		value: "Value",
		labelText: "Label",
		hasDescription: false,
		description: "Example help text. Lorem ipsum dolor sit amet."
	},
};

export const Default = Template.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //

export const CharacterCount = TextFieldGroup.bind({});
CharacterCount.tags = ["!dev"];
CharacterCount.args = {
	labelText: "Comments",
	displayCounter: true,
	characterCount: 50,
	value: "Duis mollit ut laboris est labore sunt ipsum. Proident nostrud in ea reprehenderit proident nostrud. Anim ut est anim ex amet."
};

CharacterCount.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text area in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.
*/
export const Disabled = TextFieldGroup.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};

Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text area can be marked as having an error to show that a value needs to be entered in order to move forward or that a value that was entered is invalid. If an error exists, the error icon always overrides the validation icon.
*/
export const Error = TextFieldGroup.bind({});
Error.tags = ["!dev"];
Error.args = {
	isInvalid: true
};

/**
 * A text area can have [help text](/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should input in the field. The help text area has two options: a description and an error message. The description communicates a hint or helpful information, such as specific requirements for correctly filling out the field. The error message communicates an error for when the field requirements aren’t met, prompting a user to adjust what they had originally input.
*/
export const HelpText = HelpTextOptions.bind({});
HelpText.tags = ["!dev"];

export const Quiet = TextFieldGroup.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
	labelText: "Label"
};

Quiet.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text area has a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed.
*/
export const Readonly = TextFieldGroup.bind({});
Readonly.tags = ["!dev"];
Readonly.args = {
	isReadOnly: true
};
Readonly.parameters = {
	chromatic: { disableSnapshot: true }
};
Readonly.storyName = "Read-only";

/**
 * Side labels are most useful when vertical space is limited.
*/
export const SideLabel = TextFieldGroup.bind({});
SideLabel.tags = ["!dev"];
SideLabel.args = {
	labelPosition: "side",
	labelText: "Password",
	displayCounter: true,
	characterCount: 50,
	hasDescription: true
};
SideLabel.parameters = {
	chromatic: { disableSnapshot: true }
};


/**
 * Text area can display a validation icon when the text entry is expected to conform to a specific format (e.g., email address, credit card number, password creation requirements, etc.). The icon appears as soon as a user types a valid entry in the field.
*/
export const Validation = TextFieldGroup.bind({});
Validation.tags = ["!dev"];
Validation.args = {
	isValid: true
};
Validation.parameters = {
	chromatic: { disableSnapshot: true }
};
Validation.storyName = "Validation icon";

// ********* VRT ONLY ********* //
// @todo should this show text field and text area in the same snapshot?
export const WithForcedColors = TextFieldGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};