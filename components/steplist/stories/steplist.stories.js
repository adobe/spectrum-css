import { Template } from "./template";

export default {
	title: "Components/Steplist",
	description:
		"A steplist can communicate the progress of a task or workflow. It can help users understand where they are in a process and what they need to do next.",
	component: "StepList",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
				'Use a Tooltip component for each steplist item, instead of label text. Tooltips do not display when "Small" is true.',
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
		customStorybookStyles: {
			display: undefined,
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("steplist")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
