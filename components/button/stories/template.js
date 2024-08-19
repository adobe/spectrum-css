import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Button",
	id = getRandomId("button"),
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
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--size${size?.toUpperCase()}`]:
          typeof size !== "undefined",
        [`${rootClass}--static${capitalize(staticColor)}`]:
          typeof staticColor !== "undefined",
        [`${rootClass}--iconOnly`]: hideLabel,
        ["is-pending"]: isPending,
        ["is-disabled"]: isDisabled,
        ["is-hover"]: isHovered,
        ["is-focus-visible"]: isFocused,
        ["is-active"]: isActive,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${styleMap(customStyles)}
      ?disabled=${isDisabled}
      @click=${onclick ??
      function () {
        // Toggle the is-pending state on-click
        updateArgs({ isPending: true });

        setTimeout(() => {
          updateArgs({ isPending: false });
        }, 3000);
      }}
      @focusin=${function() {
        updateArgs({ isFocused: true });
      }}
      @focusout=${function() {
        updateArgs({ isFocused: false });
      }}
      aria-label=${ifDefined(hideLabel ? iconName : undefined)}
      aria-expanded=${ifDefined(ariaExpanded?.toString())}
      aria-controls=${ifDefined(ariaControls)}
      data-testid=${ifDefined(testId)}
    >
      ${when(iconName && !iconAfterLabel, () =>
        Icon({ iconName, setName: iconSet, size }, context)
      )}
      ${when(
        label && !hideLabel,
        () => html`<span class=${`${rootClass}-label`}>${label}</span>`
      )}
      ${when(iconName && iconAfterLabel, () =>
        Icon({ iconName, setName: iconSet, size }, context)
      )}
      ${when(isPending, () =>
        ProgressCircle(
          {
            size: "s",
            testId: "progress-circle",
            staticColor,
            isIndeterminate: true,
          },
          context
        )
      )}
    </button>
  `;
};
