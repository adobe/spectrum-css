import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * A logic button displays an operator within a boolean logic sequence.
 */
export default {
	title: "Logic button",
	component: "LogicButton",
	argTypes: {
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["and", "or"],
			control: "inline-radio",
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
		rootClass: "spectrum-LogicButton",
		variant: "and",
		isDisabled: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Or = Template.bind({});
Or.args = {
	variant: "or"
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
