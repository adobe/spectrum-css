import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "@spectrum-css/modal/index.css";
import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = ["spectrum-Modal"],
	customStyles = {},
	id,
}) => html`
		<div
			class="${rootClass}-wrapper"
			style=${ifDefined(styleMap(customStyles))}
		>
			<div
				class=${classMap({
					[rootClass]: true,
					"is-open": isOpen,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
			>
			${content.map((c) => (typeof c === "function" ? c({}) : c))}
			</div>
		</div>
	`;
