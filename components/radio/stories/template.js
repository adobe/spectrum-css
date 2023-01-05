import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

export const Template = ({ rootClass, size = 's', label, name, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  // const icon = IconTemplate({ iconName: icon, size });

  return html`
    <div class=${classMap(classList)}>
      <input type="radio" name=${name} class="${rootClass}-input" id="radio-0">
      <span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
      <label class="${rootClass}-label ${rootClass}-label--sizeS" for="radio-0">${label}</label>
    </div>
  `;
}
