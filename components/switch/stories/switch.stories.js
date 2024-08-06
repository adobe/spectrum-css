import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

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

export const Default = Template.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const Emphasized = Template.bind({});
Emphasized.args = {
	isEmphasized: true,
	label: "Switch label that is so long it wraps to the next line",
	customStyles: {"max-width": "250px"}
};

export const Checked = Template.bind({});
Checked.args = {
	isChecked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};
