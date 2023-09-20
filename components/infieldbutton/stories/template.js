import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-InfieldButton",
  customClasses = [],
  size = "m",
  position,
  isQuiet,
  iconName = "Add",
  isDisabled,
  isInvalid,
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${position}`]: typeof position !== "undefined",
        [`${rootClass}--quiet`]: isQuiet,
        "is-invalid": isInvalid,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })} 
      ?disabled=${isDisabled}
      aria-haspopup="listbox"
      type="button"
    >
    <div class="${rootClass}-fill">
      ${when(iconName, () => Icon({
        ...globals,
        size,
        iconName,
        customClasses: [`${rootClass}-icon`],
      }))}
    </div>
  </button>
  `;
}
