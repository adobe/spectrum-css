import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isQuiet, staticColor } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { CoachIndicatorGroup } from "./coachindicator.test.js";
import { AllVariantsCoachIndicatorGroup, Template } from "./template.js";

/**
 * The coach indicator component can be used to bring added attention to specific parts of a page.
 *
 * Coach indicator is primarily used along with the [coach mark](/docs/components-coach-mark--docs) component.
 *
 * **Deprecation notice for S2**: The "dark" variant will be deprecated entirely, and "light" variant will be deprecated in favor of "static white".
 */
export default {
	title: "Coach indicator",
	component: "CoachIndicator",
	argTypes: {
		isQuiet,
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["default", "dark", "light"],
			control: "select"
		},
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-CoachIndicator",
		isQuiet: false,
		variant: "default",
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Default = CoachIndicatorGroup.bind({});
Default.args = {};
Default.parameters = {
	chromatic: {
		prefersReducedMotion: "reduce",
		pauseAnimationAtEnd: true,
		modes: {
			// Skips the dark mode/RTL b/c no changes are made to the component
			"Dark | RTL": {
				disable: true,
			},
		},
	},
};
Default.tags = ["!autodocs"];

export const DefaultVariants = AllVariantsCoachIndicatorGroup.bind({});
DefaultVariants.tags = ["!dev"];
DefaultVariants.storyName = "Default";
DefaultVariants.parameters = {
	chromatic: { disableSnapshot: true }
};

export const QuietVariants = AllVariantsCoachIndicatorGroup.bind({});
QuietVariants.tags = ["!dev"];
QuietVariants.storyName = "Quiet";
QuietVariants.args = {
	isQuiet: true,
};
QuietVariants.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * When an indicator needs to be placed on top of a visual, use the static white option. Static white does not change values depending upon the color theme.
*/
export const StaticWhite = Template.bind({});
StaticWhite.args = {
	staticColor: "white"
};
StaticWhite.tags = ["!dev"];
StaticWhite.storyName = "Static White";
StaticWhite.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = CoachIndicatorGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	// Sets the forced-colors media feature for a specific story.
	chromatic: {
		forcedColors: "active",
		prefersReducedMotion: "reduce",
		pauseAnimationAtEnd: true,
		modes: disableDefaultModes,
	},
};
