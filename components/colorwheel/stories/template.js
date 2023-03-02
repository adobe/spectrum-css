import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";

import '../index.css';

export const Template = ({
  rootClass = "spectrum-ColorWheel",
  customClasses = [],
  isDisabled = false,
  isFocused = false,
  colorHandleStyle = {
    '--spectrum-picked-color': 'rgb(255, 0, 0);',
  },
  ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      'is-disabled': isDisabled,
      'is-focused': isFocused,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
  <div class="${rootClass}-inner">
    <div class="${rootClass}-colorarea-container"></div>
  </div>
  <div class="${rootClass}-border ${isDisabled ? 'is-disabled' : ""}">
    <div class="${rootClass}-wheel ${isDisabled ? 'is-disabled' : ""}"></div>
  </div>
  ${ColorHandle({
    ...globals,
    isDisabled,
    customClasses: [`${rootClass}-handle`],
    colorHandleStyle
    })
  }
  <input type="range" class="${rootClass}-slider" aria-label="hue" min="0" max="360" step="">
  </div>
  </div>
  `;
}
