import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorArea",
	customClasses = [],
	customStyles = {},
	isDisabled = false,
	isFocused = false,
	customWidth,
	customHeight,
	...globals
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			"is-disabled": isDisabled,
			"is-focused": isFocused,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap({
			"--mod-colorarea-height": customHeight,
			"--mod-colorarea-width": customWidth,
			...customStyles,
		})}
	>
		<div
			class="spectrum-ColorArea-gradient"
			style=${styleMap({
				"background": "linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgba(255, 0, 0)",
			})}
		></div>
		${ColorHandle({
			...globals,
			isDisabled,
			customClasses: [`${rootClass}-handle`],
			customStyles: {
				"--spectrum-picked-color": "rgba(255, 0, 0)",
				"transform": customWidth ? "translate(var(--mod-colorarea-width), 0)" : undefined,
			},
		})}
		<input
			type="range"
			class="spectrum-ColorArea-slider"
			name="x"
			aria-label="saturation and value"
			min="0"
			max="1"
			step="0.01"
		/>
		<input
			type="range"
			class="spectrum-ColorArea-slider"
			name="y"
			aria-label="saturation and value"
			min="0"
			max="1"
			step="0.01"
		/>
	</div>
`;
