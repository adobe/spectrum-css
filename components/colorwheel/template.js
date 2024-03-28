import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorWheel",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	colorHandleStyle = {
		"--spectrum-picked-color": "rgb(255, 0, 0)",
	},
	...globals
}) => html`
	<div class=${classMap({
		[rootClass]: true,
		"is-disabled": isDisabled,
		"is-focused": isFocused,
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	})}>
		<div class="${rootClass}-inner">
			<div class="${rootClass}-colorarea-container"></div>
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
			...globals,
			isDisabled,
			customClasses: [`${rootClass}-handle`],
			customStyles: colorHandleStyle,
		})}
		<input type="range" class="${rootClass}-slider" aria-label="hue" min="0" max="360" step="">
	</div>`;
