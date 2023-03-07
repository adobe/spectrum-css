import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";

import { Template as Icon } from '@spectrum-css/icon/stories/template.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-Textfield",
  size = "m",
  customClasses = [],
  customInputClasses = [],
  customIconClasses = [],
  placeholder,
  name,
  icon,
  value,
  type = "text",
  autocomplete = true,
  ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${icon ? Icon({
        ...globals,
        size,
        iconName: icon,
        customClasses: [`${rootClass}-icon`, ...customIconClasses],
      }) : ""}
      <input
        type=${ifDefined(type)}
        placeholder=${ifDefined(placeholder)}
        name=${name}
        value=${ifDefined(value)}
        autocomplete=${autocomplete ? undefined : "off"}
        class=${classMap({
          [`${rootClass}-input`]: true,
          ...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
      />
    </div>
  `;
};
