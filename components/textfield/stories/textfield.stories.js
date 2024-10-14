import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isQuiet, isReadOnly, isRequired, isValid, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { HelpTextOptions } from "./template.js";
import { TextFieldGroup } from "./textfield.test.js";

/**
 * Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.
 * 
 * ## Usage Notes
 * A single-line text field using the `<input>` element.
 */
export default {
	title: "Text field",
	component: "TextField",
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
				category: "Content",
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
		helpText: {
			name: "Help text (description)",
			type: { name: "string" },
			control: { type: "text" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
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
		}
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
		labelText: "Username",
		size: "m",
		grows: false,
		isQuiet: false,
		value: "",
		helpText: ""
	},
	parameters: {
		actions: {
			handles: [
				"click .spectrum-Textfield",
				"focusin .spectrum-Textfield",
				"focusout .spectrum-Textfield"
			],
		},
		packageJson,
		metadata,
	},
};

/**
 * Text fields should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These text fields without a visible label should still include an aria-label in HTML (depending on the context, “aria-label” or “aria-labelledby”).
*/

export const Default = TextFieldGroup.bind({});
Default.args = {
	labelText: "Username",
};

// ********* DOCS ONLY ********* //


/**
 * Text fields can display a character count indicator when the length of the text entry needs to be kept under a predefined value. Character count indicators can be used in conjunction with other indicators (validation icon, “optional” or “required” indicators) when necessary.
*/
export const CharacterCount = TextFieldGroup.bind({});
CharacterCount.tags = ["!dev"];
CharacterCount.args = {
	labelText: "Username",
	displayCounter: true,
	characterCount: 24,
	value: "lisawilson23"
};

CharacterCount.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text field in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.
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
 * A text field can be marked as having an error to show that a value needs to be entered in order to move forward or that a value that was entered is invalid. If an error exists, the error icon always overrides the validation icon.
*/
export const Error = TextFieldGroup.bind({});
Error.tags = ["!dev"];
Error.args = {
	isInvalid: true
};

/**
 * A text field can have [help text](/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should input in the field. The help text area has two options: a description and an error message. The description communicates a hint or helpful information, such as specific requirements for correctly filling out the field. The error message communicates an error for when the field requirements aren’t met, prompting a user to adjust what they had originally input.
 * 
 * Instead of placeholder text, use the help text description to convey requirements or to show any formatting examples that would help user comprehension. Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible.
*/
export const HelpText = HelpTextOptions.bind({});
HelpText.tags = ["!dev"];


export const Quiet = TextFieldGroup.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
	value: ""
};

Quiet.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text fields have a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed.
*/
export const Readonly = TextFieldGroup.bind({});
Readonly.tags = ["!dev"];
Readonly.args = {
	isReadOnly: true,
	value: "lisawilson24"
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
	labelText: "Username",
	displayCounter: true,
	characterCount: 50,
	helpText: "Example help text. Lorem ipsum dolor sit amet."
};
SideLabel.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Sizing = (args, context) => Sizes({
	Template: TextFieldGroup,
	withHeading: false,
	withBorder: false,
	...args,
}, context);

Sizing.args = {
	helpText: "Example help text. Lorem ipsum dolor sit amet."
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true }
};


/**
 * Text fields can display a validation icon when the text entry is expected to conform to a specific format (e.g., email address, credit card number, password creation requirements, etc.). The icon appears as soon as a user types a valid entry in the field.
*/
export const Validation = TextFieldGroup.bind({});
Validation.tags = ["!dev"];
Validation.args = {
	isValid: true,
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
