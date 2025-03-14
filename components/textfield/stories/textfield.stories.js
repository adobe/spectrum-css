import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isInvalid, isKeyboardFocused, isLoading, isReadOnly, isRequired, isValid, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { HelpTextOptions, InvalidOptions, RequiredOptions, Template, TextFieldOptions } from "./template.js";
import { TextFieldGroup } from "./textfield.test.js";

/**
 * Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 *
 * Textfields are single-line text fields using the `<input>` element. For multi-line text input, see the
 * [text area](/docs/components-textarea--docs) component.
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
		isHovered,
		isFocused,
		isKeyboardFocused,
		size: size(["s", "m", "l", "xl"]),
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
		isRequired: {
			...isRequired,
			description: "Sets the required attribute on the input element and adds the required asterisk to the field label.",
		},
		isRequiredWithoutAsterisk: {
			table: { disable: true },
		},
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
		hasCharacterCount: {
			name: "Has character count",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		characterCount: {
			name: "Character counter",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Component",
			},
			control: { type: "number" },
			if: { arg: "hasCharacterCount", eq: true },
		}
	},
	args: {
		rootClass: "spectrum-Textfield",
		isValid: false,
		isInvalid: false,
		isDisabled: false,
		isRequired: false,
		isRequiredWithoutAsterisk: false,
		isReadOnly: false,
		isHovered: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		displayLabel: true,
		hasCharacterCount: false,
		characterCount: 50,
		labelPosition: "top",
		labelText: "Username",
		size: "m",
		grows: false,
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=717-2629",
		},
		packageJson,
		metadata,
	},
};

export const Default = TextFieldGroup.bind({});
Default.tags = ["!autodocs"];
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Text fields should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label
 * could be undefined. These text fields without a visible label should still include an aria-label in HTML (depending on the context, "aria-label"
 * or "aria-labelledby").
 *
 * When the text field is focused using the keyboard (e.g. with the tab key), the implementation must add the `is-keyboardFocused` class, which
 * displays the focus indicator. This indicator should not appear on focus from a click or tap. The example below has this class applied on first
 * load for demonstration purposes.
 */
export const Standard = TextFieldOptions.bind({});
Standard.tags = ["!dev"];
Standard.storyName = "Default";
Standard.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text fields can display a character count indicator when the length of the text entry needs to be kept under a predefined value. Character count
 * indicators can be used in conjunction with other indicators (validation icon, "optional" or "required" indicators) when necessary.
 */
export const CharacterCount = Template.bind({});
CharacterCount.tags = ["!dev"];
CharacterCount.args = {
	hasCharacterCount: true,
	characterCount: 24,
	value: "lisawilson23"
};
CharacterCount.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text field in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout
 * continuity and communicate that a field may become available later.
 */
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Invalid = InvalidOptions.bind({});
Invalid.tags = ["!dev"];
Invalid.args = {
	isInvalid: true
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text field can have [help text](/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should
 * input in the field. The help text area has two options: a description and an error message. The description communicates a hint or helpful
 * information, such as specific requirements for correctly filling out the field. The error message communicates an error for when the field
 * requirements aren't met, prompting a user to adjust what they had originally input.
 *
 * Instead of placeholder text, use the help text description to convey requirements or to show any formatting examples that would help user
 * comprehension.
 */
export const HelpText = HelpTextOptions.bind({});
HelpText.tags = ["!dev"];
HelpText.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * __Don't use placeholder text.__ Putting instructions for how to complete an input, requirements, or any other essential information into
 * placeholder text is not accessible. Once a value is entered, placeholder text is no longer viewable; if someone is using an automatic form filler,
 * they will never get the information in the placeholder text.
 *
 * Instead, use the help text description to convey requirements or to show any formatting examples that would help user comprehension. If there's
 * placeholder text and help text at the same time, it becomes redundant and distracting, especially if they're communicating the same thing.
 *
 * Because use of placeholder text is discouraged, placeholder and value text are styled the same.
 */
export const Placeholder = Template.bind({});
Placeholder.tags = ["!dev"];
Placeholder.args = {
	placeholder: "placeholder@adobe.com"
};
Placeholder.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text fields have a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not
 * interacted with or changed.
 */
export const Readonly = Template.bind({});
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
export const SideLabel = Template.bind({});
SideLabel.tags = ["!dev"];
SideLabel.args = {
	labelPosition: "side",
	hasCharacterCount: true,
	characterCount: 50,
	helpText: "Example help text. Lorem ipsum dolor sit amet."
};
SideLabel.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Sizing = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {
	helpText: "Example help text. Lorem ipsum dolor sit amet.",
	hasCharacterCount: true
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text fields can display a validation icon when the text entry is expected to conform to a specific format (e.g., email address, credit card
 * number, password creation requirements, etc.). The icon should appear as soon as a user types a valid entry in the field.
 */
export const Validation = Template.bind({});
Validation.tags = ["!dev"];
Validation.args = {
	isValid: true,
};
Validation.parameters = {
	chromatic: { disableSnapshot: true }
};
Validation.storyName = "Validation icon";

/**
 * Text fields can be marked as optional or required, depending on the situation. For required text fields, there are two styling options: a
 * "(required)" label or an asterisk. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional text
 * fields are either denoted with text added to the end of the label — "(optional)" — or have no indication at all.
 */
export const Required = RequiredOptions.bind({});
Required.tags = ["!dev"];
Required.args = {
	isRequired: true,
};
Required.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TextFieldGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
