import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const ExampleSummarySelectedContent = [
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
];

const ExampleMultiSelectContent = [
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

const ExampleRowDropTargetContent = [
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
];

const ExampleSectionHeadersContent =[
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
];

export const TableGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Compact",
			density: "compact",
		},
		{
			testHeading: "Spacious",
			density: "spacious",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Column dividers",
			hasColumnDividers: true,
		},
		{
			testHeading: "Empty state",
			rowItems: [],
		},
		{
			testHeading: "Loading state",
			isLoading: true,
		},
		{
			testHeading: "Summary and selected rows",
			rowItems: ExampleSummarySelectedContent,
		},
		{
			testHeading: "Selection mode: multiple, emphasized",
			rowItems: ExampleMultiSelectContent,
		},
		{
			testHeading: "Selection mode: multiple, non-emphasized",
			rowItems: ExampleMultiSelectContent,
			isEmphasized: false,
		},
		{
			testHeading: "Quiet multi-select: emphasized",
			isQuiet: true,
			rowItems: ExampleMultiSelectContent,
		},
		{
			testHeading: "Scrollable",
			useScroller: true,
			rowItems: ExampleSummarySelectedContent,
		},
		{
			testHeading: "Scrollable: with divs",
			useDivs: true,
			useScroller: true,
			rowItems: ExampleMultiSelectContent,
		},
		{
			testHeading: "Section headers",
			rowItems: ExampleSectionHeadersContent,
		},
		{
			testHeading: "Quiet section headers",
			rowItems: ExampleSectionHeadersContent,
			isQuiet: true,
		},
		{
			testHeading: "Collapsible",
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
		},
		{
			testHeading: "Selection mode: multiple, collapsible",
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
		},
		{
			testHeading: "End-alignment for numerical data",
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
				},
			],
		},
		{
			testHeading: "Visual elements",
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
		},
		{
			testHeading: "Visual elements: collapsible",
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
		},
		{
			testHeading: "Row drop target",
			rowItems: ExampleRowDropTargetContent,
		},
		{
			testHeading: "Quiet row drop target",
			isQuiet: true,
			rowItems: ExampleRowDropTargetContent,
		},
		{
			testHeading: "Body drop target",
			isDropTarget: true,
		},
		{
			testHeading: "Focus, selected states for rows and cells",
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
		}
	],
});
