import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { lowerCase, capitalize } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ActionButton",
  size = "m",
  icon,
  label,
  isQuiet = false,
  isSelected = false,
  isEmphasized = false,
  isDisabled = false,
  hasPopup = false,
  hideLabel = false,
  staticColor,
  customClasses = [],
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
      @click=${ifDefined(onclick)}
    >
      ${hasPopup ? Icon({
        ...globals,
        iconName: size === 'xs' ? 'CornerTriangle50' : size === 's' ? 'CornerTriangle75' : size === 'l' ? 'CornerTriangle200' : size === 'xl' ? 'CornerTriangle300' : 'CornerTriangle100',
        customClasses: [`${rootClass}-hold`],
        setName: 'ui',
      }) : ""}
      ${icon
        ? Icon({
            ...globals,
            iconName: icon,
            customClasses: [`${rootClass}-icon`],
          })
        : ""}
      ${label && !hideLabel ? html`<span class="${rootClass}-label">${label}</span>` : ""}
    </button>
  `;
};
