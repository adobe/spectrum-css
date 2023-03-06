import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';

// import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";
import "../skin.css";


export const SideNavItem = ({
  rootClass = "spectrum-SideNav",
  link,
  title,
  isSelected,
  isDisabled,
  id,
  customClasses
}) => {
  return html`
    <li id=${id} class=${classMap({
      [`${rootClass}-item`]: true,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
    })}>
      <a href=${link} class="${rootClass}-itemLink">${title}</a>
    </li>
  `
}

export const Template = ({
  rootClass = "spectrum-SideNav",
  customClasses = [],
  variant,
  items = [],
  ...globals
}) => {
  return html`
    <nav>
      <ul class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}>
        ${repeat(items, (item) => item.id, (item) => {
          if (typeof item.subitems !== "undefined") {
            return html`
              <li class=${classMap({
                [`${rootClass}-item`]: true,
                "is-selected": item.isSelected,
                "is-disabled": item.isDisabled,
              })}>
                <a href=${item.link} class="${rootClass}-itemLink">${item.title}</a>
                <ul class=${rootClass}>
                  ${repeat(item.subitems, (item) => item.id, (item) => {
                    return SideNavItem({
                      ...item
                    })
                  })}
                </ul>
              </li>
            `
          } else {
            return SideNavItem({
              ...item
            })
          }
        })}
      </ul>
  </nav>
  `;
}
