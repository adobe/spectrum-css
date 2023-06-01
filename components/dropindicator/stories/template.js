import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import "../index.css";
import "../skin.css";

export const Template = ({
	rootClass = "spectrum-DropIndicator",
	customClasses = [],
	direction = "vertical",
	size = "300px",
}) => {
	const styles = {
		"block-size": direction == "vertical" ? size : "",
		"inline-size": direction == "horizontal" ? size : "",
	};

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${direction}`]:
					typeof direction !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(styles)}
		></div>
	`;
};
