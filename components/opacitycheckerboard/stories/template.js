import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { when } from "lit-html/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-OpacityCheckerboard",
	hasColorOverlay,
	overlayColor,
	backgroundPosition,
	customClasses = [],
	style = {
		"--mod-opacity-checkerboard-position": backgroundPosition,
	},
	...globals
}) => {
	return html`
		<div class="${rootClass}-example">
			<div
				class=${classMap({
					[rootClass]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap(style)}
			></div>
			${when(hasColorOverlay, () => {
				return html` <div
					class="${rootClass}-example-color"
					style="background-color:${overlayColor}"
				></div>`;
			})}
		</div>
	`;
};
