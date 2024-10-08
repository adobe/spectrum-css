import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { FillGroup, Template } from "./meter.template.js";
import { MeterGroup } from "./meter.test.js";
import { default as ProgressBar } from "./progressbar.stories";

/**
 * The meter component is a visual representations of a quantity or an achievement. The progress is determined by user actions, rather than system actions.
 *
 * Meter is implemented using [the progress bar component](/docs/components-progress-bar--docs). Refer to the progress bar documentation for additional details.
 *
 * When determining whether or use a progress bar or meter, remember that a progress bar just indicates how long users must wait for the process to finish- their actions do not affect the progress bar. A meter indicates how much users have completed or how far they are in a continuum.
 */
export default {
	title: "Meter",
	component: "ProgressBar",
	argTypes: {
		...ProgressBar.argTypes,
		size: size(["s", "l"]),
		isIndeterminate: { table: { disable: true } },
		fill: {
			name: "Fill color",
			type: { name: "string" },
			defaultValue: "info",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "info" },
			},
			options: ["info", "notice", "positive", "negative"],
			control: "select",
		},
	},
	args: {
		...ProgressBar.args,
		rootClass: "spectrum-Meter",
		size: "l",
		label: "Storage space",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=33840-90",
		},
		packageJson,
		metadata,
	},
};

/**
 * By default, meters have a blue fill and are the large sizes.
 *
 * Meters should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These meters without a visible label should still include an “aria-label” or “aria-labelledby” in HTML, depending on the context. The label is always placed above the track.
 *
 * When the label is too long for the available horizontal space, it wraps to form another line. The value is always shown in full and never wraps or truncates.
 */
export const Default = MeterGroup.bind({});
Default.args = {
	value: 50,
};

/**
 * Meters come in two sizes: large and small. By default, meters are large. Use the small size when there are multiple meters shown at the same time in a more confined space, such as in tables or cards.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.args = Default.args;
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Meter variants can be used to represent semantic values by switching variants as the value changes, from positive, to notice, and then to negative. This kind of variant switching should be handled appropriately within the context of your product so that accurate expectations are set for users about the semantic meaning.
 *
 * By default, the meter has a informative, blue fill to show the value. This can be used to represent a neutral or non-semantic value. The positive variant has a green fill, representing a positive semantic value. The notice variant has an orange fill, and can be used to warn users about a situation that may need to be addressed soon. The negative variant has a red fill, and can be used to warn users about a critical situation that needs their urgent attention.
*/
export const FillColors = (args, context) => FillGroup({
	variants: ["info", "positive", "negative", "notice"],
	...args,
}, context);
FillColors.storyName = "Fill colors";
FillColors.args = {
	value: 50,
};
FillColors.tags = ["!dev"];
FillColors.parameters = {
	chromatic: { disableSnapshot: true },
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
