import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import {
	Template,
	SizingTemplate,
	BodyTemplate,
} from "./template";

/**
 * A table is used to create a container for displaying information. It allows users to sort, compare, and take action on large amounts of data.
 */
export default {
	title: "Table",
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
		withColumnDividers: {
			name: "Show dividers between columns",
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
	},
	parameters: {
		componentVersion: version,
	},
};

const ExampleRowItems = [
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
];

/**
 * The medium size is the default and recommended option.
 */
export const Default = Template.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Tables come in four different sizes: small, medium, large, and extra-large. The medium size is the default and recommended option.
 */
export const Sizing = SizingTemplate.bind({});
Sizing.tags = ["autodocs", "!dev"];

/**
 * The compact variant decreases the spacing used within the table.
 */
export const Compact = Template.bind({});
Compact.args = {
	...Default.args,
	density: "compact",
};
Compact.tags = ["autodocs", "!dev"];

/**
 * The spacious variant increases the spacing used within the table.
 */
export const Spacious = Template.bind({});
Spacious.args = {
	...Default.args,
	density: "spacious",
};
Spacious.tags = ["autodocs", "!dev"];

/**
 * The standard multi-select table includes a column of checkboxes used for selecting rows.
 */
export const MultiSelect = Template.bind({});
MultiSelect.storyName = "Multi-select";
MultiSelect.args = {
	rowItems: ExampleRowItems,
};
MultiSelect.tags = ["autodocs", "!dev"];

/**
 * Excluding the `.spectrum-Table--emphasized` class will change the style of selected rows.
 */
export const NonEmphasizedMultiSelect = Template.bind({});
NonEmphasizedMultiSelect.storyName = "Non-emphasized multi-select";
NonEmphasizedMultiSelect.args = {
	isEmphasized: false,
	rowItems: ExampleRowItems,
};
NonEmphasizedMultiSelect.tags = ["autodocs", "!dev"];

/**
 * The quiet table has a transparent background and no borders on the left and right.
 */
export const Quiet = Template.bind({});
Quiet.args = {
	...Default.args,
	isQuiet: true,
};
Quiet.tags = ["autodocs", "!dev"];

export const MultiSelectQuiet = Template.bind({});
MultiSelectQuiet.args = {
	...MultiSelect.args,
	isQuiet: true,
};
MultiSelectQuiet.tags = ["autodocs", "!dev"];

/**
 * The standard table can display column dividers by including the `.spectrum-Table-cell--divider` class with `.spectrum-Table-cell`. Use sparingly to group related content.
 */
export const WithColumnDividers = Template.bind({});
WithColumnDividers.args = {
	rowItems: [
		{
			cellContent: "Row Item Alpha",
			hasColumnDividers: true,
		},
		{
			cellContent: "Row Item Bravo",
			hasColumnDividers: true,
		},
		{
			cellContent: "Row Item Charlie",
			hasColumnDividers: true,
		},
		{
			cellContent: "Row Item Delta",
			hasColumnDividers: true,
		},
		{
			cellContent: "Row Item Echo",
			hasColumnDividers: true,
		},
	],
};
WithColumnDividers.tags = ["autodocs", "!dev"];

/**
 * Tables can have a summary row to show totals, at either the top or the bottom of the table. This example shows both the optional summary row, and a row marked as selected.
 */
export const SummaryAndSelected = Template.bind({});
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
SummaryAndSelected.tags = ["autodocs", "!dev"];

/**
 * Tables can style one or more rows as section headers.
 */
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
SectionHeader.tags = ["autodocs", "!dev"];

export const SectionHeaderQuiet = Template.bind({});
SectionHeaderQuiet.args = {
	...SectionHeader.args,
	isQuiet: true,
};
SectionHeaderQuiet.tags = ["autodocs", "!dev"];

/**
 * 
 * A table can be wrapped in a fixed height `div` with the `.spectrum-Table-scroller` class. This allows scrolling of the table body and makes the column headers sticky (i.e. fixed to the top on scroll).
 *
 * When using the scrollable wrapper, the column headers must have a solid background color set. This can be customized to match the parent background with the custom property `--mod-table-header-background-color-scrollable`.
 *
 * To make sure that reverse keyboard link navigation (shift-tab) keeps the whole cell in focus, `--mod-table-current-header-height` should be dynamically updated with JS to match the height of `.spectrum-Table-head`.
 *
 * This example is showing the use of the scrollable wrapper element with table markup. This allows a fixed height and scrolling, along with column headers that are fixed to the top when scrolled.
 */
export const Scrollable = Template.bind({});
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
Scrollable.tags = ["autodocs", "!dev"];

/**
 * A table can also be made up of `div` tags if needed, instead of a `<table>`. This example uses both the div markup, and the scrollable wrapper.
 */
export const DivsScrollable = Template.bind({});
DivsScrollable.storyName = "Divs and scrollable";
DivsScrollable.args = {
	useDivs: true,
	useScroller: true,
	rowItems: ExampleRowItems,
};
DivsScrollable.tags = ["autodocs", "!dev"];

/**
 * In a table with collapsible rows, all child items must have columns that match the parent items. If they don’t, consider using multiple drill-in tables, [Miller columns](/docs/components-miller-columns--docs), or [breadcrumbs](/docs/components-breadcrumbs--docs) instead.
 */
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
Collapsible.tags = ["autodocs", "!dev"];

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
CollapsibleMultiSelect.tags = ["autodocs", "!dev"];

/**
 * Thumbnails can be used in the table content, with some additional markup and classes for alignment.
 */
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
Thumbnails.tags = ["autodocs", "!dev"];

/**
 * The thumbnail table variant can also be combined with collapsible rows.
 */
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
ThumbnailsCollapsible.tags = ["autodocs", "!dev"];

/**
 * The table body can accept dropped content.
 */
export const BodyDropzone = BodyTemplate.bind({});
BodyDropzone.args = {
	isDropTarget: true,
};
BodyDropzone.tags = ["autodocs", "!dev"]; 

/**
 * In addition to the overall table, individual rows can be designated as a drop target to accept dropped content. Only one dropzone row should show at a time, but this example sets multiple at different parts of the table to test that they all display the same.
 */
export const RowDropzone = Template.bind({});
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
RowDropzone.tags = ["autodocs", "!dev"];

export const RowDropzoneQuiet = Template.bind({});
RowDropzoneQuiet.args = {
	...RowDropzone.args,
	isQuiet: true,
};
RowDropzoneQuiet.tags = ["autodocs", "!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
