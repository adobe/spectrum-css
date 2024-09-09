import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isIndeterminate, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ProgressCircleGroup } from "./progresscircle.test.js";
import { Template } from "./template";

/**
 * Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
 */
export default {
	title: "Progress circle",
	component: "ProgressCircle",
	argTypes: {
		size: size(["s", "m", "l"]),
		isIndeterminate,
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-ProgressCircle",
		size: "m",
		isIndeterminate: false,
		staticColor: undefined,
	},
	parameters: {
		packageJson: pkgJson,
	},
};

export const Default = ProgressCircleGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = ProgressCircleGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};

export const StaticWhite = ProgressCircleGroup.bind({});
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

export const Sizing = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The indeterminate progress circle displays a repeating animation for the inner fill.
 */
export const Indeterminate = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Indeterminate.args = {
	isIndeterminate: true,
};
Indeterminate.tags = ["!dev"];
Indeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteDeterminate = Sizing.bind({});
StaticWhiteDeterminate.tags = ["!dev"];
StaticWhiteDeterminate.storyName = "Static white, default";
StaticWhiteDeterminate.args = {
	staticColor: "white",
	isIndeterminate: false,
};
StaticWhiteDeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteIndeterminate = Sizing.bind({});
StaticWhiteIndeterminate.tags = ["!dev"];
StaticWhiteIndeterminate.storyName = "Static white, indeterminate";
StaticWhiteIndeterminate.args = {
	staticColor: "white",
	isIndeterminate: true,
};
StaticWhiteIndeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};