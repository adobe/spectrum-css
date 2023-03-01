import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import '../index.css';

export const Template = ({
  rootClass = "spectrum-ColorWheel",
  customClasses = [],
  isDisabled = false,
  isFocused = false,
  // ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      'is-disabled': isDisabled,
      'is-focused': isFocused,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}
  ${isDisabled}
  ${isFocused}>
  <div class="${rootClass}-inner">
    <div class="${rootClass}-colorarea-container"></div>
  </div>
  <div class="${rootClass}-borders ${isDisabled ? 'is-disabled' : ""}">
    <div class="${rootClass}-wheel ${isDisabled ? 'is-disabled' : ""}"></div>
  </div>
  <input type="range" class="${rootClass}-slider" aria-label="hue" min="0" max="360" step="">
  </div>
  </div>
  `;
}
