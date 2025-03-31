import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isKeyboardFocused, size } from "@spectrum-css/preview/types";
import { default as TextfieldStories } from "@spectrum-css/textfield/stories/textfield.stories.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { StepperGroup } from "./stepper.test.js";
import { AllDefaultVariantsGroup, DisabledVariantsGroup, Template } from "./template.js";

/**
 * A number field can be used to increment or decrement a value by a specified amount via an up/down button. An input field displays the current value.
 */
export default {
	title: "Number field",
	component: "Stepper",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		// isQuiet,
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
		isValid: {
			...TextfieldStories?.argTypes?.isValid ?? {},
			if: { arg: "isInvalid", truthy: false },
		},
		isFocused,
		isHovered,
		isKeyboardFocused,
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
			...TextfieldStories?.argTypes?.helpText ?? {},
		},
	},
	args: {
		rootClass: "spectrum-Stepper",
		size: "m",
		isFocused: false,
		isHovered: false,
		isKeyboardFocused: false,
		isInvalid: false,
		isValid: false,
		isDisabled: false,
		hideStepper: false,
		displayLabel: true,
		label: "Field label",
		labelPosition: "top",
		// todo: help text is not default
		helpText: "Help text can go here",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=67507-450",
		},
		packageJson,
		metadata,
	},
};

export const Default = StepperGroup.bind({});
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
 * Number fields come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 *
 * Number fields have a [field label](/docs/components-field-label--docs) that is positioned above the field by default, with a secondary option to be position on the side of the field. The [inline infield buttons](/docs/components-in-field-button--docs#inline) are usually visible, but can be hidden. All styles and options available regarding validation, icons, and [help text](/docs/components-help-text--docs) in the [textfield component](/docs/components-text-field--docs) are available in the stepper component.
 */
export const DefaultStates = AllDefaultVariantsGroup.bind({});
DefaultStates.args = {};
DefaultStates.tags = ["!dev"];
DefaultStates.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultStates.storyName = "Default";

export const SideLabel = AllDefaultVariantsGroup.bind({});
SideLabel.args = {
	labelPosition: "side",
};
SideLabel.tags = ["!dev"];
SideLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InvalidStates = AllDefaultVariantsGroup.bind({});
InvalidStates.args = {
	isInvalid: true,
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
Disabled.storyName = "Disabled";

// ********* VRT ONLY ********* //
export const WithForcedColors = StepperGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * Stepper buttons typically appear to the side of the field, but implementations have the option to hide them. Number fields should always accommodate arrow key shortcuts to increase or decrease the value, regardless of whether the stepper buttons are visible.
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
