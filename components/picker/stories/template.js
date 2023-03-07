import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
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
  isDisabled = false,
  isFocused = false,
  isOpen = false,
  isInvalid = false,
  isQuiet = false,
  customClasses = [],
  id,
  ...globals
}) => {
  const [_, updateArgs] = useArgs();

  return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        'is-disabled': isDisabled,
        'is-focused': isFocused,
        'is-open': isOpen,
        'is-invalid': isInvalid,
        [`${rootClass}--quiet`]: isQuiet,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      aria-haspopup="listbox"
      @click=${() => {
        updateArgs({ isOpen: !isOpen });
      }}
    >
      <span class="${rootClass}-label is-placeholder">${label}</span>
      ${Icon({
        ...globals,
        iconName: "ChevronDown100",
        size,
        customClasses: [`${rootClass}-menuIcon`],
      })}
    </button>
    ${isOpen ? Popover({
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
    }) : ""}
  `;
};
