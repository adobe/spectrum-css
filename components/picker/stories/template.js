import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', label, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <button class=${classMap(classList)} aria-haspopup="listbox" style="width: 240px">
      <span class="${rootClass}-label is-placeholder">${label}</span>
      ${IconTemplate({ iconName: 'ChevronDown100', size, customClasses: [`${rootClass}-menuIcon`] })}
    </button>
  `;
}
