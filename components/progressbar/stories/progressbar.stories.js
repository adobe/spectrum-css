import { Template } from "./template";

export default {
	title: "Components/Progress bar",
	description:
		"The Progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.",
	component: "ProgressBar",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		customWidth: { table: { disable: true } },
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
		staticColor: {
			name: "StaticColor",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "m",
		labelPosition: "top",
		label: "Loading",
		value: 50,
		customStorybookStyles: {
			display: undefined,
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("progressbar")
				? "migrated"
				: "legacy",
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
	staticColor: "white",
	label: "Loading your fonts, images, and icons"
};
