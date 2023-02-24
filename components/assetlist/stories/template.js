import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Checkbox } from '@spectrum-css/checkbox/stories/template.js';
import { Template as Icon } from '@spectrum-css/icon/stories/template.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-AssetList",
  content = [],
  customClasses = [],
  id,
  ...globals
}) => {
  return html`
    <ul class=${classMap({
        [rootClass]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} id=${ifDefined(id)}>
      ${repeat(content, (item) => {
        const {
          image,
          iconName,
          label,
          isSelectable = false,
          isSelected = false,
          isBranch = false,
        } = item;
        return html`
          <li class=${classMap({
            [`${rootClass}-item`]: true,
            'is-selectable': isSelectable,
            'is-selected': isSelected,
            'is-branch': isBranch,
          })} tabindex="0">
            ${Checkbox({
              ...globals,
              size: "m",
              isChecked: isSelected,
              customClasses: [`${rootClass}-itemSelector`],
            })}
            ${image ? html`<img src=${image ?? exampleImage} class="${rootClass}-itemThumbnail">` : ''}
            ${iconName ? Icon({
              ...globals,
              iconName,
              customClasses: [`${rootClass}-itemThumbnail`],
            }) : ''}
            ${label ? html`<span class="${rootClass}-itemLabel">${label}</span>`: ''}
            ${isBranch ? Icon({
              ...globals,
              iconName: "ChevronRight100",
              customClasses: [`${rootClass}-itemChildIndicator`],
            }) : ''}
          </li>`;
      })}
    </ul>
  `;
}
