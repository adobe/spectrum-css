import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as ClearButton } from '@spectrum-css/clearbutton/stories/template.js';
import { Template as TextField } from '@spectrum-css/textfield/stories/template.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-Search",
  customClasses = [],
  isDisabled = false,
  isQuiet = false,
  ...globals
}) => {
  return html`
    <form class=${classMap({
      [rootClass]: true,
      [`${rootClass}--quiet`]: isQuiet,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${TextField({
        ...globals,
        isDisabled,
        customClasses: [`${rootClass}-textfield`],
        icon: "Magnify",
        type: "search",
        placeholder: "Search",
        name: "search",
        customInputClasses: [`${rootClass}-input`],
        customIconClasses: [`${rootClass}-icon`],
        autocomplete: false,
      })}
      ${ClearButton({
        ...globals,
        isDisabled,
        customClasses: [`${rootClass}-clearButton`],
      })}
    </form>
  `;
}
