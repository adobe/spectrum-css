import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import '../index.css';
import '../skin.css';

export const AccordionItem = ({
  heading,
  content,
  rootClass = "spectrum-Accordion-item",
  id,
  idx = 0,
  isDisabled = false,
  isOpen = false,
  // customClasses = [],
  ...globals
}) => {
  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        "is-disabled": isDisabled,
      })}
      id=${ifDefined(id)}
      role="presentation"
      @click=${(evt) => {
        if (isDisabled || !evt || !evt.target) return;
        const closest = evt.target.closest(`.${rootClass}`);
        if (!closest) return;
        closest.classList.toggle("is-open");
      }}
    >
      <!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role="tab" -->
      <h3 class="${rootClass}Heading">
        <!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->
        <button
          class="${rootClass}Header"
          type="button"
          ?disabled=${isDisabled}
          id="spectrum-accordion-item-${idx}-header"
          aria-controls="spectrum-accordion-item-${idx}-content"
          aria-expanded="${open ? "true" : "false"}"
        >
          ${heading}
        </button>
        ${Icon({
          iconName: "ChevronRight100",
          customClasses: [
            `${rootClass}Indicator`,
          ],
          setName: "ui",
          ...globals,
        })}
      </h3>
      <!-- WAI-ARIA 1.1: Item content role changed from "tabpanel" to "region" -->
      <div
        class="${rootClass}Content"
        role="region"
        id="spectrum-accordion-item-${idx}-content"
        aria-labelledby="spectrum-accordion-item-${idx}-header"
      >
        ${content}
      </div>
    </div>
  `;
};

export const Template = ({
  rootClass = "spectrum-Accordion",
  items,
  id,
  customClasses = [],
  ...globals
}) => {
  if (!items || !items.size) return html``;

  return html`
    <div
      class="${classMap({
        [rootClass]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}"
      id=${ifDefined(id)}
      role="region">
      ${repeat(Array.from(items.keys()), (heading, idx) => {
        const item = items.get(heading);
        return AccordionItem({
          rootClass: `${rootClass}-item`,
          heading,
          idx,
          ...item,
          ...globals,
        });
      })}
    </div>
  `;
};
