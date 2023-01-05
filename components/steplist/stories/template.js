import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';

export const ItemTemplate = ({
  rootClass,
  label,
  posinset = 1,
  setsize = 4,
  isComplete = false,
  isSelected = false,
  customClasses = []
}) => {
  const classList = {
    [`${rootClass}-item`]: true,
    'is-complete': isComplete,
    'is-selected': isSelected,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)} role="listitem" aria-posinset=${posinset} aria-setsize=${setsize} aria-label=${label}>
      <span class="${rootClass}-markerContainer">
        <span class="${rootClass}-marker"></span>
      </span>
      <span class="${rootClass}-segment"></span>
    </div>
  `;
};

export const Template = ({ rootClass, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)} role="list">
      ${repeat([
        { isComplete: true, label: 'Step 1' },
        { isComplete: true, label: 'Step 2' },
        { isSelected: true, label: 'Step 3' },
        { label: 'Step 4' }
      ], (args, idx) => SteplistItemTemplate({ rootClass, ...args, posinset: idx + 1 }))}
    </div>
  `;
}
