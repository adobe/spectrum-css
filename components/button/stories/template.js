import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { generateSVG } from '@spectrum-css/preview/icons.js';

export const titleCase = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ label, hideLabel, icon, size, variant, staticColor, treatment, isDisabled, className }) => {
  let classList = {};
  
  if (!className) className = 'spectrum-Button';
  classList[className] = true;

  if (variant) classList[`${className}--${variant}`] = true;
  if (treatment) classList[`${className}--${treatment}`] = true;
  if (size) classList[`${className}--size${size.toUpperCase()}`] = true;
  if (staticColor) classList[`${className}--static${titleCase(staticColor)}`] = true;

  return html`
    <button class=${classMap(classList)} ?disabled=${isDisabled}>
      ${typeof icon === 'string' ? generateSVG(icon, size) : ''}
      ${label && !hideLabel ? html`<span class=${`${className}-label`}>${label}</span>` : ''}
    </button>
  `;
};
