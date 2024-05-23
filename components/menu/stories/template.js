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

const Label = ({
	hasActions,
	isCollapsible,
	label,
	rootClass,
	shouldTruncate,
}) => {
	if (isCollapsible) {
		return html`<span class="spectrum-Menu-sectionHeading ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }">${label}</span>`;
	}
	else {
		return html`<span class=${classMap({
      [`${rootClass}Label`]: true,
      ["spectrum-Switch-label"]: hasActions,
      ["spectrum-Menu-itemLabel--truncate"]: shouldTruncate,
      })}>
      ${label}
    </span>`;
	}
};

const Visual = ({
	iconName,
	rootClass,
	size,
	...globals
}) => {
	if (iconName) {
		return html`
    ${Icon({
          ...globals,
          iconName,
          size,
          customClasses: [
            `${rootClass}Icon`,
            `${rootClass}Icon--workflowIcon`
          ]
        })}
    `;
	}
	return;
};

const StartAction = ({
	hasActions,
	idx,
	isCollapsible,
	isDisabled,
	isSelected,
	rootClass,
	selectionMode,
	size,
	...globals
}) => {
	if (isCollapsible) {
		return html`
      ${Icon({
        ...globals,
        iconName: "ChevronRight100",
        size,
        customClasses: [
          `${rootClass}Icon`,
          "spectrum-Menu-chevron",
        ],
      })}
    `;
	}
	else if (selectionMode == "single" && isSelected) {
		return html`
    ${Icon({
      ...globals,
      iconName: "Checkmark100",
      size,
      customClasses: [
        `${rootClass}Icon`,
        "spectrum-Menu-checkmark",
      ],
    })}`;
	}
	else if (selectionMode == "multiple" && !hasActions) {
		return html`
      ${Checkbox({
        ...globals,
        size,
        isEmphasized: true,
        isChecked: isSelected,
        isDisabled,
        id: `menu-checkbox-${idx}`,
        customClasses: [
          `${rootClass}Checkbox`,
        ],
      })}`;
	}
	return null;
};

const EndAction = ({
	hasActions,
	idx,
	isDisabled,
	isDrillIn,
	isSelected,
	rootClass,
	selectionMode,
	size,
	value,
	...globals
}) => html`
${value ? html`<span class="${rootClass}Value">${value}</span>` : ""}
${hasActions && selectionMode == "multiple"
  ? html`<div class="${rootClass}Actions">
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
    })}
    </div>`
  : ""}
  ${
    isDrillIn ? html`${Icon({
      ...globals,
      iconName: "ChevronRight100",
      size,
      customClasses: [
        `${rootClass}Icon`,
        "spectrum-Menu-chevron",
      ],
    })}` : ""
  }
`;

const Description = ({
	description,
	rootClass
}) => html`<span class="${rootClass}Description">${description}</span>`;

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
}) => html`
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
      ${StartAction({ hasActions, idx, isCollapsible, isDisabled, isSelected, rootClass, selectionMode, size, ...globals })}
      ${Visual({ iconName, rootClass, size, ...globals })}
      ${Label({ hasActions, isCollapsible, label, rootClass, shouldTruncate })}
      ${when(description, () => Description({ description, rootClass }))}
      ${EndAction({ hasActions, idx, isDisabled, isDrillIn, isSelected, rootClass, selectionMode, size, value, ...globals })}
      ${isCollapsible && items.length > 0 ? Template({ ...globals, items, isOpen, size, shouldTruncate }) : ""}
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
              iconName: backArrowWithScale(size),
              size,
              customClasses: ["spectrum-Menu-backIcon"]
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
          });
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
          });
      })}
    </ul>
  `;

	if (isTraySubmenu) {
		return Tray({ content: [menuMarkup] });
	}
	return menuMarkup;
};
