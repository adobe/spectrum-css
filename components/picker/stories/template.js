import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { useArgs } from "@storybook/client-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Picker",
  size = "m",
  label,
  content,
  position,
  icon = "menu",
  isDisabled = false,
  isFocused = false,
  isOpen = false,
  isValid = false,
  isInvalid = false,
  isQuiet = false,
  customClasses = [],
  customStyles = {},
  customPopoverStyles = {},
  id,
  ...globals
}) => {
  const [_, updateArgs] = useArgs();

  let iconName = "ChevronDown100";
  switch (size) {
    case "s":
      iconName = "ChevronDown75";
      break;
    case "l":
      iconName = "ChevronDown200";
      break;
    case "xl":
      iconName = "ChevronDown300";
      break;
  }

  return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--uiicononly`]: !label,
        [`${rootClass}--${position}`]: typeof position !== "undefined",
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        'is-disabled': isDisabled,
        'is-focused': isFocused,
        'is-open': isOpen && !isDisabled,
        'is-invalid': isInvalid,
        'is-valid': isValid,
        [`${rootClass}--quiet`]: isQuiet,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=${ifDefined(styleMap(customStyles))}
      id=${ifDefined(id)}
      aria-haspopup="listbox"
      @click=${() => {
        updateArgs({ isOpen: !isOpen });
      }}
    >
      ${label ? html`<span class="${rootClass}-label is-placeholder">${label}</span>`: ''}
      <!-- @todo when does this wrapper get added -->
      <div class="${rootClass}-fill">
        ${Icon({
          ...globals,
          iconName,
          size,
          customClasses: [ `${rootClass}-UIIcon`], //`${rootClass}-menuIcon`
        })}
      </div>
    </button>
    ${isOpen && !isDisabled ? Popover({
      ...globals,
      isOpen,
      withTip: false,
      position: 'bottom',
      isQuiet,
      content: [
        Menu({
          ...globals,
          role: "listbox",
          subrole: "option",
          isSelectable: true,
          items: [
            {
              label: "Ballard",
              isSelected: true,
              isChecked: true,
            },
            {
              label: "Fremont",
            },
            {
              label: "Greenwood",
            },
            {
              type: "divider",
            },
            {
              label: "United States of America",
              isDisabled: true,
            },
          ],
        }),
      ],
      customStyles: customPopoverStyles,
    }) : ""}
  `;
};
