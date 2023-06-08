import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";

import "../index.css";
import "../skin.css";

export const Template = ({
	rootClass = "spectrum-Well",
	customClasses = [],
	content = [],
}) => {
	return html`
		<span
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${content}
		</span>
	`;
};
