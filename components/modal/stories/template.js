import { renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

const Modal = ({
	rootClass = "spectrum-Modal",
	customClasses = [],
	customStyles = {},
	isOpen = true,
	variant,
	content = [],
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				"is-open": isOpen,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${renderContent(content, { context })}
		</div>
	`;
};

export const Template = ({
	rootClass = "spectrum-Modal",
	skipWrapper = false,
	...args
} = {}, context = {}) => {
	return html`
		${when(skipWrapper,
			() => Modal({ rootClass, ...args }, context),
			() => html`
				<div
					class=${classMap({ [`${rootClass}-wrapper`]: true })}
				>
					${Modal({ rootClass, ...args }, context)}
				</div>
			`
		)}
	`;
};
