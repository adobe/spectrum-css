import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isInvalid } from "@spectrum-css/preview/types";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
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

const Variants = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none": "contents",
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"gap": "8px",
		"padding": "16px",
	})}>
		${Template({
			...args,
			isFocused: true,
		})}
		${Template({
			...args,
			isKeyboardFocused: true,
		})}
		${Template({
			...args,
			isInvalid: true,
		})}
		${Template({
			...args,
			isInvalid: true,
			isFocused: true,
		})}
		${Template({
			...args,
			isInvalid: true,
			isKeyboardFocused: true,
		})}
		${Template({
			...args,
			isDisabled: true,
		})}
		${Template({
			...args,
			isQuiet: true,
		})}
		${Template({
			...args,
			isQuiet: true,
			isFocused: true,
		})}
		${Template({
			...args,
			isQuiet: true,
			isKeyboardFocused: true,
		})}
		${Template({
			...args,
			isQuiet: true,
			isInvalid: true,
		})}
		${Template({
			...args,
			isQuiet: true,
			isInvalid: true,
			isFocused: true,
		})}
		${Template({
			...args,
			isQuiet: true,
			isInvalid: true,
			isKeyboardFocused: true,
		})}
		${Template({
			...args,
			isQuiet: true,
			isDisabled: true,
		})}
		${Template({
			...args,
			hideStepper: true,
		})}
		${Template({
			...args,
			hideStepper: true,
			isFocused: true,
		})}
		${Template({
			...args,
			hideStepper: true,
			isKeyboardFocused: true,
		})}
		${Template({
			...args,
			hideStepper: true,
			isInvalid: true,
		})}
		${Template({
			...args,
			hideStepper: true,
			isInvalid: true,
			isFocused: true,
		})}
		${Template({
			...args,
			hideStepper: true,
			isInvalid: true,
			isKeyboardFocused: true,
		})}
		${Template({
			...args,
			hideStepper: true,
			isDisabled: true,
		})}
	</div>
`;

export const Default = Variants.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Variants.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const HideStepper = Template.bind({});
HideStepper.args = {
	hideStepper: true,
};
