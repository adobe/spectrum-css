import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isQuiet, staticColor } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { CoachIndicatorGroup } from "./coachindicator.test.js";
import { Template } from "./template.js";

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
		staticColor,
	},
	args: {
		rootClass: "spectrum-CoachIndicator",
		isQuiet: false,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=48600-896",
		},
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
	},
};
Default.tags = ["!autodocs"];

export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.storyName = "Quiet";
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
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
StaticWhite.storyName = "Static white";
StaticWhite.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * When an indicator needs to be placed on top of a visual, use the static black option. Static black does not change values depending upon the color theme.
*/
export const StaticBlack = Template.bind({});
StaticBlack.args = {
	staticColor: "black"
};
StaticBlack.tags = ["!dev"];
StaticBlack.storyName = "Static black";
StaticBlack.parameters = {
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
