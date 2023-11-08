import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-BackgroundLayers",
  style,
  layer,
  id,
  customClasses = [],
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${layer}`]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
      style="${style} inline-size: 100px; block-size: 100px; border-radius: 10px; position: absolute;">
    </div>
  `;
}
