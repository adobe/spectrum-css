import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";

import { useArgs } from "@storybook/client-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Checkbox",
  size = "m",
  label,
  isChecked = false,
  isEmphasized = false,
  isDisabled = false,
  title,
  value,
  id,
  customClasses = [],
  ...globals
}) => {
  const [_, updateArgs] = useArgs();

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
        [`${rootClass}--emphasized`]: isEmphasized,
        [`is-disabled`]: isDisabled,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      >
      <input
        type="checkbox"
        class="${rootClass}-input"
        ?checked=${isChecked}
        ?disabled=${isDisabled}
        title=${ifDefined(label || title)}
        value=${ifDefined(value)}
        @change=${() => {
          if (isDisabled) return;
          updateArgs({ isChecked: !isChecked });
        }}
        id=${id}
      />
      <span class="${rootClass}-box">
        ${Icon({
          ...globals,
          iconName: "Checkmark100",
          customClasses: [`${rootClass}-checkmark`],
        })}
        ${Icon({
          ...globals,
          iconName: "Dash100",
          customClasses: [`${rootClass}-partialCheckmark`],
        })}
      </span>
      ${when(label, () => html`<span class="${rootClass}-label">${label}</span>`)}
    </label>
  `;
};
