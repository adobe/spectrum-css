import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";

import "../index.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
  rootClass = "spectrum-Toast",
  variant,
  message,
  isHidden = false,
  inlineButtonLabel,
  width,
  customClasses = [],
  id,
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  const iconName =
    variant === "negative"
      ? "Alert"
      : variant === "positive"
      ? "CheckmarkCircle"
      : "Info";
  const inlineStyles = width && width > 0 ? `width:${width}px` : undefined;

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      ?hidden=${isHidden}
      style=${ifDefined(inlineStyles)}
    >
      ${variant
        ? Icon({
            ...globals,
            iconName,
            size: "m",
            customClasses: [`${rootClass}-typeIcon`],
          })
        : ""}
      <div class="${rootClass}-body">
        <div class="${rootClass}-content">${message}</div>
        ${inlineButtonLabel
          ? Button({
              ...globals,
              variant: "secondary",
              size: "m",
              staticColor: "white",
              treatment: "outline",
              label: inlineButtonLabel,
            })
          : ""}
      </div>
      <div class="${rootClass}-buttons">
        ${CloseButton({
          ...globals,
          size: "m",
          staticColor: "white",
          onclick,
        })}
      </div>
    </div>
  `;
};
