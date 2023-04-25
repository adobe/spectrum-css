import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { useArgs } from "@storybook/client-api";

// Uncomment if you plan to include an icon
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Rating",
  size = "m",
  max = 5,
  value = 0,
  isReadOnly = false,
  isFocused = false,
  isDisabled = true,
  customClasses = [],
  id,
  ...globals
}) => {
  const [, updateArgs] = useArgs();

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        'is-disabled': isDisabled,
        'is-readOnly': isReadOnly,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      @focusin=${() => {
        updateArgs({ isFocused: !isFocused });
      }}
      @focusout=${() => {
        updateArgs({ isFocused: !isFocused });
      }}
    >
      <input
        class="${rootClass}-input"
        type="range"
        min="0"
        max=${max}
        value=${value}
        aria-label="Rating"
        ?readonly=${isReadOnly}
        ?disabled=${isDisabled}
        @change=${(e) => {
          const rating = e.target.closest(`.${rootClass}`);
          if (!rating) return;

          const input = rating.closest(`.${rootClass}-input`);
          if (!input) return;
          if (!isReadOnly && !isDisabled) {
            updateArgs({ value: parseInt(input.value, 10) });
          }
        }}
      />
      ${repeat(
        Array(max).fill(0),
        (_, idx) => html`
          <span
            class=${classMap({
              [`${rootClass}-icon`]: true,
              'is-selected': !isDisabled && idx <= value - 1,
              'is-currentValue': !isDisabled && !isReadOnly && idx === value - 1,
            })}
            @click=${(e) => {
              updateArgs({ value: idx +1 });
            }}
          >
            ${Icon({
              ...globals,
              iconName: "Star",
              size,
              customClasses: [`${rootClass}-starActive`],
            })}
            ${Icon({
              ...globals,
              iconName: "StarOutline",
              size,
              customClasses: [`${rootClass}-starInactive`],
            })}
          </span>
        `
      )}
    </div>
  `;
};
