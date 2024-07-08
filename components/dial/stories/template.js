import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

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
