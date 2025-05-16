import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";
import { html, literal } from "lit/static-html.js";

import "../index.css";

/* TableCellTemplate renders a table cell as a div/td/th. */
export const TableCellTemplate = ({
	rootClass = "spectrum-Table-cell",
	cellContent = "",
	visualElement,
	isFocused = false,
	isSelected = false,
	isHeaderCell = false,
	hasColumnDividers = false,
	textAlignment = "start",
	hasMenu = false,
	useDivs = false,
	role,
	customClasses = [],
	isCollapsible = false,
	isLastTier = false,
	isExpanded = false,
	isSortable = false,
	sortableIcon,
	ariaControls,
} = {}, context = {}) => {

	const useThumbnail = visualElement === "thumbnail";
	const useAvatar = visualElement === "avatar";
	const useIcon = visualElement === "icon";

	// Use Table tags or Div tags.
	// Note: Lit must use the 'literal' function for dynamic tags to work.
	const cellTag = useDivs ? literal`div` : isHeaderCell ? literal`th` : literal`td`;

	// Content for a table cell.
	const getCellContent = (columnIndex) => {
		const content = Array.isArray(cellContent)
			? cellContent[columnIndex]
			: cellContent;

		// Only render visuals in the first two columns
		if (columnIndex < 2 && visualElement) {
			// options/classes for visual elements
			const visuals = {
				thumbnail: {
					component: Thumbnail,
					props: {
						size: "75",
						imageURL: "example-card-landscape.png",
						isCover: true,
					},
					containerClass: "spectrum-Table-thumbnailInner",
					contentClass: "spectrum-Table-thumbnailContent"
				},
				avatar: {
					component: Avatar,
					props: {
						size: "75",
					},
					containerClass: "spectrum-Table-avatarInner",
					contentClass: "spectrum-Table-avatarContent"
				},
				icon: {
					component: Icon,
					props: {
						iconName: "Image",
						iconSet: "workflow",
					},
					containerClass: "spectrum-Table-iconInner",
					contentClass: "spectrum-Table-iconContent"
				}
			};

			// Get configuration for the current visual element
			const config = visuals[visualElement];

			if (config) {
				return html`
					<div class="${config.containerClass}">
						${config.component(config.props, context)}
						<div class="${config.contentClass}">${content}</div>
					</div>
				`;
			}
		}

		// Default case - just return the content
		return content;
	};

	// The content and classes depend on whether this is a collapsible cell
	const cellClasses = {
		[`${rootClass}`]: true,
		[`${rootClass}--header`]: isHeaderCell ? true : undefined,
		[`${rootClass}--thumbnail`]: useThumbnail,
		[`${rootClass}--avatar`]: useAvatar,
		[`${rootClass}--icon`]: useIcon,
		[`${rootClass}--collapsible`]: isCollapsible,
		["is-sortable"]: isSortable && isHeaderCell,
		["is-focused"]: isFocused,
		["is-selected"]: isSelected,
		[`${rootClass}--alignEnd`]: textAlignment === "end",
		[`${rootClass}--divider`]: hasColumnDividers,
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};

	const cellContentHtml = isCollapsible
		? html`
			<div class="spectrum-Table-collapseInner">
				${!isLastTier ? Button({
					size: "m",
					iconName: "ChevronRight100",
					iconSet: "ui",
					hideLabel: true,
					customClasses: ["spectrum-Table-disclosureIcon", "spectrum-Button--iconOnly"],
					ariaExpanded: isExpanded,
					ariaControls,
				}, context) : null}
				<div class="spectrum-Table-collapseContent">${getCellContent(1)}</div>
			</div>
		`
		: isHeaderCell && isSortable
			? html`
				<div class="spectrum-Table-cell--sortable">
					${Icon({
						iconName: sortableIcon === "none" ? undefined : sortableIcon,
						iconSet: "workflow",
						customClasses: ["spectrum-Table-icon--sort"],
					}, context)}
					${getCellContent(1)}
				</div>
				`
			: getCellContent(1);

	return html`
		<${cellTag}
			class=${classMap(cellClasses)}
			role=${ifDefined(useDivs ? "cell" : role ? role : undefined)}
		>
			${cellContentHtml}
			${when(hasMenu, () => html`
				${Button({
					size: "m",
					iconName: "ChevronDown100",
					iconSet: "ui",
					hideLabel: true,
					customClasses: ["spectrum-Table-disclosureIcon", "spectrum-Button--iconOnly"],
					ariaExpanded: isExpanded,
					ariaControls,
				}, context)}
			`)}
		</${cellTag}>
	`;
};

