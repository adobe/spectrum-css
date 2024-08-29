import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { SwitchGroup } from "./switch.test.js";
import { Template } from "./template.js";

/**
 * A switch is used to turn an option on or off. Switches allow users to select the state of a single option at a time.
 */
export default {
	title: "Switch",
	component: "Switch",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isEmphasized,
		isDisabled,
		isChecked,
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-Switch",
		isDisabled: false,
		isChecked: false,
		isEmphasized: false,
		label: "Switch label",
		size: "m",
	},
	componentVersion: version,
};

export const Default = SwitchGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = SwitchGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Emphasized = Template.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
	label: "Switch label that is so long it wraps to the next line",
	customStyles: {"max-width": "250px"}
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Checked = Template.bind({});
Checked.tags = ["!dev"];
Checked.args = {
	isChecked: true
};
Checked.parameters = {
	chromatic: { disableSnapshot: true }
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};
