import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { lowerCase, capitalize } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Button",
  id,
  customClasses = [],
  size = "m",
  label,
  hideLabel = false,
  icon,
  variant,
  staticColor,
  treatment,
  isDisabled = false,
  isOpen = true,
  ...globals
}) => {
  const { express } = globals;
  try {
    if (express) import(/* webpackPrefetch: true */ "../themes/express.css");
    else import(/* webpackPrefetch: true */ "../themes/spectrum.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <button
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      ?disabled=${isDisabled}>
      ${icon
        ? Icon({
            ...globals,
            iconName: icon,
            customClasses: [`${rootClass}-UIIcon`],
          })
        : ""}
      ${label && !hideLabel
        ? html`<span class=${`${rootClass}-label`}>${label}</span>`
        : ""}
    </button>
  `;
};
