import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { capitalize } from "lodash-es";

import "../index.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
	rootClass = "spectrum-Typography",
	semantics,
	size,
	variant,
	weight,
	glyph = "sans-serif",
	id,
	content = [],
	customClasses = [],
	// ...globals
}) => {
	if (Array.isArray(content)) {
		content = content.map((c) => {
			if (typeof c === "string") return c;
			if (typeof c === "object" && c._$litType$) return c;

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
			});
		});
	}

	if (typeof semantics === "undefined") {
		return html`<div
			class=${classMap({
				"spectrum-Typography": true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${content}
		</div>`;
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

	if (variant && Array.isArray(variant)) {
		if (["strong", "emphasized"].every((i) => variant.includes(i))) {
			content = html`<span
				class=${classMap({
					[`${rootClass}-strong`]: true,
					[`${rootClass}-emphasized`]: true,
				})}
				>${content}</span
			>`;
		} else if (variant.includes("strong")) {
			content = html`<strong
				class=${classMap({ [`${rootClass}-strong`]: true })}
				>${content}</strong
			>`;
		} else if (variant.includes("emphasized")) {
			content = html`<em
				class=${classMap({ [`${rootClass}-emphasized`]: true })}
				>${content}</em
			>`;
		}
	}

	if (semantics === "heading")
		return html`
			<h2 class=${classMap(classes)} id=${ifDefined(id)}>${content}</h2>
		`;

	if (semantics === "body")
		return html`
			<p class=${classMap(classes)} id=${ifDefined(id)}>${content}</p>
		`;

	if (semantics === "code")
		return html`
			<code class=${classMap(classes)} id=${ifDefined(id)}>${content}</code>
		`;

	return html`
		<span class=${classMap(classes)} id=${ifDefined(id)}>${content}</span>
	`;
};
