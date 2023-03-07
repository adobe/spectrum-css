import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { lowerCase, capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Link",
  size = "m",
  url = "#",
  text,
  variant,
  staticColor,
  isQuiet = false,
  id,
  customClasses = [],
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
    <a
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
          typeof staticColor !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      href=${ifDefined(url)}
    >
      ${text}
    </a>
  `;
};
