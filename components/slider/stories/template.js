import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { repeat } from "lit-html/directives/repeat.js";
import { when } from "lit-html/directives/when.js";

import { useArgs } from "@storybook/client-api";
// import { action } from "@storybook/addon-actions";

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Slider",
  label,
  min = 0,
  max = 10,
  step = 2,
  value,
  variant,
  isDisabled = false,
  isFocused = false,
  isDragged = false,
  customClasses = [],
  id,
  ...globals
}) => {
  const { rtl } = globals;
  const [_, updateArgs] = useArgs();

  const filledPercent = (min, max, value) => value <= min ? 0 : ((value - min) / (max - min)) * 100;

  function renderRamp() {
    return html`
      <div class="${rootClass}-ramp">
        <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
        </svg>
      </div>`;
  };

  function renderTrack(width) {
    return html`
      <div
        class="${rootClass}-track"
        style=${ifDefined(styleMap({ width: `${width}%` }))}
      ></div>`;
  };

  function renderTick(min, max, step) {
    return html`
      <div class="${rootClass}-ticks">
        ${repeat(Array.from({ length: (max - min) / step + 1 }), (v,i) => html`
          <div class="${rootClass}-tick">
            <div class="${rootClass}-tickLabel">${i * step + min}</div>
          </div>
        `)}
      </div>`;
  };

  function renderLabel(label, id, value, i = 0) {
    if (!label) return html``;
    return html`
      <div class="${rootClass}-labelContainer" role=${ifDefined(variant === "range" ? "presentation" : undefined)}>
        <label class="${rootClass}-label" id=${ifDefined(id ? `${id}-label` : undefined)} for=${ifDefined(id ? `${id}-${i + 1}` : undefined)}>${label}</label>
        ${value ? html`<div class="${rootClass}-value" role="textbox" aria-readonly="true" aria-labelledby=${ifDefined(id ? `${id}-label` : undefined)}>${value}</div>`: ''}
      </div>`;
  };

  function renderInput(min, max, step, value, i = 0) {
    const percent = i > 0 ? filledPercent(min, max, value - 1) : filledPercent(min, max, value + 1);
    return html`
      <div class="${rootClass}-handle" style=${styleMap({
        left: `${!rtl ? percent : 100 - percent}%`,
      })}>
        <input
          type="range"
          id=${ifDefined(`${id}-${i + 1}`)}
          class="${rootClass}-input"
          value=${ifDefined(value)}
          step=${ifDefined(step)}
          min=${ifDefined(min)}
          max=${ifDefined(max)}
          @change=${(event) => {
            if (isDisabled) return;
            updateArgs({ value: event.target.value });
          }}/>
      </div>
      ${i > 0 ? html`<div class="${rootClass}-fill" style=${styleMap({
        left: `${!rtl ? percent : 100 - percent}%`,
        width: `${!rtl ? 100 - percent : percent}%`,
      })}></div>` : ''}
      `;
  };

  const isRange = variant === "range";
  const isRamp = variant === "ramp";
  const isTick = variant === "tick";

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${variant}`]: ['ramp', 'range', 'filled'].some(v => variant === v),
        'is-disabled': isDisabled,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${ifDefined(styleMap({
        maxWidth: `var(--spectrum-global-dimension-size-3000)`
      }))}
      role=${ifDefined(isRange ? "group" : undefined)}
      aria-labelledby=${ifDefined(label && id ? `${id}-label` : undefined)}
    >
      ${renderLabel(label, id, isRange ? `${value[0]} - ${value[1]}` : value)}
      <div class="${rootClass}-controls" role=${ifDefined(isRange ? "presentation" : undefined)}>
        ${isRamp ? renderRamp() : [
          renderTrack(!rtl ? filledPercent(min, max, isRange ? value[0] : value) : 100 - filledPercent(min, max, isRange ? value[0] : value)),
          isTick ? renderTick(min, max, step) : '',
        ]}
        ${renderInput(min, max, step, value, 0)}
        ${isRange ? [
          renderTrack(!rtl ? filledPercent(min, max, value[1]) : 100 - filledPercent(min, max, value[1])),
          renderInput(min, max, step, value[1], 1),
         ] : ''}
        ${!isRamp ? renderTrack(rtl ? filledPercent(min, max, isRange ? value[1] : value) : 100 - filledPercent(min, max, isRange ? value[1] : value)) : ''}
      </div>
    </div>
  `;
};
