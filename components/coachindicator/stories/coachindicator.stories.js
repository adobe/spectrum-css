import { CoachIndicatorGroup } from "./template";
import { html } from "lit";
import { Template } from "./template";

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
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
	chromatic: {
		prefersReducedMotion: "reduce",
		pauseAnimationAtEnd: true,
	},
};
Default.tags = ["!autodocs"];

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

const AllVariantsGroup = (args) => html`
	<div style="display: flex; flex-direction: column; padding: 16px">
		${Template({
				...args,
				variant: "default"
			})}
		${Template({
				...args,
				variant: "dark"
			})}
		${Template({
				...args,
				variant: "light"
				})}
	</div>
`;

/*
 * Stories for the MDX "Docs" only.
 * "storyName" refers to the display name/heading for a component
 */
export const DefaultVariants = AllVariantsGroup.bind({});
DefaultVariants.tags = ["docs-only"];
DefaultVariants.storyName = "Standard";
DefaultVariants.parameters = {
	chromatic: { disableSnapshot: true }
};

export const QuietVariants = AllVariantsGroup.bind({});
QuietVariants.tags = ["docs-only"];
QuietVariants.storyName = "Quiet";
QuietVariants.args = {
	isQuiet: true,
};
QuietVariants.parameters = {
	chromatic: { disableSnapshot: true }
};
