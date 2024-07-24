import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const TableGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Summary: Selected",
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
		},
		{
			testHeading: "Multi-select",
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
		},
		{
			testHeading: "Scrollable",
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
		},
		{
			testHeading: "Scrollable: with divs",
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
		},
		{
			testHeading: "Section headers",
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
		},
		{
			testHeading: "Collapsible",
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
		},
		{
			testHeading: "Collapsible: multi-select",
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
		},
		{
			testHeading: "Thumbnails",
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
		},
		{
			testHeading: "Thumbnail: Collapsible",
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
		},
		{
			testHeading: "Row drop target",
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
		}
	],
});
