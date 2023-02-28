import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { useArgs, useGlobals } from "@storybook/client-api";

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Slider",
  label,
  min = 0,
  max = 10,
  step = 2,
  values = [],
  isDisabled = false,
  isFocused = false,
  isDragged = false,
  isRamp = false,
  isRange = false,
  isFilled = false,
  fillColor,
  showTicks = false,
  showOffset = false,
  customClasses = [],
  id,
  ...globals
}) => {
  const [_, updateArgs] = useArgs();
  const [{ textDirection }] = useGlobals();

  const rtl = !!(textDirection === "rtl");
  const rangeLength = max - min;
  const centerPoint = (rangeLength / 2) + min;

  const getPosition = (v) => {
    const val = ((v - min) / rangeLength) * 100;
    return val;
  };
  const getWidth = (start, end) => {
    const distance = end > start ? end - start : start - end;
    return (distance / rangeLength) * 100;
  };

  function renderTrack({ position, width, customStyles = {} }) {
    return html`
      <div
        class="${rootClass}-track"
        style=${ifDefined(styleMap({
          [rtl ? 'right' : 'left']: position ? `${position}%` : undefined,
          width: width ? `${width}%` : undefined,
          ...customStyles,
        }))}
      ></div>`;
  };

  function renderFill({ position, width, direction = "left" }) {
    return html`
      <div
        class=${classMap({
          [`${rootClass}-fill`]: true,
          [`${rootClass}-fill--${direction}`]: direction !== "left",
        })}
        style=${ifDefined(styleMap({
          [rtl ? 'right' : 'left']: position ? `${position}%` : undefined,
          width: width ? `${width}%` : undefined,
        }))}
      ></div>`;
  };

  function renderTick({ from, to }) {
    const ticks = [];
    for (let i = from; i <= to; i += step) {
      ticks.push(html`
        <div class="${rootClass}-tick">
          <div class="${rootClass}-tickLabel">${i}</div>
        </div>
      `);
    }
    return html`<div class="${rootClass}-ticks">${ticks}</div>`;
  };

  function renderLabel({ label, value, id, i = 0 }) {
    if (!label && !value) return html``;
    return html`
      <div class="${rootClass}-labelContainer" role=${ifDefined(isRange ? "presentation" : undefined)}>
        ${label ? html`<label class="${rootClass}-label" id=${ifDefined(id ? `${id}-label` : undefined)} for=${ifDefined(id ? `${id}-${i + 1}` : undefined)}>${label}</label>` : ''}
        ${value ? html`<div class="${rootClass}-value" role="textbox" aria-readonly="true" aria-labelledby=${ifDefined(id && label ? `${id}-label` : undefined)}>${value}</div>`: ''}
      </div>`;
  };

  function renderHandle({ position, value, idx = 0 }) {
    return html`
      <div class="${rootClass}-handle" style=${ifDefined(styleMap({
        [rtl ? 'right' : 'left']: position ? `${position}%` : undefined,
      }))}>
        <input
          type="range"
          id=${ifDefined(id ? `${id}-${idx + 1}` : undefined)}
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
    `;
  };

  function renderControls(dataPoints = []) {
    const controls = [];

    dataPoints.forEach((v, i) => {
      console.log({dataPoints, i, v});
      const prevPoint = i === 0 ? min : dataPoints[i - 1];
      controls.push(
        renderTrack({
          position: getPosition(prevPoint),
          width: getWidth(prevPoint, v)
        }),
      );

      if (i === 0 && showTicks) {
        controls.push(
          renderTick({ from: min, to: max })
        );
      }

      controls.push(
        renderHandle({
          position: getPosition(v),
          value: v,
          idx: i
        })
      );

      if (i === dataPoints.length - 1) {
        controls.push(
          renderTrack({
            width: getWidth(v, max),
          })
        );

        if (showOffset) {
          controls.push(
            renderFill({
              position: v > centerPoint ? getPosition(centerPoint) : getPosition(v),
              width: getWidth(v, centerPoint),
              direction: v > centerPoint ? "right" : "left",
            })
          );
        }
      }

      return controls;
    });

    return controls;
  }

  function renderRamp(dataPoints = []) {
    const rampImg = html`
      <div class="${rootClass}-ramp">
        <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
        </svg>
      </div>`;

    const handles = dataPoints.map((v, i) =>
      renderHandle({
        position: getPosition(v),
        width: getWidth(min, v),
        value: v,
        idx: i
      })
    );

    return [rampImg, ...handles];
  }

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--ramp`]: isRamp,
        [`${rootClass}--range`]: isRange,
        [`${rootClass}--filled`]: isFilled,
        'is-disabled': isDisabled,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${ifDefined(styleMap({
        maxWidth: `var(--spectrum-global-dimension-size-3000)`,
        ['--spectrum-slider-m-track-fill-color']: fillColor,
      }))}
      role=${ifDefined(isRange ? "group" : undefined)}
      aria-labelledby=${ifDefined(label && id ? `${id}-label` : undefined)}
    >
      ${renderLabel({
        label,
        id,
        value: `${values[0]}${values.length > 1 ? ` - ${values[1]}` : ''}`
      })}

      <div class="${rootClass}-controls" role=${ifDefined(isRamp ? "presentation" : undefined)}>
        ${isRamp ? renderRamp(values) : renderControls(values)}
      </div>
    </div>
  `;
};
