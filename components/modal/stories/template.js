import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Modal",
  customClasses = [],
  isOpen = true,
  variant = undefined,
  ...globals
}) => {
  return html`
    <div class="${rootClass}-wrapper">
      <div class=${classMap({
          [rootClass]: true,
          [`${rootClass}--${variant}`]: typeof variant !== "undefined",
          'is-open': isOpen,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}>This is a modal. Don't use it like this; get yourself a Modal.</div>
    </div>
  `;
}
