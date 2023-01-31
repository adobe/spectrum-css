import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

export const Template = ({
  rootClass = "spectrum-Thumbnail",
  size = "m",
  customClasses = [],
  imageURL,
  svg,
  altText,
  isCover = false,
  onclick,
  id,
  // ...globals
}) => {
  if (!imageURL && !svg) return html``;

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
        [`${rootClass}--cover`]: isCover,
        [`${rootClass}--size${size?.toUpperCase()}`]:
          typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      @click=${ifDefined(onclick)}
    >
      ${imageURL
        ? html`<img
            class="${rootClass}-image"
            src=${imageURL}
            alt=${altText}
          />`
        : ""}
      ${svg ? html`${svg}` : ""}
    </div>
  `;
};
