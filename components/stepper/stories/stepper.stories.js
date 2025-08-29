import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isKeyboardFocused, isReadOnly, size } from "@spectrum-css/preview/types";
import { default as TextfieldStories } from "@spectrum-css/textfield/stories/textfield.stories.js";
import { NumberFieldGroup } from "./stepper.test.js";
import { AllDefaultVariantsGroup, DisabledVariantsGroup, Template } from "./template.js";

// Local assets to render the component styles and structure
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";

/**
 * A number field can be used to increment or decrement a value by a specified amount via add and subtract buttons. The input field displays the current value.
 *
 * Note that the number fields are non-functional on this page, but functionality is demonstrated on [the story page](/story/components-number-field--default).
 */
export default {
	title: "Number field",
	component: "Stepper",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		hideStepper: {
			name: "Hide stepper buttons",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled,
		isInvalid: {
			...TextfieldStories?.argTypes?.isInvalid ?? {},
		},
		isFocused,
		isHovered,
		isKeyboardFocused,
		isReadOnly,
		displayLabel: {
			...TextfieldStories?.argTypes?.displayLabel ?? {},
		},
		label: {
			...TextfieldStories?.argTypes?.labelText ?? {},
		},
		labelPosition: {
			...TextfieldStories?.argTypes?.labelPosition ?? {},
		},
		helpText: {
			...TextfieldStories?.argTypes?.helpText,
		},
		value: { table: { disable: true, } },
		step: {
			name: "Step value",
			description: "The amount to increment or decrement the input value.",
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: "number",
		},
	},
	args: {
		rootClass: "spectrum-NumberField",
		size: "m",
		isFocused: false,
		isHovered: false,
		isKeyboardFocused: false,
		isReadOnly: false,
		isInvalid: false,
		isDisabled: false,
		hideStepper: false,
		displayLabel: true,
		label: "Field label",
		labelPosition: "top",
		helpText: "",
		step: "1",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=67507-450",
		},
		packageJson,
		metadata,
		cssprops: metadata.modifiers,
	},
	tags: ["migrated"],
	decorators: [
		withDownStateDimensionCapture,
	],
};

export const Default = NumberFieldGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Number fields come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most
 * frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 *
 * Number fields have a [field label](/docs/components-field-label--docs) that is positioned above the field by default. Having
 * the label on the top is the default and is recommended because this works better with long copy, localization, and responsive
 * layouts.
 *
 * The [inline infield buttons](/docs/components-in-field-button--docs#inline) are usually visible, but can be hidden.
 * The amount of the increment/decrement step is 1 by default.
 *
 * When the label is too long for the available space, it will wrap to the next line. If the value within the number field input
 * overflows, it will truncate with an ellipsis. To view truncated text, implementations can use a tooltip available on hover (desktop) or long press (mobile). If an error state is needed for smaller inputs, implementations should consider hiding the error icon so that more of the input value is visible.
 */
export const DefaultStates = AllDefaultVariantsGroup.bind({});
DefaultStates.args = {};
DefaultStates.tags = ["!dev"];
DefaultStates.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultStates.storyName = "Default";

/**
 * Number fields have a [field label](/docs/components-field-label--docs) that is positioned above the field by default, with a
 * secondary option to be positioned on the side of the field. Having the label on the side is most useful for when vertical space is limited.
 */
export const SideLabel = AllDefaultVariantsGroup.bind({});
SideLabel.args = {
	labelPosition: "side",
};
SideLabel.tags = ["!dev"];
SideLabel.parameters = {
	chromatic: { disableSnapshot: true },
};
SideLabel.storyName = "Side label";

/**
 * Number fields have a read-only option for when disabled content still needs to be shown. This allows for content to be copied, but not interacted with or changed.
 */
export const ReadOnly = DisabledVariantsGroup.bind({});
ReadOnly.args = {
	isReadOnly: true,
};
ReadOnly.tags = ["!dev"];
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};
ReadOnly.storyName = "Read-only";

export const InvalidStates = AllDefaultVariantsGroup.bind({});
InvalidStates.args = {
	isInvalid: true,
	helpText: "Help text is here to assist",
};
InvalidStates.tags = ["!dev"];
InvalidStates.parameters = {
	chromatic: { disableSnapshot: true },
};
InvalidStates.storyName = "Invalid";

export const Disabled = DisabledVariantsGroup.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = NumberFieldGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * Number fields typically have stepper buttons	visible by default, but implementations have the option to hide them. The component should always accommodate arrow key shortcuts to increase or decrease the value, regardless of whether its stepper buttons are visible.
 */
export const HideStepper = Template.bind({});
HideStepper.tags = ["!dev"];
HideStepper.args = {
	hideStepper: true,
};
HideStepper.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
HideStepper.storyName = "Hide stepper buttons";
