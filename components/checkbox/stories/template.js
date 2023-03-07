import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Checkbox",
  size = "m",
  label,
  isChecked = false,
  title,
  value,
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
    <label
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}>
      <input
        type="checkbox"
        class="${rootClass}-input"
        ?checked=${isChecked}
        title=${ifDefined(label || title)}
        value=${ifDefined(value)}
        id=${id}
      />
      <span class="${rootClass}-box">
        ${Icon({
          iconName: "Checkmark100",
          ...globals,
          customClasses: [`${rootClass}-checkmark`],
          setName: "ui",
        })}
        ${Icon({
          iconName: "Dash100",
          ...globals,
          customClasses: [`${rootClass}-partialCheckmark`],
          setName: "ui",
        })}
      </span>
      ${label ? html`<span class="${rootClass}-label">${label}</span>` : ""}
    </label>
  `;
};
