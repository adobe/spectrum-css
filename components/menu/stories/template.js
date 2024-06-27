import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { markupWithLabel } from "@spectrum-css/preview/types";
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

export const MenuItem = ({
	description,
	iconName,
	hasActions,
	id,
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
	label,
	role = "menuitem",
	rootClass,
	shouldTruncate,
	size,
	selectionMode,
	value,
	...globals
}, context) => html`
  <li
    class=${classMap({
      [`${rootClass}`]: true,
      "is-highlighted": isHighlighted,
      "is-active": isActive,
      "is-focus-visible": isFocused,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
      "is-hover": isHovered,
      [`${rootClass}--drillIn`]: isDrillIn,
      [`${rootClass}--collapsible`]: isCollapsible,
      "is-open": isOpen,
    })}
    id=${ifDefined(id)}
    role=${ifDefined(role)}
    aria-selected=${isSelected ? "true" : "false"}
    aria-disabled=${isDisabled ? "true" : "false"}
    tabindex=${ifDefined(!isDisabled ? "0" : undefined)}>
      ${when(
        isCollapsible || (selectionMode == "single" && isSelected),
        () => Icon({
          ...globals,
          iconName: iconWithScale(size, isCollapsible ? "ChevronRight" : "Checkmark"),
          size,
          customClasses: [
            `${rootClass}Icon`,
            isCollapsible ? "spectrum-Menu-chevron" : "spectrum-Menu-checkmark",
          ],
        }, context)
      )}
      ${when(selectionMode === "multiple" && !hasActions, () => Checkbox({
          ...globals,
          size,
          isEmphasized: true,
          isChecked: isSelected,
          isDisabled,
          id: `menu-checkbox-${idx}`,
          customClasses: [
            `${rootClass}Checkbox`,
          ],
        }, context)
      )}
      ${when(iconName, () => Icon({
        ...globals,
        iconName,
        size,
        customClasses: [
          `${rootClass}Icon`,
          `${rootClass}Icon--workflowIcon`
        ]
      }, context))}
      ${when(isCollapsible, () => html`
        <span class=${classMap({
          ["spectrum-Menu-sectionHeading"]: true,
          [`${rootClass}Label--truncate`]: shouldTruncate,
        })}>
          ${label}
        </span>
      `, () => html`
        <span class=${classMap({
          [`${rootClass}Label`]: true,
          ["spectrum-Switch-label"]: hasActions,
          [`${rootClass}Label--truncate`]: shouldTruncate,
        })}>
          ${label}
        </span>
      `)}
      ${when(description, () => html`
        <span class=${classMap({
          [`${rootClass}Description`]: true
        })}>
          ${description}
        </span>
      `)}
      ${when(value, () => html`
        <span class=${classMap({
          [`${rootClass}Value`]: true
        })}>
          ${value}
        </span>
      `)}
      ${when(hasActions && selectionMode == "multiple", () => html`
        <div class=${classMap({
          [`${rootClass}Actions`]: true
        })}>
          ${Switch({
              ...globals,
              size,
              isChecked: isSelected,
              isDisabled,
              label: null,
              id: `menu-switch-${idx}`,
              customClasses: [
                `${rootClass}Switch`,
              ],
            }, context)}
        </div>
      `)}
      ${when(isDrillIn, () => Icon({
        ...globals,
        iconName: iconWithScale(size, "ChevronRight"),
        size,
        customClasses: [
          `${rootClass}Icon`,
          "spectrum-Menu-chevron",
        ],
      }, context))}
      ${when(isCollapsible && items.length > 0, () => Template({
        ...globals,
        items,
        isOpen,
        size,
        shouldTruncate
      }, context))}
  </li>
`;

