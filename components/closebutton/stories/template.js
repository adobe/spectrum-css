import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { upperCase, lowerCase, capitalize } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

export const Template = ({
  rootClass = "spectrum-CloseButton",
  size = "m",
  label = "Close",
  staticColor,
  isDisabled = false,
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

  let iconName = "Cross100";
  switch (size) {
    case "s":
      iconName = "Cross75";
      break;
    case "l":
      iconName = "Cross200";
      break;
    case "xl":
      iconName = "Cross300";
      break;
  }

  return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
          typeof staticColor !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(globals.id)}
      label=${ifDefined(label)}
      ?disabled=${isDisabled}>
      ${Icon({
        iconName,
        ...globals,
        customClasses: [`${rootClass}-UIIcon`],
        setName: "ui",
      })}
    </button>
  `;
};
