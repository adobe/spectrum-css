import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js"

import "@spectrum-css/avatar";

export const Template = ({
	rootClass = "spectrum-Avatar",
	image = "example-ava.png",
	altText,
	isDisabled = false,
	size = "700",
	hasLink,
	id,
	testId,
	customClasses = [],
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size}`]: true,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
		>
			${when(hasLink, () =>
				html`
					<a class="spectrum-Avatar-link" href="#">
						<img class="${rootClass}-image" src=${image} alt=${ifDefined(altText)} />
					</a>
					`
			)}
			${when(!hasLink, () =>
				html`
					<img class="${rootClass}-image" src=${image} alt=${ifDefined(altText)} />
				`
			)}
		</div>
	`;
};
