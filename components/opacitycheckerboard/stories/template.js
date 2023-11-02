import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

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
}) => {
	// Just the component markup. For use by other component's stories.
	if (componentOnly){
		return html`
			<div
				class=${classMap({
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
					[rootClass]: true,
				})}
				style=${ifDefined(styleMap(checkerBoardStyles))}
				role=${ifDefined(role)}
			>${content}</div>`;
	}

	// Component with wrapper for Storybook display, and a testing overlay.
	return html`
		<div style=${ifDefined(styleMap(containerStyles))}>
			<div
				class=${classMap({
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
					[rootClass]: true,
				})}
				style=${ifDefined(styleMap(checkerBoardStyles))}
				role=${ifDefined(role)}
			>${content}</div>
			${when(hasColorOverlay, () => {
				return html` <div style=${styleMap(colorStyles)}></div>`;
			})}
		</div>
	`;
};
