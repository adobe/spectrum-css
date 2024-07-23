import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId, Variants } from "@spectrum-css/preview/decorators";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";
import { html, literal } from "lit/static-html.js";

import "../index.css";

export const TableRowItem = ({
	rootClass = "spectrum-Table",
	cellContent = "Row Item Text",
	showCheckbox = false,
	isSelected = false,
	isSummaryRow = false,
	isSectionHeader = false,
	tableIsEmphasized = true,
	isCollapsible = false,
	isExpanded = false,
	isHidden = false,
	tier,
	isLastTier = false,
	useDivs = false,
	showThumbnails = false,
	isDropTarget = false,
	ariaControls,
	customClasses = [],
	size = "m",
} = {}, context = {}) => {
	const useThumbnail = showThumbnails && !isSummaryRow && !isSectionHeader;

	// Use Table tags or Div tags.
	// Note: Lit must use the 'literal' function for dynamic tags to work.
	const rowTag = useDivs ? literal`div` : literal`tr`;
	const cellTag = useDivs ? literal`div` : literal`td`;

	// Content for a table cell.
	const getCellContent = (columnIndex) => {
		const content = Array.isArray(cellContent)
			? cellContent[columnIndex]
			: cellContent;
		if (useThumbnail && columnIndex < 2) {
			return html`
				<div class="spectrum-Table-thumbnailInner">
					${Thumbnail({
						size: "300",
						imageURL: "example-card-landscape.png",
						isCover: true,
					}, context)}
					<div class="spectrum-Table-thumbnailContent">${content}</div>
				</div>
			`;
		}
		else {
			return content;
		}
	};

	return html`
	<${rowTag}
		class=${classMap({
			[`${rootClass}-row`]: true,
			[`${rootClass}-row--summary`]: isSummaryRow,
			[`${rootClass}-row--sectionHeader`]: isSectionHeader,
			[`${rootClass}-row--collapsible`]: isCollapsible,
			[`${rootClass}-row--thumbnail`]: useThumbnail,
			["is-selected"]: isSelected,
			["is-expanded"]: isExpanded,
			["is-last-tier"]: isLastTier,
			["is-drop-target"]: isDropTarget,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		role=${ifDefined(useDivs ? "row" : undefined)}
		aria-selected=${ifDefined(showCheckbox ? "true" : undefined)}
		data-tier=${ifDefined(tier)}
		?hidden=${isHidden}
	>
		${when(showCheckbox && !isSectionHeader, () => html`
			<${cellTag}
				role="gridcell"
				class="spectrum-Table-cell spectrum-Table-checkboxCell"
			>
				${when(!isSummaryRow, () =>
					Checkbox({
						size,
						isEmphasized: tableIsEmphasized,
						isChecked: isSelected,
						customClasses: [`${rootClass}-checkbox`],
					}, context)
				)}
			</${cellTag}>`
		)}

		${isCollapsible
				? html`
					<${cellTag}
						role=${ifDefined(showCheckbox ? "gridcell" : useDivs ? "cell" : undefined)}
						class=${classMap({
							[`${rootClass}-cell`]: true,
							[`${rootClass}-cell--collapsible`]: true,
							[`${rootClass}-cell--thumbnail`]: useThumbnail,
						})}
					>
						<div class="${rootClass}-collapseInner">
							${when(!isLastTier, () =>
								Button({
									size,
									iconName: "ChevronRight100",
									hideLabel: true,
									customClasses: [`${rootClass}-disclosureIcon`],
									ariaExpanded: isExpanded,
									ariaControls,
								}, context)
							)}
							${useThumbnail ? getCellContent(0) : html`<div class="${rootClass}-collapseContent">${getCellContent(0)}</div>`}
						</div>
					</${cellTag}>`
				: html`
					<${cellTag}
						role=${ifDefined(showCheckbox ? "gridcell" : useDivs ? "cell" : undefined)}
						class=${classMap({
							[`${rootClass}-cell`]: true,
							[`${rootClass}-cell--thumbnail`]: useThumbnail,
						})}
						colspan=${ifDefined(isSectionHeader && showCheckbox ? "4" : isSectionHeader ? "3" : undefined)}
					>${getCellContent(0)}</${cellTag}>`
		}

		${when(!isSectionHeader, () => html`
			<${cellTag}
				role=${ifDefined(showCheckbox ? "gridcell" : useDivs ? "cell" : undefined)}
				class=${classMap({
					[`${rootClass}-cell`]: true,
					[`${rootClass}-cell--thumbnail`]: useThumbnail,
				})}
			>${getCellContent(1)}</${cellTag}>

			<${cellTag}
				role=${ifDefined(showCheckbox ? "gridcell" : useDivs ? "cell" : undefined)}
				class=${classMap({
					[`${rootClass}-cell`]: true,
				})}
			>${getCellContent(2)}</${cellTag}>`
		)}
	</${rowTag}>
  `;
};

