import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from 'lit-html/directives/style-map.js';
import { ifDefined } from "lit-html/directives/if-defined.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Thumbnail",
  size = "500",
  customClasses = [],
  imageURL,
  svg,
  altText,
  isCover,
  isDisabled,
  onclick,
  id,
  isLayer,
  isSelected,
  backgroundColor,
  styles = {
    'background-color': backgroundColor,
  },
  ...globals
}) => {
  if (!imageURL && !svg) return html``;

  if (isLayer) return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--cover`]: isCover,
        [`${rootClass}-layer`] : isLayer,
        [`is-selected`]: isSelected,
        [`is-disabled`]: isDisabled,
        [`${rootClass}--size${size}`]:
          typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      @click=${onclick}
    >
    <div class="${rootClass}-layer-inner">
      ${imageURL
        ? html`<img
            class="${rootClass}-image"
            src=${imageURL}
            alt=${altText}
          />`
        : ""}
        </div>
    </div>
`;

if (backgroundColor) return html`
<div
  class=${classMap({
    [rootClass]: true,
    [`${rootClass}--cover`]: isCover,
    [`${rootClass}-layer`] : isLayer,
    [`is-selected`]: isSelected,
    [`is-disabled`]: isDisabled,
    [`${rootClass}--size${size}`]:
      typeof size !== "undefined",
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}
  id=${ifDefined(id)}
  @click=${onclick}
>
  <div class="${rootClass}-background" style=${styleMap(styles)}></div>
  <div class="${rootClass}-image-wrapper">
    ${imageURL
      ? html`<img
          class="${rootClass}-image"
          src=${imageURL}
          alt=${altText}
        />`
      : ""}
  </div>
</div>
`;

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--cover`]: isCover,
        [`is-disabled`]: isDisabled,
        [`${rootClass}--size${size}`]:
          typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      @click=${onclick}
    >
      <div class="${rootClass}-image-wrapper">
        ${imageURL
          ? html`<img
              class="${rootClass}-image"
              src=${imageURL}
              alt=${altText}
            />`
          : ""}
        ${svg ? html`${svg}` : ""}
      </div>
    </div>
  `;
};
