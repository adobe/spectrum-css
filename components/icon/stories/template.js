import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { classMap } from "lit-html/directives/class-map.js";

import { fetchIconSVG } from "./utilities.js";

import "../index.css";

/**
 * @typedef { keyof import("./icon.stories").default.args } IconArgs
 * @typedef { IconArgs & { scale: string, useRef: boolean, setName: 'workflow' | 'ui' } } IconProps
 */

/**
 * Template for rendering an icon
 * @type {(IconProps) => import('lit-html').TemplateResult<1>}
 */
export const Template = ({
  rootClass = "spectrum-Icon",
  size = "m",
  iconName,
  fill,
  id,
  customClasses = [],
  useRef = false,
  setName = "workflow",
  ...globals
}) => {
  if (!iconName) {
    console.warn(
      "Could not render a result because no icon name was provided to the icon template."
    );
    return html``;
  }

  const { scale } = globals;

  let idKey = iconName;
  if (['Chevron', 'Arrow'].some(c => iconName.startsWith(c)) && ['Right', 'Left', 'Down', 'Up'].some(c => iconName.includes(c))) {
    idKey = iconName.replace(/(Right|Left|Down|Up)/, '');
  }

  let inlineStyle;
  if (fill) inlineStyle = `color: ${fill}`;
  let { icon, setName: foundSet } = !useRef
    ? fetchIconSVG({ iconName: idKey, setName, ...globals })
    : { icon: undefined, setName };

  if (!useRef && !icon) {
    console.warn(`Icon: ${iconName} not found.`);
    return html``;
  }

  if (foundSet) setName = foundSet;

  const classList = {
    [rootClass]: true,
    [`spectrum-UIIcon-${iconName}`]: !!(setName === "ui"),
    [`${rootClass}--${scale}`]: !!(setName === "ui" && scale),
    [`${rootClass}--size${size?.toUpperCase()}`]: !!(
      (!setName || setName === "workflow") &&
      size
    ),
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  };

  // If we found an icon above, return that value with the appended class list
  if (icon) {
    return html`${unsafeHTML(
      icon.replace(
        /^<svg(.*)>/,
        `<svg class="${Object.entries(classList)
          .filter(([, v]) => v === true)
          .map(([k]) => k)
          .join(" ")}"${
          inlineStyle ? ` style="${inlineStyle}"` : ""
        } focusable="false" aria-hidden="true" role="img" width="10" $1>`
      )
    )}`;
  }

  // Otherwise, we need to render a reference to the icon

  // ui ID: #spectrum-css-icon-${iconName}
  // workflow ID: #spectrum-icon-(18|24)-${iconName}
  const iconID =
    setName !== "workflow"
      ? `spectrum-css-icon-${idKey}`
      : `spectrum-icon-${scale !== "medium" ? `24` : `18`}-${iconName}`;

  try {
    import(
      /* webpackPrefetch: true */ `!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg`
    );
    import(
      /* webpackPrefetch: true */ `!!raw-loader!@spectrum-css/icon/dist/spectrum-css-icons.svg`
    );
  } catch (e) {
    console.warn(e);
  }

  return html` <svg
    class=${classMap(classList)}
    id=${ifDefined(id)}
    style=${ifDefined(inlineStyle)}
    focusable="false"
    aria-hidden="true"
    aria-labelledby=${iconName}
    role="img"
  >
    <title id=${iconName}>${iconName.replace(/([A-Z])/g, " $1").trim()}</title>
    <use xlink:href="#${iconID}" href="#${iconID}" />
  </svg>`;
};
