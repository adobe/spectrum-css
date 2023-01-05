import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
  rootClass,
  isDisabled = false,
  hideIcon = false,
  text,
  variant,
  size = 'm',
  customClasses = []
}) => {
    const classList = {
      [rootClass]: true,
      'is-disabled': isDisabled,
      [`${rootClass}--size${size.toUpperCase()}`]: true,
      ...customClasses.map((c) => ({ [c]: true })),
    };

    [variant].forEach((value) => {
      if (value) classList[`${className}--${value}`] = true;
    });

  return html`
    <div class=${classMap(classList)}>
      ${!hideIcon ? IconTemplate({
        iconName: 'Alert',
        size,
        customClasses: ['spectrum-HelpText-validationIcon']
      }) : ''}
      <div class=${`${className}-text`}>${text}</div>
    </div>
  `;
}
