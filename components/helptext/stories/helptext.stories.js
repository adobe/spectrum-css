import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { HelpTextGroup } from "./helptext.test.js";

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
		size: size(["s", "m", "l", "xl"]),
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
		isDisabled,
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
		packageJson: pkgJson,
	},
};

export const Default = HelpTextGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = HelpTextGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
