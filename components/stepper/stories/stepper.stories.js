import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isInvalid } from "@spectrum-css/preview/types";
import { Sizes } from "@spectrum-css/preview/decorators";
import { version } from "../package.json";
import { StepperGroup } from "./stepper.test.js";
import { Template, DisabledVariantsGroup, AllDefaultVariantsGroup } from "./template";

/**
 * A stepper can be used to increment or decrement a value by a specified amount via an up/down button. An input field displays the current value.
 */
export default {
	title: "Stepper",
	component: "Stepper",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select"
		},
		isQuiet: {
			name: "Quiet",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hideStepper: {
			name: "Hide stepper",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isInvalid,
		isFocused,
		isKeyboardFocused: {
			name: "Keyboard focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Stepper",
		size: "m",
		isQuiet: false,
		isFocused: false,
		isKeyboardFocused: false,
		isInvalid: false,
		isDisabled: false,
		hideStepper: false
	},
	parameters: {
		componentVersion: version,
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
