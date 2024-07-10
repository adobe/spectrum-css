import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Typography",
	semantics = "body",
	size = "m",
	variant,
	weight,
	glyph = "sans-serif",
	id,
	content = [],
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	if (!Array.isArray(content)) {
		content = [content];
	}

	console.log(content);

	const contentLength = content.length;

	// If there is no content, return an empty string, no need for additional processing
	if (contentLength === 0) return html``;

	const processedContent = html`
		${content.map((c) => {
			/* If the content is an object (but not a lit object), we need to merge the object with the template */
			if (typeof c !== "string" && (typeof c === "object" && !c._$litType$)) {
				return Template({
					rootClass,
					semantics,
					size,
					variant,
					weight,
					glyph,
					id,
					customClasses,
					...c,
				}, context);
			}

			if (typeof semantics === "undefined") {
				return html`
					<div
						class=${classMap({
							"spectrum-Typography": true,
							...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
						})}
						id=${ifDefined(id)}
					>${c}</div>`;
			}

			rootClass = `spectrum-${capitalize(semantics)}`;

			const classes = {
				[rootClass]: true,
				[`${rootClass}--${glyph}`]:
					typeof semantics !== "undefined" &&
					typeof glyph !== "undefined" &&
					glyph !== "sans-serif",
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof semantics !== "undefined" && typeof size !== "undefined",
				[`${rootClass}--${weight}`]:
					typeof semantics !== "undefined" && typeof weight !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			};

			/* Variants are additive and exist within the wrapper tags */
			if (variant && Array.isArray(variant)) {
				if (["strong", "emphasized"].every((i) => variant.includes(i))) {
					c = html`<span
						class=${classMap({
						[`${rootClass}-strong`]: true,
						[`${rootClass}-emphasized`]: true,
					})}
						>${c}</span
					>`;
				}
				else if (variant.includes("strong")) {
					c = html`<strong
						class=${classMap({ [`${rootClass}-strong`]: true })}
						>${c}</strong
					>`;
				}
				else if (variant.includes("emphasized")) {
					c = html`<em
						class=${classMap({ [`${rootClass}-emphasized`]: true })}
						>${c}</em
					>`;
				}
			}

			if (semantics === "heading")
				return html`
					<h2 class=${classMap(classes)} style=${ifDefined(styleMap(customStyles))} id=${ifDefined(id)}>${c}</h2>
				`;

			if (semantics === "body")
				return html`
					<p class=${classMap(classes)} style=${ifDefined(styleMap(customStyles))} id=${ifDefined(id)}>${c}</p>
				`;

			if (semantics === "code")
				return html`
					<code class=${classMap(classes)} style=${ifDefined(styleMap(customStyles))} id=${ifDefined(id)}>${c}</code>
				`;

			return html`
				<span class=${classMap(classes)} style=${ifDefined(styleMap(customStyles))} id=${ifDefined(id)}>${c}</span>
			`;
		})}
	`;

	/** Wrap items with the spectrum-Typography wrapper if there are more than 1 items (this ensures correct margins) */
	return html`${when(
		contentLength > 1,
		() => html`<div class="spectrum-Typography" id=${ifDefined(id)}>${processedContent}</div>`,
		() => processedContent
	)}`;
};
