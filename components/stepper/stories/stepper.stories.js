import isChromatic from "chromatic/isChromatic";

import { html } from "lit";

import { Template } from "./template";

export default {
	title: "Components/Stepper",
	description:
		"A stepper can be used to increment or decrement a value by a specified amount via an up/down button. An input field displays the current value.",
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
		hideStepper: false,
		customStorybookStyles: {
			flexDirection: "column",
			alignItems: "flex-start",
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("stepper")
				? "migrated"
				: "legacy",
		},
	},
};

const chromaticKitchenSink = (args) => html`
	${Template(args)}
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
	})}`;

export const Default = (args) => isChromatic() ? chromaticKitchenSink(args) : Template(args);
Default.args = {};

export const HideStepper = Template.bind({});
HideStepper.args = {
	hideStepper: true,
};

export const Express = Template.bind({});
Express.args = { express: true };
