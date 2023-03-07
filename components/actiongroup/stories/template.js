import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as ActionButton } from '@spectrum-css/actionbutton/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ActionGroup",
  size = "m",
  areQuiet = false,
  areEmphasized = false,
  vertical = false,
  compact = false,
  justified = false,
  staticColors,
  content,
  customClasses = [],
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--quiet`]: areQuiet,
      [`${rootClass}--vertical`]: vertical,
      [`${rootClass}--compact`]: compact,
      [`${rootClass}--justified`]: justified,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${repeat(content, (item) => item.id, (item) => {
        if (typeof item === "object") {
          return ActionButton({
            ...globals,
            ...item,
            isQuiet: areQuiet || item.isQuiet,
            isEmphasized: areEmphasized || item.isEmphasized,
            staticColor: staticColors || item.staticColor,
            customClasses: [`${rootClass}-item`],
          })
        } else return item;
      })}
    </div>
  `;
}
