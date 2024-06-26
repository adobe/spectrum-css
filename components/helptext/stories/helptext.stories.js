import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Variants } from "./template";

/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */
export default {
	title: "Help text",
	component: "HelpText",
	argTypes: {
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "negative"],
			control: "inline-radio",
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		hideIcon: {
			name: "Hide icon",
			type: { name: "boolean" },
			description: "Help text using the negative variant can have an optional icon.",
			table: {
				type: { summary: "boolean" },
				disable: false,
				category: "Component",
			},
			control: "boolean",
			if: { arg: "variant", eq: "negative" },
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
	},
	args: {
		rootClass: "spectrum-HelpText",
		text: "Create a password with at least 8 characters.",
		variant: "neutral",
		hideIcon: false,
		isDisabled: false,
		size: "m",
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Variants.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
