import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// Uncomment if you plan to include an icon
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Rating",
  size = "m",
  max = 5,
  isReadOnly = false,
  customClasses = [],
  id,
  ...globals
}) => {
  function setFocus(rating, focused) {
    rating.classList[focused ? 'add' : 'remove']('is-focused');
  }

  function setValue(rating, value) {
    const input = rating.querySelector(`.${rootClass}-input`);
    input.value = value;

    rating.querySelectorAll(`.${rootClass}-icon`)?.forEach((el, idx) => {
        el.classList[idx <= value - 1 ? 'add' : 'remove']('is-selected');
        el.classList[idx === value - 1 ? 'add' : 'remove']('is-currentValue');
    });
  }

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      @focusin=${(e) => {
        const rating = ended.target.closest(`.${rootClass}`);
        if (!rating) return;
        setFocus(rating, true);
      }}
      @focusout=${(e) => {
        const rating = e.target.closest(`.${rootClass}`);
        if (!rating) return;
        setFocus(rating, false);
      }}
    >
      <input
        class="${rootClass}-input"
        type="range"
        min="0"
        max=${max}
        value="0"
        aria-label="Rating"
        ?readonly=${isReadOnly}
        @change=${(e) => {
          const rating = e.target.closest(`.${rootClass}`);
          const input = rating.closest(`.${rootClass}-input`);
          if (!input) return;
          if (input.hasAttribute('readonly')) {
            e.preventDefault();
            input.value = e.defaultValue;
          } else {
            const value = parseInt(input.value, 10);
            setValue(rating, value);
          }
        }}
      />
      ${repeat(
        Array(max).fill(0),
        () => html`
          <span
            class="${rootClass}-icon"
            @click=${(e) => {
              const icon = e.target.closest(`.${rootClass}-icon`);
              if (!icon) return;
              const rating = e.target.closest(`.${rootClass}`);
              const value = Array.prototype.indexOf.call(rating.querySelectorAll('.spectrum-Rating-icon'), icon) + 1;
              setValue(rating, value);
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
