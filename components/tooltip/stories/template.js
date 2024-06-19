import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tooltip",
	label,
	placement,
	isOpen = true,
	isFocused = false,
}) => {
	return html`
		<span
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${placement}`]: typeof placement !== "undefined",
				"is-open": isOpen,
				"is-focused": isFocused,
			})}
		>
			${when(
				label,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
			<span class="${rootClass}-tip"></span>
		</span>
	`;
};
