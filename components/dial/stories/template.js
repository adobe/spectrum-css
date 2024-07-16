import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Dial",
	size = "m",
	label,
	isFocused = false,
	isDragged = false,
	isDisabled = false,
	min = 0,
	max = 100,
	customClasses = [],
	id,
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--small`]: size === "s",
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			@mousedown=${() => {
				if (isDisabled) return;
				document.body.classList.add("u-isGrabbing");
			}}
			@mouseup=${() => {
				document.body.classList.remove("u-isGrabbing");
			}}
			@mousemove=${(e) => {
				if (isDisabled) return;
				if (!document.body.classList.contains("u-isGrabbing")) return;

				const dial = e.target.closest(".spectrum-Dial");
				const handle = dial.querySelector(".spectrum-Dial-handle");
				const input = dial.querySelector("input");
				const min = -45;
				const max = 225;
				const dialOffsetLeft = dial.offsetLeft + dial.offsetParent.offsetLeft;
				var x = Math.max(Math.min(e.x - dialOffsetLeft, dial.offsetWidth), 0);
				var percent = (x / dial.offsetWidth) * 100;
				var deg = percent * 0.01 * (max - min) + min;
				handle.style.transform = "rotate(" + deg + "deg" + ")";
				input.value = Math.round(
					percent * 0.01 * (input.max - input.min) + input.min
				);
			}}
		>
			${when(
				label,
				() => html`<div class="${rootClass}-labelContainer">
					<label id="dialLabel" class="${rootClass}-label" for="labeledDial"
						>${label}</label
					>
					<div
						class="${rootClass}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby="dialLabel"
					>
						${min}
					</div>
				</div>`
			)}
			<div class="${rootClass}-controls">
				<div class="${rootClass}-handle ${isDragged ? "is-dragged": ""} ${isFocused ? "is-focused": ""}" tabindex="0">
					<input
						type="range"
						class="${rootClass}-input"
						min="${min}"
						max="${max}"
						value="${min}"
						@change=${(e) => {
							const value = e.target.value;
							const label = document.getElementById("dialLabel");
							label.nextSibling.textContent = value;
						}}
					/>
				</div>
			</div>
		</div>
	`;
};

const Sizes = (args, context) => ["s", "m", "l", "xl"].map((size) => html`
	<div>
		${Typography({
			semantics: "heading",
              size: "m",
              weight: "light",
			content: [
				{
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size]
			],
			customClasses: ["chromatic-ignore"],
		}, context)}
		<div>
			${Template({...args, size}, context)}
		</div>
	</div>
`);

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
      {
        heading: "Dragged",
        isDragged: true,
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

export const DialGroup = (args, context) => html`
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
        heading: "With label",
		label: "Volume",
		withStates: false,
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
	<div class="spectrum-Typography">
		${Typography(
			{
				semantics: "heading",
				size: "l",
				content: ["Sizing"],
			},
			context,
		)}
		<div
			style=${styleMap({
				"display": "flex",
				"flex-direction": "row",
				"align-items": "flex-start",
				"gap": "32px",
				padding: "12px",
				border: "1px solid var(--spectrum-gray-200)",
				"border-radius": "4px",
			})}
		>
			${Sizes(args, context)}
		</div>
	</div>
  </div>
`;
