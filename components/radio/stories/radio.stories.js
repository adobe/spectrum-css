import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, isReadOnly, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { RadioGroup } from "./radio.test.js";

/**
 * A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
 */
export default {
	title: "Radio",
	component: "Radio",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		name: {
			name: "Name",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
		isEmphasized,
		isChecked,
		isDisabled,
		isReadOnly,
	},
	args: {
		rootClass: "spectrum-Radio",
		size: "m",
		label: "Label",
		isEmphasized: false,
		isChecked: false,
		isDisabled: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"radio\"]"],

		},
		packageJson: pkgJson,
	},
};

export const Default = RadioGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = RadioGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