// TableRowTemplate is used to render a table row as a div/tr.
export const TableRowTemplate = ({
	rootClass = "spectrum-Table-row",
	rowContent = [],
	showCheckbox = false,
	isSelected = false,
	isFocused = false,
	isSummaryRow = false,
	isSectionHeader = false,
	isCollapsible = false,
	isExpanded = false,
	isSortable = false,
	sortableIcon,
	isEmphasized = false,
	isHidden = false,
	textAlignment = "start",
	selectionMode = "none",
	hasColumnDividers = false,
	tier,
	isLastTier = false,
	useDivs = false,
	isDropTarget = false,
	ariaControls,
	customClasses = [],
} = {}, context = {}) => {

	// Use Table tags or Div tags.
	// Note: Lit must use the 'literal' function for dynamic tags to work.
	const rowTag = useDivs ? literal`div` : literal`tr`;

	// For collapsible rows, we need to pass special props to the first cell
	// to render the disclosure button within that cell
	const shouldRenderCollapsible = isCollapsible && !isSummaryRow && !isSectionHeader;

	return html`
	<${rowTag}
		class=${classMap({
			[`${rootClass}`]: true,
			[`${rootClass}--summary`]: isSummaryRow,
			[`${rootClass}--sectionHeader`]: isSectionHeader,
			[`${rootClass}--collapsible`]: isCollapsible,
			["is-focused"]: isFocused,
			["is-selected"]: isSelected,
			["is-sortable"]: isSortable && isSectionHeader,
			["is-emphasized"]: isEmphasized,
			["is-last-tier"]: isLastTier,
			["is-drop-target"]: isDropTarget,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		role=${ifDefined(useDivs ? "row" : undefined)}
		aria-selected=${ifDefined(showCheckbox ? "true" : undefined)}
		data-tier=${ifDefined(tier)}
		?hidden=${isHidden}
	>
	${when(showCheckbox, () => html`
		${TableCellTemplate({
			useDivs,
			hasColumnDividers,
			isSortable,
			sortableIcon,
			textAlignment,
			role: "gridcell",
			customClasses: [`${rootClass}-checkboxCell`],
			cellContent:
				Checkbox({
					size: "m",
					isFocused,
					isChecked: isSelected,
					isEmphasized,
					isIndeterminate: selectionMode === "multiple" && isSectionHeader ? true : undefined,
					customClasses: [`${rootClass}-checkbox`],
				}, context)
		})}`
	)}

	${when(isSectionHeader, () => html`
		${renderContent(rowContent, {
			args: {
				useDivs,
				hasColumnDividers,
				isHeaderCell: true,
				isSortable,
				sortableIcon,
				textAlignment,
			},
		})}
	`)}

	${when(!isSectionHeader, () => html`
		${renderContent(rowContent, {
			args: {
				useDivs,
				hasColumnDividers,
				isSortable,
				sortableIcon,
				textAlignment,
				// Only pass collapsible props to the first cell
				isCollapsible: shouldRenderCollapsible,
				isLastTier: shouldRenderCollapsible ? isLastTier : undefined,
				isExpanded: shouldRenderCollapsible ? isExpanded : undefined,
				ariaControls: shouldRenderCollapsible ? ariaControls : undefined,
			},
		})}
	`)}


	</${rowTag}>
  `;
};

/* Create a table cell */
export const createCells = (cells, visualElements = {}, textAlignment = {}, hasMenu = {}) => {
	return cells.map((content, index) => {
		return (passthroughs, context) => TableCellTemplate({
			...passthroughs,
			cellContent: content,
			visualElement: visualElements[index],
			textAlignment: textAlignment[index],
			hasMenu: hasMenu[index],
		}, context);
	});
};

