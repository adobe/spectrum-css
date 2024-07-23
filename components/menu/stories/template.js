import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { Template as Tray } from "@spectrum-css/tray/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

/**
 * Get the tray submenu back arrow name with scale number (defined in design spec).
 */
const iconWithScale = (size = "m", iconName = "ArrowLeft") => {
	switch (size) {
		case "s":
			return `${iconName}200`;
		case "l":
			return `${iconName}400`;
		case "xl":
			return `${iconName}500`;
		default:
			return `${iconName}300`;
	}
};

export const MenuItem = (
	{
		rootClass = "spectrum-Menu-item",
		label,
		description,
		iconName,
		iconSet = "workflow",
		hasActions = false,
		id = getRandomId("menuitem"),
		idx = 0,
		isActive = false,
		isCollapsible = false,
		isDisabled = false,
		isDrillIn = false,
		isFocused = false,
		isHighlighted = false,
		isHovered = false,
		isOpen = false,
		isSelected = false,
		items = [],
		role = "menuitem",
		shouldTruncate = false,
		size = "m",
		selectionMode = "none",
		value,
		customClasses = [],
		customStyles = {},
	} = {},
	context = {},
) => html`
	<li
		class=${classMap({
			[rootClass]: true,
			"is-highlighted": isHighlighted,
			"is-active": isActive,
			"is-focus-visible": isFocused,
			"is-selected": isSelected,
			"is-disabled": isDisabled,
			"is-hover": isHovered,
			[`${rootClass}--drillIn`]: isDrillIn,
			[`${rootClass}--collapsible`]: isCollapsible,
			"is-open": isOpen,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
		id=${ifDefined(id)}
		role=${ifDefined(role)}
		aria-selected=${isSelected ? "true" : "false"}
		aria-disabled=${isDisabled ? "true" : "false"}
		tabindex=${ifDefined(!isDisabled ? "0" : undefined)}
	>
		${when(isCollapsible || (selectionMode == "single" && isSelected), () =>
			Icon(
				{
					iconName: iconWithScale(
						size,
						isCollapsible ? "ChevronRight" : "Checkmark",
					),
					setName: "ui",
					size,
					customClasses: [
						`${rootClass}Icon`,
						isCollapsible ? "spectrum-Menu-chevron" : "spectrum-Menu-checkmark",
					],
				},
				context,
			),
		)}
		${when(selectionMode === "multiple" && !hasActions, () =>
			Checkbox(
				{
					size,
					isEmphasized: true,
					isChecked: isSelected,
					isDisabled,
					id: `menu-checkbox-${idx}`,
					customClasses: [`${rootClass}Checkbox`],
				},
				context,
			),
		)}
		${when(iconName, () =>
			Icon(
				{
					iconName,
					setName: iconSet,
					size,
					customClasses: [`${rootClass}Icon`, `${rootClass}Icon--workflowIcon`],
				},
				context,
			),
		)}
		${when(
			isCollapsible,
			() => html`
				<span
					class=${classMap({
						["spectrum-Menu-sectionHeading"]: true,
						[`${rootClass}Label--truncate`]: shouldTruncate,
					})}
				>
					${label}
				</span>
			`,
			() => html`
				<span
					class=${classMap({
						[`${rootClass}Label`]: true,
						["spectrum-Switch-label"]: hasActions,
						[`${rootClass}Label--truncate`]: shouldTruncate,
					})}
				>
					${label}
				</span>
			`,
		)}
		${when(
			description,
			() => html`
				<span
					class=${classMap({
						[`${rootClass}Description`]: true,
					})}
				>
					${description}
				</span>
			`,
		)}
		${when(
			value,
			() => html`
				<span
					class=${classMap({
						[`${rootClass}Value`]: true,
					})}
				>
					${value}
				</span>
			`,
		)}
		${when(
			hasActions && selectionMode == "multiple",
			() => html`
				<div
					class=${classMap({
						[`${rootClass}Actions`]: true,
					})}
				>
					${Switch(
						{
							size,
							isChecked: isSelected,
							isDisabled,
							label: null,
							id: `menu-switch-${idx}`,
							customClasses: [`${rootClass}Switch`],
						},
						context,
					)}
				</div>
			`,
		)}
		${when(isDrillIn, () =>
			Icon(
				{
					iconName: iconWithScale(size, "ChevronRight"),
					setName: "ui",
					size,
					customClasses: [`${rootClass}Icon`, "spectrum-Menu-chevron"],
				},
				context,
			),
		)}
		${when(isCollapsible && items.length > 0, () =>
			Template(
				{
					items,
					isOpen,
					size,
					shouldTruncate,
				},
				context,
			),
		)}
	</li>
`;

