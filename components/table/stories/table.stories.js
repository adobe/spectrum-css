import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isLoading, isQuiet } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
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
		isLoading,
		useDivs: {
			name: "Use divs for markup",
			description:
				"Use `div` elements for all of the table markup instead of the `table` element.",
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
		selectionMode: {
			name: "Selection mode",
			description: "Determines whether items in the table can be selected, and if users can select only one or multiple items.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Selection",
				disable: true,
			},
			options: ["none", "single", "multiple"],
			control: "select",
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
				disable: true,
			},
			control: "boolean",
		},
		rowItems: {
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-Table",
		density: "regular",
		isQuiet: false,
		isLoading: false,
		isEmphasized: true,
		selectionMode: "none",
		useDivs: false,
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=54024-574",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated"
		},
	},
	tags: ["migrated"],
};


const ExampleRowItems = [
	{
		cellContent: ["Table row alpha", "Alpha", "Table row alpha"],
		showCheckbox: true,
	},
	{
		cellContent: [
			"Selected row bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Bravo",
			"Table row bravo. Lorem ipsum dolor sit amet.",
		],
		showCheckbox: true,
		isSelected: true,
	},
	{
		cellContent: "Selected row charlie",
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
 * The default table also uses the regular density. Similar to a paragraph of text, textual data is always left-aligned within a table. Never use center alignment.
 *
 * Tables with sortable columns can show different states of sorting: unsorted, ascending, and descending. Additionally, tables can also trigger a menu, as indicated by the chevron.
 */
export const Default = TableGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * The empty state variant displays an [illustrated message](/docs/components-illustrated-message--docs) when there is no data to display.
 */
export const EmptyState = Template.bind({});
EmptyState.args = {
	rowItems: [],
};
EmptyState.parameters = {
	chromatic: { disableSnapshot: true },
};
EmptyState.storyName = "Empty state";

export const LoadingState = Template.bind({});
LoadingState.args = {
	...Default.args,
	isLoading: true,
};
LoadingState.tags = ["!dev"];
LoadingState.parameters = {
	chromatic: { disableSnapshot: true },
};
LoadingState.storyName = "Loading state";
/**
 * The compact variant decreases the spacing used within the table rows, except for the header row.
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
 * The spacious variant increases the spacing used within the table rows, except for the header row.
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
 * The standard multi-select table includes a column of checkboxes used for selecting rows. When the selection mode
 * is set to `multiple`, users may select more than one table row.
 */
export const MultiSelect = Template.bind({});
MultiSelect.storyName = "Selection mode: multiple";
MultiSelect.args = {
	rowItems: ExampleRowItems,
	selectionMode: "multiple",
};
MultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the selection mode is set to `single`, users may select only one table row.
 */
export const SingleSelect = Template.bind({});
SingleSelect.storyName = "Selection mode: single";
SingleSelect.args = {
	selectionMode: "single",
	rowItems: [
		{
			cellContent: ["Pikachu", "Electric", "35"],
			textAlignment: {
				2: "end"
			},
			showCheckbox: true,
			isSelected: true,
			isChecked: true,
		},
		{
			cellContent: ["Charmander", "Fire", "39"],
			textAlignment: {
				2: "end"
			},
			showCheckbox: true,
		},
		{
			cellContent: ["Mew", "Psychic", "100"],
			textAlignment: {
				2: "end"
			},
			showCheckbox: true,
		}
	],
};
SingleSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Excluding the `.spectrum-Table--emphasized` class will change the style of selected rows.
 */
export const NonEmphasizedMultiSelect = Template.bind({});
NonEmphasizedMultiSelect.storyName = "Selection mode: multiple, non-emphasized styling";
NonEmphasizedMultiSelect.args = {
	...MultiSelect.args,
	isEmphasized: false,
};
NonEmphasizedMultiSelect.tags = ["!dev"];
NonEmphasizedMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Numerical data should generally be end-aligned for the ease of scanning and comparing. Numerical data should only be start-aligned when numbers are arbitrary identifiers, known as “nominal numbers,” which means they can’t be compared or combined arithmetically (e.g., ZIP codes, IP addresses, phone numbers). Column headers follow the alignment of the data, so for end-aligned numerical data, implementations should add the `.spectrum-Table-headCell--alignEnd` class to affected header cells (not shown below).
 */
export const NumericalData = Template.bind({});
NumericalData.args = {
	rowItems: [
		{
			cellContent: ["Pikachu", "Electric", "35"],
			textAlignment: {
				2: "end"
			}
		},
		{
			cellContent: ["Charmander", "Fire", "39"],
			textAlignment: {
				2: "end"
			}
		},
		{
			cellContent: ["Mew", "Psychic", "100"],
			textAlignment: {
				2: "end"
			}
		}
	],
};
NumericalData.storyName = "Numerical data";
NumericalData.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The cells and rows within the table have different states based on selection and focus.
 */
export const TableStates = Template.bind({});
TableStates.args = {
	rowItems: [
		{
			cellContent: "Focused selected row, no rounded corners",
			isFocused: true,
			isSelected: true,
		},
		{
			cellContent: "Table row bravo",
		},
		{
			cellContent: "Selected unfocused row, no rounded corners",
			isSelected: true,
		},
		{
			cellContent: "Focused unselected row, no rounded corners",
			isFocused: true,
		},
		{
			cellContent: ["Table row with a focused cell", "Focused cell", "Unfocused cell"],
			cellCustomClasses: {
				1: ["is-focused"]
			}
		},
		{
			cellContent: "Table row echo",
		},
		{
			cellContent: "Focused selected row, with rounded corners",
			isFocused: true,
			isSelected: true,
		}
	],
};
TableStates.storyName = "Row and cell states";
TableStates.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Quiet tables are for when a table is meant to be supplementary, subtle, or lightweight. The quiet table utilizes the `.spectrum-Table--quiet` class and has a transparent background and no borders on the left and right.
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
	selectionMode: "multiple",
};
QuietMultiSelect.tags = ["!dev"];
QuietMultiSelect.storyName = "Selection mode: multiple, quiet styling";
QuietMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Column dividers are for organizing table content and aid the user in parsing related data. These are optional; use them carefully to group related content.
 *
 * The standard table can display column dividers by including the `.spectrum-Table-cell--divider` class with `.spectrum-Table-cell`.
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
			cellContent: "Summary row",
			isSummaryRow: true,
		},
		{
			cellContent: "Table row alpha",
		},
		{
			cellContent: "Table row bravo",
		},
		{
			cellContent: "Selected row charlie",
			isSelected: true,
		},
		{
			cellContent: "Table row delta",
		},
	],
};
SummaryAndSelected.storyName = "Summary and selected rows";
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
SectionHeader.storyName = "Section headers";
SectionHeader.parameters = {
	chromatic: { disableSnapshot: true },
};

