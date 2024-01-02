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

const MenuItem = ({
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
  maxInlineSize,
  role = "menuitem",
  items = [],
  size,
  id,
  idx = 0,
  hasActions,
  selectionMode,
  value,
  ...globals
}) => html`<li
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
    ...globals,
    uiIconName: "ChevronRight",
    size,
    customClasses: [
      `${rootClass}Icon`,
      "spectrum-Menu-chevron",
    ],
  }))}
  ${when(iconName, () => Icon({
    ...globals,
    iconName,
    size,
    customClasses: [
      `${rootClass}Icon`,
      `${rootClass}Icon--workflowIcon`
    ]
  }))}
  ${when(isCollapsible, () => html`<span class="spectrum-Menu-sectionHeading">${label}</span>`)}
  ${when(selectionMode != "multiple" && !isCollapsible, () =>
    html`<span class=${classMap({
      [`${rootClass}Label`]: true,
      ['spectrum-Switch-label']: hasActions,
    })}>${label}</span>`)}
  ${when(typeof description != "undefined", () => html`<span class="${rootClass}Description">${description}</span>`)}
  ${when(isDrillIn, () => Icon({
    ...globals,
    uiIconName: "ChevronRight100",
    size,
    customClasses: [
      `${rootClass}Icon`,
      "spectrum-Menu-chevron",
    ],
  }))}
  ${when(selectionMode == "multiple", () =>
    Checkbox({
      ...globals,
      size,
      isEmphasized: true,
      isChecked: isSelected,
      label: label,
      id: `menu-checkbox-${idx}`,
      customClasses: [
        `${rootClass}Checkbox`,
      ],
    })
  )}
  ${when(isChecked && selectionMode == "single", () =>
    Icon({
      ...globals,
      uiIconName: "Checkmark100",
      size,
      customClasses: [
        `${rootClass}Icon`,
        "spectrum-Menu-checkmark",
      ],
    })
  )}
  ${when(value, () => html`<span class="${rootClass}Value">${value}</span>`)}
  ${when(hasActions, () =>
    html`<div class="${rootClass}Actions">
      ${Switch({
        ...globals,
        size,
        isChecked: isSelected,
        label: null,
        id: `menu-switch-${idx}`,
        customClasses: [
          `${rootClass}Switch`,
        ],
      })}
    </div>`
  )}
  ${when(isCollapsible && items.length > 0, () => Template({ ...globals, items, isOpen, size }))}
</li>`;

const MenuGroup = ({
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
}) => html`
  <li
    id=${ifDefined(id)}
    role="presentation"
  >
    ${!isTraySubmenu
      ? html`<span
          class="spectrum-Menu-sectionHeading ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }"
          id=${id ?? `menu-heading-category-${idx}`}
          aria-hidden="true"
        >${heading}</span>`
      : html`<div class="spectrum-Menu-back">
          <button aria-label="Back to previous menu" class="spectrum-Menu-backButton" type="button" role="menuitem">
            ${Icon({
              ...globals,
              uiIconName: "ArrowLeft",
              size,
              customClasses: [`spectrum-Menu-backIcon`]
            })}
          </button>
          ${heading
          ? html`<span
              class="spectrum-Menu-sectionHeading ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }"
              style=${maxInlineSize ? `max-inline-size: ${maxInlineSize}px;` : ""}
              id=${id ?? `menu-heading-category-${idx}`}
              aria-hidden="true"
              >${heading}</span
            >`
          : ""}
        </div>`
    }
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
    })}
  </li>
`;

const MenuWrapper = ({
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
  ...globals
}) => html`
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
            ...globals,
            tag: "li",
            size: "s",
            customClasses: [`${rootClass}-divider`],
          });
        else if (i.heading || i.isTraySubmenu)
          return MenuGroup({
            ...globals,
            ...i,
            subrole,
            size,
            selectionMode,
            isTraySubmenu,
            shouldTruncate
          });
        else
          return MenuItem({
            ...globals,
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
    </ul>`;

export const Template = ({
  customTrayStyles = {},
  ...args
}) => {
  if (!args?.items || args.items.length === 0) {
    console.warn("[Menu] No items provided.");
    return html``;
  }

  if (!args.isTraySubmenu) return MenuWrapper(args);

  return Tray({
    content: [MenuWrapper(args)],
    customStyles: customTrayStyles,
  });
};
