import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { FieldLabelGroup } from "./template";

/**
 * The field label component is used along with inputs to display a label for that input.
 */
export default {
	title: "Field label",
	component: "FieldLabel",
	argTypes: {
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isRequired: {
			name: "Required",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
