import { Template } from "./template";

export default {
	title: "Components/Progress circle",
	description:
		"Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",
	component: "ProgressCircle",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		isIndeterminate: {
			name: "Indeterminate",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		overBackground: {
			name: "Over Background",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ProgressCircle",
		size: "m",
		isIndeterminate: false,
		overBackground: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("progresscircle")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
