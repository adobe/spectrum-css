import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Carousel",
  size = "m",
  id = getRandomId("Carousel"),
  isDisabled = false,
  testId,
  customClasses = [],
  customStyles = {},
  onclick,
}, context) => {
	const { updateArgs } = context;
  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: true,
				["is-disabled"]: isDisabled,
				["is-selected"]: isSelected,
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${id}
      data-testid=${testId ?? id}
      style=${styleMap(customStyles)}
      ?disabled=${isDisabled}
			@click=${onclick ?? function() {
        if (isDisabled) return;
        updateArgs({ isSelected: !isSelected });
      }}
    >
      <!-- Component mark-up goes here -->
    </div>
  `;
};
