import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// Uncomment if you plan to include an icon
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Rating",
  size = "m",
  max = 5,
  isEmphasized = false,
  customClasses = [],
  id,
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
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--emphasized`]: isEmphasized,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}>
      <input
        class="${rootClass}-input"
        type="range"
        min="0"
        max=${max}
        value="0"
        aria-label="Rating"
      />
      ${repeat(
        Array(max).fill(0),
        () => html`
          <span class="${rootClass}-icon">
            ${Icon({
              ...globals,
              iconName: "Star",
              size,
              customClasses: [`${rootClass}-starActive`],
            })}
            ${Icon({
              ...globals,
              iconName: "StarOutline",
              size,
              customClasses: [`${rootClass}-starInactive`],
            })}
          </span>
        `
      )}
    </div>
  `;
};
