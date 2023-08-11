// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Progress bar",
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
			options: ["s", "m", "l", "xl"],
			control: "select",
			if: { arg: "isMeter", truthy: false },
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
		value: {
			name: "Percent value for fill",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
			if: { arg: "indeterminate", truthy: false },
		},
		isMeter: {
			name: "Meter component",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
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
			if: { arg: "isMeter", truthy: true },
		},
		meterSize: {
			name: "Meter size",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "l"],
			control: "select",
			if: { arg: "isMeter", truthy: true },
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "m",
		labelPosition: "top",
		isMeter: false,
		label: "Loading",
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
Default.args = {};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
	customWidth: "500px",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	indeterminate: "indeterminate",
};

export const StaticWhite = Template.bind({});
StaticWhite.args = {
	backgroundColor: "rgb(15, 121, 125)",
	staticWhite: "staticWhite",
};

export const Meter = Template.bind({});
Meter.args = {
	isMeter: true,
	label: "Storage Space",
	meterFill: "positive",
	meterSize: "s",
};

