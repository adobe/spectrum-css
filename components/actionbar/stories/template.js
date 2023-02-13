import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Popover } from '@spectrum-css/popover/stories/template.js';
import { Template as CloseButton } from '@spectrum-css/closebutton/stories/template.js';
import { Template as FieldLabel } from '@spectrum-css/fieldlabel/stories/template.js';
import { Template as ActionGroup } from '@spectrum-css/actiongroup/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ActionBar",
  size = "m",
  isOpen = true,
  isEmphasized = false,
  isSticky = false,
  isFixed = false,
  isFlexible = false,
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
      [`${rootClass}--emphasized`]: isEmphasized,
      [`${rootClass}--sticky`]: isSticky,
      [`${rootClass}--fixed`]: isFixed,
      [`${rootClass}--flexible`]: isFlexible,
      'is-open': isOpen,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${Popover({
        ...globals,
        customClasses: [`${rootClass}-popover`],
        isOpen,
        content: [
          CloseButton({
            ...globals,
            staticColor: isEmphasized ? "white" : undefined,
          }),
          FieldLabel({
            ...globals,
            size: "s",
            label: "2 Selected"
          }),
          ActionGroup({
            ...globals,
            size: "m",
            areQuiet: true,
            staticColors: isEmphasized ? "white" : undefined,
            content: [{
              icon: "Edit",
              label: "Edit",
            }, {
              icon: "Copy",
              label: "Copy",
            }, {
              icon: "Delete",
              label: "Delete",
            }]
          }),
        ],
      })}
    </div>
  `;
}
