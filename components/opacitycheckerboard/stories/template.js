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
	containerStyles = {
		"inline-size": "100px",
		"block-size": "100px",
	},
	checkerBoardStyles = {
		"--mod-opacity-checkerboard-position": backgroundPosition,
	},
	colorStyles = {
		"background-color": overlayColor,
		"inline-size": "100%",
		"block-size": "100%",
		position: "relative",
		"inset-block": "-100%",
	},
	...globals
}) => {
	return html`
		<div style=${styleMap(containerStyles)}>
			<div
				class=${classMap({
					[rootClass]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap(checkerBoardStyles)}
			></div>
			${when(hasColorOverlay, () => {
				return html` <div style=${styleMap(colorStyles)}></div>`;
			})}
		</div>
	`;
};
