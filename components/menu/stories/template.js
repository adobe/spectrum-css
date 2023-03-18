import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { repeat } from "lit-html/directives/repeat.js";

import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";
import "../skin.css";

export const MenuItem = ({
  rootClass,
  label,
  iconName,
  isHighlighted = false,
  isActive = false,
  isSelected = false,
  isDisabled = false,
  isChecked = false,
  isFocused = false,
  role = "menuitem",
  id,
  ...globals
}) => html`
    <li
      class=${classMap({
        [`${rootClass}`]: true,
        "is-highlighted": isHighlighted,
        "is-active": isActive,
        "is-focused": isFocused,
        "is-selected": isSelected,
        "is-disabled": isDisabled,
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      aria-selected=${isSelected ? "true" : "false"}
      aria-disabled=${isDisabled ? "true" : "false"}
      tabindex=${ifDefined(!isDisabled ? "0" : undefined)}>
      ${iconName ? Icon({ ...globals, iconName, customClasses: [`${rootClass}Icon`] }) : ""}
      <span class="${rootClass}Label">${label}</span>
      ${isChecked
        ? Icon({
            ...globals,
            iconName: "Checkmark100",
            customClasses: ["spectrum-Menu-checkmark", `${rootClass}Icon`],
          })
        : ""}
    </li>
  `;

export const MenuGroup = ({
  heading,
  id,
  idx = 0,
  items = [],
  isDisabled = false,
  isSelectable = false,
  subrole,
  ...globals
}) => html`
    <li
      id=${ifDefined(id)}
      role="presentation">
      ${heading
        ? html`<span
            class="spectrum-Menu-sectionHeading"
            id=${id ?? `menu-heading-category-${idx}`}
            aria-hidden="true"
            >${heading}</span
          >`
        : ""}
      ${Template({
        ...globals,
        role: "group",
        subrole,
        labelledby: id,
        items,
        isDisabled,
        isSelectable,
      })}
    </li>
  `;

export const Submenu = ({
  rootClass,
  label,
  items = [],
  isOpen = false,
  isDisabled = false,
  isFocused = false,
  role = "menuitem",
  id,
  ...globals
}) => html`
    <li
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        "is-disabled": isDisabled,
        "is-focused": isFocused,
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      tabindex="0">
      ${label
        ? html`<span class="${rootClass}Label">${label}</span>`
        : ""}
      ${Icon({
        ...globals,
        iconName: "ChevronRight100",
        customClasses: [
          "spectrum-Menu-chevron",
          `${rootClass}Icon`,
        ],
      })}
      ${Template({ ...globals, items })}
    </li>
  `;

export const Template = ({
  rootClass = "spectrum-Menu",
  labelledby,
  customClasses = [],
  isDisabled = false,
  isSelectable = true,
  items = [],
  role = "menu",
  subrole = "menuitem",
  id,
  ...globals
}) => {
  return html`
    <ul
      class=${classMap({
        [rootClass]: true,
        "is-selectable": isSelectable,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      aria-labelledby=${ifDefined(labelledby)}
      aria-disabled=${isDisabled ? "true" : "false"}
    >
      ${repeat(items, (i) => {
        if (i.type === "divider")
          return Divider({
            ...globals,
            tag: "li",
            customClasses: [`${rootClass}-divider`],
          });
        else if (i.heading) return MenuGroup({ ...i, ...globals, subrole });
        else if (i.items)
          return Submenu({
            ...globals,
            ...i,
            rootClass: `${rootClass}-item`,
            role: subrole,
          });
        else
          return MenuItem({
            ...globals,
            ...i,
            rootClass: `${rootClass}-item`,
            role: subrole,
          });
      })}
    </ul>
  `;
};
