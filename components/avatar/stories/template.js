import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

export const Template = ({
	rootClass = "spectrum-Avatar",
	image = "example-ava.png",
	altText,
	isDisabled = false,
	size = "700",
	hasLink,
	id,
	customClasses = [],
} = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size}`]: true,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${when(hasLink, () =>
				html`
					<a class="spectrum-Avatar-link" href="#">
						<img class="${rootClass}-image" data-chromatic="ignore" src=${image} alt=${ifDefined(altText)} />
					</a>
					`
			)}
			${when(!hasLink, () =>
				html`
					<img class="${rootClass}-image" data-chromatic="ignore" src=${image} alt=${ifDefined(altText)} />
				`
			)}
		</div>
	`;
};
