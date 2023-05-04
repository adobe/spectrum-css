import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js"
import { upperCase, lowerCase, capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Divider",
  size = "m",
  tag = "hr",
  staticColor,
  vertical = false,
  customClasses = [],
  verticalStyle = {
    "height": "20px",
    "align-self": "stretch"
  },
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

if (tag === "hr") {
  return html`
    <hr
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
        [`${rootClass}--vertical`]: vertical === true,
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
          typeof staticColor !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=${vertical === true ? (styleMap(style)) : ""}
      role="separator"
      >
    </hr>`
} else {
  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--vertical`]: vertical === true,
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
          typeof staticColor !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=${vertical === true ? (styleMap(verticalStyle)) : ""}
      role="separator"
      >
    </div>`
  }
};
