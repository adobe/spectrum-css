import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import "../index.css";

export const Template = ({
	rootClass = "spectrum-OpacityCheckerboard",
	size,
	id,
	customClasses = [],
	...globals
}) => {
	return html`
			<div
				class="${classMap({
					[rootClass]: true,
					[`${rootClass}--size${size.toUpperCase()}`]: true,
					...customClasses.reduce((a, c)({ ...a, [c]: true }), {}),
				})} id=${ifDefined(id)}>
				<!-- Component mark-up goes here -->
			</div>
			`;
};
