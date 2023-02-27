// template is where the component markup with go

import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";

import '../index.css';

export const Template = ({
  rootClass = "spectrum-ColorArea",
  customClasses = [],
  isDisabled = false,
  isFocused = false,
  customSize,
  handlePosition = handlePosition !== undefined ? handlePosition : "",
  colorHandleStyle = "--spectrum-picked-color: rgb(255, 0, 0);" + handlePosition,
  // ...globals
}) => {
  return html`
    <div class=${classMap({
    [rootClass]: true,
    'is-disabled': isDisabled,
    'is-focused': isFocused,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}
  ?disabled=${isDisabled}
  ?focused=${isFocused}
  style=${ifDefined(customSize)}>
  <div class="spectrum-ColorArea-gradient" style="background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgb(255, 0, 0);"></div>
    ${ ColorHandle({
      isDisabled,
      customClasses: [`${rootClass}-handle`],
      colorHandleStyle
      })
    }
    <input type="range" class="spectrum-ColorArea-slider" name="x" aria-label="saturation and value" min="0" max="1" step="0.01">
    <input type="range" class="spectrum-ColorArea-slider" name="y" aria-label="saturation and value" min="0" max="1" step="0.01">
  </div>
  `;
}