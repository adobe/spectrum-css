import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as IconTemplate } from '../../icon/stories/template.js';

export const titleCase = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const Template = ({
  rootClass = 'spectrum-CloseButton',
  size = 'm',
  label = 'Close',
  staticColor,
  isDisabled = false,
  customClasses = []
}) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  if (staticColor) classList[`${className}--static${titleCase(staticColor)}`] = true;

  let iconName = 'Cross100';
  switch (size) {
    case 's':
      iconName = 'Cross75';
      break;
    case 'l':
      iconName = 'Cross200';
      break;
    case 'xl':
      iconName = 'Cross300';
      break;
  }

  return html`
    <button class=${classMap(classList)} label=${label} ?disabled=${isDisabled}>
      ${IconTemplate({
        iconName,
        size,
        customClasses: [`${rootClass}-UIIcon`],
        setName: 'ui'
      })}
    </button>
  `;
}