export const MenuGroup = (
	{
		heading,
		id = getRandomId("menugroup"),
		idx = 0,
		items = [],
		isDisabled = false,
		isSelectable = false,
		isTraySubmenu = false,
		shouldTruncate = false,
		subrole = "menuitem",
		size = "m",
		customStyles = {},
	} = {},
	context = {},
) => html`
	<li id=${ifDefined(id)} role="presentation">
		${when(
			!isTraySubmenu,
			() => html`
				<span
					class=${classMap({
						["spectrum-Menu-sectionHeading"]: true,
						["spectrum-Menu-itemLabel--truncate"]: shouldTruncate,
					})}
					id=${ifDefined(id ?? `menu-heading-category-${idx}`)}
					aria-hidden="true"
				>
					${heading}
				</span>
			`,
			() => html`
				<div
					class=${classMap({
						["spectrum-Menu-back"]: true,
					})}
				>
					<button
						aria-label="Back to previous menu"
						class="spectrum-Menu-backButton"
						type="button"
						role="menuitem"
					>
						${Icon(
							{
								iconName: iconWithScale(size),
								setName: "ui",
								size,
								customClasses: ["spectrum-Menu-backIcon"],
							},
							context,
						)}
					</button>
					${when(
						heading,
						() => html`
							<span
								class=${classMap({
									["spectrum-Menu-sectionHeading"]: true,
									["spectrum-Menu-itemLabel--truncate"]: shouldTruncate,
								})}
								style=${styleMap(customStyles)}
								id=${id}
								aria-hidden="true"
							>
								${heading}
							</span>
						`,
					)}
				</div>
			`,
		)}
		${Template(
			{
				role: "group",
				subrole,
				labelledby: id,
				items,
				isDisabled,
				isSelectable,
				shouldTruncate: true,
				size,
			},
			context,
		)}
	</li>
`;

export const Template = (
	{
		rootClass = "spectrum-Menu",
		customClasses = [],
		customStyles = {},
		id = getRandomId("menu"),
		hasActions = false,
		hasDividers = false,
		isDisabled = false,
		isOpen = false,
		isTraySubmenu = false,
		items = [],
		labelledby = getRandomId("menu-label"),
		role = "menu",
		selectionMode = "none",
		singleItemValue,
		shouldTruncate,
		size = "m",
		subrole = "menuitem",
	} = {},
	context = {},
) => {
	const menuMarkup = html`
		<ul
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-selectable": selectionMode === "single",
				"is-selectableMultiple": selectionMode === "multiple",
				"is-open": isOpen,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role=${ifDefined(role)}
			aria-labelledby=${ifDefined(labelledby)}
			aria-disabled=${isDisabled ? "true" : "false"}
			style=${styleMap(customStyles)}
		>
			${items.map((i, idx) => {
				if (i.type === "divider")
					return html`${hasDividers
						? Divider({
								tag: "li",
								size: "s",
								customClasses: [`${rootClass}-divider`],
							})
						: ""}`;
				else if (i.heading || i.isTraySubmenu)
					return MenuGroup(
						{
							...i,
							subrole,
							size,
							selectionMode,
							isTraySubmenu,
							shouldTruncate,
						},
						context,
					);
				else
					return MenuItem(
						{
							...i,
							hasActions,
							idx,
							isDisabled: isDisabled || i.isDisabled,
							role: subrole,
							rootClass: `${rootClass}-item`,
							selectionMode,
							shouldTruncate,
							size,
							value: singleItemValue || i.value,
						},
						context,
					);
			})}
		</ul>
	`;

	if (isTraySubmenu) return Tray({ content: [menuMarkup] }, context);
	return menuMarkup;
};

