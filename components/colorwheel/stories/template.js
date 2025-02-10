import { Template as ColorArea } from "@spectrum-css/colorarea/stories/template.js";
import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorWheel",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isWithColorArea = false,
	isWithColorLoupe = true,
	colorHandleStyle = {},
	selectedColor = "rgba(255, 0, 0, 50%)",
} = {}, context = {}) => {
	return html`
		<!-- <div class=${classMap({
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
						selectedColor,
					}, context)}
				`)}
				</div>
			</div>
			<div class=${classMap({
				[`${rootClass}-wheel`]: true,
				"is-disabled": isDisabled,
			})}></div> -->

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
						selectedColor,
					}, context)}
				`)}
				</div>
			</div>
				<div class=${classMap({
				[`${rootClass}-wheel`]: true,
				"is-disabled": isDisabled,
				})}></div>
				${ColorHandle({
					isDisabled,
					isFocused,
					customClasses: [`${rootClass}-handle`],
					selectedColor,
					customStyles: colorHandleStyle,
					isWithColorLoupe,
				}, context)}

		<input type="range" class="${rootClass}-slider" aria-label="hue" min="0" max="360" step="">
	</div>
</div>




		<!-- </div> -->
	`;
};

{/*
	<div class="wa9InG_spectrum-ColorWheel" style="width: var(--spectrum-global-dimension-size-1600, var(--spectrum-alias-size-1600)); height: var(--spectrum-global-dimension-size-1600, var(--spectrum-alias-size-1600));">
	<div class="wa9InG_spectrum-ColorWheel-gradient" style="position: relative; touch-action: none; width: 128px; height: 128px; background: conic-gradient(from 90deg, rgb(255, 0, 0), rgb(255, 128, 0), rgb(255, 255, 0), rgb(128, 255, 0), rgb(0, 255, 0), rgb(0, 255, 128), rgb(0, 255, 255), rgb(0, 128, 255), rgb(0, 0, 255), rgb(128, 0, 255), rgb(255, 0, 255), rgb(255, 0, 128), rgb(255, 0, 0)); clip-path: path(evenodd, &quot;M 64 64 m -64 0 a 64 64 0 1 0 128 0 a 64 64 0 1 0 -128 0 M 64 64 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0&quot;); forced-color-adjust: none;">
	</div>
	<div class="myBuwa_spectrum-ColorHandle wa9InG_spectrum-ColorWheel-handle" style="position: absolute; left: 116px; top: 64px; transform: translate(-50%, -50%); touch-action: none; forced-color-adjust: none;">
		<div class="myBuwa_spectrum-ColorHandle-color" style="background-color: rgb(255, 0, 0);"></div>
		<input class="wa9InG_spectrum-ColorWheel-slider wa9InG_spectrum-ColorControl-hiddenField" id="react-aria7407581597-:r2i:" aria-label="Hue" type="range" min="0" max="360" step="1" aria-valuetext="0°, red" value="0" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 100%; white-space: nowrap; opacity: 0.0001; pointer-events: none;">
	</div>
</div>
*/}
