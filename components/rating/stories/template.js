import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';

// Uncomment if you plan to include an icon
import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, max = 5, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <input class="${rootClass}-input" type="range" min="0" max=${max} value="0" aria-label="Rating">
      ${repeat(Array(max).fill(0), () => html`
        <span class="${rootClass}-icon">
          ${IconTemplate({ iconName: 'Star', size, customClasses: [`${rootClass}-starActive`], setName: 'workflow' })}
          ${IconTemplate({ iconName: 'StarOutline', size, customClasses: [`${rootClass}-starInactive`], setName: 'workflow' })}
        </span>
      `)}
    </div>
  `;
}
