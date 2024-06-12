import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-ColorSlider",
		customClasses = [],
		customStyles = {},
		isDisabled = false,
		isFocused = false,
		vertical = false,
		gradientStops = [
			"rgb(255, 0, 0) 0%",
			"rgb(255, 255, 0) 17%",
			"rgb(0, 255, 0) 33%",
			"rgb(0, 255, 255) 50%",
			"rgb(0, 0, 255) 67%",
			"rgb(255, 0, 255) 83%",
			"rgb(255, 0, 0)",
		],
		gradientType = "gradient",
		colorHandleStyle = {
			"--spectrum-picked-color": "rgba(255, 0, 0)",
		},
	},
	context
) => html` <div
  class=${classMap({
    [rootClass]: true,
    [`${rootClass}--vertical`]: vertical,
    "is-disabled": isDisabled,
    "is-focused": isFocused,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}
  style=${ifDefined(styleMap(customStyles))}
>
  ${OpacityCheckerboard(
    {
      customClasses: [`${rootClass}-checkerboard`],
      content: [
        when(
          gradientType === "image",
          () => html`<img
            class="${rootClass}-gradient"
            role="presentation"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAeCAIAAAAkbYJ/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBMTBENzk4QkQzMTFFQThDOTdDN0QyNDNGMUNFMzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBMTBEN0E4QkQzMTFFQThDOTdDN0QyNDNGMUNFMzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0ExMEQ3NzhCRDMxMUVBOEM5N0M3RDI0M0YxQ0UzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0ExMEQ3ODhCRDMxMUVBOEM5N0M3RDI0M0YxQ0UzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrmQ8p4AAADbSURBVHja7JFLDsMgDAWNc/9L9h7YiQ0Gou66rGaUWHxegDDN5SPiEm/Uo+3S3LPWIzEy2uqu1Vh1dy3q5TM/ks38yprJbGdXK38GdHwVs94sAtXNas9h/LIK2zE11jlHrI5ksa9a5r+mdJ3E8i+OveISurzCvldr3V/dp91XQLTPvWYdgbFCr/tcp81BqW/bzKxLkz2epxLzPWglS7Y1ERX4axCMYEAwIBgQDAgGBAOCEQwIBgQDggHBgGBAMIIBwYBgQDAgGBAMCAYEIxgQDAgGBAOC4RduAQYALiXYw9aNKvcAAAAASUVORK5CYII="
          />`,
          () => html`<div
            class="${rootClass}-gradient"
            role="presentation"
            style=${when(gradientStops && gradientStops.length, () =>
              styleMap({
                background: `linear-gradient(to ${
                  vertical ? "bottom" : "right"
                }, ${gradientStops.join(", ")})`,
              })
            )}
          ></div>`
        ),
      ],
      role: "presentation",
    },
    context
  )}
  ${ColorHandle(
    {
      isDisabled,
      isFocused,
      customClasses: [`${rootClass}-handle`],
      customStyles: colorHandleStyle,
    },
    context
  )}
  <input type="range" class="${rootClass}-slider" min="0" max="100" step="1" />
</div>`;

const States = (args, context) => html`
  <div
    style=${styleMap({
      display: "flex",
      "flex-direction": "row",
      "flex-wrap": "wrap",
      gap: "32px",
    })}
  >
    ${[
      {},
      {
        heading: "Disabled",
        isDisabled: true,
      },
      {
        heading: "Focused",
        isFocused: true,
      },
    ].map(
      ({ heading, ...item }) => html`
        <div>
          ${Typography(
            {
              semantics: "heading",
              size: "m",
              weight: "light",
              // this whitespace helps the boxes align better when there's not a headings
              content: [heading ?? html`&nbsp;`],
              customClasses: ["chromatic-ignore"],
            },
            context
          )}
          <div>
            ${Template(
              {
                ...args,
                ...item,
              },
              context
            )}
          </div>
        </div>
      `
    )}
  </div>
`;

export const ColorSliderGroup = (args, context) => html`
  <div
    style=${styleMap({
      display: window.isChromatic() ? "none" : "contents",
    })}
  >
    ${Template(args, context)}
  </div>
  <div
    style=${styleMap({
      display: window.isChromatic() ? "flex" : "none",
      "flex-direction": "column",
      "align-items": "flex-start",
      gap: "32px",
    })}
  >
    ${[
      {
        heading: "Default",
      },
      {
        heading: "Vertical",
        vertical: true,
      },
      {
        heading: "Alpha",
        gradientStops: ["rgba(0, 0, 0, 1) 0%", "rgba(0, 0, 0, 0) 100%"],
        colorHandleStyle: {
          "--spectrum-picked-color": "rgba(0, 0, 0, 1)",
        },
      },
      {
        heading: "With Image",
        gradientType: "image",
        colorHandleStyle: {
          "--spectrum-picked-color": "#df6a7d",
          "inset-inline-start": "50%",
        },
      },
    ].map(
      ({ heading, withStates = true, ...item }) => html`
        <div class="spectrum-Typography">
          ${when(heading, () =>
            Typography(
              {
                semantics: "heading",
                size: "l",
                content: [heading],
                customClasses: ["chromatic-ignore"],
              },
              context
            )
          )}
          <div
            style=${styleMap({
              padding: "12px",
              border: "1px solid var(--spectrum-gray-200)",
              "border-radius": "4px",
            })}
          >
            ${when(
              withStates,
              () => States({ ...args, ...item }, context),
              () => Template({ ...args, ...item }, context)
            )}
          </div>
        </div>
      `
    )}
  </div>
`;
