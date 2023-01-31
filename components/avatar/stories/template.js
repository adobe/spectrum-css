import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import ava from "./example-ava.jpg";

export const Template = ({
  rootClass = "spectrum-Avatar",
  image = ava,
  altText,
  isDisabled = false,
  size = "700",
  customClasses = [],
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
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size}`]: true,
        "is-disabled": isDisabled,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(globals.id)}>
      <img class="${rootClass}-image" src=${image} alt=${ifDefined(altText)} />
    </div>
  `;
};
