import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { MeterGroup } from "./meter.template.js";
import { default as ProgressBar } from "./progressbar.stories.js";

/**
 * The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.
 */
export default {
	title: "Meter",
	component: "ProgressBar",
	argTypes: {
		...ProgressBar.argTypes,
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
	args: ProgressBar.args,
};

export const Default = MeterGroup.bind({});
Default.args = {
	value: 50,
	size: "s",
	label: "Storage space",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["test", "!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
