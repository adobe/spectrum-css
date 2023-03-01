import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-ColorSlider",
  customClasses = [],
  // ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
  <div class="spectrum-ColorSlider-checkerboard" role="presentation">
    <div class="spectrum-ColorSlider-gradient" role="presentation" style="background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);"></div>
  </div>

  <div class="spectrum-ColorHandle spectrum-ColorSlider-handle" style="--spectrum-picked-color: rgb(255, 0, 0)">
    <div class="spectrum-ColorHandle-color"></div>
    <svg class="spectrum-ColorLoupe">
      <!-- use ColorLoupe markup here -->
    </svg>
  </div>

  <input type="range" class="spectrum-ColorSlider-slider" min="0" max="100" step="1">
  </div>
  `;
}
