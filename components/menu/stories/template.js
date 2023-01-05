import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';

import { Template as DividerTemplate } from '../../divider/stories/template.js';
import { Template as IconTemplate } from '../../icon/stories/template.js';

export const MenuItemTemplate = ({
  rootClass,
  label,
  icon,
  size = 'm',
  scale = 'medium',
  isHighlighted = false,
  isActive = false,
  isSelected = false,
  isDisabled = false,
  isChecked = false,
  isFocused = false,
  role = 'menuitem',
}) => {
  const classList = {
    'spectrum-Menu-item': true,
    'is-highlighted': isHighlighted,
    'is-active': isActive,
    'is-focused': isFocused,
    'is-selected': isSelected,
    'is-disabled': isDisabled,
  };

  return html`
    <li class=${classMap(classList)} role=${ifDefined(role)} tabindex="0">
      ${icon ? IconTemplate({ iconName: icon, size, scale, customClasses: [`${rootClass}Icon`] }) : ''}
      <span class="${rootClass}Label">${label}</span>
      ${isChecked ? IconTemplate({ iconName: 'Checkmark100', size, scale, setName: 'ui', customClasses: ['spectrum-Menu-checkmark', `${rootClass}Icon`] }) : ''}
    </li>
  `;
};

export const MenuGroupTemplate = ({
  size = 'm',
  scale = 'medium',
  heading,
  id,
  idx = 0,
  items = [],
  isDisabled = false,
  isSelectable = false,
  subrole,
}) => {
  const headingID = id ?? `menu-heading-category-${idx}`;
  return html`
    <li role="presentation">
      ${heading ? html`<span class="spectrum-Menu-sectionHeading" id=${headingID} aria-hidden="true">${heading}</span>` : ''}
      ${Template({
        size,
        scale,
        role: 'group',
        subrole,
        labelledby: id,
        items,
        isDisabled,
        isSelectable,
      })}
    </li>
  `;
};

export const SubmenuTemplate = ({
  rootClass,
  label,
  size = 'm',
  scale = 'medium',
  items = [],
  isOpen = false,
  isDisabled = false,
  isFocused = false,
  role = 'menuitem',
}) => {
  const classList = {
    [rootClass]: true,
    'is-open': isOpen,
    'is-disabled': isDisabled,
    'is-focused': isFocused,
  };

  return html`
    <li class=${classMap(classList)} role=${ifDefined(role)} tabindex="0">
      ${label ? html`<span class="spectrum-Menu-itemLabel">${label}</span>` : ''}
      ${IconTemplate({ iconName: 'Chevron100', customClasses: ['spectrum-UIIcon-ChevronRight100', 'spectrum-Menu-chevron', 'spectrum-Menu-itemIcon'], setName: 'ui' })}
      ${Template({ size, scale, items })}
    </li>
  `;
};

export const Template = ({
  rootClass,
  labelledby,
  size = 'm',
  scale = 'medium',
  customClasses = [],
  isDisabled = false,
  isSelectable = true,
  items = [],
  role = 'menu',
  subrole = 'menuitem'
}) => {
  const classList = {
    [rootClass]: true,
    'is-selectable': isSelectable,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <ul class=${classMap(classList)} role=${ifDefined(role)} aria-labelledby=${ifDefined(labelledby)} aria-disabled=${isDisabled ? "true" : "false"}>
      ${repeat(items, (i) => {
        if (i.type === 'divider') return DividerTemplate({ tag: 'li', customClasses: [`${rootClass}-divider`], size, scale });
        else if (i.heading) return MenuGroupTemplate({ ...i, size, scale, subrole })
        else if (i.items) return SubmenuTemplate({ ...i, rootClass: `${rootClass}-item`, size, scale, role: subrole })
        else return MenuItemTemplate({ ...i, rootClass: `${rootClass}-item`, size, scale, role: subrole });
      })}
    </ul>
  `;
};
