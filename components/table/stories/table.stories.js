import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isLoading, isQuiet } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { TableGroup } from "./table.test.js";
import { createRow, Template } from "./template.js";

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
		isSortable: {
			name: "Sortable column",
			description: "If a table column is sortable, the header cell displays a sort icon.",
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		sortableIcon: {
			name: "Sortable icon",
			description: "The icon to use for the sortable column.",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["Sort", "SortDown", "SortUp", "none"],
			control: "select",
			if: { arg: "isSortable", eq: true },
		},
		selectionMode: {
			name: "Selection mode",
			description: "Determines whether items in the table can be selected, and if users can select only one or multiple items.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Selection",
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
		isEmphasized: false,
		selectionMode: "none",
		useDivs: false,
		isDropTarget: false,
		useScroller: false,
		hasColumnDividers: false,
		isSortable: false,
		sortableIcon: "",
		rowItems: [],
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=54024-574",
		},
		packageJson,
		metadata,
	},
};

/**
 * The default table also uses the regular density. Similar to a paragraph of text, textual data is always left-aligned within a table. Never use center alignment.
 */
export const Default = TableGroup.bind({});
Default.args = {
	rowItems: [
		/* In createRow, the first argument is the TableRow props, and the second is the content of the cells in the row, and the third is options like thumbnails, sortable, etc. */
		createRow(
			{isSectionHeader: true},
			["Column 1", "Column 2", "Column 3"]
		),
		createRow(
			{isSummaryRow: true},
			["Summary row", "Summary 2", "Summary 3"]
		),
		createRow(
			{},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row charlie", "Column 2", "Column 3"]
		),
	],
};

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

