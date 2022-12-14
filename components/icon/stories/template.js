import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

const fetchIconSVG = (iconName, scale, setName = undefined) => {
  if (!setName || setName === 'workflow') {
    // Check adobe workflow icons first
    let icon = require(`!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/${scale !== 'medium' ? `24` : `18`}/${iconName}.svg`);
    if (icon && icon.default) {
      return {
        icon: icon.default,
        setName: 'workflow'
      };
    }
  }

  // Check locally for icon set if not found
  icon = require(`!!raw-loader!../${scale ? scale : 'medium'}/${iconName}.svg`);

  return {
    icon: icon ? icon.default : undefined,
    setName: 'ui'
  };
}

export const Template = ({
    iconName,
    size = 'm', 
    fill = undefined,
    scale = 'medium',
    customClasses = [],
    useRef = false,
    setName = undefined,
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

  const className = !setName || setName === 'workflow' ? 'spectrum-Icon' : 'spectrum-UIIcon';
  const classList = [ className, ...customClasses ];

  // If the icon was found in the workflow set, add the standard classes
  if (setName === 'workflow') {
    classList.push(
      `${className}--size${size.toUpperCase()}`,
    );
  } else {
    classList.push(
      `${className}-${iconName}`,
      `${className}--${scale}`
    );
  }

  const inlineStyle = fill ? `color: ${fill}` : '';
  if (!useRef) {
    const iconString = iconSVG.replace(/^<svg(.*)>/, `<svg class="${classList.join(' ')}" style="${inlineStyle}" focusable="false" aria-hidden="true" role="img" $1>`);
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
    <svg class=${classList.join(' ')} style=${inlineStyle} focusable="false" aria-hidden="true" aria-labelledby=${iconName} role="img">
      <title id=${iconName}>${iconName.replace(/([A-Z])/g, ' $1').trim()}</title>
      <use xlink:href="#${iconID}" href="#${iconID}"/>
    </svg>
  `;
};
