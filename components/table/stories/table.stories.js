import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { TableGroup } from "./table.test.js";
import { Template } from "./template.js";

/**
 * A table is used to create a container for displaying information. It allows users to sort, compare, and take action on large amounts of data.
 */
export default {
	title: "Table",
	component: "Table",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		density: {
			name: "Density",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["regular", "compact", "spacious"],
			control: "select",
		},
		isQuiet,
		isEmphasized,
		useDivs: {
			name: "Use divs for markup",
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
			name: "Scrollable body and fixed column headers",
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
			name: "Show thumbnails in content",
			description:
				"Uses the thumbnail component at the start of the first column's cells.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasColumnDividers: {
			name: "Show dividers between columns",
			description: "Sets dividers between table columns.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDropTarget: {
			name: "Dropzone (drop target)",
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
		hasColumnDividers: false,
		rowItems: [
			{
				cellContent: "Row item alpha",
			},
			{
				cellContent: "Row item bravo",
			},
			{
				cellContent: "Row item charlie",
			},
			{
				cellContent: "Row item delta",
			},
			{
				cellContent: "Row item echo",
			},
		],
	},
	parameters: {
		packageJson,
		metadata,
	},
};

const ExampleRowItems = [
	{
		cellContent: ["Table row alpha", "Alpha", "Table row alpha"],
		showCheckbox: true,
	},
	{
		cellContent: [
			"Table row bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Bravo",
			"Table row bravo. Lorem ipsum dolor sit amet.",
		],
		showCheckbox: true,
		isSelected: true,
	},
	{
		cellContent: "Table row charlie",
		showCheckbox: true,
		isSelected: true,
	},
	{
		cellContent: "Table row delta",
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
 * The medium size is the default and recommended option. The default table also uses the regular density.
 */
export const Default = TableGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Tables come in four different sizes: small, medium, large, and extra-large. The medium size is the default and recommended option.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The compact variant decreases the spacing used within the table.
 */
export const Compact = Template.bind({});
Compact.args = {
	...Default.args,
	density: "compact",
};
Compact.tags = ["!dev"];
Compact.parameters = {
	chromatic: { disableSnapshot: true },
};
Compact.storyName = "Density - compact";

/**
 * The spacious variant increases the spacing used within the table.
 */
export const Spacious = Template.bind({});
Spacious.args = {
	...Default.args,
	density: "spacious",
};
Spacious.tags = ["!dev"];
Spacious.parameters = {
	chromatic: { disableSnapshot: true },
};
Spacious.storyName = "Density - spacious";

/**
 * The standard multi-select table includes a column of checkboxes used for selecting rows.
 */
export const MultiSelect = Template.bind({});
MultiSelect.storyName = "Multi-select";
MultiSelect.args = {
	rowItems: ExampleRowItems,
};
MultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Excluding the `.spectrum-Table--emphasized` class will change the style of selected rows.
 */
export const NonEmphasizedMultiSelect = Template.bind({});
NonEmphasizedMultiSelect.storyName = "Non-emphasized multi-select";
NonEmphasizedMultiSelect.args = {
	...MultiSelect.args,
	isEmphasized: false,
};
NonEmphasizedMultiSelect.tags = ["!dev"];
NonEmphasizedMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The quiet table has a transparent background and no borders on the left and right.
 */
export const Quiet = Template.bind({});
Quiet.args = {
	...Default.args,
	isQuiet: true,
};
Quiet.tags = ["!dev"];
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A quiet multi-select table has emphasized styling by default, but excluding the `.spectrum-Table--emphasized` class will change the style of selected rows.
 */
export const QuietMultiSelect = Template.bind({});
QuietMultiSelect.args = {
	...MultiSelect.args,
	isQuiet: true,
};
QuietMultiSelect.tags = ["!dev"];
QuietMultiSelect.storyName = "Quiet multi-select";
QuietMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The standard table can display column dividers by including the `.spectrum-Table-cell--divider` class with `.spectrum-Table-cell`. Use sparingly to group related content.
 */
export const WithColumnDividers = Template.bind({});
WithColumnDividers.args = {
	...Default.args,
	hasColumnDividers: true,
};
WithColumnDividers.tags = ["!dev"];
WithColumnDividers.storyName = "With column dividers";
WithColumnDividers.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Tables can have a summary row to show totals, at either the top or the bottom of the table. This example shows both the optional summary row at the bottom, and a row marked as selected.
 */
export const SummaryAndSelected = Template.bind({});
SummaryAndSelected.args = {
	rowItems: [
		{
			cellContent: "Table row alpha",
		},
		{
			cellContent: "Table row bravo",
		},
		{
			cellContent: "Table row charlie",
			isSelected: true,
		},
		{
			cellContent: "Table row delta",
		},
		{
			cellContent: "Summary row",
			isSummaryRow: true,
		},
	],
};
SummaryAndSelected.storyName = "Summary and selected";
SummaryAndSelected.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Tables can style one or more rows as section headers.
 */
export const SectionHeader = Template.bind({});
SectionHeader.args = {
	rowItems: [
		{
			cellContent: "Section header",
			isSectionHeader: true,
		},
		{
			cellContent: "Table row alpha",
		},
		{
			cellContent: "Table row bravo",
		},
		{
			cellContent: "Table row charlie",
		},
		{
			cellContent: "Another section header",
			isSectionHeader: true,
		},
		{
			cellContent: "Table row delta",
		},
		{
			cellContent: "Table row echo",
		},
	],
};
SectionHeader.storyName = "Section header";
SectionHeader.parameters = {
	chromatic: { disableSnapshot: true },
};

export const SectionHeaderQuiet = Template.bind({});
SectionHeaderQuiet.args = {
	...SectionHeader.args,
	isQuiet: true,
};
SectionHeaderQuiet.storyName = "Section header: quiet";
SectionHeaderQuiet.parameters = {
	chromatic: { disableSnapshot: true },
};

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
			cellContent: "Table row alpha",
		},
		{
			cellContent: "Table row bravo",
		},
		{
			cellContent: "Table row charlie",
			isSelected: true,
		},
		{
			cellContent: "Table row delta",
		},
		{
			cellContent: "Table row echo",
		},
		{
			cellContent: "Table row foxtrot",
		},
		{
			cellContent: "Summary row",
			isSummaryRow: true,
		},
	],
};
Scrollable.tags = ["!dev"];
Scrollable.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A table can also be made up of `div` tags if needed, instead of a `<table>`. This example uses both the div markup, and the scrollable wrapper.
 */
