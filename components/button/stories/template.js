import { useArgs } from "@storybook/client-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { capitalize, lowerCase } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Button",
  id,
  customClasses = [],
  customStyles = {},
  size = "m",
  label,
  hideLabel = false,
  iconName,
  iconAfterLabel = false,
  variant,
  staticColor,
  treatment,
  onclick,
  isDisabled = false,
  isPending = false,
  isPendingStory = false,
  ariaExpanded,
  ariaControls,
  ...globals
}) => {
	const { express } = globals;
	try {
		if (express) import(/* webpackPrefetch: true */ "../themes/express.css");
		else import(/* webpackPrefetch: true */ "../themes/spectrum.css");
	} catch (e) {
		console.warn(e);
	}

  const [, updateArgs] = useArgs();

  return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
        [`${rootClass}--iconOnly`]: hideLabel,
        "is-pending": isPending,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${ifDefined(styleMap(customStyles))}
      ?disabled=${isDisabled}
      @click=${!isPendingStory ? onclick : () => {
        isPending
          ? updateArgs({ isPending: false })
          : updateArgs({ isPending: true });
      }}
      aria-label=${ifDefined(hideLabel ? iconName : undefined)}
      aria-expanded=${ifDefined(ariaExpanded?.toString())}
      aria-controls=${ifDefined(ariaControls)}
    >
      ${when(iconName && !iconAfterLabel, () => Icon({ ...globals, iconName, size }))}
      ${when(label && !hideLabel,
        () => html`<span class=${`${rootClass}-label`}>${label}</span>`
      )}
      ${when(iconName && iconAfterLabel, () => Icon({ ...globals, iconName, size }))}
      ${when(isPendingStory, () => {
        const isOverBackground = staticColor === 'white';
        return ProgressCircle({
          ...globals,
          size: 's',
          overBackground: isOverBackground,
          isIndeterminate: true,
          addStaticBackground: false
        })
      })}
    </button>
  `;
};
