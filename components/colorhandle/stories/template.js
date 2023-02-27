import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-ColorHandle",
  customClasses = [],
  isDisabled = false,
  style = "--spectrum-picked-color: rgba(255, 0, 0, 0.5); position: absolute; top: 50%; left: 50%;"
  // ...globals

}) => {
  return html`
  <div class=${classMap({
    [rootClass]: true,
    'is-disabled': isDisabled,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}
  ?disabled=${isDisabled}
  style= ${ifDefined(style)} >
      <div class="${rootClass}-color"></div>
    </div>
  </div>
  `;
}
