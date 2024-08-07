import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import {
	AllVariantsGroup,
	CoachIndicatorGroup
} from "./template";

/**
 * The coach indicator component can be used to bring added attention to specific parts of a page.
 * 
 * Coach indicator is primarily used along with the [Coach mark](/docs/components-coach-mark--docs) component.
 */
export default {
	title: "Coach indicator",
	component: "CoachIndicator",
	argTypes: {
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["dark", "light"],
			control: "select"
		},
	},
	args: {
		rootClass: "spectrum-CoachIndicator",
		isQuiet: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = CoachIndicatorGroup.bind({});
Default.args = {};
Default.parameters = {
	chromatic: {
		prefersReducedMotion: "reduce",
		pauseAnimationAtEnd: true,
	},
};
Default.tags = ["!autodocs"];

export const DefaultVariants = AllVariantsGroup.bind({});
DefaultVariants.tags = ["autodocs", "!dev"];
DefaultVariants.storyName = "Default";
DefaultVariants.parameters = {
	chromatic: { disableSnapshot: true }
};

export const QuietVariants = AllVariantsGroup.bind({});
QuietVariants.tags = ["autodocs", "!dev"];
QuietVariants.storyName = "Quiet";
QuietVariants.args = {
	isQuiet: true,
};
QuietVariants.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
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
