import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-SideNav",
  customClasses = [],
  variant,
  hasIcon,
  iconName,
  items = [],
  ...globals
}) => {
  return html`
    <nav>
      <ul class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--hasIcon`]: hasIcon,
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
              ${item.heading ?
                html`<h2 class="${rootClass}-heading" id="${item.id}-heading">${item.heading}</h2>`
                :
                html`
                <a class="${rootClass}-itemLink">
                ${when(hasIcon, () =>
                  Icon({
                      ...globals,
                      iconName,
                    })
                  )}
                  <span class="${rootClass}-link-label">${item.title}</span>
                </a>
                `
              }
                <ul class=${rootClass} aria-labelledby=${ifDefined(item.heading) ? `${item.id}-heading` : ""}>
                  ${repeat(item.subitems, (item) => item.id, (item) => {
                    return SideNavItem({
                      ...globals,
                      ...item
                    })
                  })}
                </ul>
              </li>
            `
          } else {
            return SideNavItem({
              hasIcon,
              iconName,
              ...globals,
              ...item
            })
          }
        })}
      </ul>
  </nav>
  `;
}

export const SideNavItem = ({
  rootClass = "spectrum-SideNav",
  secondlevelsubitems,
  link,
  title,
  isSelected,
  isDisabled,
  id,
  hasIcon,
  iconName,
  customClasses = [],
  ...globals
}) => {
  return html`
    <li id=${id} class=${classMap({
      [`${rootClass}-item`]: true,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <a href=${link} class="${rootClass}-itemLink">
        ${hasIcon ?
          Icon({
            ...globals,
            iconName,
          })
        : ""}
        <span class="${rootClass}-link-label">${title}</span>
      </a>
      ${when(secondlevelsubitems, () => html`
        <ul class=${rootClass}>
          ${repeat(secondlevelsubitems, (item) => item.id, (item) => {
            return SideNavItem({
              ...globals,
              ...item
            })
          })}
        </ul>`
      )}
    </li>
  `
}
