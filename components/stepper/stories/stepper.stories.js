import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isInvalid, isKeyboardFocused, isQuiet, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { StepperGroup } from "./stepper.test.js";
import { AllDefaultVariantsGroup, DisabledVariantsGroup, Template } from "./template";

/**
 * A stepper can be used to increment or decrement a value by a specified amount via an up/down button. An input field displays the current value.
 */
export default {
	title: "Stepper",
	component: "Stepper",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		hideStepper: {
			name: "Hide stepper",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled,
		isInvalid,
		isFocused,
		isHovered,
		isKeyboardFocused,
	},
	args: {
		rootClass: "spectrum-Stepper",
		size: "m",
		isQuiet: false,
		isFocused: false,
		isHovered: false,
		isKeyboardFocused: false,
		isInvalid: false,
		isDisabled: false,
		hideStepper: false
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=67507-450",
		},
		packageJson: pkgJson,
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
 * Steppers come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 */
export const DefaultStates = AllDefaultVariantsGroup.bind({});
DefaultStates.args = {};
DefaultStates.tags = ["!dev"];
DefaultStates.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultStates.storyName = "Default";

export const Disabled = DisabledVariantsGroup.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
Disabled.storyName = "Disabled";

export const QuietStates = AllDefaultVariantsGroup.bind({});
QuietStates.args = {
	isQuiet: true,
};
QuietStates.tags = ["!dev"];
QuietStates.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietStates.storyName = "Quiet";


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
 * Optional stepper buttons would appear to the side of the field. Regardless of if a stepper has these buttons or not, is should always accommodate arrow key shortcuts to increase or decrease the number.
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
HideStepper.storyName = "Hide stepper";
