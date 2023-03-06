import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Badge",
  size = "m",
  label,
  iconName,
  hideLabel = false,
  variant = "neutral",
  color,
  layout,
  customClasses = [],
  id,
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
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--${color}`]: typeof color !== "undefined",
        [`${rootClass}--${layout}`]: typeof layout !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}>
      ${when(iconName, () => Icon({
        ...globals,
        iconName,
        customClasses: [
          ...(hideLabel ? [`${rootClass}-icon--no-label`] : []),
          `${rootClass}-icon`,
        ],
      }))}
      ${when(!hideLabel || (!label && !variant),
        () => html`<div class="${rootClass}-label">${label ?? variant}</div>`
      )}
    </div>
  `;
};