export const DivsScrollable = Template.bind({});
DivsScrollable.storyName = "Scrollable with divs";
DivsScrollable.args = {
	...Scrollable.args,
	useDivs: true,
	rowItems: ExampleRowItems,
};
DivsScrollable.tags = ["!dev"];
DivsScrollable.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * In a table with collapsible rows, all child items must have columns that match the parent items. If they don’t, consider using multiple drill-in tables, [Miller columns](/docs/components-miller-columns--docs), or [breadcrumbs](/docs/components-breadcrumbs--docs) instead.
 */
export const Collapsible = Template.bind({});
Collapsible.args = {
	rowItems: [
		{
			cellContent: "Table row alpha",
			isCollapsible: true,
			isExpanded: true,
			tier: 0,
			ariaControls: "table-cr-bravo table-cr-delta",
			id: "table-cr-alpha",
		},
		{
			cellContent:
				"Table row bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
		},
		{
			cellContent: [
				"Table row charlie",
				"Default not visible",
				"Default not visible",
			],
			isCollapsible: true,
			isHidden: true,
			tier: 2,
			id: "table-cr-charlie",
		},
		{
			cellContent: "Table row delta",
			isSelected: true,
			isCollapsible: true,
			isExpanded: true,
			tier: 1,
			ariaControls: "table-cr-echo table-cr-foxtrot",
			id: "table-cr-delta",
		},
		{
			cellContent: "Table row echo",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-echo",
		},
		{
			cellContent: "Table row foxtrot",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-foxtrot",
		},
		{
			cellContent: "Summary row",
			isSummaryRow: true,
		},
	],
};
Collapsible.parameters = {
	chromatic: { disableSnapshot: true },
};

