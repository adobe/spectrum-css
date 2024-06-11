import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { Template as Tray } from "@spectrum-css/tray/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

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
          iconName: isCollapsible ? "ChevronRight" : "Checkmark",
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
        iconName: "ChevronRight",
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

/**
 * Get the tray submenu back arrow name with scale number (defined in design spec).
 */
const backArrowWithScale = (size = "m", iconName = "ArrowLeft") => {
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
              iconName: backArrowWithScale(size),
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
      style=${maxInlineSize ? `max-inline-size: ${maxInlineSize};` : styleMap(customStyles)}
    >
      ${items.map((i, idx) => {
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
      })}
    </ul>
  `;

	if (isTraySubmenu) return Tray({ content: [menuMarkup] }, context);
	return menuMarkup;
};
