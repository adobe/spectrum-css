import { html } from "lit";
import { version } from "../package.json";
import { Template } from "./template";

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
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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

export const Default = (args) => html`
	<div>
		${Template({
			...args
		})}

		${window.isChromatic() ? chromaticKitchenSink(args) : null}
	</div>
`;
Default.args = {};

export const HideStepper = Template.bind({});
HideStepper.args = {
	hideStepper: true,
};

const chromaticKitchenSink = (args) => html`
	<div style="padding: 8px 0">
		${Template({
			...args,
			isFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isKeyboardFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isInvalid: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isInvalid: true,
			isFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isInvalid: true,
			isKeyboardFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isDisabled: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
			isFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
			isKeyboardFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
			isInvalid: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
			isInvalid: true,
			isFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
			isInvalid: true,
			isKeyboardFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			isQuiet: true,
			isDisabled: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
			isFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
			isKeyboardFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
			isInvalid: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
			isInvalid: true,
			isFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
			isInvalid: true,
			isKeyboardFocused: true,
		})}
	</div>
	<div style="padding: 8px 0">
		${Template({
			...args,
			hideStepper: true,
			isDisabled: true,
		})}
	</div>
`;
