import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, label, size = 'm', noTip = false, position = 'top', isOpen = true, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    'is-open': isOpen,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    [`${rootClass}--${position}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <span class=${classMap(classList)}>
      ${label ? html`<span class="${rootClass}-label">${label}</span>` : ''}
      ${!noTip ? html`<span class="${rootClass}-tip"></span>` : ''}
    </span>
  `;
}
