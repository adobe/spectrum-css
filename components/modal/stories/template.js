import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Modal",
	customClasses = [],
	isOpen = true,
	variant,
	content = [],
	...globals
}) => {
	return html`
		<div class="${rootClass}-wrapper">
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					"is-open": isOpen,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${content}
			</div>
		</div>
	`;
};
