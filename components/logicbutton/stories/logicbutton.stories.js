import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { LogicButtonGroup } from "./logicbutton.test.js";
import { Template, VariantGroup } from "./template.js";

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
		isDisabled,
	},
	args: {
		rootClass: "spectrum-LogicButton",
		variant: "and",
		isDisabled: false,
	},
	parameters: {
		packageJson,
		metadata,
	},
};

/**
 * The default logic button is the And variant.
 */
export const Default = LogicButtonGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Or = Template.bind({});
Or.tags = ["!dev"];
Or.args = {
	variant: "or",
};
Or.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Disabled = VariantGroup.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = LogicButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
