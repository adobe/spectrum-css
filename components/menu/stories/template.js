import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { Template as Tray } from "@spectrum-css/tray/stories/template.js";

import "../index.css";

export const MenuItem = ({
	rootClass,
	label,
	description,
	iconName,
	isHighlighted = false,
	isActive = false,
	isSelected = false,
	isDisabled = false,
	isChecked = false,
	isFocused = false,
	isDrillIn = false,
	isCollapsible = false,
	isOpen = false,
	shouldTruncate,
	role = "menuitem",
	items = [],
	size,
	id,
	idx = 0,
	hasActions,
	selectionMode,
	value,
}) => html`
  <li
    class=${classMap({
      [`${rootClass}`]: true,
      "is-highlighted": isHighlighted,
      "is-active": isActive,
      "is-focused": isFocused,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
      [`${rootClass}--drillIn`]: isDrillIn,
      [`${rootClass}--collapsible`]: isCollapsible,
      "is-open": isOpen,
    })}
    id=${ifDefined(id)}
    role=${ifDefined(role)}
    aria-selected=${isSelected ? "true" : "false"}
    aria-disabled=${isDisabled ? "true" : "false"}
    tabindex=${ifDefined(!isDisabled ? "0" : undefined)}>
    ${when(isCollapsible, () => Icon({
      iconName: "ChevronRight100",
      size,
      customClasses: [
        `${rootClass}Icon`,
        "spectrum-Menu-chevron",
      ],
    }))}
    ${when(iconName, () => Icon({
      iconName,
      size,
      customClasses: [
        `${rootClass}Icon`,
        `${rootClass}Icon--workflowIcon`
      ]
    }))}
    ${when(isCollapsible, () => html`
      <span class=${classMap({
      [`${rootClass}-sectionHeading`]: true,
      [`${rootClass}-itemLabel--truncate`]: shouldTruncate,
      })}>${label}</span>
    `)}
    ${when(selectionMode != "multiple" && !isCollapsible, () => html`
      <span class=${classMap({
        [`${rootClass}Label`]: true,
        ["spectrum-Switch-label"]: hasActions,
        ["spectrum-Menu-itemLabel--truncate"]: shouldTruncate,
        })}>
        ${label}
      </span>
    `)}
    ${when(typeof description != "undefined", () => html`
      <span class=${classMap({
        [`${rootClass}Description`]: true,
      })}>${description}</span>
    `)}
    ${when(isDrillIn, () => Icon({
      iconName: "ChevronRight100",
      size,
      customClasses: [
        `${rootClass}Icon`,
        "spectrum-Menu-chevron",
      ],
    }))}
    ${when(selectionMode == "multiple", () =>  html`
      ${Checkbox({
        size,
        isEmphasized: true,
        isChecked: isSelected,
        isDisabled,
        id: `menu-checkbox-${idx}`,
        customClasses: [
          `${rootClass}Checkbox`,
        ],
      })}
        <span class=${classMap({
          [`${rootClass}-itemLabel`]: true,
          [`${rootClass}-itemLabel--truncate`]: shouldTruncate,
        })}>${label}</span>
        `)}
      ${when(isChecked && selectionMode == "single", () => Icon({
        iconName: "Checkmark100",
        size,
        customClasses: [
          `${rootClass}Icon`,
          "spectrum-Menu-checkmark",
        ],
      }))}
      ${when(value, () => html`
        <span class=${classMap({
          [`${rootClass}Value`]: true,
        })}>${value}</span>
      `)}
      ${when(hasActions, () => html`
        <div class=${classMap({
          [`${rootClass}Actions`]: true,
        })}>
          ${Switch({
            size,
            isChecked: isSelected,
            isDisabled,
            label: null,
            id: `menu-switch-${idx}`,
            customClasses: [
              `${rootClass}Switch`,
            ],
          })}
        </div>
      `)}
    ${when(isCollapsible && items.length > 0, () => Template({ items, isOpen, size, shouldTruncate }))}
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
	rootClass,
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
}) => html`
  <li
    id=${ifDefined(id)}
    role="presentation"
  >
    ${when(!isTraySubmenu,
      () => html`
        <span
          class=${classMap({
            [`${rootClass}-itemLabel`]: true,
            [`${rootClass}-itemLabel--truncate`]: shouldTruncate,
          })}
          id=${id ?? `menu-heading-category-${idx}`}
          aria-hidden="true"
        >${heading}</span>`,
      () => html`
        <div class=${classMap({ [`${rootClass}-back`]: true })}>
          <button aria-label="Back to previous menu" class=${classMap({ [`${rootClass}-backButton`]: true })} type="button" role="menuitem">
            ${Icon({
              iconName: backArrowWithScale(size),
              size,
              customClasses: [`${rootClass}-backIcon`]
            })}
          </button>
          ${when(heading, () => html`
            <span
              class=${classMap({
                [`${rootClass}-sectionHeading`]: true,
                [`${rootClass}-itemLabel--truncate`]: true,
              })}"spectrum-Menu-sectionHeading ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }"
              style=${maxInlineSize ? `max-inline-size: ${maxInlineSize}px;` : ""}
              id=${id ?? `menu-heading-category-${idx}`}
              aria-hidden="true"
              >${heading}</span>
          `)}
        </div>
      `
    )}
    ${Template({
      role: "group",
      subrole,
      labelledby: id ?? `menu-heading-category-${idx}`,
      items,
      isDisabled,
      isSelectable,
      shouldTruncate: true,
      maxInlineSize,
      size,
    })}
  </li>
`;


export const Template = ({
	rootClass = "spectrum-Menu",
	labelledby,
	customClasses = [],
	customStyles = {},
	size,
	isDisabled = false,
	maxInlineSize,
	shouldTruncate,
	selectionMode = "none",
	isOpen = false,
	hasActions = false,
	isTraySubmenu = false,
	items = [],
	role = "menu",
	subrole = "menuitem",
	id,
}) => {
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
          return Divider({
            tag: "li",
            size: "s",
            customClasses: [`${rootClass}-divider`],
          });
        else if (i.heading || i.isTraySubmenu)
          return MenuGroup({
            ...i,
            subrole,
            size,
            rootClass,
            selectionMode,
            isTraySubmenu,
            shouldTruncate
          });
        else
          return MenuItem({
            ...i,
            idx,
            rootClass: `${rootClass}-item`,
            role: subrole,
            size,
            selectionMode,
            shouldTruncate,
            hasActions,
          });
      })}
    </ul>
  `;

	if (isTraySubmenu) {
		return Tray({ content: [menuMarkup] });
	}
	return menuMarkup;
};
