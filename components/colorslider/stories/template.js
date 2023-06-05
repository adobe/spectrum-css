import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";

import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorSlider",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	vertical,
	gradientStops,
	colorHandleStyle = {
		"--spectrum-picked-color": "rgba(255, 0, 0)",
	},
	...globals
}) => {
	return html`
		<label
			for="textfield-1"
			class="spectrum-FieldLabel spectrum-FieldLabel--sizeM"
			>Blue test</label
		>
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--vertical`]: vertical,
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<div class="${rootClass}-checkerboard" role="presentation">
				<div
					class="${rootClass}-gradient"
					role="presentation"
					style="background: linear-gradient(to ${vertical
						? "bottom"
						: "right"}, ${gradientStops});"
				></div>
			</div>
			${ColorHandle({
				...globals,
				isDisabled,
				customClasses: [`${rootClass}-handle`],
				colorHandleStyle,
			})}
			<input
				type="range"
				class="${rootClass}-slider"
				min="0"
				max="100"
				step="1"
			/>
		</div>
	`;
};
