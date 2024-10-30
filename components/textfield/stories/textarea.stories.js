import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { HelpTextOptionsTextArea, KeyboardFocusTemplate, Template, TextAreaOptions } from "./textarea.template.js";
import { TextAreaGroup } from "./textarea.test.js";
import { default as Textfield } from "./textfield.stories.js";

/**
 * A text area is multi-line text field using the `<textarea>` element that lets a user input a longer amount of text than a standard text field. It can include all of the standard validation options supported by the text field component.
 */
export default {
	title: "Text area",
	component: "TextArea",
	argTypes: {
		...Textfield.argTypes
	},
	args: {
		...Textfield.args,
		rootClass: "spectrum-Textfield--multiline",
		labelText: "Comments"
	},
	parameters: {
		packageJson,
		metadata,
	}
};

export const Default = TextAreaGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //

export const Standard = TextAreaOptions.bind({});
Standard.tags = ["!dev"];
Standard.storyName = "Default";
Standard.parameters = {
	chromatic: { disableSnapshot: true }
};

export const CharacterCount = Template.bind({});
CharacterCount.tags = ["!dev"];
CharacterCount.args = {
	hasCharacterCount: true,
	characterCount: 50,
	value: "Duis mollit ut laboris est labore sunt ipsum. Proident nostrud in ea reprehenderit proident nostrud. Anim ut est anim ex amet."
};
CharacterCount.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text area in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.
 */
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * A text area can have [help text](/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should input in the field. The help text area has two options: a description and an error message. The description communicates a hint or helpful information, such as specific requirements for correctly filling out the field. The error message communicates an error for when the field requirements aren’t met, prompting a user to adjust what they had originally input.
 *
 * Instead of placeholder text, use the help text description to convey requirements or to show any formatting examples that would help user comprehension. Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible.
 */
export const HelpText = HelpTextOptionsTextArea.bind({});
HelpText.tags = ["!dev"];
HelpText.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Quiet = TextAreaOptions.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text area has a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed.
 */
export const Readonly = Template.bind({});
Readonly.tags = ["!dev"];
Readonly.args = {
	isReadOnly: true,
	value: "Adipisicing dolor quis ad non ad ipsum irure ullamco."
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
	value: "Qui nulla cupidatat do ex laborum ipsum et culpa reprehenderit dolore.",
	displayCounter: true,
	characterCount: 50,
	helpText: "Example help text. Lorem ipsum dolor sit amet."
};
SideLabel.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Text area can display a validation icon when the text entry is expected to conform to a specific format (e.g., email address, credit card number, password creation requirements, etc.). The icon appears as soon as a user types a valid entry in the field.
 */
export const Validation = Template.bind({});
Validation.tags = ["!dev"];
Validation.args = {
	isValid: true
};
Validation.parameters = {
	chromatic: { disableSnapshot: true }
};
Validation.storyName = "Validation icon";

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
 * When the text area was focused using the keyboard (e.g. with the tab key), the implementation must add the `is-keyboardFocused` class, which
 * displays the focus indicator. This indicator should not appear on focus from a click or tap.
 */
export const KeyboardFocus = KeyboardFocusTemplate.bind({});
KeyboardFocus.tags = ["!dev"];
KeyboardFocus.args = {
	isKeyboardFocused: true,
};
KeyboardFocus.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
// @todo should this show text field and text area in the same snapshot?
export const WithForcedColors = TextAreaGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
