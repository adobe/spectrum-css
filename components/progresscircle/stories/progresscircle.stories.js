import { html } from "lit";

import { withSizingWrapper } from "@spectrum-css/preview/decorator";
import { Template } from "./template";

/**
 * Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
 */
export default {
	title: "Progress circle",
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
};

// Story specific templates
const ProgressCircleGroup = (args) => html`
	${window.isChromatic() ? html`
		${Template(args)}
		${Template({
			...args,
			isIndeterminate: true,
		})}
	` : Template(args)}
`;

// Stories
export const Default = ProgressCircleGroup.bind({});
Default.args = {};

export const Sizing = ProgressCircleGroup.bind({});
Sizing.args = {};
Sizing.decorators = [withSizingWrapper];

/**
 * The indeterminate progress circle displays a repeating animation for the inner fill.
 */
export const Indeterminate = Template.bind({});
Indeterminate.args = {
	isIndeterminate: true,
};
Indeterminate.tags = ["docs-only"];
Indeterminate.decorators = [withSizingWrapper];
Indeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhite = ProgressCircleGroup.bind({});
StaticWhite.storyName = "Static white, indeterminate";
StaticWhite.args = {
	staticColor: "white",
	isIndeterminate: true,
};
StaticWhite.decorators = [withSizingWrapper];
StaticWhite.tags = ["docs-only"];
