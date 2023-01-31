import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
  rootClass = "spectrum-HelpText",
  size = "m",
  isDisabled = false,
  hideIcon = false,
  text,
  variant,
  customClasses = [],
  ...globals
}) => {
  const { express } = globals;

  try {
    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        "is-disabled": isDisabled,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(globals.id)}>
      ${!hideIcon
        ? Icon({
            iconName: "Alert",
            size,
            customClasses: [`${rootClass}-validationIcon`],
          })
        : ""}
      <div class=${`${rootClass}-text`}>${text}</div>
    </div>
  `;
};
