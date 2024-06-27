import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { Template as Tray } from "@spectrum-css/tray/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
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
} = {}, context) => html`
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
          iconName: iconWithScale(size, isCollapsible ? "ChevronRight" : "Checkmark"),
          size,
          customClasses: [
            `${rootClass}Icon`,
            isCollapsible ? "spectrum-Menu-chevron" : "spectrum-Menu-checkmark",
          ],
        }, context)
      )}
      ${when(selectionMode === "multiple" && !hasActions, () => Checkbox({
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
        iconName: iconWithScale(size, "ChevronRight"),
        size,
        customClasses: [
          `${rootClass}Icon`,
          "spectrum-Menu-chevron",
        ],
      }, context))}
      ${when(isCollapsible && items.length > 0, () => Template({
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
} = {}, context) => html`
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
} = {}, context) => {
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
            tag: "li",
            size: "s",
            customClasses: [`${rootClass}-divider`],
          }) : ""}`;
        else if (i.heading || i.isTraySubmenu)
          return MenuGroup({
            ...i,
            subrole,
            size,
            selectionMode,
            isTraySubmenu,
            shouldTruncate
          }, context);
        else
          return MenuItem({
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


const Sizes = (args) => ["s", "m", "l", "xl"].map((size) => html`
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: [
				{
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size]
			],
			customClasses: ["chromatic-ignore"],
		})}
		<div>
			${Template({...args, size})}
		</div>
	</div>
`);

const States = (args) => {
	const { titlePrefix, firstAndLast } = args;
	let stateData = [
		{
			stateTitle: "Default",
			args: {},
		},
		{
			stateTitle: "Hover",
			args: { ...args, isItemHovered: true },
		},
		{
			stateTitle: "Active (Down)",
			args: { ...args, isItemActive: true },
		},
		{
			stateTitle: "Focused",
			args: { ...args, isItemFocused: true },
		},
		{
			stateTitle: "Disabled",
			args: { ...args, isDisabled: true },
		}
	];

	// if testing hover/active/focus feels too heavy handed, we can remove those states
	if (firstAndLast) {
		stateData = [stateData[0], stateData[stateData.length - 1]];
	}

	return stateData.map((stateItem) => html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [`${titlePrefix ? titlePrefix + ", ": ""}${stateItem.stateTitle}`],
				customClasses: ["chromatic-ignore"],
			})}
			<div>
				${Template({...args, ...stateItem.args})}
			</div>
		</div>
	`);
};

const SingleItemSelectedStates = (args) => {
	return html`
			${States({
				...args,
				items: [{ label: "Not selected", isSelected: false, ...args.items[0] }],
				titlePrefix: "Not selected",
				firstAndLast: true,
			})}
			${States({
				...args,
				items: [{ label: "Selected item", isSelected: true, ...args.items[0] }],
				titlePrefix: "Selected",
				firstAndLast: true,
			})}
	`;
};

const MultiCheckboxSelectedStates = (args) => {
	return html`
		${States({
			...args,
			items: [{ label: "Not selected", isSelected: false, ...args.items[0]}],
			titlePrefix: "Not Selected",
			firstAndLast: true,
		})}
		${States({
			...args,
			items: [{ label: "Selected item", isSelected: true, ...args.items[0]}],
			titlePrefix: "Selected",
			firstAndLast: true,
		})}
	`;
};

const WithValueStates = (args) => {
	const baseValueArgs = {...args, hasValue: true, singleItemValue: "Value"};
	const valueData = [
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
	];

	return valueData.map((valueItem) => html`
		<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: [ valueItem.stateTitle ],
			customClasses: ["chromatic-ignore"],
		})}
			<div>
				${Template({ ...args, ...valueItem.args })}
			</div>
		</div>
	`);
};

export const MenuItemWithVariants = (args, context) => html`
  <div style=${styleMap({
		display: window.isChromatic() ? "none" : undefined,
	})}>
    ${Template({
      iconName: "Share",
      ...args
    }, context)}
  </div>
  <div style=${styleMap({
		display: window.isChromatic() ? "flex" : "none",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    "--mod-detail-margin-end": ".3rem",
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
    ].map((sectionItem) => html`
      <div class="spectrum-Typography">
      ${Typography({
        semantics: "detail",
        size: "l",
        content: [sectionItem.sectionTitle],
        customClasses: ["chromatic-ignore"],
      })}
      <div
        style=${styleMap({
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        })}
      >
        ${sectionItem.sectionMarkup}
      </div>
    </div>
    `)}
  </div>
`;

export const MenuWithVariants = (args, context) => html`
  <div style=${styleMap({
		display: window.isChromatic() ? "none" : undefined,
	})}>
    ${Template(args, context)}
  </div>
  <div style=${styleMap({
		display: window.isChromatic() ? "flex" : "none",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    "--mod-detail-margin-end": ".3rem",
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
<style>
  /* For this testing preview, this is the heading closest to the component and therefore needs a separate color */
  .spectrum-Detail { --mod-detail-font-color: var(--spectrum-seafoam-900); }
</style>
<div class="spectrum-Typography">
  ${Typography({
    semantics: "detail",
    size: "l",
    content: [ item.stateTitle ],
    customClasses: ["chromatic-ignore"],
  })}
  <div>
    ${Template({...args, ...item.args})}
  </div>
</div>

    `)}
  </div>
`;
