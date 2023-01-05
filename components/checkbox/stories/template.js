import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as IconTemplate } from '../../icon/stories/template.js';

export const Template = ({ rootClass, label, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <label class=${classMap(classList)}>
      <input type="checkbox" class="${rootClass}-input" id="checkbox-0">
      <span class="${rootClass}-box">
        ${IconTemplate({ iconName: 'Checkmark100', size, customClasses: [`${rootClass}-checkmark`], setName: 'ui' })}
        ${IconTemplate({ iconName: 'Dash100', size, customClasses: [`${rootClass}-partialCheckmark`], setName: 'ui' })}
      </span>
      ${label ? html`<span class="${rootClass}-label">${label}</span>` : ''}
    </label>
  `;
}
