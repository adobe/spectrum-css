import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as ActionButtonTemplate } from '../../actionbutton/stories/template.js';
import { Template as QuickActionsTemplate } from '../../quickactions/stories/template.js';

export const Template = ({ rootClass, size = 'm', title, subtitle, footer, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)} tabindex="0" role="figure">
      <div class="${rootClass}-coverPhoto" style="background-image: url(img/example-card-portrait.jpg)"></div>
      <div class="${rootClass}-body">
        <div class="${rootClass}-header">
          <div class="${rootClass}-title spectrum-Heading spectrum-Heading--sizeXS">${title}</div>
          <div class="${rootClass}-actionButton">
            ${ActionButtonTemplate({ size, icon: 'More', isQuiet: true })}
          </div>
        </div>
        <div class="${rootClass}-content">
          <div class="${rootClass}-subtitle spectrum-Detail spectrum-Detail--sizeS">${subtitle}</div>
        </div>
      </div>
      <div class="${rootClass}-footer">${footer}</div>
      ${QuickActionsTemplate({ size, customClasses: [`${rootClass}-quickActions`] })}
      <!-- <div class="spectrum-QuickActions ${rootClass}-quickActions">
        <div class="spectrum-Checkbox spectrum-Checkbox--sizeM">
          <input type="checkbox" class="spectrum-Checkbox-input" aria-checked="false" title="Select" value="">
          <span class="spectrum-Checkbox-box">
            <svg class="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-Checkmark100"></use>
            </svg>
            <svg class="spectrum-Icon spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-Dash100"></use>
            </svg>
          </span>
        </div>
      </div> -->
    </div>
  `;
}