export const SectionHeaderQuiet = Template.bind({});
SectionHeaderQuiet.args = {
	...SectionHeader.args,
	isQuiet: true,
};
SectionHeaderQuiet.storyName = "Section headers: quiet styling";
SectionHeaderQuiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
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
			cellContent: "Selected row charlie",
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
DivsScrollable.storyName = "Scrollable table with divs";
DivsScrollable.args = {
	...Scrollable.args,
	useDivs: true,
};
DivsScrollable.tags = ["!dev"];
DivsScrollable.parameters = {
	chromatic: { disableSnapshot: true },
};


/**
 * Thumbnails, avatars, and other icons can be used in the table content, with some additional markup and classes for alignment.
 */
export const Visuals = Template.bind({});
Visuals.args = {
	rowItems: [
		{
			cellContent: "Avatar example",
			visualElement: "avatar",
		},
		{
			cellContent: "Icon example",
			visualElement: "icon",
		},
		{
			cellContent: "Thumbnail example",
			visualElement: "thumbnail",
		},
	],
};
Visuals.parameters = {
	chromatic: { disableSnapshot: true },
};
Visuals.storyName = "With visuals";


// TODO: The design team doesn't have support for collapsible rows in the table component, so they are removed from the docs page for now.
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
				"Table row bravo. There is actually another collapsed row here that's not visible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
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
			cellContent: "Selected row delta",
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
Collapsible.storyName = "Collapsible rows";
Collapsible.tags = ["!autodocs", "!dev"];

export const CollapsibleMultiSelect = Template.bind({});
CollapsibleMultiSelect.storyName = "Selection mode: multiple, collapsible rows";
CollapsibleMultiSelect.args = {
	selectionMode: "multiple",
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
				"Table row bravo. There is actually another collapsed row here that's not visible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
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
			cellContent: "Selected row delta",
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
CollapsibleMultiSelect.tags = ["!autodocs", "!dev"];

/**
 * The table can also combine visuals with collapsible rows.
 */
export const VisualsCollapsible = Template.bind({});
VisualsCollapsible.args = {
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
				"Table row bravo. There is actually another collapsed row here that's not visible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
			isCollapsible: true,
			tier: 1,
			ariaControls: "table-cr-charlie",
			id: "table-cr-bravo",
			visualElement: "avatar",
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
			cellContent: "Selected row delta",
			isSelected: true,
			isCollapsible: true,
			isExpanded: true,
			tier: 1,
			ariaControls: "table-cr-echo table-cr-foxtrot",
			id: "table-cr-delta",
			visualElement: "icon",
		},
		{
			cellContent: "Table row echo",
			tier: 2,
			isLastTier: true,
			isCollapsible: true,
			id: "table-cr-echo",
			visualElement: "thumbnail",
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
VisualsCollapsible.tags = ["!autodocs", "!dev"];
VisualsCollapsible.storyName = "With visuals: collapsible rows";
VisualsCollapsible.parameters = {
	chromatic: { disableSnapshot: true },
};

// TODO: The design team doesn't have dropzones in the table component, so they are removed from the docs page for now.
/**
 * The table body can accept dropped content.
 */
export const BodyDropZone = Template.bind({});
BodyDropZone.args = {
	...Default.args,
	isDropTarget: true,
};
BodyDropZone.tags = ["!autodocs", "!dev"];
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
RowDropZone.tags = ["!autodocs", "!dev"];
RowDropZone.storyName = "Dropzone: row";
RowDropZone.parameters = {
	chromatic: { disableSnapshot: true },
};

export const RowDropZoneQuiet = Template.bind({});
RowDropZoneQuiet.args = {
	...RowDropZone.args,
	isQuiet: true,
};
RowDropZoneQuiet.tags = ["!autodocs", "!dev"];
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