export const CollapsibleMultiSelect = Template.bind({});
CollapsibleMultiSelect.storyName = "Collapsible multi-select";
CollapsibleMultiSelect.args = {
	rowItems: [
		{
			showCheckbox: true,
			cellContent: "Table row alpha",
			isCollapsible: true,
			isExpanded: true,
			tier: 0,
			ariaControls: "table-cr-bravo table-cr-delta",
			id: "table-cr-alpha",
		},
		{
			showCheckbox: true,
			cellContent:
				"Table row bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
		},
		{
			showCheckbox: true,
			cellContent: [
				"Table row charlie",
				"Default not visible",
				"Default not visible",
			],
			isCollapsible: true,
			isHidden: true,
			tier: 2,
			id: "table-cr-charlie",
		},
		{
			showCheckbox: true,
			cellContent: "Table row delta",
			isSelected: true,
			isCollapsible: true,
			isExpanded: true,
			tier: 1,
			ariaControls: "table-cr-echo table-cr-foxtrot",
			id: "table-cr-delta",
		},
		{
			showCheckbox: true,
			cellContent: "Table row echo",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-echo",
		},
		{
			showCheckbox: true,
			cellContent: "Table row foxtrot",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-foxtrot",
		},
		{
			showCheckbox: true,
			cellContent: "Summary row",
			isSummaryRow: true,
		},
	],
};
CollapsibleMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Thumbnails can be used in the table content, with some additional markup and classes for alignment.
 */
export const Thumbnails = Template.bind({});
Thumbnails.args = {
	showThumbnails: true,
	rowItems: [
		{
			cellContent: ["Table row alpha", "Test", "2"],
		},
		{
			cellContent: ["Table row bravo", "Test", "28"],
		},
		{
			cellContent: [
				"Table row charlie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
				"Test",
				"23",
			],
		},
		{
			cellContent: ["Table row delta", "Test", "7"],
		},
	],
};
Thumbnails.tags = ["!dev"];
Thumbnails.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The thumbnail table variant can also be combined with collapsible rows.
 */
export const ThumbnailsCollapsible = Template.bind({});
ThumbnailsCollapsible.args = {
	showThumbnails: true,
	rowItems: [
		{
			cellContent: "Table row alpha",
			isCollapsible: true,
			isExpanded: true,
			tier: 0,
			ariaControls: "table-cr-bravo",
			id: "table-cr-alpha",
		},
		{
			cellContent:
				"Table row bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
		},
		{
			cellContent: "Table row charlie",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-charlie",
		},
		{
			cellContent: "Table row delta",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-delta",
		},
		{
			cellContent: "Summary row",
			isSummaryRow: true,
		},
	],
};
ThumbnailsCollapsible.storyName = "Thumbnails: collapsible";
ThumbnailsCollapsible.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The table body can accept dropped content.
 */
export const BodyDropZone = Template.bind({});
BodyDropZone.args = {
	isDropTarget: true,
};
BodyDropZone.tags = ["!dev"];
BodyDropZone.storyName = "Dropzone: body";
BodyDropZone.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * In addition to the overall table, individual rows can be designated as a drop target to accept dropped content. Only one dropzone row should show at a time, but this example sets multiple at different parts of the table to test that they all display the same.
 */
export const RowDropZone = Template.bind({});
RowDropZone.args = {
	rowItems: [
		{
			cellContent: "Table row alpha",
			isDropTarget: true,
		},
		{
			cellContent: "Table row bravo",
		},
		{
			cellContent: "Table row charlie",
			isDropTarget: true,
		},
		{
			cellContent: "Table row delta",
		},
		{
			cellContent: "Table row echo",
		},
		{
			cellContent: "Table row foxtrot",
			isDropTarget: true,
		},
	],
};
RowDropZone.storyName = "Dropzone: row";
RowDropZone.parameters = {
	chromatic: { disableSnapshot: true },
};

export const RowDropZoneQuiet = Template.bind({});
RowDropZoneQuiet.args = {
	...RowDropZone.args,
	isQuiet: true,
};
RowDropZoneQuiet.tags = ["!dev"];
RowDropZoneQuiet.storyName = "Dropzone: row, quiet";
RowDropZoneQuiet.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TableGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
