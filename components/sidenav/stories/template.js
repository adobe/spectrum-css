import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";


import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-SideNav",
	customClasses = [],
	variant,
	hasIcon,
	iconName,
	items = [],
}) => html`
  <nav>
    <ul class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${variant}`]: typeof variant !== "undefined",
      [`${rootClass}--hasIcon`]: hasIcon,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${repeat(items, (item) => item.id, (item) => {
        if (typeof item.levelTwoItems !== "undefined") {
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
                ${when(hasIcon, () => Icon({ iconName }))}
                <span class="${rootClass}-link-text">${item.title}</span>
              </a>
              `
            }
            <ul class=${classMap({
              [rootClass]: true,
              [`${rootClass}--hasIcon`]: hasIcon,
              ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            aria-labelledby=${ifDefined(item.heading) ? `${item.id}-heading` : ""}>
                ${repeat(item.levelTwoItems, (item) => item.id, (item) => {
                  return SideNavItem({
                    variant,
                    hasIcon,
                    iconName,
                    ...item
                  });
                })}
              </ul>
            </li>
          `;
        }
        else {
          return SideNavItem({
            hasIcon,
            iconName,
            ...item
          });
        }
      })}
    </ul>
</nav>
`;

export const SideNavItem = ({
	rootClass = "spectrum-SideNav",
	variant,
	levelThreeItems,
	link,
	title,
	isSelected,
	isDisabled,
	id,
	hasIcon,
	iconName,
	customClasses = [],
}) => {
	const displayIcon = hasIcon & variant === "multiLevel" ? false : true;
	return html`
    <li id=${id} class=${classMap({
      [`${rootClass}-item`]: true,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <a href=${link} class="${rootClass}-itemLink">
        ${displayIcon ? Icon({ iconName }) : ""}
        <span class="${rootClass}-link-text">${title}</span>
      </a>
      ${when(levelThreeItems, () => html`
        <ul class=${rootClass}>
          ${repeat(levelThreeItems, (item) => item.id, (item) => SideNavItem(item))}
        </ul>`
      )}
    </li>
  `;
};
