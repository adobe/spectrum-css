// Import the component markup template
import { Template } from "./metertemplate";

export default {
	title: "Components/Meter",
	description:
		"The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",
	component: "ProgressBar",
	argTypes: {
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		value: {
			name: "Percent value for fill",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
		},
		meterFill: {
			name: "Meter fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["notice", "positive", "negative", "default"],
			control: "select",
		},
		size: {
			name: "Meter size",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "l"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		label: "Storage Space",
		size: "s",
		value: 50,
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
	meterFill: "default",
};

export const Large = Template.bind({});
Large.args = {
	meterFill: "default",
	size: "l",
};


export const Postive = Template.bind({});
Postive.args = {
	meterFill: "positive",
};

export const Negative = Template.bind({});
Negative.args = {
	meterFill: "negative",
};

export const Notice = Template.bind({});
Notice.args = {
	meterFill: "notice",
};