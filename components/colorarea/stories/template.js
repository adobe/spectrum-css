// template is where the component markup with go

import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import '../index.css';

export const Template = ({
  rootClass = "spectrum-ColorArea",
  customClasses = [],
  isDisabled = false,
  size = "m",
  // ...globals
}) => {
  return html`
    <div class=${classMap({
    [rootClass]: true,
    [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
    'is-disabled': isDisabled,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })} ?disabled=${isDisabled}}>
  <div class="spectrum-ColorArea-gradient" style="background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgb(255, 0, 0);"></div>

  <div class="spectrum-ColorHandle spectrum-ColorArea-handle">
    <div class="spectrum-ColorHandle-color" style="background-color: rgb(255, 0, 0)"></div>
    <svg class="spectrum-ColorLoupe">
      <g transform="translate(1 1)">
        <path class="spectrum-ColorLoupe-inner" d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z" fill="rgb(255, 0, 0)" />
        <path class="spectrum-ColorLoupe-outer" d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"/>
      </g>
    </svg>
  </div>

  <input type="range" class="spectrum-ColorArea-slider" name="x" aria-label="saturation and value" min="0" max="1" step="0.01">
  <input type="range" class="spectrum-ColorArea-slider" name="y" aria-label="saturation and value" min="0" max="1" step="0.01">
  </div>
  `;
}


// do I need to remove color loupe?