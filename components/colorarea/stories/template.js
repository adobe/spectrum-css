import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "@spectrum-css/colorarea";

export const Template = ({
	rootClass = "spectrum-ColorArea",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	customWidth,
	customHeight,
	customStyles = {
		"--mod-colorarea-height": customHeight,
		"--mod-colorarea-width": customWidth,
	},

}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
      		style=${ifDefined(styleMap(customStyles))}
		>
			<div
				class="spectrum-ColorArea-gradient"
				style="background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgba(255, 0, 0);"
			></div>
			${ColorHandle({

				isDisabled,
				customClasses: [`${rootClass}-handle`],
				customStyles: {
					"--spectrum-picked-color": "rgba(255, 0, 0)",
					transfom: `translate(${customWidth}, 0px)`,
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
};
