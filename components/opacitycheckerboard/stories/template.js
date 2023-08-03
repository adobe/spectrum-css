import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { when } from "lit-html/directives/when.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

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
	componentOnly,
	content,
	role,
	...globals
}) => {
	// Just the component markup. For use by other component's stories.
	if (componentOnly){
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap(checkerBoardStyles)}
				role=${ifDefined(role)}
			>${content}</div>`;
	}

	// Component with wrapper for Storybook display, and a testing overlay.
	return html`
		<div style=${styleMap(containerStyles)}>
			<div
				class=${classMap({
					[rootClass]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap(checkerBoardStyles)}
				role=${ifDefined(role)}
			>${content}</div>
			${when(hasColorOverlay, () => {
				return html` <div style=${styleMap(colorStyles)}></div>`;
			})}
		</div>
	`;
};
