import { Template } from "./template";

/**
 * The progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 */
export default {
	title: "Components/Progress bar",
	component: "ProgressBar",
	argTypes: {
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
			name: "Label position",
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
			name: "Percent filled",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
			if: { arg: "indeterminate", truthy: false },
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "m",
		labelPosition: "top",
		label: "Loading",
		value: 50,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
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
	/* Force dark mode to make typography readable */
	color: "dark",
	staticColor: "white",
	label: "Loading your fonts, images, and icons"
};
