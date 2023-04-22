import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as Divider } from '@spectrum-css/divider/stories/template.js';

import '../index.css';

export const Template = ({
  rootClass = "spectrum-AlertBanner",
  isOpen = true,
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

  return html`
  <div class=${classMap({
    [rootClass]: true,
    'is-open': isOpen,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
    <div class="spectrum-AlertBanner-start">
      <div class="spectrum-AlertBanner-icon-text">
        <p class="spectrum-AlertBanner-text">Your trial has expired. Please purchase to continue. Your work has been saved and is ready for you to open again after purchase.</p>
      </div>
      <button class="spectrum-Button spectrum-Button--outline spectrum-Button--staticWhite spectrum-Button--sizeM spectrum-AlertBanner-action-button">
        <span class="spectrum-Button-label">Action</span>
      </button>
    </div>
    <div class="spectrum-AlertBanner-end">
    ${Divider({
      vertical: true,
      size: 'm',
      customClasses: [`${rootClass}-divider`, `${rootClass}--vertical`],
      tag: 'div',
      customStyles: {
        "height": "auto",
        "align-self": "stretch",
        "--mod-divider-background-color": "var(--spectrum-white)",
    },
      ...globals,
      })}

      <button class="spectrum-CloseButton spectrum-CloseButton--sizeM spectrum-AlertBanner-close-button" style="--mod-closebutton-icon-color-default: var(--spectrum-white);">
        <svg class="spectrum-CloseButton-UIIcon spectrum-Icon spectrum-UIIcon-Cross100 " focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-Cross100" />
        </svg>
      </button>
    </div>
  `;
}