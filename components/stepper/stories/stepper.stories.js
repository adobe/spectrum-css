import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isInvalid } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { 
	Template,
	SizingTemplate,
	QuietTemplate,
	DisabledTemplate,
	DefaultTemplate,
	StepperGroup,
} from "./template";

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

export const Standard = SizingTemplate.bind({});
Standard.tags = ["autodocs", "!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};
Standard.storyName = "Default";

export const DefaultStates = DefaultTemplate.bind({});
DefaultStates.args = {};
DefaultStates.tags = ["autodocs", "!dev"];
DefaultStates.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultStates.storyName = "Default";

export const DisabledStates = DisabledTemplate.bind({});
DisabledStates.args = {};
DisabledStates.tags = ["autodocs", "!dev"];
DisabledStates.parameters = {
	chromatic: { disableSnapshot: true },
};
DisabledStates.storyName = "Disabled";

export const QuietStates = QuietTemplate.bind({});
QuietStates.args = {};
QuietStates.tags = ["autodocs", "!dev"];
QuietStates.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietStates.storyName = "Quiet";

export const HideStepper = Template.bind({});
HideStepper.args = {
	hideStepper: true,
};
HideStepper.tags = ["autodocs", "!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
