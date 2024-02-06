// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Table",
	description:
		"A table is used to create a container for displaying information. It allows users to sort, compare, and take action on large amounts of data.",
	component: "Table",
	argTypes: {
		size: {
			name: "Size",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		density: {
			name: "Density",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["standard", "compact", "spacious"],
			control: "select",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		useDivs: {
			name: "Use Divs for Markup",
			description:
				"Use 'div' elements for all of the table markup instead of the 'table' element.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		useScroller: {
			name: "Scrollable Body and Fixed Column Headers",
			description:
				"Uses a wrapper element that can have a fixed height and allows scrolling, along with column headers that are fixed to the top on scroll.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		showThumbnails: {
			name: "Show Thumbnails in Content",
			description:
				"Uses the Thumbnail component at the start of the first column's cells.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDropTarget: {
			name: "Dropzone (Drop Target)",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		rowItems: {
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-Table",
		size: "m",
		density: "standard",
		isQuiet: false,
		isEmphasized: true,
		useDivs: false,
		showThumbnails: false,
		isDropTarget: false,
		useScroller: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("table")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	rowItems: [
		{
			cellContent: "Row Item Alpha",
		},
		{
			cellContent: "Row Item Bravo",
		},
		{
			cellContent: "Row Item Charlie",
		},
		{
			cellContent: "Row Item Delta",
		},
		{
			cellContent: "Row Item Echo",
		},
	],
};

export const SummaryAndSelected = Template.bind({});
SummaryAndSelected.parameters = {
	docs: {
		description: {
			story:
				"An example showing both the optional summary row, and a row marked as selected.",
		},
	},
};
SummaryAndSelected.args = {
	rowItems: [
		{
			cellContent: "Table Row Alpha",
		},
		{
			cellContent: "Table Row Bravo",
		},
		{
			cellContent: "Table Row Charlie",
			isSelected: true,
		},
		{
			cellContent: "Table Row Delta",
		},
		{
			cellContent: "Summary Row",
			isSummaryRow: true,
		},
	],
};

export const MultiSelect = Template.bind({});
MultiSelect.storyName = "Multi-select";
MultiSelect.args = {
	rowItems: [
		{
			cellContent: ["Table Row Alpha", "Alpha", "Table Row Alpha"],
			showCheckbox: true,
		},
		{
			cellContent: [
				"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Bravo",
				"Table Row Bravo. Lorem ipsum dolor sit amet.",
			],
			showCheckbox: true,
			isSelected: true,
		},
		{
			cellContent: "Table Row Charlie",
			showCheckbox: true,
			isSelected: true,
		},
		{
			cellContent: "Table Row Delta",
			showCheckbox: true,
		},
		{
			cellContent: "Echo",
			showCheckbox: true,
		},
		{
			cellContent: "Foxtrot",
			showCheckbox: true,
		},
	],
};

export const Scrollable = Template.bind({});
Scrollable.parameters = {
	docs: {
		description: {
			story:
				"An example showing the use of the scrollable wrapper element with table markup. This allows a fixed height and scrolling, along with column headers that are fixed to the top on scroll.",
		},
	},
};
Scrollable.args = {
	useScroller: true,
	rowItems: [
		{
			cellContent: "Table Row Alpha",
		},
		{
			cellContent: "Table Row Bravo",
		},
		{
			cellContent: "Table Row Charlie",
			isSelected: true,
		},
		{
			cellContent: "Table Row Delta",
		},
		{
			cellContent: "Table Row Echo",
		},
		{
			cellContent: "Table Row Foxtrot",
		},
		{
			cellContent: "Summary Row",
			isSummaryRow: true,
		},
	],
};

export const DivsScrollable = Template.bind({});
DivsScrollable.parameters = {
	docs: {
		description: {
			story:
				"A table can also be made up of divs if needed. This uses both the div markup, and the scrollable wrapper.",
		},
	},
};
DivsScrollable.storyName = "Divs and Scrollable";
DivsScrollable.args = {
	useDivs: true,
	useScroller: true,
	rowItems: [
		{
			cellContent: ["Table Row Alpha", "Alpha", "Table Row Alpha"],
			showCheckbox: true,
		},
		{
			cellContent: [
				"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Bravo",
				"Table Row Bravo. Lorem ipsum dolor sit amet.",
			],
			showCheckbox: true,
			isSelected: true,
		},
		{
			cellContent: "Table Row Charlie",
			showCheckbox: true,
			isSelected: true,
		},
		{
			cellContent: "Table Row Delta",
			showCheckbox: true,
		},
		{
			cellContent: "Echo",
			showCheckbox: true,
		},
		{
			cellContent: "Foxtrot",
			showCheckbox: true,
		},
	],
};

export const SectionHeader = Template.bind({});
SectionHeader.args = {
	rowItems: [
		{
			cellContent: "Section Header",
			isSectionHeader: true,
		},
		{
			cellContent: "Table Row Alpha",
		},
		{
			cellContent: "Table Row Bravo",
		},
		{
			cellContent: "Table Row Charlie",
		},
		{
			cellContent: "Another Section Header",
			isSectionHeader: true,
		},
		{
			cellContent: "Table Row Delta",
		},
		{
			cellContent: "Table Row Echo",
		},
	],
};

export const Collapsible = Template.bind({});
Collapsible.args = {
	rowItems: [
		{
			cellContent: "Table Row Alpha",
			isCollapsible: true,
			isExpanded: true,
			tier: 0,
			ariaControls: "table-cr-bravo table-cr-delta",
			id: "table-cr-alpha",
		},
		{
			cellContent:
				"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
		},
		{
			cellContent: [
				"Table Row Charlie",
				"Default Not Visible",
				"Default Not Visible",
			],
			isCollapsible: true,
			isHidden: true,
			tier: 2,
			id: "table-cr-charlie",
		},
		{
			cellContent: "Table Row Delta",
			isSelected: true,
			isCollapsible: true,
			isExpanded: true,
			tier: 1,
			ariaControls: "table-cr-echo table-cr-foxtrot",
			id: "table-cr-delta",
		},
		{
			cellContent: "Table Row Echo",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-echo",
		},
		{
			cellContent: "Table Row Foxtrot",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-foxtrot",
		},
		{
			cellContent: "Summary Row",
			isSummaryRow: true,
		},
	],
};

export const CollapsibleMultiSelect = Template.bind({});
CollapsibleMultiSelect.storyName = "Collapsible Multi-select";
CollapsibleMultiSelect.args = {
	rowItems: [
		{
			showCheckbox: true,
			cellContent: "Table Row Alpha",
			isCollapsible: true,
			isExpanded: true,
			tier: 0,
			ariaControls: "table-cr-bravo table-cr-delta",
			id: "table-cr-alpha",
		},
		{
			showCheckbox: true,
			cellContent:
				"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
		},
		{
			showCheckbox: true,
			cellContent: [
				"Table Row Charlie",
				"Default Not Visible",
				"Default Not Visible",
			],
			isCollapsible: true,
			isHidden: true,
			tier: 2,
			id: "table-cr-charlie",
		},
		{
			showCheckbox: true,
			cellContent: "Table Row Delta",
			isSelected: true,
			isCollapsible: true,
			isExpanded: true,
			tier: 1,
			ariaControls: "table-cr-echo table-cr-foxtrot",
			id: "table-cr-delta",
		},
		{
			showCheckbox: true,
			cellContent: "Table Row Echo",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-echo",
		},
		{
			showCheckbox: true,
			cellContent: "Table Row Foxtrot",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-foxtrot",
		},
		{
			showCheckbox: true,
			cellContent: "Summary Row",
			isSummaryRow: true,
		},
	],
};

export const Thumbnails = Template.bind({});
Thumbnails.args = {
	showThumbnails: true,
	rowItems: [
		{
			cellContent: ["Table Row Alpha", "Test", "2"],
		},
		{
			cellContent: ["Table Row Bravo", "Test", "28"],
		},
		{
			cellContent: [
				"Table Row Charlie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
				"Test",
				"23",
			],
		},
		{
			cellContent: ["Table Row Delta", "Test", "7"],
		},
	],
};

export const ThumbnailsCollapsible = Template.bind({});
ThumbnailsCollapsible.args = {
	showThumbnails: true,
	rowItems: [
		{
			cellContent: "Table Row Alpha",
			isCollapsible: true,
			isExpanded: true,
			tier: 0,
			ariaControls: "table-cr-bravo",
			id: "table-cr-alpha",
		},
		{
			cellContent:
				"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
		},
		{
			cellContent: "Table Row Charlie",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-charlie",
		},
		{
			cellContent: "Table Row Delta",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-delta",
		},
		{
			cellContent: "Summary Row",
			isSummaryRow: true,
		},
	],
};

export const RowDropzone = Template.bind({});
RowDropzone.parameters = {
	docs: {
		description: {
			story:
				"In addition to the overall table, individual rows can be designated as a drop target. Only one dropzone row should show at a time, but this example sets multiple at different parts of the table to test that they all display the same.",
		},
	},
};
RowDropzone.args = {
	rowItems: [
		{
			cellContent: "Table Row Alpha",
			isDropTarget: true,
		},
		{
			cellContent: "Table Row Bravo",
		},
		{
			cellContent: "Table Row Charlie",
			isDropTarget: true,
		},
		{
			cellContent: "Table Row Delta",
		},
		{
			cellContent: "Table Row Echo",
		},
		{
			cellContent: "Table Row Foxtrot",
			isDropTarget: true,
		},
	],
};
