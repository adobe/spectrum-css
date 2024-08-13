import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";
import { Template as Tray } from "@spectrum-css/tray/stories/template.js";

import "../index.css";

const getUIIconWithScale = (size = "m", iconName = "ArrowLeft") => {
	const scales = {
		ArrowLeft: { s: 200, l: 400, xl: 500, default: 300 },
		Checkmark: { s: 75, l: 200, xl: 300, default: 100 },
	};

	const selectedScale = scales[iconName];

	switch (size) {
		case "s":
			return `${iconName}${selectedScale.s}`;
		case "l":
			return `${iconName}${selectedScale.l}`;
		case "xl":
			return `${iconName}${selectedScale.xl}`;
		default:
			return `${iconName}${selectedScale.default}`;
	}
};

const Label = ({
	hasSwitches,
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
      ["spectrum-Switch-label"]: hasSwitches,
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
	thumbnailUrl,
	...globals
}) => {
	if (thumbnailUrl) {
		return html`
      ${Thumbnail({
        ...globals,
        imageURL: thumbnailUrl,
        altText: "Thumbnail alt text",
        size,
        customClasses: [`${rootClass}Thumbnail`],
      })}
    `;
	}
	else if (iconName) {
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
	hasSwitches,
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
      iconName: getUIIconWithScale(size, "Checkmark"),
      size,
      customClasses: [
        `${rootClass}Icon`,
        "spectrum-Menu-checkmark",
      ],
    })}`;
	}
	else if (selectionMode == "multiple" && !hasSwitches) {
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
	hasExternalLink,
	hasSwitches,
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
  ${when(value, () => html`<span class="${rootClass}Value">${value}</span>`)}
  ${when(
    hasSwitches && selectionMode == "multiple",
    () => html`<div class="${rootClass}Actions">
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
  )}
  ${when(
    hasExternalLink && !(hasSwitches && selectionMode === "multiple"),
    () => html`<div class="${rootClass}Actions">
        ${Icon({
          ...globals,
          iconName: "LinkOut",
          size,
          customClasses: [
            `${rootClass}Icon`,
            "spectrum-Menu-linkout",
          ],
        })}
      </div>`
  )}
  ${when(isDrillIn, () => html`${Icon({
    ...globals,
    iconName: "ChevronRight100",
    size,
    customClasses: [
      `${rootClass}Icon`,
      "spectrum-Menu-chevron",
    ],
  })}`)}
`;

const Description = ({
	description,
	rootClass
}) => html`<span class="${rootClass}Description">${description}</span>`;

export const MenuItem = ({
	description,
	iconName,
	hasExternalLink,
	hasSwitches,
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
	thumbnailUrl = "",
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
      ${StartAction({ hasSwitches, idx, isCollapsible, isDisabled, isSelected, rootClass, selectionMode, size, ...globals })}
      ${Visual({ iconName, rootClass, size, thumbnailUrl, ...globals })}
      ${Label({ hasSwitches, isCollapsible, label, rootClass, shouldTruncate })}
      ${when(description, () => Description({ description, rootClass }))}
      ${EndAction({ hasExternalLink, hasSwitches, idx, isDisabled, isDrillIn, isSelected, rootClass, selectionMode, size, value, ...globals })}
      ${isCollapsible && items.length > 0 ? Template({ ...globals, items, isOpen, size, shouldTruncate }) : ""}
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
	sectionDescription,
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
        >
          ${heading}
          <span class="spectrum-Menu-sectionDescription" aria-hidden="true">${sectionDescription}</span>
        </span>`
      : html`<div class="spectrum-Menu-back">
          <button aria-label="Back to previous menu" class="spectrum-Menu-backButton" type="button" role="menuitem">
            ${Icon({
              ...globals,
              iconName: getUIIconWithScale(size, "ArrowLeft"),
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
            >
              ${heading}
              <span class="spectrum-Menu-sectionDescription" aria-hidden="true">${sectionDescription}</span>
            </span>`
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
	hasExternalLink,
	hasSwitches,
	hasDividers = false,
	hasThumbnail = false,
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
            hasExternalLink: hasExternalLink || i.hasExternalLink,
            hasSwitches,
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
            thumbnailUrl: i.thumbnailUrl || (hasThumbnail && "thumbnail.png"),
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
