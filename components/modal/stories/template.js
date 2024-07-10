import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Modal",
	customClasses = [],
	isOpen = true,
	variant,
	content = [],
	skipWrapper = false,
}) => {
	const Modal = html`
		<div class=${classMap({
			[rootClass]: true,
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			"is-open": isOpen,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}>
			${content}
		</div>
	`;

	return html`
		${when(skipWrapper,
			() => html`${Modal}`,
			() => html`<div class=${classMap({ [`${rootClass}-wrapper`]: true })}>${Modal}</div>`
		)}
	`;
};
