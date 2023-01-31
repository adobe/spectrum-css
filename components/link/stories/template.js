import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { lowerCase, capitalize } from "lodash-es";

export const Template = ({
  rootClass = "spectrum-Link",
  size = "m",
  url = "#",
  text,
  variant,
  staticColor,
  isQuiet = false,
  customClasses = [],
  ...globals
}) => {
  const { express } = globals;

  try {
    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <a
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]:
          typeof size !== "undefined",
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
          typeof staticColor !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(globals.id)}
      href=${ifDefined(url)}
    >
      ${text}
    </a>
  `;
};
