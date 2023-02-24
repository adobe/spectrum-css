import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { useArgs } from "@storybook/client-api";

import { Template as Checkbox } from '@spectrum-css/checkbox/stories/template.js';
import { Template as Icon } from '@spectrum-css/icon/stories/template.js';

import '../index.css';
import '../skin.css';

export const AssetListItem = ({
  rootClass = "spectrum-AssetList-item",
  image,
  iconName,
  label,
  isSelectable = false,
  isSelected = false,
  isBranch = false,
  onclick = () => {},
  ...globals
}) => {
  return html`
    <li class=${classMap({
        [rootClass]: true,
        'is-selectable': isSelectable,
        'is-selected': isSelected,
        'is-branch': isBranch,
      })}
      @click=${onclick}
      tabindex="0">
      ${Checkbox({
        ...globals,
        size: "m",
        isChecked: isSelected,
        customClasses: [`${rootClass}Selector`],
      })}
      ${image ? html`<img src=${image ?? exampleImage} class="${rootClass}Thumbnail">` : ''}
      ${iconName ? Icon({
        iconName,
        customClasses: [`${rootClass}Thumbnail`],
        ...globals,
      }) : ''}
      ${label ? html`<span class="${rootClass}Label">${label}</span>`: ''}
      ${isBranch ? Icon({
        iconName: "ChevronRight100",
        customClasses: [`${rootClass}ChildIndicator`],
        setName: "ui",
        ...globals,
      }) : ''}
    </li>`;
};

export const Template = ({
  rootClass = "spectrum-AssetList",
  items = [],
  customClasses = [],
  id,
  ...globals
}) => {
  if (!items) return html``;

  const [, updateArgs] = useArgs();

  return html`
    <ul class=${classMap({
        [rootClass]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} id=${ifDefined(id)}>
      ${items.map((item, idx) => {
        return AssetListItem({
          rootClass: `${rootClass}-item`,
          onclick: () => {
            if (item.isDisabled) return;
            item.isSelected = !item.isSelected;
            updateArgs({ items });
          },
          ...item,
          ...globals,
        });
      })}
    </ul>
  `;
}
