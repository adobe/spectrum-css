import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Icon } from '@spectrum-css/icon/stories/template.js';

import '../index.css';

export const Template = ({
  rootClass = "spectrum-ClearButton",
  customClasses = [],
  isDisabled = false,
  size = "m",
  variant,
  ...globals
}) => {
  let iconName = "Cross100";
  switch (size) {
    case "s":
      iconName = "Cross75";
      break;
    case "l":
      iconName = "Cross200";
      break;
    case "xl":
      iconName = "Cross300";
      break;
  }

  return html`
    <button type="reset" class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--${variant}`]: typeof variant !== "undefined",
      'is-disabled': isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
      ?disabled=${isDisabled}>
      <div class="${rootClass}-fill">
        ${Icon({
          ...globals,
          iconName,
          customClasses: [`${rootClass}-icon`],
          setName: "ui",
        })}
      </div>
    </button>
  `;
}
