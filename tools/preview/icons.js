import { basename } from 'path';

import { html, svg } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import iconOpts from '@adobe/spectrum-css-workflow-icons';

export const iconType = {
  name: 'Icon',
  options: iconOpts.map(icon => basename(icon, '.svg')),
  control: { type: 'select' }
};

// Use this in stories to generate the SVG markup
export const generateSVG = (label, scale = 'm', customClasses = []) => {
  customClasses.push('spectrum-Icon', `spectrum-Icon--size${(scale).toUpperCase()}`);

  // Load icon styles on demand
  const iconVars = require('!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"icon-vars"}}!css-loader!@spectrum-css/icon/dist/vars.css');
  const iconStyles = require('!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"icon"}}!css-loader!@spectrum-css/icon/dist/index.css');

  if (!label) {
    iconStyles.unuse();
    iconVars.unuse();

    return html``;
  }

  // Check adobe workflow icons first
  let icon = require(`!!raw-loader?esModule=false!@adobe/spectrum-css-workflow-icons/dist/${scale !== 'm' ? `24` : `18`}/${label}.svg`);
  if (icon) {
    // If the icon was found in the workflow set, add the UI classes
    customClasses.push(`spectrum-UIIcon`, `spectrum-UIIcon-${label}`, `spectrum-UIIcon--${scale !== 'm' ? `large` : `medium`}`);
  } else {
    // Check locally for icon set if not found
    icon = require(`!!raw-loader?esModule=false!@spectrum-css/icon/${scale !== 'm' ? 'large' : 'medium'}/${label}.svg`);
  }

  if (!icon) {
    iconStyles.unuse();
    iconVars.unuse();

    return html``;
  }

  iconStyles.use();
  iconVars.use();

  // Attach the custom classes to the SVG
  icon = icon.replace(/^<svg/, `<svg class="${customClasses.join(' ')}"`);
  return svg`${unsafeHTML(icon)}`;
};
