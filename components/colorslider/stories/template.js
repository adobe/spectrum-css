import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";

import "@spectrum-css/colorslider";

export const Template = ({
	rootClass = "spectrum-ColorSlider",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	vertical,
	colorHandleStyle = {
		"--spectrum-picked-color": "rgba(255, 0, 0)",
	},
	...globals
}) => {
	return html`
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
						: "right"}, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);"
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
