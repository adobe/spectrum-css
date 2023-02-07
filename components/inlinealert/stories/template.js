import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-definedjs';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js"
import { Template as Button } from "@spectrum-css/button/stories/template.js"

// import "../dist/index-vars.css";
import "../index.css";

export const Template = ({
  rootClass = "spectrum-InLineAlert",
  customClasses = [],
  headerText,
  text,
  variant="neutral",
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  let iconName;
  switch (variant) {
    case 'info':
      iconName = 'Info'
      break;
    case 'positive':
      iconName = 'CheckmarkCircle';
      break;
    case 'notice':
    case 'negative':
    case 'closable':
      iconName = 'Alert';
      break;
    default:
      iconName = undefined;
  }

  const iconMarkup = typeof iconName !== 'undefined' ?
    html`
      ${Icon({
        ...globals,
        iconName,
        customClasses: [`${rootClass}-icon`],
      })}
    ` : '';

  const closableMarkup = variant === 'closable' ? 
    html`
      <div class="spectrum-InLineAlert-footer">
        ${Button({
          ...globals,
          treatment: 'outline',
          variant: 'primary',
          icon: false,
          hideLabel: false,
          label: 'Ok',
        })}
      </div>
    ` : '';

  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${variant}`]: typeof variant !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <div class="${rootClass}-header">
        ${variant.charAt(0).toUpperCase() + variant.slice(1)} ${headerText}
        ${iconMarkup}
      </div>
      <div class="${rootClass}-content">${text}</div>
      ${closableMarkup}
    </div>
  `;
}
