import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

export const Template = ({
  rootClass = "spectrum-QuickActions",
  size = "m",
  isOpen = false,
  textOnly = false,
  position,
  noOverlay = false,
  content = [],
  customClasses = [],
  ...globals
}) => {
  if (!content.length) {
    console.warn("Quick actions require content be passed in to render.");
    return html``;
  }

  try {
    import(/* webpackPrefetch: true */ "../index.css");
    import(/* webpackPrefetch: true */ "../skin.css");
  } catch (e) {
    console.warn(e);
  }

  if (!content.some((c) => c.icon)) {
    textOnly = true;
  }

  return html`
    ${!noOverlay ? html`<div class="${rootClass}-overlay" style="padding: 40px;">` : ''}
      <div
        class="${classMap({
          [rootClass]: true,
          [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
          "is-open": isOpen,
          [`${rootClass}--${position}`]: typeof position !== "undefined",
          [`${rootClass}--textOnly`]: textOnly,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}"
        id=${ifDefined(globals.id)}>
        ${content.map((c) => {
          if (typeof c === "object" && c.icon || c.label) {
            return ActionButton({ ...globals, ...c, isQuiet: true });
          } else return c;
        })}
      </div>
    ${!noOverlay ? html`</div>` : ''}
  `;
};
