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
  content = [],
  customClasses = [],
  buttons,
  variant,
  icon = false,
  id,
  ...globals
}) => {

  const iconColor =
  variant === "error"
    ? "red"
    : variant === "warning"
    ? "orange"
    : "";

  const Dialog = html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}-${variant}`]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role="dialog"
      tabindex="-1"
      aria-modal="true"
    >
      <div class="${rootClass}-grid">
      <div class="spectrum-AlertDialog-header">
        <h1 class="${rootClass}-heading">${heading}</h1>
        ${when(icon, () => Icon({
          size: 'm',
          iconName: "Alert",
          customClasses: [`${rootClass}-icon`],
          fill: iconColor,
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
          items: buttons
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