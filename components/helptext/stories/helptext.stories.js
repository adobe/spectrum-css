import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { HelpTextGroup } from "./helptext.test.js";
import { NegativeTemplate, Template, VariantsTemplate } from "./template.js";

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
			description: "Hides the optional icon used with the negative variant.",
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=13653-196",
		},
		packageJson: pkgJson,
	},
};

/**
 * The default neutral variant is used to convey informative messages.
 */
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

// ********* DOCS ONLY ********* //

/**
 * Help text comes in four different sizes: small, medium, large, and extra-large. The medium size is the default.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.storyName = "Sizing";
Sizing.args = {
	variant: "negative",
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Help text using the neutral variant can be displayed in a disabled state. The text appears with a lighter gray that matches
 * the style of other components in a disabled state. Help text using the negative variant cannot be displayed in a disabled
 * state because it communicates an error, and error messages should not be visible when the component is disabled.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The negative variant is used to convey error messages and can have an optional icon.
 * 
 * In most cases, help text is used with a component that already displays an icon communicating an error (e.g., 
 * [text field](?path=/docs/components-text-field--docs),
 * [picker](?path=/docs/components-picker--docs), 
 * [combo box](?path=/docs/components-combobox--docs#standard---invalid)),
 * so it’s not necessary to include another icon. In other cases, help text that is used with a component that does not display an icon
 * communicating an error (e.g., [field group](?path=/docs/components-field-group--docs#invalid)) needs to display an icon.
 */
export const Negative = NegativeTemplate.bind({});
Negative.args = {
	variant: "negative",
};
Negative.tags = ["!dev"];
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the text is too long for the available horizontal space, it wraps to form another line.
 */
export const TextOverflow = VariantsTemplate.bind({});
TextOverflow.args = {
	variant: "negative",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
TextOverflow.tags = ["!dev"];
TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};
