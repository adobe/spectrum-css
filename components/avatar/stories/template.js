import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Avatar",
	image = "example-ava.png",
	altText,
	isDisabled = false,
	isFocused = false,
	size = 700,
	hasLink,
	id = getRandomId("avatar"),
	customClasses = [],
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size}`]: true,
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			@focusin=${function() {
				updateArgs({ isFocused: true });
			}}
			@focusout=${function() {
				updateArgs({ isFocused: false });
			}}
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
