import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

const fetchIconSVG = (
  iconName,
  scale = 'medium',
  setName = 'workflow'
) => {
  let icon;

  // Check adobe workflow icons first
  if (setName === 'workflow') {
    try {
      icon = require(`!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/${scale !== 'medium' ? `24` : `18`}/${iconName}.svg`);
    } catch (e) {}

    if (icon && icon.default) {
      icon = icon.default;
    }
  }

  // Check locally for icon set if not found
  if (setName === 'ui' || !icon) {
    try {
      icon = require(`!!raw-loader!@spectrum-css/icon/${scale ? scale : 'medium'}/${iconName}.svg`);
    } catch (e) {}

    if (icon && icon.default) {
      setName = 'ui';
      icon = icon.default;
    }
  }

  return { icon, setName };
}

/**
 * @typedef { keyof import("./icon.stories").default.args } IconArgs
 * @typedef { IconArgs & { scale: string, useRef: boolean, setName: 'workflow' | 'ui' } } IconProps
 */

/**
 * Template for rendering an icon
 * @type {(IconProps) => import('lit-html').TemplateResult<1>}
 */
export const Template = ({
  rootClass,
  iconName,
  size = 'm',
  fill,
  scale = 'medium',
  customClasses = [],
  useRef = false,
  setName = 'workflow',
}) => {
  if (!iconName) return html``;

  let iconSVG;
  if (!useRef) {
    const iconData = fetchIconSVG(iconName, scale, setName);

    if (!iconData || !iconData.icon) {
      console.error(`Icon ${iconName} not found in ${!setName ? `either the workflow or UI set.` : `the ${setName} set.`}`);
      return;
    }

    iconSVG = iconData.icon;
    setName = iconData.setName;
  }

  const className = !setName || setName === 'workflow' ? '' : 'spectrum-UIIcon';
  const classList = {
    [rootClass]: true,
    [setName === 'ui' ? 'spectrum-UIIcon' : '']: true,
    ...customClasses.map(c => ({ [c]: true })),
  };

  // If the icon was found in the workflow set, add the standard classes
  if (setName === 'workflow') {
    if (size) classList.push(`${className}--size${size.toUpperCase()}`);
  } else {
    classList.push(`${className}-${iconName}`);
    if (scale) classList.push(`${className}--${scale}`);
  }

  const inlineStyle = fill ? `color: ${fill}` : '';
  if (!useRef) {
    const iconString = iconSVG.replace(/^<svg(.*)>/, `<svg class=${classMap(classList)} style=${ifDefined(inlineStyle)} focusable="false" aria-hidden="true" role="img" $1>`);
    return html`${unsafeHTML(iconString)}`;
  }

  let iconID;
  if (setName === 'workflow') {
    // workflow ID: spectrum-icon-(18|24)-${iconName}
    iconID = `spectrum-icon-${scale !== 'medium' ? `24` : `18`}-${iconName}`;
  } else {
    // ui ID: spectrum-css-icon-${iconName}
    iconID = `spectrum-css-icon-${iconName}`;
  }

  return html`
    <svg class=${classMap(classList)} style=${ifDefined(inlineStyle)} focusable="false" aria-hidden="true" aria-labelledby=${iconName} role="img">
      <title id=${iconName}>${iconName.replace(/([A-Z])/g, ' $1').trim()}</title>
      <use xlink:href="#${iconID}" href="#${iconID}"/>
    </svg>
  `;
};
