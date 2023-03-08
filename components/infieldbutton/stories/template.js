import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { when } from 'lit-html/directives/when.js';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js"

import "../index.css";

export const Template = ({
  rootClass = "spectrum-InfieldButton",
  customClasses = [],
  size = "m",
  position = "start",
  quiet,
  iconName = "Add",
  isDisabled,
  isInvalid,
  ...globals
}) => {
  return html`
    <button class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--${position}`]: typeof position !== "undefined",
      [`${rootClass}--quiet`]: quiet,
      "is-invalid": isInvalid,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })} ?disabled=${isDisabled} aria-haspopup="listbox">
    <div class="${rootClass}-fill">
      ${when(iconName, () => Icon({
        ...globals,
        iconName,
        customClasses: [`${rootClass}-icon`],
      }))}
    </div>
  </button>
  `;
}
