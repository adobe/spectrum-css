import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

export const Template = ({
  rootClass = "spectrum-Tray",
  isOpen = true,
  content = [],
  customClasses = ["spectrum-Modal"],
  ...globals
}) => {
  const { express } = globals;

  try {
    import(/* webpackPrefetch: true */ "@spectrum-css/modal");

    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <div class="${rootClass}-wrapper">
      <div
        class=${classMap({
          [rootClass]: true,
          "is-open": isOpen,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
        id=${ifDefined(globals.id)}>
        ${content.map((c) => {
          const { template, ...props } = c;
          return template({ ...props, ...globals });
        })}
      </div>
    </div>
  `;
};
