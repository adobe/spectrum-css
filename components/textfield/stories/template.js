import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";

export const Template = ({
  rootClass = "spectrum-TextField",
  size = "m",
  customClasses = [],
  customInputClasses = [],
  placeholder,
  name,
  value,
  ...globals
}) => {
  try {
    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
    import(/* webpackPrefetch: true */ "../skin.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <div class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}>
      <input
        type="text"
        placeholder=${ifDefined(placeholder)}
        name=${name}
        value=${ifDefined(value)}
        class=${classMap({
          [`${rootClass}-input`]: true,
          ...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
      />
    </div>
  `;
};
