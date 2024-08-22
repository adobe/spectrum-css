import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isRequired, size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { FieldLabelGroup } from "./fieldlabel.test.js";

/**
 * The field label component is used along with inputs to display a label for that input.
 */
export default {
	title: "Field label",
	component: "FieldLabel",
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
		alignment: {
			name: "Alignment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["left", "right"],
			control: "select",
		},
		isDisabled,
		isRequired,
	},
	args: {
		rootClass: "spectrum-FieldLabel",
		size: "m",
		alignment: "left",
		isDisabled: false,
		isRequired: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = FieldLabelGroup.bind({});
Default.args = {
	label: "Label",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = FieldLabelGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
