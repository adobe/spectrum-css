import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { MeterGroup } from "./meter.test.js";
import { default as ProgressBar } from "./progressbar.stories";

/**
 * The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.
 */
export default {
	title: "Meter",
	component: "ProgressBar",
	argTypes: {
		...ProgressBar.argTypes,
		size: size(["s", "l"]),
		fill: {
			name: "Fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["notice", "positive", "negative"],
			control: "select",
		},
	},
	args: {
		...ProgressBar.args,
		size: "s",
	},
	parameters: {
		packageJson: pkgJson,
	},
};

export const Default = MeterGroup.bind({});
Default.args = {
	value: 50,
	label: "Storage space",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = MeterGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const StaticWhite = Default.bind({});
StaticWhite.tags = ["!autodocs", "!dev"];
StaticWhite.args = {
	staticColor: "white",
	label: "Loading your fonts, images, and icons",
	value: 50,
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};
