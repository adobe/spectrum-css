import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Switch",
  size = "m",
  customClasses = [],
  id,
  label,
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
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}>
      <input
        type="checkbox"
        class="${rootClass}-input"
        id="switch-onoff-0"
      />
      <span class="${rootClass}-switch"></span>
      ${label
        ? html`<label class="${rootClass}-label" for="switch-onoff-0"
            >${label}</label
          >`
        : ""}
    </div>
  `;
};
