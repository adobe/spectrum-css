import { useArgs } from "@storybook/preview-api";
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
	testId,
	customClasses = [],
	customStyles = {},
	size = "m",
	label,
	hideLabel = false,
	iconName,
	iconSet = "workflow",
	iconAfterLabel = false,
	variant,
	staticColor,
	treatment,
	onclick,
	isDisabled = false,
	isHovered = false,
	isFocused = false,
	isActive = false,
	isPending = false,
	ariaExpanded,
	ariaControls,
	...globals
}) => {
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
        ["is-pending"]: isPending,
        ["is-disabled"]: isDisabled,
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
				["is-active"]: isActive,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${ifDefined(styleMap(customStyles))}
      ?disabled=${isDisabled}
      @click=${onclick ?? function() {
        // Toggle the is-pending state on-click
        updateArgs({ isPending: true });
        setTimeout(() => {
          updateArgs({ isPending: false });
        }, 3000);
      }}
      aria-label=${ifDefined(hideLabel ? iconName : undefined)}
      aria-expanded=${ifDefined(ariaExpanded?.toString())}
      aria-controls=${ifDefined(ariaControls)}
      data-testid=${ifDefined(testId)}
    >
      ${when(iconName && !iconAfterLabel, () => Icon({ ...globals, iconName, setName: iconSet, size }))}
      ${when(label && !hideLabel,
        () => html`<span class=${`${rootClass}-label`}>${label}</span>`
      )}
      ${when(iconName && iconAfterLabel, () => Icon({ ...globals, iconName, setName: iconSet, size }))}
      ${when(isPending, () => ProgressCircle({
        ...globals,
        size: "s",
        testId: "progress-circle",
        staticColor,
        isIndeterminate: true,
      }))}
    </button>
  `;
};
