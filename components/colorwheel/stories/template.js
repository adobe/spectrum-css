import { Template as ColorArea } from "@spectrum-css/colorarea/stories/template.js";
import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-ColorWheel",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isWithColorArea = false,
	colorHandleStyle = {
		"--spectrum-picked-color": "rgb(255, 0, 0)",
	},
} = {}, context = {}) => {
	return html`
		<div class=${classMap({
			[rootClass]: true,
			"is-disabled": isDisabled,
			"is-focused": isFocused,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}>
			<div class="${rootClass}-inner">
				<div class="${rootClass}-colorarea-container">
				${when(isWithColorArea, () => html`
					${ColorArea({
						isDisabled,
						customStyles: {
							"--mod-colorarea-width": "80px",
							"--mod-colorarea-height": "80px",
						},
					}, context)}
				`)}
				</div>
			</div>
			<div class=${classMap({
				[`${rootClass}-border`]: true,
				"is-disabled": isDisabled,
			})}>
				<div class=${classMap({
					[`${rootClass}-wheel`]: true,
					"is-disabled": isDisabled,
				})}></div>
			</div>
			${ColorHandle({
				isDisabled,
				customClasses: [`${rootClass}-handle`],
				customStyles: colorHandleStyle,
			}, context)}
			<input type="range" class="${rootClass}-slider" aria-label="hue" min="0" max="360" step="">
		</div>
	`;
};
