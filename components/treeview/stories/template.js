import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { useArgs } from '@storybook/client-api';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";
import "../skin.css";

export const TreeViewItem = ({
  rootClass = "spectrum-TreeView",
  size = "m",
  link,
  label,
  isSelected,
  isDisabled,
  id,
  icon,
  isOpen,
  customClasses = [],
  items,
  onclick,
  ...globals
}) => {

  return html`
    <li id=${id} class=${classMap({
      [`${rootClass}-item`]: true,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
      "is-open": isOpen,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
    ${typeof items !== "undefined" ?
      html`<a href=${link} class="${rootClass}-itemLink" 
        onclick=${onclick ?? function() {
          if (isDisabled) return;

        }}
      >
        ${Icon({
          ...globals,
          size,
          iconName: "Chevron100",
          customClasses: [`${rootClass}-itemIndicator`]
        })}
        ${icon ? 
          Icon({
            ...globals,
            size,
            iconName: icon,
            customClasses: [`${rootClass}-itemIcon`]
          })
        : ""}
        <span class="${rootClass}-itemLabel">${label}</span>
      </a>
        ${Template({
          ...globals,
          items: items,
          size,
          rootClass: "spectrum-TreeView",
          customClasses: ['is-opened']
        })}
      `
    : 
      html`<a href=${link} class="${rootClass}-itemLink">
        ${icon ? 
          Icon({
            ...globals,
            size,
            iconName: icon,
            customClasses: [`${rootClass}-itemIcon`]
          })
        : ""}
        <span class="${rootClass}-itemLabel">${label}</span>
      </a>
      `
    }
    </li>
  `
}

export const Template = ({
  rootClass = "spectrum-TreeView",
  customClasses = [],
  size = "m",
  isQuiet,
  items,
  ...globals
}) => {

  return html`
    <ul class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--quiet`]: isQuiet,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
    ${repeat(items, (item) => item.id, (item) => {
        return TreeViewItem({
          ...globals,
          ...item,
        })
    })}
  </ul>
  `;
}
