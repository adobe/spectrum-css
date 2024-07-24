import { Variants, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Avatar",
	image = "example-ava.png",
	altText,
	isDisabled = false,
	isFocused = false,
	size = "700",
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
			@focusin=${() => {
				updateArgs({ isFocused: true });
			}}
			@focusout=${() => {
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

export const AvatarSizes = (args, context) => {
	const sizeOptions = context?.argTypes?.size?.options ?? [];
	if (!sizeOptions.length) {
		return html`<div>No size options</div>`;
	}

	return html`
		<div
			style=${styleMap({
				"display": "flex",
				"gap": "16px",
			})}
		>
			${sizeOptions.map((size) => (html`
				<div
					style=${styleMap({
						"display": "flex",
						"gap": "16px",
						"flex-direction": "column",
						"align-items": "center",
					})}
				>
					${Template({...args, size})}
					${Typography({
						semantics: "heading",
						size: "xs",
						content: [size],
						customClasses: ["chromatic-ignore"],
					})}
				</div>
			`))}
		</div>
	`;
};

export const AvatarGroup = Variants({
	Template,
	skipBorders: true,
	stateData: [{
		testHeading: "Not linked",
		hasLink: false,
	}, {
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}],
	sizeDirection: "row",
});
