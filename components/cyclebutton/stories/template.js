import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js"

import '../index.css';
import "@spectrum-css/actionbutton/index.css"
import "@spectrum-css/actionbutton/themes/spectrum.css"
import "@spectrum-css/actionbutton/themes/express.css"


export const Template = ({
  rootClass = "spectrum-CycleButton",
  customClasses = [],
  size = "m",
  initialIcon = "Play",
  selectedIcon = "Pause",
  isSelected,
  ...globals
}) => {
  
  return html`
    <button class=${classMap({
      "spectrum-ActionButton": true, 
      "spectrum-ActionButton--quiet": true,
      [`spectrum-ActionButton--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [rootClass]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} 
      @click=${(evt) => {
        const icons = evt.target.querySelectorAll('svg');
        for (var i = 0; i < icons.length; ++i) {
          icons[i].classList.toggle('is-selected');
        }
      }}
    >
    ${initialIcon ? 
      Icon({
        ...globals,
        iconName: initialIcon,
        size,
        customClasses: ['spectrum-ActionButton-icon', `${rootClass}-item`, (!isSelected ? 'is-selected' : '')]
      })
    : ""}
    ${selectedIcon ? 
      Icon({
        ...globals,
        iconName: selectedIcon,
        size,
        customClasses: ['spectrum-ActionButton-icon', `${rootClass}-item`, (isSelected ? 'is-selected' : '')]
      })
    : ""}
  </button>
  `;
}
