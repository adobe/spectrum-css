import { Template } from "./form-template";

export default {
	title: "Components/Form",
	description: "The Form component is used for aligning multiple inputs and field groups within a form.",
	component: "Form",
	argTypes: {
		labelsAbove: {
			name: "Labels Above",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Form",
		labelsAbove: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("fieldlabel")
				? "migrated"
				: undefined,
		},
	},
};

export const Standard = Template.bind({});
Standard.args = {
	labelsAbove: false,
};

export const LabelsAbove = Template.bind({});
LabelsAbove.args = {
	labelsAbove: true,
};