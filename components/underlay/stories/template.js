import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "@spectrum-css/underlay/index.css";

export const Template = ({
	rootClass = "spectrum-Underlay",
	customClasses = [],
	style = [],
	content,
	isOpen = true,
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id="spectrum-underlay"
			style=${styleMap(style)}
		>
			${content}
		</div>
	`;
};
