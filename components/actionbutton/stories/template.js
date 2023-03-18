import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";

import { lowerCase, capitalize } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ActionButton",
  size = "m",
  iconName,
  label,
  isQuiet = false,
  isSelected = false,
  isEmphasized = false,
  isDisabled = false,
  hasPopup = false,
  hideLabel = false,
  staticColor,
  customClasses = [],
  customIconClasses = [],
  onclick,
  id,
  role,
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
      aria-label=${ifDefined(label)}
      aria-haspopup=${hasPopup ? "true" : "false"}
      aria-pressed=${isSelected ? "true" : "false"}
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--emphasized`]: isEmphasized,
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
        [`is-disabled`]: isDisabled,
        [`is-selected`]: isSelected,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      ?disabled=${isDisabled}
      @click=${onclick}
    >
      ${when(hasPopup, () => Icon({ ...globals, iconName: 'CornerTriangle100', customClasses: [`${rootClass}-hold`] }))}
      ${when(iconName, () => Icon({ ...globals, iconName, customClasses: [`${rootClass}-icon`, ...customIconClasses] }))}
      ${when(label && !hideLabel, () => html`<span class="${rootClass}-label">${label}</span>`)}
    </button>
  `;
};
