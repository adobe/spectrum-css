import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";
import { html, literal } from "lit/static-html.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

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
	hasColumnDividers = false,
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
	const useColumnDividers = hasColumnDividers && !isSummaryRow && !isSectionHeader;

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
			[`${rootClass}-cell--divider`]: useColumnDividers,
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
				class=${classMap({
					[`${rootClass}-cell`]: true,
					[`${rootClass}-checkboxCell`]: true,
				})}
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
							[`${rootClass}-cell--divider`]: useColumnDividers,
						})}
					>
						<div class="${rootClass}-collapseInner">
							${when(!isLastTier, () =>
								Button({
									size,
									iconName: "ChevronRight100",
									iconSet: "ui",
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
							[`${rootClass}-cell--divider`]: useColumnDividers,
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
					[`${rootClass}-cell--divider`]: useColumnDividers,
				})}
			>${getCellContent(1)}</${cellTag}>

			<${cellTag}
				role=${ifDefined(showCheckbox ? "gridcell" : useDivs ? "cell" : undefined)}
				class=${classMap({
					[`${rootClass}-cell`]: true,
					[`${rootClass}-cell--divider`]: useColumnDividers,
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
	hasColumnDividers = false,
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
						setName: "ui",
						size,
						customClasses: [`${rootClass}-sortedIcon`],
					}, context)}<span class="${rootClass}-columnTitle">Column title</span>${
					Icon({
						iconName: "ChevronDown100",
						setName: "ui",
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
						setName: "ui",
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
					hasColumnDividers,
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
