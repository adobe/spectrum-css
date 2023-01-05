import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as PopoverTemplate } from '../../popover/stories/template.js';

export const Template = ({ rootClass, content, isOpen = true, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    'is-open': isOpen,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      ${PopoverTemplate({
        customClasses: [`${rootClass}-popover`],
        isOpen: true,
        content,
      })}
    </div>
  `;
}
