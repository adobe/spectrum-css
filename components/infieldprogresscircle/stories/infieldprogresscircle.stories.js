import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import { default as ProgressCircle } from "@spectrum-css/progresscircle/stories/progresscircle.stories.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { InfieldProgressCircleGroup } from "./infieldprogresscircle.test.js";
import { Template } from "./template.js";

/**
 * In-field progress circles are used in t-shirt size components such as [buttons](/docs/components-button--docs), [combo boxes](/docs/components-combobox--docs), and [pickers](/docs/components-picker--docs). The in-field progress circle can be used in place of an icon or in tight spaces when space is limited both vertically and horizontally.
*/

export default {
	title: "In-field progress circle",
	component: "InfieldProgressCircle",
	argTypes: {
		...ProgressCircle.argTypes,
		size: size(["s", "m", "l", "xl"]),
	},
	args: {
		...ProgressCircle.args,
		rootClass: "spectrum-InfieldProgressCircle",
	},
	parameters: {
		...ProgressCircle.parameters,
		design: {
			type: "figma",
			url: "https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-token-specs?node-id=14970-6050",
		},
		packageJson,
		metadata,
	}
};

export const Default = InfieldProgressCircleGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = InfieldProgressCircleGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};

// ********* DOCS ONLY ********* //

export const Sizing = (args, context) => Sizes({
	Template,
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
	Template,
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

export const StaticBlackDeterminate = Sizing.bind({});
StaticBlackDeterminate.tags = ["!dev"];
StaticBlackDeterminate.storyName = "Static black, default";
StaticBlackDeterminate.args = {
	staticColor: "black",
};
StaticBlackDeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackIndeterminate = Sizing.bind({});
StaticBlackIndeterminate.tags = ["!dev"];
StaticBlackIndeterminate.storyName = "Static black, indeterminate";
StaticBlackIndeterminate.args = {
	staticColor: "black",
	isIndeterminate: true,
};
StaticBlackIndeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};
