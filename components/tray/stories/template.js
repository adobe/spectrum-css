import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "@spectrum-css/tray";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = ["spectrum-Modal"],
	id,
}) => {
	return html`
		<div class="${rootClass}-wrapper">
			<div
				class=${classMap({
					[rootClass]: true,
					"is-open": isOpen,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				data-testid=${ifDefined(testId)}
			>
			${content.map((c) => (typeof c === "function" ? c({}) : c))}
			</div>
		</div>
	`;
};
