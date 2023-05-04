import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as Divider } from '@spectrum-css/divider/stories/template.js';
import { Template as Button } from '@spectrum-css/button/stories/template.js';
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Icon } from '@spectrum-css/icon/stories/template.js';


import '../index.css';

export const Template = ({
  rootClass = "spectrum-AlertBanner",
  isOpen = true,
  text,
  variant,
  customClasses = [],
...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }
  const iconName =
  variant === "negative"
    ? "Alert"
    : variant === "info"
    ? "Info"
    : "";

  return html`
  <div class=${classMap({
    [rootClass]: true,
    'is-open': isOpen,
    [`${rootClass}--${variant}`]: typeof variant !== "undefined",
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
    <div class="spectrum-AlertBanner-body">
      <div class="spectrum-AlertBanner-content">
        ${iconName ? Icon({
          ...globals,
          iconName,
          customClasses: [
            `${rootClass}-icon`,
          ],
        }) : ""}
        <p class="spectrum-AlertBanner-text">${text}</p>
      </div>
      ${Button({
        size: 'm',
        variant: "staticWhite",
        treatment: "outline",
        label: 'Action',
        customClasses: [`${rootClass}-action-button`]
      })}
    </div>
    <div class="spectrum-AlertBanner-end">
    ${Divider({
      vertical: true,
      size: 's',
      customClasses: [`${rootClass}-divider`, `${rootClass}--vertical`, `${rootClass}-divider--staticWhite`],
      tag: 'div',
      style: {
        "height": "auto",
        "align-self": "stretch",
    },
    ...globals,
    })}
    ${CloseButton({
      ...globals,
      size: "m",
      staticColor: "white",
      customClasses: [`${rootClass}-close-button`],
      onclick,
    })}
    </div>
  `;
}