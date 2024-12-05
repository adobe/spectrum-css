
import { ProgressCircleGroup, Template } from "./template";

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
			description: "Variants that can be used when the progress circle needs to be placed on top of a colored background or a visual.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
		value: {
			control: {
				type: "range",
				min: 0,
				max: 100
			}
		}
	},
	args: {
		rootClass: "spectrum-ProgressCircle",
		size: "m",
		isIndeterminate: false,
		staticColor: undefined,
		value: 43
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		layout: "centered"
	},
};

export const Default = ProgressCircleGroup.bind({});
Default.args = {};

export const StaticWhiteDeterminate = Template.bind({});
StaticWhiteDeterminate.tags = ["!dev"];
StaticWhiteDeterminate.storyName = "Static white, default";
StaticWhiteDeterminate.args = {
	staticColor: "white",
	isIndeterminate: false,
};
StaticWhiteDeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteIndeterminate = Template.bind({});
StaticWhiteIndeterminate.tags = ["!dev"];
StaticWhiteIndeterminate.storyName = "Static white, indeterminate";
StaticWhiteIndeterminate.args = {
	staticColor: "white",
	isIndeterminate: true,
};
StaticWhiteIndeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackDeterminate = Template.bind({});
StaticBlackDeterminate.tags = ["!dev"];
StaticBlackDeterminate.storyName = "Static black, default";
StaticBlackDeterminate.args = {
	staticColor: "black",
	isIndeterminate: false,
};
StaticBlackDeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackIndeterminate = Template.bind({});
StaticBlackIndeterminate.tags = ["!dev"];
StaticBlackIndeterminate.storyName = "Static black, indeterminate";
StaticBlackIndeterminate.args = {
	staticColor: "black",
	isIndeterminate: true,
};
StaticBlackIndeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};