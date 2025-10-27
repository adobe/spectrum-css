import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { html, literal } from "lit/static-html.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tabs",
	customClasses = [],
	orientation = "horizontal",
	isOpen = false,
	isCompact = false,
	iconOnly = false,
	labelOnly = false,
	hasRightAlignedTabs = false,
	useAnchors = false,
	id = getRandomId("tabs"),
	customStyles = {},
	content = [],
} = {}, context = {}) => {
	if (!content || !content.length) {
		console.warn("Tabs: content required");
		return html``;
	}

	const isVertical = orientation === "vertical";
	const isHorizontal = orientation === "horizontal";
	const isOverflow = orientation === "overflow";

	// Use div tags or anchor tags.
	// Note: Lit must use the 'literal' function for dynamic tags to work.
	const tabMarkup = useAnchors ? literal`a` : literal`div`;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--horizontal`]: isHorizontal || isOverflow,
				[`${rootClass}--vertical`]: isVertical,
				[`${rootClass}--vertical-right`]: hasRightAlignedTabs,
				[`${rootClass}--compact`]: isCompact,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			role="tablist"
		>
			${when(!isOverflow, () => repeat(
				content,
				(item) => item.id,
				(item) => {
					if (typeof item === "object") {
						return html`
							<${tabMarkup}
								class=${classMap({
									[`${rootClass}-item`]: true,
									"is-selected": item?.isSelected ?? false,
									"is-disabled": item?.isDisabled ?? false,
									"is-focus-visible": item?.isFocused ?? false,
									"is-hover": item?.isHovered ?? false,
								})}
								tabindex=${item?.isDisabled ? "-1" : "0"}
								id=${getRandomId("tab-item")}
								role="tab"
								aria-selected=${item?.isSelected ?? false}
								aria-disabled=${item?.isDisabled ?? false}
							>
								${when(item.icon && !labelOnly, () =>
									Icon({
										iconName: item.icon,
										setName: "workflow",
									}, context)
								)}
								${when(item.label && !iconOnly, () => html`
									<span
										class="${rootClass}-itemLabel"
										id=${getRandomId("tab-item-label")}
									>
										${item.label}
									</span>
								`)}
								${when(item.isSelected, () => html`
									<div class="${rootClass}-selectionIndicator"></div>
								`)}
							</${tabMarkup}>
						`;
					}
					else {
						return item;
					}
				}
			), () => html`
				${Picker({
					isQuiet: true,
					isOpen,
					placeholder: !iconOnly ? content?.[0].label : Icon({
						iconName: content?.[0].icon,
						setName: "workflow",
					}, context),
					name: content?.[0].label,
					id: "tab-selector",
					customPopoverStyles: {
						insetBlockStart: "24px",
					},
					popoverContent: [
						() => Menu({
							selectionMode: "none",
							role: "listbox",
							subrole: "option",
							customStyles: { minWidth: "max-content" },
							items: content.filter((_, idx) => idx !== 0).map(item => {
								return {
									...item,
									iconName: item.icon,
									iconSet: "workflow",
									label: !iconOnly ? item.label : undefined,
								};
							}),
						}, context),
					]
				}, context)}
				<div class="${rootClass}-selectionIndicator"></div>
			`)}
		</div>
	`;
};

const LabelOnlyTabsContent = [
	{
		id: "tab-1",
		label: "Tab 1",
		isSelected: true,
	},
	{
		id: "tab-2",
		label: "Tab 2",
	},
	{
		id: "tab-3",
		label: "Tab 3",
		isDisabled: true,
	},
];

export const OverflowGroup = (args, context) => Container({
	direction: "column",
	withHeading: false,
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Default overflow",
			containerStyles: { "gap": "8px", },
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Compact overflow",
			containerStyles: { "gap": "8px", },
			content: Template({...args, isCompact: true}, context),
		}, context)}
	`
}, context);

export const VerticalGroup = (args, context) => Container({
	direction: "column",
	withHeading: false,
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Label and icon",
			containerStyles: {"gap": "8px"},
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Label only",
			containerStyles: {"gap": "8px"},
			content: Template({...args, content: LabelOnlyTabsContent, }, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Compact, with label and icon",
			containerStyles: {"gap": "8px"},
			content: Template({...args, isCompact: true, }, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Compact, label only",
			containerStyles: {"gap": "8px"},
			content: Template({...args, content: LabelOnlyTabsContent, isCompact: true, }, context),
		}, context)}
	`
}, context);

/* Shows variants of compact story in a single group. */
export const CompactGroup = (args, context) => Container({
	direction: "column",
	withBorder: false,
	withHeading: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Label and icon",
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Label only",
			content: Template({...args, content: LabelOnlyTabsContent, }, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Icon only",
			content: Template({...args, iconOnly: true, }, context),
		}, context)}
	`
}, context);