export const Template = ({
	rootClass = "spectrum-Table",
	size = "m",
	density = "standard",
	isQuiet = false,
	isEmphasized = true,
	useDivs = false,
	useScroller = false,
	showThumbnails = false,
	isDropTarget = false,
	rowItems = [],
	customClasses = [],
	id = getRandomId("table"),
} = {}, context = {}) => {
	if (!rowItems || !rowItems.length) return html``;

	// Use Table tags or Div tags.
	const tableTag = useDivs ? literal`div` : literal`table`;
	const theadTag = useDivs ? literal`div` : literal`thead`;
	const tbodyTag = useDivs ? literal`div` : literal`tbody`;
	const rowTag = useDivs ? literal`div` : literal`tr`;
	const thTag = useDivs ? literal`div` : literal`th`;

	const rootClassMapVariants = {
		[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
		[`${rootClass}--${density}`]: density !== "standard",
		[`${rootClass}--quiet`]: isQuiet,
		[`${rootClass}--emphasized`]: isEmphasized,
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};

	const useCheckboxCell = rowItems.some((item) => item.showCheckbox === true);

	const tableHtml = html`
	<${tableTag}
		class=${classMap({
			[rootClass]: !useScroller,
			[`${rootClass}-main`]: useScroller,
			...rootClassMapVariants
		})}
		id=${ifDefined(id)}
		role=${ifDefined(useCheckboxCell ? "grid" : useDivs ? "table" : undefined)}
		aria-multiselectable=${ifDefined(useCheckboxCell ? "true" : undefined)}
		style="max-width: 800px;"
	>
		<${theadTag}
			class="${rootClass}-head"
			role=${ifDefined(useDivs ? "rowgroup" : undefined)}
		>
			<${rowTag}
				role=${ifDefined(useDivs ? "row" : undefined)}
			>
				${when(useCheckboxCell, () => html`
					<${thTag}
						class="spectrum-Table-headCell spectrum-Table-checkboxCell"
						role=${ifDefined(useDivs ? "columnheader" : undefined)}
					>
						${Checkbox({
							size,
							isEmphasized: isEmphasized,
							isChecked: false,
							isIndeterminate: true,
							customClasses: [`${rootClass}-checkbox`],
						}, context)}
					</${thTag}>`
				)}
				<${thTag}
					class="${rootClass}-headCell is-sortable is-sorted-desc"
					role=${ifDefined(useDivs ? "columnheader" : undefined)}
					aria-sort="descending"
					tabindex="0"
				>
					${Icon({
						iconName: "ArrowDown100",
						size,
						customClasses: [`${rootClass}-sortedIcon`],
					}, context)}<span class="${rootClass}-columnTitle">Column title</span>${
					Icon({
						iconName: "ChevronDown100",
						size,
						customClasses: [`${rootClass}-menuIcon`],
					}, context)}
				</${thTag}>
				<${thTag}
					class="${rootClass}-headCell is-sortable"
					role=${ifDefined(useDivs ? "columnheader" : undefined)}
					aria-sort="none"
					tabindex="0"
				>
					${Icon({
						iconName: "ArrowDown100",
						size,
						customClasses: [`${rootClass}-sortedIcon`],
					}, context)}<span class="${rootClass}-columnTitle">Column title</span>
				</${thTag}>
				<${thTag}
					class="${rootClass}-headCell"
					role=${ifDefined(useDivs ? "columnheader" : undefined)}
				>Column title</${thTag}>
			</${rowTag}>
		</${theadTag}>
		<${tbodyTag}
			class=${classMap({
				[`${rootClass}-body`]: true,
				["is-drop-target"]: isDropTarget,
			})}
			role=${ifDefined(useDivs ? "rowgroup" : undefined)}
		>
			${rowItems.map((item) =>
				TableRowItem({
					rootClass,
					size,
					useDivs,
					showThumbnails,
					tableIsEmphasized: isEmphasized,
					...item,
				}, context)
			)}
		</${tbodyTag}>
	</${tableTag}>
	`;

	// Scrollable table moves the root class and variant classes into the wrapper
	// with the scroller class.
	if (useScroller) {
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}-scroller`]: true,
					...rootClassMapVariants,
				})}
				style="height: 200px;"
			>
				${tableHtml}
			</div>
		`;
	}
	else {
		return tableHtml;
	}
};

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