export const MenuWithVariants = Variants({
	Template,
	// This is validated at the Menu Item level
	withSizes: false,
	testData: [
		{
			testHeading: "No selection",
			selectionMode: "none",
		},
		{
			testHeading: "With dividers",
			selectionMode: "none",
			hasDividers: true,
		},
		{
			testHeading: "Single selection",
			selectionMode: "single",
		},
		{
			testHeading: "Multi selection",
			selectionMode: "multiple",
		},
		{
			testHeading: "Collapsible",
			shouldTruncate: true,
			items: [
				{
					label: "Web Design",
					iconName: "DesktopAndMobile",
					isCollapsible: true,
					isOpen: true,
					items: [
						{
							label: "Web Large",
							itemValue: "1920 x 1080",
						},
						{
							label: "Web Medium",
							itemValue: "1366 x 768",
						},
						{
							label: "Web Small",
							itemValue: "1280 x 800",
						},
					],
				},
				{
					label: "Mobile",
					isCollapsible: true,
					isOpen: true,
					items: [
						{
							label: "Web Large",
							itemValue: "1920 x 1080",
						},
						{
							label: "Web Medium",
							itemValue: "1366 x 768",
						},
						{
							label: "Web Small",
							itemValue: "1280 x 800",
						},
					],
				},
				{
					label: "Tablet",
					iconName: "DeviceTablet",
					isCollapsible: true,
					items: [{ label: "Defaults to not visible within closed item" }],
				},
				{
					label: "Social Media",
					iconName: "ShareAndroid",
					isCollapsible: true,
					items: [{ label: "Defaults to not visible within closed item" }],
				},
				{
					label: "Watches",
					iconName: "Watch",
					isCollapsible: true,
					items: [{ label: "Defaults to not visible within closed item" }],
				},
			],
		},
	],
	stateData: [],
});

export const MenuItemGroup = Variants({
	Template: (args, context) => html`
		<ul
			class=${classMap({
				"spectrum-Menu": true,
				[`spectrum-Menu--size${args.size?.toUpperCase()}`]:
					typeof args.size !== "undefined",
				"is-selectable": args.selectionMode === "single",
				"is-selectableMultiple": args.selectionMode === "multiple",
				"is-open": args.isOpen,
			})}
		>
			${MenuItem(
				{
					...args,
					rootClass: "spectrum-Menu-item",
				},
				context,
			)}
		</ul>
	`,
	testData: [
		{
			testHeading: "No selection",
			description: undefined,
			value: undefined,
		},
		{
			testHeading: "With description",
		},
		{
			testHeading: "Single selection: selected",
			description: undefined,
			value: undefined,
			selectionMode: "single",
			isSelected: true,
		},
		{
			testHeading: "Single selection: unselected",
			description: undefined,
			value: undefined,
			selectionMode: "single",
			label: "Share",
			iconName: "Share",
		},
		{
			testHeading: "Multi-selection: selected",
			description: undefined,
			value: undefined,
			selectionMode: "multiple",
			isSelected: true,
		},
		{
			testHeading: "Multi-selection: unselected",
			selectionMode: "multiple",
			label: "Share",
			iconName: "Share",
		},
		{
			testHeading: "Multi-selection: switches",
			selectionMode: "multiple",
			hasActions: true,
			value: undefined,
			description: undefined,
		},
		{
			testHeading: "Multi-selection: switches + labels",
			selectionMode: "multiple",
			hasActions: true,
			label: "Menu item",
		},
		{
			testHeading: "Truncation",
			description: "A longer description that will truncate",
			shouldTruncate: true,
			value: undefined,
			customStyles: {
				"inline-size": "150px",
			},
		},
	],
	stateData: [
		{
			testHeading: "Hover",
			isHovered: true,
		},
		{
			testHeading: "Active (Down)",
			isActive: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		// {
		// 	testHeading: "Selected",
		// 	isSelected: true,
		// },
		// {
		// 	testHeading: "Selected and disabled",
		// 	isSelected: true,
		// 	isDisabled: true,
		// },
		// {
		// 	testHeading: "Collapsible",
		// 	isCollapsible: true,
		// },
		// {
		// 	testHeading: "Drill-in",
		// 	isDrillIn: true,
		// },
		// {
		// 	testHeading: "Highlighted",
		// 	isHighlighted: true,
		// },
	],
});

export const MenuTraySubmenu = Variants({
	Template,
	withSizes: false,
	testData: [{}],
});
