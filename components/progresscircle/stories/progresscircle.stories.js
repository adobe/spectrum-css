import { html } from "lit";

import { Template } from "./template";

/**
 * Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
 */
export default {
	title: "Components/Progress circle",
	component: "ProgressCircle",
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
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				disable: true,
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ProgressCircle",
		size: "m",
		isIndeterminate: false,
		staticColor: undefined,
	},
	parameters: {
		actions: {
			handles: [],
		},
	},
};

const ProgressCircleGroup = (args) => html`
	${window.isChromatic() ? html`
		${Template(args)}
		${Template({
			...args,
			isIndeterminate: true,
		})}
	` : Template(args)}
`;

export const Default = ProgressCircleGroup.bind({});
Default.args = {};

export const StaticWhite = ProgressCircleGroup.bind({});
StaticWhite.args = {
	staticColor: "white",
};
