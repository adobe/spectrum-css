import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isQuiet } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { CoachIndicatorGroup } from "./coachindicator.test.js";
import { AllVariantsCoachIndicatorGroup } from "./template.js";

/**
 * The coach indicator component can be used to bring added attention to specific parts of a page.
 *
 * Coach indicator is primarily used along with the [coach mark](/docs/components-coach-mark--docs) component.
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
	},
	args: {
		rootClass: "spectrum-CoachIndicator",
		isQuiet: false,
		variant: "default",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=48600-896",
		},
		packageJson: pkgJson,
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
