import { Template } from "./template";

import { isDisabled, isRequired } from "@spectrum-css/preview/types/states.js";

/** The Field label component is used along with inputs to display a label for that input. */
export default {
	title: "Components/Field label",
	component: "Fieldlabel",
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
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("fieldlabel")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	label: "Label",
};

export const RightAligned = Template.bind({});
RightAligned.args = {
	label: "Label",
	alignment: "right",
	customStyle: { width: "72px" },
};

export const Required = Template.bind({});
Required.args = {
	label: "Label example",
	alignment: "left",
	isRequired: true,
	customStyles: { width: "200px" },
};

export const WrappingAndRequired = Template.bind({});
WrappingAndRequired.args = {
	label: "Label example with longer text that will wrap to the next line. And with an asterisk that marks it as required.",
	alignment: "left",
	isRequired: true,
	customStyles: { width: "200px" },
};
