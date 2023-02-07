import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-definedjs';

import { Template as Button } from '@spectrum-css/button/stories/template.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-CoachMark",
  isQuiet = false,
  withPopover = false,
  variant,
  ...globals
}) => {
  return html`
  <div class=${classMap({
    [`${rootClass}Indicator`]: true,
    [`${rootClass}Indicator--quiet`]: isQuiet,
    [`${rootClass}Indicator--${variant}`]: typeof variant !== 'undefined',
  })} style="display: inline-block;vertical-align: top;">
    <div class="${rootClass}Indicator-ring"></div>
    <div class="${rootClass}Indicator-ring"></div>
    <div class="${rootClass}Indicator-ring"></div>
  </div>
  ${withPopover ? html`<div class="${rootClass}Popover" style="display: inline-block;">
    <div class="${rootClass}Popover-header">
      <div class="${rootClass}Popover-title">Zoom in</div>
    </div>
    <div class="${rootClass}Popover-content">
      Switch to the zoom tool then click and drag in the canvas to move your camera forward and backward.
    </div>
    <div class="${rootClass}Popover-footer">
      ${Button({
        ...globals,
        size: "m",
        variant: "primary",
        label: "Okay",
        treatment: "outline"
      })}
    </div>
  </div>` : ''}
  `;
}