export const MenuGroup = ({
	heading,
	id,
	idx = 0,
	items = [],
	isDisabled = false,
	isSelectable = false,
	isTraySubmenu = false,
	shouldTruncate,
	maxInlineSize,
	subrole,
	size,
	...globals
}, context) => html`
  <li
    id=${ifDefined(id)}
    role="presentation"
  >
    ${when(!isTraySubmenu, () => html`
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
    `, () => html`
        <div
          class=${classMap({
            ["spectrum-Menu-back"]: true
          })}
        >
          <button aria-label="Back to previous menu" class="spectrum-Menu-backButton" type="button" role="menuitem">
            ${Icon({
              ...globals,
              iconName: iconWithScale(size),
              size,
              customClasses: ["spectrum-Menu-backIcon"]
            }, context)}
          </button>
          ${when(heading, () => html`
            <span
              class=${classMap({
                ["spectrum-Menu-sectionHeading"]: true,
                ["spectrum-Menu-itemLabel--truncate"]: shouldTruncate,
              })}
              style=${styleMap({
                "max-inline-size": maxInlineSize && `${maxInlineSize}px`,
              })}
              id=${ifDefined(id ?? `menu-heading-category-${idx}`)}
              aria-hidden="true"
            >
              ${heading}
            </span>
          `)}
        </div>
    `)}
    ${Template({
      ...globals,
      role: "group",
      subrole,
      labelledby: id ?? `menu-heading-category-${idx}`,
      items,
      isDisabled,
      isSelectable,
      shouldTruncate: true,
      maxInlineSize,
      size,
    }, context)}
  </li>
`;

export const Template = ({
	customClasses = [],
	customStyles = {},
	hasActions,
	hasDividers = false,
	id,
	isDisabled = false,
	isItemActive = false,
	isItemFocused = false,
	isItemHovered = false,
	isItemSelected = false,
	isOpen = false,
	isTraySubmenu = false,
	itemIcon,
	items = [],
	labelledby,
	maxInlineSize,
	role = "menu",
	rootClass = "spectrum-Menu",
	selectionMode = "none",
	singleItemDescription,
	singleItemValue,
	shouldTruncate,
	size,
	subrole = "menuitem",
	...globals
}, context) => {
	const menuMarkup = html`
    <ul
      class=${classMap({
        [rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        "is-selectable": selectionMode === "single",
        "is-selectableMultiple": selectionMode === "multiple",
        "is-open": isOpen,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      aria-labelledby=${ifDefined(labelledby)}
      aria-disabled=${isDisabled ? "true" : "false"}
      style=${styleMap({
        "max-inline-size": maxInlineSize,
        ...customStyles
      })}
    >
      ${when(items, () => items.map((i, idx) => {
        if (i.type === "divider")
          return html`${hasDividers ? Divider({
            ...globals,
            tag: "li",
            size: "s",
            customClasses: [`${rootClass}-divider`],
          }) : ""}`;
        else if (i.heading || i.isTraySubmenu)
          return MenuGroup({
            ...i,
            ...globals,
            subrole,
            size,
            selectionMode,
            isTraySubmenu,
            shouldTruncate
          }, context);
        else
          return MenuItem({
            ...globals,
            ...i,
            description: singleItemDescription || i.description,
            hasActions,
            iconName: itemIcon || i.iconName,
            idx,
            isActive: isItemActive,
            isDisabled: isDisabled || i.isDisabled,
            isFocused: isItemFocused || i.isFocused,
            isHovered: isItemHovered,
            isSelected: isItemSelected || i.isSelected,
            role: subrole,
            rootClass: `${rootClass}-item`,
            selectionMode,
            shouldTruncate,
            size,
            value: singleItemValue || i.value,
          }, context);
      }))}
    </ul>
  `;

	if (isTraySubmenu) return Tray({ content: [menuMarkup] }, context);
	return menuMarkup;
};

const Sizes = (args, context) => ["s", "m", "l", "xl"].map((size) => markupWithLabel({
	s: "Small",
	m: "Medium",
	l: "Large",
	xl: "Extra-large",
}[size], Template({ ...args, size }, context), { size: "s" }), { withTestBorder: true });

const States = (args, context) => {
	let stateData = [
		{
			title: "Default",
			args: {},
		},
		{
			title: "Hover",
			args: { ...args, isItemHovered: true },
		},
		{
			title: "Active (Down)",
			args: { ...args, isItemActive: true },
		},
		{
			title: "Focused",
			args: { ...args, isItemFocused: true },
		},
		{
			title: "Disabled",
			args: { ...args, isDisabled: true },
		}
	];

	// if testing hover/active/focus feels too heavy handed, we can remove those states
	if (args.firstAndLast) {
		stateData = [stateData[0], stateData[stateData.length - 1]];
	}

	return stateData.map((stateItem) => markupWithLabel(`${args.titlePrefix ? args.titlePrefix + ", ": ""}${stateItem.title}`, Template({...args, ...stateItem.args}, context), { size: "s" }));
};

