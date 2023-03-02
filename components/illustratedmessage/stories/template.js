import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { when } from "lit-html/directives/when.js";

import '../index.css';
import '../skin.css';

import illustration from '!raw-loader!./illustration.svg';

export const Template = ({
  rootClass = "spectrum-IllustratedMessage",
  variant = "cta",
  heading,
  description,
  customClasses = [],
  // ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${variant}`]: typeof variant !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
    ${unsafeSVG(illustration)}
    ${when(heading, () => html`<h2 class="spectrum-Heading spectrum-Heading--sizeM spectrum-Heading--regular ${rootClass}-heading">${heading}</h2>`)}
    ${when(description, () => html`<p class="spectrum-Body spectrum-Body--sizeS ${rootClass}-description">${description}</p>`)}
  </div>
  `;
}
