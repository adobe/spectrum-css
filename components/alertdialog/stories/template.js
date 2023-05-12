import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { when } from 'lit-html/directives/when.js';

import { Template as Modal } from '@spectrum-css/modal/stories/template.js';
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import '../index.css';

export const Template = ({
  rootClass = "spectrum-AlertDialog",
  isOpen = true,
  showModal = false,
  heading = true,
  content = true,
  customClasses = [],
  buttons,
  variant,
  icon = false,
  id,
  ...globals
}) => {

  const Dialog = html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${variant}`]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      aria-labelledby="dialog_label"
    >
      <div class="${rootClass}-grid">
      <div class="spectrum-AlertDialog-header">
        <h1 class="${rootClass}-heading" id="dialog_label">${heading}</h1>
        ${when(icon, () => Icon({
          size: 'm',
          iconName: "Alert",
          customClasses: [`${rootClass}-icon`],
          ...globals,
        })) }
      </div>
      ${Divider({
            horizontal: true,
            customClasses: [`${rootClass}-divider`],
            ...globals,
          })}
      <section class="${rootClass}-content">${content}</section>
      ${ButtonGroup({
          items: buttons,
          customClasses: ["spectrum-ButtonGroup-alert-dialog"]
        })
      }
      </div>
    </div>
  `;

  if (showModal) {
    return Modal({
          ...globals,
          isOpen,
          content: Dialog,
        });
  } else {
    return Dialog;
  }
};