const SingleItemSelectedStates = (args, context) => {
	return html`
			${States({
				...args,
				items: [{ label: "Not selected", isSelected: false, ...args.items[0] }],
				titlePrefix: "Not selected",
				firstAndLast: true,
			}, context)}
			${States({
				...args,
				items: [{ label: "Selected item", isSelected: true, ...args.items[0] }],
				titlePrefix: "Selected",
				firstAndLast: true,
			}, context)}
	`;
};

const MultiCheckboxSelectedStates = (args, context) => {
	return html`
		${States({
			...args,
			items: [{ label: "Not selected", isSelected: false, ...args.items[0]}],
			titlePrefix: "Not Selected",
			firstAndLast: true,
		}, context)}
		${States({
			...args,
			items: [{ label: "Selected item", isSelected: true, ...args.items[0]}],
			titlePrefix: "Selected",
			firstAndLast: true,
		}, context)}
	`;
};

const WithValueStates = (args, context) => {
	const baseValueArgs = {...args, hasValue: true, singleItemValue: "Value"};
	return [
		{
			stateTitle: "With value",
			args: { ...baseValueArgs },
		},
		{
			stateTitle: "With value, disabled",
			args: { ...baseValueArgs, isDisabled: true },
		},
		{
			stateTitle: "With value and switch",
			args: { ...baseValueArgs, hasActions: true },
		},
		{
			stateTitle: "With value, truncated label",
			args: { ...baseValueArgs, shouldTruncate: true, maxInlineSize: "195px", items: [{ label: "Truncated label on menu item" }] },
		},
	].map((valueItem) => markupWithLabel(valueItem.stateTitle, Template({ ...args, ...valueItem.args }, context), { size: "s" }));
};

export const MenuItemStates = (args, context) => html`
  <div style=${styleMap({
    "display": window.isChromatic() ? undefined : "none"
  })}>
    ${[
      {
        sectionTitle: "No selection",
        sectionMarkup: States(args),
      },
      {
        sectionTitle: "With item description and truncation",
        sectionMarkup: States({...args, shouldTruncate: true, maxInlineSize: "150px", items: [{ label: "This is a longer menu item that will truncate", description: "This is a description of the menu item"}]}),
      },
      {
        sectionTitle: "Single selection",
        sectionMarkup: SingleItemSelectedStates({...args, selectionMode: "single" }),
      },
      {
        sectionTitle: "Single selection with icon",
        sectionMarkup: SingleItemSelectedStates({...args, selectionMode: "single", items: [{ label: "With icon", iconName: "Share" }] }),
      },
      {
        sectionTitle: "Multi-selection with checkboxes",
        sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple"}),
      },
      {
        sectionTitle: "Multi-selection with checkboxes and icon",
        sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple", items: [{ label: "With icon", iconName: "Share" }]}),
      },
      {
        sectionTitle: "Multi-selection with switches",
        sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple", hasActions: true}),
      },
      {
        sectionTitle: "Multi-selection with switches and switch label",
        sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple", hasActions: true, items: [{ label: "Menu item", value: "switch label"}]}),
      },
      {
        sectionTitle: "With values",
        sectionMarkup: WithValueStates(args),
      },
      {
        sectionTitle: "Sizes",
        sectionMarkup: Sizes({ ...args, selectionMode: "single", items: [{ label: "With sizing", isSelected: true, iconName: "Share" }] }),
      },
    ].map((sectionItem) => markupWithLabel(sectionItem.sectionTitle, sectionItem.sectionMarkup, { withTestBorder: true }))}
  </div>
  <div style=${styleMap({
    "display": window.isChromatic() ? "none" : undefined
  })}>
    ${Template(args, context)}
  </div>
`;

export const Variants = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? undefined : "none"
	})}>
		${[
			{
				stateTitle: "No selection",
				args: { ...args, selectionMode: "none" },
			},
			{
				stateTitle: "With dividers",
				args: { ...args, selectionMode: "none", hasDividers: true },
			},
			{
				stateTitle: "Single selection",
				args: { ...args, selectionMode: "single" },
			},
			{
				stateTitle: "Multi selection",
				args: { ...args, selectionMode: "multiple" },
			},
		].map((item) => html`
			${markupWithLabel(item.stateTitle, Template({...args, ...item.args }, context), { withTestBorder: true })}
		`)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined
	})}>
		${Template(args, context)}
	</div>
`;