export const Loading = Template.bind({});
Loading.args = {
	...Default.args,
	isLoading: true,
};
Loading.tags = ["!dev"];
Loading.parameters = {
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
 * The standard multi-select table includes a column of checkboxes used for selecting rows. When the selection mode
 * is set to `multiple`, users may select more than one table row.
 */
export const MultiSelect = Template.bind({});
MultiSelect.storyName = "Selection mode: multiple";
MultiSelect.args = {
	...Default.args,
	selectionMode: "multiple",
};
MultiSelect.tags = ["!dev"];
MultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the selection mode is set to `single`, users may select only one table row.
 */
export const SingleSelect = Template.bind({});
SingleSelect.storyName = "Selection mode: single";
SingleSelect.args = {
	...Default.args,
	selectionMode: "single",
};
SingleSelect.tags = ["!dev"];
SingleSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Including the `.spectrum-Table--emphasized` class will change the style of selected rows.
 */
export const EmphasizedMultiSelect = Template.bind({});
EmphasizedMultiSelect.storyName = "Selection mode: multiple, emphasized styling";
EmphasizedMultiSelect.args = {
	...MultiSelect.args,
	isEmphasized: true,
};
EmphasizedMultiSelect.tags = ["!dev"];
EmphasizedMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Numerical data should generally be end-aligned for the ease of scanning and comparing. Numerical data should only be start-aligned when numbers are arbitrary identifiers, known as “nominal numbers,” which means they can’t be compared or combined arithmetically (e.g., ZIP codes, IP addresses, phone numbers). Column headers follow the alignment of the data.
 */
export const NumericalData = Template.bind({});
NumericalData.args = {
	rowItems: [
		createRow(
			{isSectionHeader: true},
			["Pokemon", "Type", "Health"],
			{
				textAlignment: {
					2: "end"
				}
			}
		),
		createRow(
			{},
			["Pikachu", "Electric", "35"],
			{
				textAlignment: {
					2: "end"
				}
			}
		),
		createRow(
			{},
			["Charmander", "Fire", "39"],
			{
				textAlignment: {
					2: "end"
				}
			}
		),
		createRow(
			{},
			["Mew", "Psychic", "100"],
			{
				textAlignment: {
					2: "end"
				}
			}
		),
	],
};
NumericalData.storyName = "Numerical data";
NumericalData.parameters = {
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
		createRow(
			{isSectionHeader: true},
			["Column 1", "Column 2", "Column 3"],
			{
				hasMenu: {
					0: true,
				}
			}
		),
		createRow(
			{},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{isSelected: true},
			["Table row bravo (selected)", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row charlie", "Column 2", "Column 3"]
		),
		createRow(
			{isSummaryRow: true},
			["Summary row", "Summary 2", "Summary 3"]
		)
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
		createRow(
			{isSectionHeader: true},
			["Section header", "Column 2", "Column 3"],
			{
				hasMenu: {
					1: true
				}
			}
		),
		createRow(
			{},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row bravo", "Column 2", "Column 3"]
		),
		createRow(
			{isSectionHeader: true},
			["Another section header", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row charlie", "Column 2", "Column 3"]
		)
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
		createRow(
			{isSectionHeader: true},
			["Column 1", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row bravo", "Column 2", "Column 3"]
		),
		createRow(
			{isSelected: true},
			["Table row charlie (selected)", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row delta", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row echo", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row foxtrot", "Column 2", "Column 3"]
		),
		createRow(
			{isSummaryRow: true},
			["Summary row", "Column 2", "Column 3"]
		)

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
		createRow(
			{isSectionHeader: true},
			["Collapsible options", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				isExpanded: true,
				tier: 0,
				ariaControls: "table-cr-bravo table-cr-delta",
				id: "table-cr-alpha"
			},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				tier: 1,
				ariaControls: "table-cr-charlie",
				id: "table-cr-bravo"
			},
			["Table row bravo", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				isHidden: true,
				tier: 2,
				id: "table-cr-charlie"
			},
			["Table row charlie", "Column 2", "Column 3"]
		),
		createRow(
			{
				isSelected: true,
				isCollapsible: true,
				isExpanded: true,
				tier: 1,
				ariaControls: "table-cr-echo table-cr-foxtrot",
				id: "table-cr-delta"
			},
			["Table row delta", "Column 2", "Column 3"]
		),
		createRow(
			{
				tier: 2,
				isLastTier: true,
				isCollapsible: true,
				id: "table-cr-echo"
			},
			["Table row echo", "Column 2", "Column 3"]
		),
		createRow(
			{
				tier: 2,
				isLastTier: true,
				isCollapsible: true,
				id: "table-cr-foxtrot"
			},
			["Table row foxtrot", "Column 2", "Column 3"]
		)
	],
};
Collapsible.parameters = {
	chromatic: { disableSnapshot: true },
};

export const CollapsibleMultiSelect = Template.bind({});
CollapsibleMultiSelect.storyName = "Selection mode: multiple, collapsible rows";
CollapsibleMultiSelect.args = {
	selectionMode: "multiple",
	rowItems: [
		createRow(
			{isSectionHeader: true},
			["Collapsible options", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				isExpanded: true,
				tier: 0,
				ariaControls: "table-ms-bravo table-ms-charlie",
				id: "table-ms-alpha"
			},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				tier: 1,
				id: "table-ms-bravo"
			},
			["Table row bravo", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				isSelected: true,
				tier: 1,
				isExpanded: true,
				ariaControls: "table-ms-delta table-ms-echo",
				id: "table-ms-charlie"
			},
			["Table row charlie (selected)", "Column 2", "Column 3"]
		),
		createRow(
			{
				tier: 2,
				isLastTier: true,
				isCollapsible: true,
				id: "table-ms-delta"
			},
			["Table row delta", "Column 2", "Column 3"]
		),
		createRow(
			{
				tier: 2,
				isLastTier: true,
				isCollapsible: true,
				id: "table-ms-echo"
			},
			["Table row echo", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				tier: 0,
				id: "table-ms-foxtrot"
			},
			["Table row foxtrot", "Column 2", "Column 3"]
		)
	],
};
CollapsibleMultiSelect.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Thumbnails, avatars, and other icons can be used in the table content, with some additional markup and classes for alignment.
 */
export const Visuals = Template.bind({});
Visuals.args = {
	rowItems: [
		createRow(
			{isSectionHeader: true},
			["Avatar", "Icon", "Thumbnail"]
		),
		createRow(
			{},
			["Avatar Example", "Icons", "Thumbnail Example"],
			{
				visualElements: {
					0: "avatar",
					1: "icon",
					2: "thumbnail"
				}
			}
		),
		createRow(
			{},
			["Avatar Example", "Icons", "Thumbnail Example"],
			{
				visualElements: {
					0: "avatar",
					1: "icon",
					2: "thumbnail"
				}
			}
		),
		createRow(
			{},
			["Avatar Example", "Icons", "Thumbnail Example"],
			{
				visualElements: {
					0: "avatar",
					1: "icon",
					2: "thumbnail"
				}
			}
		)
	]
};
Visuals.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The table can also combine visuals with collapsible rows.
 */
export const VisualsCollapsible = Template.bind({});
VisualsCollapsible.args = {
	rowItems: [
		createRow(
			{isSectionHeader: true},
			["Visual options", "Column 2", "Column 3"]
		),
		createRow(
			{
				isCollapsible: true,
				isExpanded: true,
				tier: 0,
				ariaControls: "table-vc-bravo table-vc-charlie",
				id: "table-vc-alpha"
			},
			["Visual row alpha", "Column 2", "Column 3"],
			{
				visualElements: {
					0: "avatar",
					1: "icon",
					2: "thumbnail"
				}
			}
		),
		createRow(
			{
				isCollapsible: true,
				tier: 1,
				id: "table-vc-bravo"
			},
			["Visual row bravo", "Column 2", "Column 3"],
			{
				visualElements: {
					0: "icon",
					1: "avatar",
					2: "thumbnail"
				}
			}
		),
		createRow(
			{
				isCollapsible: true,
				isExpanded: true,
				tier: 1,
				ariaControls: "table-vc-delta",
				id: "table-vc-charlie"
			},
			["Visual row charlie", "Column 2", "Column 3"],
			{
				visualElements: {
					0: "thumbnail",
					1: "avatar",
					2: "icon"
				}
			}
		),
		createRow(
			{
				tier: 2,
				isLastTier: true,
				isCollapsible: true,
				id: "table-vc-delta"
			},
			["Visual row delta", "Column 2", "Column 3"],
			{
				visualElements: {
					0: "avatar",
					1: "icon",
					2: "thumbnail"
				}
			}
		)
	]
};
VisualsCollapsible.storyName = "Visuals: collapsible";
VisualsCollapsible.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Tables with sortable columns can show different states of sorting: unsorted, ascending, and descending.
 */
export const SortIcons = Template.bind({});
SortIcons.args = {
	rowItems: [
		createRow(
			{ isSectionHeader: true },
			["Default sort", "Ascending sort", "Descending sort"],
			{
				sortableColumns: [0, 1, 2],
				sortableIconNames: {
					0: "Sort",
					1: "SortUp",
					2: "SortDown",
				}
			}
		),
		createRow({}, ["Data A", "Data B", "Data C"]),
		createRow({}, ["Data D", "Data E", "Data F"]),
		createRow({}, ["Data G", "Data H", "Data I"]),
	],
	isSortable: true,
};
SortIcons.tags = ["!dev"];
SortIcons.storyName = "Sort icons";
SortIcons.parameters = {
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
BodyDropZone.tags = ["!autodocs","!dev"];
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
		createRow(
			{isSectionHeader: true},
			["Column 1", "Column 2", "Column 3"]
		),
		createRow(
			{isDropTarget: true},
			["Table row alpha", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row bravo", "Column 2", "Column 3"]
		),
		createRow(
			{isDropTarget: true},
			["Table row charlie", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row delta", "Column 2", "Column 3"]
		),
		createRow(
			{},
			["Table row echo", "Column 2", "Column 3"]
		),
		createRow(
			{isDropTarget: true},
			["Table row foxtrot", "Column 2", "Column 3"]
		)
	],
};
RowDropZone.tags = ["!autodocs","!dev"];
RowDropZone.storyName = "Dropzone: row";
RowDropZone.parameters = {
	chromatic: { disableSnapshot: true },
};

export const RowDropZoneQuiet = Template.bind({});
RowDropZoneQuiet.args = {
	...RowDropZone.args,
	isQuiet: true,
};
RowDropZoneQuiet.tags = ["!autodocs","!dev"];
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
