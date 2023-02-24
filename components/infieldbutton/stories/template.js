import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js"

import "../index.css";

export const Template = ({
  rootClass = "spectrum-InfieldButton",
  customClasses = [],
  size = "m",
  position = "start",
  quiet,
  icon = "Add",
  isDisabled,
  isInvalid,
  ...globals
}) => {

  const iconMarkup = typeof icon !== 'undefined' ?
    html`
      ${Icon({
        ...globals,
        iconName: icon,
        customClasses: [`${rootClass}-icon`],
      })}
    ` : '';
  
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
      ${iconMarkup}
    </div>
  </button>
  `;
}
