import { renderContent } from "@spectrum-css/preview/decorators/utilities.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Modal",
	customClasses = [],
	customStyles = {},
	isOpen = true,
	variant,
	content = [],
	skipWrapper = false,
} = {}, context = {}) => {
	const Modal = html`
		<div class=${classMap({
			[rootClass]: true,
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			"is-open": isOpen,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})} style=${styleMap(customStyles)}>
			${renderContent(content, { context })}
		</div>
	`;

	return html`
		${when(skipWrapper,
			() => Modal,
			() => html`<div class=${classMap({ [`${rootClass}-wrapper`]: true })}>${Modal}</div>`
		)}
	`;
};
