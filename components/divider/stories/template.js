import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Divider",
  size = "m",
  tag = "hr",
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
    ${unsafeHTML(
      `<${tag} class="${Object.entries({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })
        .map(([c, isC]) => (isC ? c : ""))
        .join(" ")}"${globals.id ? ` id="${globals.id}"` : ""} role="separator"></${tag}>`
    )}
  `;
};
