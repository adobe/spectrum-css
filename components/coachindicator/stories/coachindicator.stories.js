import { CoachIndicatorGroup } from "./template";

/**
 * The coach indicator component can be used to bring added attention to specific parts of a page.
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
};

export const Default = CoachIndicatorGroup.bind({});
Default.args = {};
Default.parameters = {
	chromatic: {
		prefersReducedMotion: "reduce",
		pauseAnimationAtEnd: true,
	},
};

export const WithForcedColors = CoachIndicatorGroup.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	// Sets the forced-colors media feature for a specific story.
	chromatic: {
		forcedColors: "active",
		prefersReducedMotion: "reduce"
	},
};
WithForcedColors.args = {};
