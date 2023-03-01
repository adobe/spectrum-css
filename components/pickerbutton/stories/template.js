import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { useArgs } from "@storybook/client-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  id,
  rootClass = "spectrum-PickerButton",
  size = "m",
  label,
  position,
<<<<<<< HEAD
  iconType = "ui",
  iconName = "ChevronDown200",
=======
  icon = "menu",
>>>>>>> 5f16a9479 (chore: add inputgroup story and related element updates)
  isDisabled = false,
  isFocused = false,
  isOpen = false,
  isValid = false,
  isInvalid = false,
  isQuiet = false,
  customClasses = [],
<<<<<<< HEAD
  isRounded = false,
  customStyles = {},
  onclick,
=======
  customStyles = {},
  id,
>>>>>>> 5f16a9479 (chore: add inputgroup story and related element updates)
  ...globals
}) => {
  const [_, updateArgs] = useArgs();

<<<<<<< HEAD
=======
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

>>>>>>> 5f16a9479 (chore: add inputgroup story and related element updates)
  return html`
    <button
      class=${classMap({
        [rootClass]: true,
<<<<<<< HEAD
        [`${rootClass}--textuiicon`]: label && iconType === "ui",
        [`${rootClass}--uiicononly`]: !label && iconType === "ui",
        [`${rootClass}--texticon`]: label && iconType !== "ui",
        [`${rootClass}--icononly`]: !label && iconType !== "ui",
        [`${rootClass}--${position}`]: typeof position !== "undefined",
        [`${rootClass}--rounded`]: isRounded,
=======
        [`${rootClass}--uiicononly`]: !label,
        [`${rootClass}--${position}`]: typeof position !== "undefined",
>>>>>>> 5f16a9479 (chore: add inputgroup story and related element updates)
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        'is-disabled': isDisabled,
        'is-focused': isFocused,
        'is-open': isOpen && !isDisabled,
<<<<<<< HEAD
        'is-invalid': isInvalid && !isDisabled,
        'is-valid': isValid && !isDisabled,
=======
        'is-invalid': isInvalid,
        'is-valid': isValid,
>>>>>>> 5f16a9479 (chore: add inputgroup story and related element updates)
        [`${rootClass}--quiet`]: isQuiet,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=${ifDefined(styleMap(customStyles))}
      id=${ifDefined(id)}
      aria-haspopup="listbox"
<<<<<<< HEAD
      @click=${onclick ?? function () {
        if (isDisabled) return;
        updateArgs({ isOpen: !isOpen });
      }}
    >
      <div class="${rootClass}-fill">
        ${label ? html`<span class="${rootClass}-label is-placeholder">${label}</span>`: ''}
        ${Icon({
          ...globals,
          iconName: iconName ?? "ChevronDown200",
          size,
          customClasses: [ iconType === "ui" ? `${rootClass}-UIIcon` : `${rootClass}-menuIcon` ],
=======
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
>>>>>>> 5f16a9479 (chore: add inputgroup story and related element updates)
        })}
      </div>
    </button>
  `;
}
