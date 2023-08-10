// Import the component markup template
import { Template } from "./metertemplate";

export default {
	title: "Components/Meter",
	description:
		"The Progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.",
	component: "ProgressBar",
	argTypes: {
		customWidth: { table: { disable: true } },
		staticWhite: { table: { disable: true } },
		indeterminate: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s","l"],
			control: "select",
		},
		labelPosition: {
			name: "Label Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		color: {
			name: "Color",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["positive", "notice", "negative", "default"],
			control: "select",
		}
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "s",
		labelPosition: "top",
		label: "Storage",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("progressbar")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	color: "default",
};

export const Negative = Template.bind({});
Negative.args = {
	color: "negative",
};

export const Positive = Template.bind({});
Positive.args = {
	color: "positive",
};

export const Notice = Template.bind({});
Notice.args = {
	color: "notice",
};





