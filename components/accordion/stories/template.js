import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';

// Uncomment if you plan to include an icon
import { Template as IconTemplate } from '../../icon/stories/template.js';

export const AccordionItemTemplate = ({
  rootClass,
  heading,
  content,
  idx = 0,
  isDisabled = false,
  isOpen = false,
}) => {
  const classList = {
    [rootClass]: true,
    'is-open': isOpen,
    'is-disabled': isDisabled,
  };

  return html`
    <div class=${classMap(classList)} role="presentation" @click=${(evt) => {
      if (isDisabled || !evt || !evt.target ) return;
      const closest = evt.target.closest(`.${rootClass}`);
      if (!closest) return;
      closest.classList.toggle('is-open');
    }}>
      <!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role="tab" -->
      <h3 class="${rootClass}Heading">
        <!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->
        <button class="${rootClass}Header" type="button" ?disabled=${isDisabled} id="spectrum-accordion-item-${idx}-header" aria-controls="spectrum-accordion-item-${idx}-content" aria-expanded="${open ? 'true' : 'false'}">${heading}</button>
        ${IconTemplate({ iconName: 'Chevron100', customClasses: ['spectrum-UIIcon-ChevronRight100', `${rootClass}Indicator`], setName: 'ui' })}
      </h3>
      <!-- WAI-ARIA 1.1: Item content role changed from "tabpanel" to "region" -->
      <div class="${rootClass}Content" role="region" id="spectrum-accordion-item-${idx}-content" aria-labelledby="spectrum-accordion-item-${idx}-header">${content}</div>
    </div>
  `;
}

export const Template = ({ rootClass, items = [], customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
      <div class="${classMap(classList)}" role="region">
        ${repeat(
          Array.from(items.keys()),
          (heading, idx) => AccordionItemTemplate({
            rootClass: `${rootClass}-item`,
            heading,
            content: items.get(heading).content,
            idx,
            open: items.get(heading).open,
            disabled: items.get(heading).disabled,
          })
        )}
    </div>
  `;
};
