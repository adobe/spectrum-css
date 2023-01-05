import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as Textfield } from '../../textfield/stories/template.js';
import { Template as ActionButton } from '../../actionbutton/stories/template.js';

export const Template = ({ rootClass, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      ${Textfield({ size, customClasses: ['spectrum-Stepper-textfield'] })}
      <!-- <div class="spectrum-Textfield spectrum-Stepper-textfield">
        <input type="number" class="spectrum-Textfield-input spectrum-Stepper-input" placeholder="100" min="-2" max="2" step="0.5">
      </div> -->
      <span class="spectrum-Stepper-buttons">
        ${ActionButton({ size, customClasses: ['spectrum-Stepper-stepUp'], iconName: 'ChevronUp75' })}
        ${ActionButton({ size, customClasses: ['spectrum-Stepper-stepDown'], iconName: 'ChevronDown75' })}
      </span>
    </div>
  `;
}
