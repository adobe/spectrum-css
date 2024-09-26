import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { Template as Tray } from "@spectrum-css/tray/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

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

export const MenuItem = ({
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
} = {}, context = {}) => {
	return html`
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
};

export const MenuGroup = ({
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
} = {}, context = {}) => {
	return html`
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
};

export const Template = ({
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
} = {}, context = {}) => {
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

	if (isTraySubmenu) return Tray({
		isOpen: true,
		content: [
			menuMarkup
		],
	}, context);

	return menuMarkup;
};

export const DisabledItemGroup = (args, context) => {
	const groupData = [
		{
			heading: "Menu with icons",
			items: [
				{
					label: "Cut",
					iconName: "Cut",
				},
				{
					label: "Copy",
					iconName: "Copy",
				},
				{
					label: "Paste",
					iconName: "Paste",
					isDisabled: true,
				}
			],
		},
		{
			heading: "Menu with descriptions",
			items: [
				{
					label: "Quick export",
					description: "Share a snapshot",
				},
				{
					label: "Open a copy",
					description: "Illustrator for iPad",
				},
				{
					label: "Share link",
					description: "Enable comments and download",
					isDisabled: true,
				}
			]
		},
		{
			heading: "Menu with icons & descriptions",
			items: [
				{
					label: "Quick export",
					description: "Share a snapshot",
					iconName: "Export",
				},
				{
					label: "Open a copy",
					description: "Illustrator for iPad",
					iconName: "FolderOpen",
				},
				{
					label: "Share link",
					description: "Enable comments and download",
					iconName: "Share",
					isDisabled: true,
				}
			]
		}
	];
	
	return Container({
		withBorder: false,
		content: groupData.map((group) => html`
			${Container({
				heading: group.heading,
				content: html`
					${Template({
						...args,
						context,
						shouldTruncate: group.shouldTruncate || false,
						items: group.items,
					})}
				`
			})}	
		`)
	});
};

export const OverflowGroup = (args, context) => {
	const groupData = [
		{
			heading: "Text overflow without descriptions",
			items: [
				{ label: "Small (works best for mobile phones)" },
				{ label: "Medium (all purpose)" },
				{ label: "Large (works best for printing)" }
			],
		},
		{
			heading: "Text overflow with descriptions",
			items: [
				{
					label: "Small (works best for mobile phones)",
					description: "A small description about small is here",
				},
				{
					label: "Medium (all purpose)",
					description: "A medium description about medium is here",
				},
				{
					label: "Large (works best for printing)",
					description: "A large description about large is here",
				}
			],
		},
		{
			heading: "Text truncation with descriptions",
			shouldTruncate: true,
			items: [
				{
					label: "Small (works best for mobile phones)",
					description: "A small description about small is here",
				},
				{
					label: "Medium (all purpose)",
					description: "A medium description about medium is here",
				},
				{
					label: "Large (works best for printing)",
					description: "A large description about large is here",
				}
			],
		},
		{
			heading: "Text truncation for section headings",
			shouldTruncate: true,
			items: [
				{
					idx: 1,
					heading: "Section heading with longer text that truncates",
					id: "menu-heading",
					items: [
						{
							label: "Small (works best for mobile phones)",
						},
						{
							label: "Medium (all purpose)",
						},
						{
							label: "Large (works best for printing)",
						}
					]
				}
			]
		},
		{
			heading: "Text truncation with drill-ins and values",
			shouldTruncate:true,
			items: [
				{
					label: "Quick export truncated text",
					iconName: "Export",
					description: "Share a low-res snapshot",
				},
				{
					label: "Open a copy truncated text",
					iconName: "Copy",
					description: "Illustrator for iPad or desktop",
					isDrillIn: true,
				},
				{
					label: "Preview timelapse truncated text",
					iconName: "Pending",
					value: "Value",
				}
			]
		}
	];

	return Container({
		withBorder: false,
		content: groupData.map((group) => html`
			${Container({
				heading: group.heading,
				content: html`
					${Template({
						...args,
						context,
						shouldTruncate: group.shouldTruncate || false,
						items: group.items,
					})}
				`
			})}	
		`)
	});
};

export const SelectionGroup = (args, context) => {
	const groupData = [
		{
			heading: "No selection",
			items: [
				{ label: "Cut" },
				{ label: "Copy" },
				{ label: "Paste" },
			],
		},
		{
			heading: "Single selection",
			selectionMode: "single",
			items: [
				{
					label: "Marquee",
					isSelected: true,
				},
				{
					label: "Add",
				},
				{
					label: "Subtract",
				}
			],
		},
		{
			heading: "Multiple selection with checkboxes",
			selectionMode: "multiple",
			items: [
				{
					label: "Marquee",
					isSelected: true,
				},
				{
					label: "Add",
				},
				{
					label: "Subtract",
				}
			],
		},
		{
			heading: "Multiple selection with checkboxes and icons",
			selectionMode: "multiple",
			items: [
				{
					label: "Marquee",
					iconName: "Selection",
					isSelected: true,
				},
				{
					label: "Add",
					iconName: "SelectAdd",
				},
				{
					label: "Subtract",
					iconName: "SelectSubtract",
				}
			],
		},
		{
			heading: "Multiple selection with switches",
			selectionMode: "multiple",
			hasActions: true,
			items: [
				{
					label: "Guides",
					isSelected: true,
				},
				{
					label: "Grid",
				},
				{
					label: "Rulers",
					isSelected: true,
				}
			],
		},
		{
			heading: "Multiple selection with switches and icons",
			selectionMode: "multiple",
			hasActions: true,
			items: [
				{
					label: "Marquee",
					iconName: "Selection",
					isSelected: true,
				},
				{
					label: "Add",
					iconName: "SelectAdd",
				},
				{
					label: "Subtract",
					iconName: "SelectSubtract",
				}
			],
		},
	];

	return Container({
		withBorder: false,
		content: groupData.map((group) => html`${Container({
			heading: group.heading,
			content: html`
			${Template({
				...args,
				context,
				selectionMode: group.selectionMode || "none",
				hasActions: group.hasActions || false,
				items: group.items,
			})}
			`
		})}`)
	});
};

export const SubmenuInPopover = (context) => html`${Popover({
		isOpen: true,
		position: "end-top",
		customStyles: {
			"inline-size": "200px",
		},
		trigger: (args, context) => ActionButton({
			label: "Settings",
			iconName: "Settings",
			...args,
		}, context),
		content: [
			(args, context) => Template({
				items: [
					{
						label: "Language",
						value: "English (US)",
						isDrillIn: true,
						isHovered: true,
					},
					{
						label: "Notifications",
					},
					{
						label: "Show grid",
					}
				],
				...args
			}, context),
			(args, context) => Popover({
				isOpen: true,
				position: "end-top",
				customStyles: {
					"--mod-popover-animation-distance": "-4px",
					top: "-105px",
					"inline-size": "120px",
				},
				content: [
					(args, context) => Template({
						selectionMode: "single",
						items: [
							{
								label: "Deutsch",
							},
							{
								label: "English (US)",
								isSelected: true,
							},
							{
								label: "Español",
							},
							{
								label: "Français",
							},
							{
								label: "Italiano",
							},
							{
								label: "日本語",
							}
						],
						...args,
					}, context)
				],
				...args,
			}, context)
		],
	}, context)
	}`;
