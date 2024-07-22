import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template, SteplistGroup } from "./template";

/**
 * A steplist can communicate the progress of a task or workflow. It can help users understand where they are in a process and what they need to do next.
 * 
 * All variants of steplist can be static or interactive.
 */
export default {
	title: "Steplist",
	component: "Steplist",
	argTypes: {
		isSmall: {
			name: "Small",
			description:
				"Use a smaller steplist that does not have visible labels or tooltips.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isInteractive: {
			name: "Interactive",
			description:
				"Whether the steplist items should be interactive. When true, creates a link around the marker and label.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		withTooltip: {
			name: "With Tooltip",
			description:
				"Use a Tooltip component for each steplist item, instead of label text. Tooltips do not display when \"Small\" is true.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		items: {
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-Steplist",
		isSmall: false,
		isInteractive: false,
		withTooltip: false,
		items: [
			{
				label: "Step 1",
				isComplete: true,
			},
			{
				label: "Step 2",
				isComplete: true,
			},
			{
				label: "Step 3",
				isSelected: true,
			},
			{
				label: "Step 4",
			},
		],
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

export const Standard = SteplistGroup.bind({});
Standard.tags = ["autodocs", "!dev"];
Standard.storyName = "Default";
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A steplist with labels.
 */
export const WithLabel = SteplistGroup.bind({});
WithLabel.args = {};
WithLabel.tags = ["!dev"];
WithLabel.storyName = "With label";

/**
 * A steplist with tooltips.
 */
export const WithTooltip = SteplistGroup.bind({});
WithTooltip.args = {
	...Default.args,
	withTooltip: true,
};
WithTooltip.tags = ["autodocs","!dev"];
WithTooltip.storyName = "With tooltip";

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