/* Create a table row - can be a regular row or header row with sortable columns */
/* The first row is `thead`, and each object in this array can accept TableRowTemplate props. */
/* In createRow, the first argument is the TableRow props, and the second is the content of the cells in the row, and the third is options like thumbnails, sortable, etc. */
export const createRow = (rowProps = {}, cellsData = [], options = {}) => {
	const { visualElements = {}, sortableColumns = [], sortableIconNames = {}, textAlignment = {}, hasMenu = {} } = options;

	// If it's a section header row with sortable columns
	if (rowProps.isSectionHeader && sortableColumns.length > 0) {
		const headerCellContent = cellsData.map((content, index) => {
			return (passthroughs, context) => TableCellTemplate({
				...passthroughs,
				cellContent: content,
				isHeaderCell: true,
				visualElement: visualElements[index],
				textAlignment: textAlignment[index],
				hasMenu: hasMenu[index],
				isSortable: sortableColumns.includes(index),
				// Use the icon specified for this column index, or fall back to the default passed from passthroughs
				sortableIcon: sortableColumns.includes(index) && sortableIconNames[index]
					? sortableIconNames[index]
					: passthroughs.sortableIcon,
			}, context);
		});

		return {
			...rowProps,
			rowContent: headerCellContent,
		};
	}

	return {
		...rowProps,
		rowContent: createCells(cellsData, visualElements, textAlignment, hasMenu),
	};
};

// Table renders a table as a div/table.
export const Template = ({
	rootClass = "spectrum-Table",
	density = "standard",
	isQuiet = false,
	isEmphasized = false,
	useDivs = false,
	isSortable = false,
	sortableIcon,
	useScroller = false,
	selectionMode = "none",
	isLoading = false,
	isDropTarget = false,
	hasColumnDividers = false,
	rowItems = [],
	customClasses = [],
	id = getRandomId("table"),
} = {}, context = {}) => {

	// empty state table
	if (!rowItems || !rowItems.length) return html`
		${IllustratedMessage({
			illustration: "NoData",
			illustrationSet: "workflow",
			title: "Empty state title",
			description: "No data to display. Description of status. Give more information about what a user can do or expect, or how to make items appear here.",
			isHorizontal: true,
			hasButtons: true,
			size: ({
				"compact": "s",
				"regular": "m",
				"spacious": "l",
			}[density] || "regular"),
		}, context)}
	`;

	// Loading state
	if (isLoading) {
		return html`
			${ProgressCircle({
				size: ({
					"compact": "s",
					"regular": "m",
					"spacious": "l",
				}[density] || "regular"),
				isIndeterminate: true,
			}, context)}
		`;
	}

	// Use Table tags or Div tags.
	const tableTag = useDivs ? literal`div` : literal`table`;
	const theadTag = useDivs ? literal`div` : literal`thead`;
	const tbodyTag = useDivs ? literal`div` : literal`tbody`;

	// If it's a section header, use the first item as thead content
	const firstRowContent = rowItems && rowItems.length > 0 ? rowItems[0] : null;
	const remainingRowContent = rowItems && rowItems.length > 1 ? rowItems.slice(1) : [];

	const rootClassMapVariants = {
		[`${rootClass}--${density}`]: density !== "regular",
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
			${TableRowTemplate({
				useDivs,
				hasColumnDividers,
				isEmphasized,
				isQuiet,
				isSortable,
				sortableIcon,
				selectionMode,
				showCheckbox: selectionMode !== "none",
				// First row is the header row.
				...firstRowContent,
			})}
		</${theadTag}>
		<${tbodyTag}
			class=${classMap({
				[`${rootClass}-body`]: true,
				["is-drop-target"]: isDropTarget,
			})}
			role=${ifDefined(useDivs ? "rowgroup" : undefined)}
		>
			${remainingRowContent.map((item) =>
				TableRowTemplate({
					useDivs,
					hasColumnDividers,
					isEmphasized,
					isQuiet,
					selectionMode,
					isSortable,
					sortableIcon,
					showCheckbox: selectionMode !== "none",
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
