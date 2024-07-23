import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { LogicButtonGroup } from "./logicbutton.test.js";
import { Template } from "./template.js";

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

export const Default = LogicButtonGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Or = Template.bind({});
Or.tags = ["autodocs", "!dev"];
Or.args = {
	variant: "or"
};
Or.parameters = {
	chromatic: { disable: true }
};

export const Disabled = Template.bind({});
Disabled.tags = ["autodocs", "!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disable: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = LogicButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
