import { withSizingWrapper } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { ProgressCircleGroup, Template } from "./template";

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
	parameters: {
		componentVersion: version,
	},
};

export const Default = ProgressCircleGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};

export const StaticWhite = Default.bind({});
StaticWhite.tags = ["!autodocs", "!dev"];
StaticWhite.storyName = "Static white";
StaticWhite.args = {
	staticColor: "white",
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
};

// ********* DOCS ONLY ********* //
export const Sizing = Template.bind({});
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.decorators = [withSizingWrapper];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The indeterminate progress circle displays a repeating animation for the inner fill.
 */
export const Indeterminate = Template.bind({});
Indeterminate.args = {
	isIndeterminate: true,
};
Indeterminate.tags = ["!dev"];
Indeterminate.decorators = [withSizingWrapper];
Indeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteDocs = Default.bind({});
StaticWhiteDocs.tags = ["!dev"];
StaticWhiteDocs.storyName = "Static white, indeterminate";
StaticWhiteDocs.args = {
	staticColor: "white",
	isIndeterminate: true,
};
StaticWhiteDocs.decorators = [withSizingWrapper];
StaticWhiteDocs.parameters = {
	chromatic: { disableSnapshot: true },
};
