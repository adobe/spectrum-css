import { disableDefaultModes } from "@spectrum-css/preview/modes";
import pkgJson from "../package.json";
import { SteplistGroup } from "./steplist.test.js";
import { DocsSteplistGroup } from "./template";

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
		packageJson: pkgJson,
	},
};

export const Default = SteplistGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

/**
 * A steplist with labels.
 */
export const Standard = DocsSteplistGroup.bind({});
Standard.tags = ["!dev"];
Standard.storyName = "Default";
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A steplist without labels. This variant does not have visible labels or tooltips.
 */
export const Small = DocsSteplistGroup.bind({});
Small.args = {
	isSmall: true,
};
Small.tags = ["!dev"];
Small.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A steplist with tooltips.
 */
export const WithTooltip = DocsSteplistGroup.bind({});
WithTooltip.args = {
	...Default.args,
	withTooltip: true,
};
WithTooltip.tags = ["!dev"];
WithTooltip.storyName = "With tooltip";
WithTooltip.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = SteplistGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
