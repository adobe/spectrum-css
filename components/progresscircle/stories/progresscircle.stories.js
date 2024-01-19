import isChromatic from "chromatic/isChromatic";
import { html } from "lit";
import { Template } from "./template";

export default {
	title: "Components/Progress circle",
	description:
		"Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",
	component: "Progresscircle",
	argTypes: {
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
				: undefined,
		},
	},
};

const chromaticKitchenSink = (args) => html`
	${Template(args)}
	${Template({
		...args,
		isIndeterminate: true,
	})}
	${Template({
		...args,
		overBackground: true,
	})}
	${Template({
		...args,
		isIndeterminate: true,
		overBackground: true,
	})}
`;

export const Default = (args) => isChromatic() ? chromaticKitchenSink(args) : Template(args);
Default.args = {};
