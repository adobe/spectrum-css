import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

export const Template = ({
  rootClass = "spectrum-Divider",
  size = "m",
  tag = "hr",
  customClasses = [],
  ...globals
}) => {
  try {
    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
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
