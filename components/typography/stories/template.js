import { getRandomId, Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";

export const Template = (args = {}, context = {}) => {
	let {
		rootClass = "spectrum-Typography",
		semantics = "body",
		size = "m",
		variant,
		weight,
		glyph = "sans-serif",
		id = getRandomId("typography"),
		content = [],
		customClasses = [],
		customStyles = {},
	} = args;

	// If the content is not an array, make it an array for easier processing
	if (!Array.isArray(content)) {
		content = [content];
	}

	// If there is no content, return an empty string, no need for additional processing
	if (content.length === 0) return html``;

	const processedContent = content.map((c) => {
		/* If the content is an object (but not a lit object), we need to merge the object with the template */
		if (typeof c !== "string" && (typeof c === "object" && !c._$litType$)) {
			return Template({ ...args, ...c }, context);
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
				<h2 class=${classMap(classes)} style=${styleMap(customStyles)} id=${ifDefined(id)}>${c}</h2>
			`;

		if (semantics === "body")
			return html`
				<p class=${classMap(classes)} style=${styleMap(customStyles)} id=${ifDefined(id)}>${c}</p>
			`;

		if (semantics === "code")
			return html`
				<code class=${classMap(classes)} style=${styleMap(customStyles)} id=${ifDefined(id)}>${c}</code><br/>
			`;

		return html`
			<span class=${classMap(classes)} style=${styleMap(customStyles)} id=${ifDefined(id)}>${c}</span><br/>
		`;
	});

	/** Wrap items with the spectrum-Typography wrapper if there are more than 1 items (this ensures correct margins) */
	return html`${when(
		content.length > 1,
		() => html`<div class="spectrum-Typography" id=${ifDefined(id)}>${processedContent}</div>`,
		() => html`${processedContent}`,
	)}`;
};

export const TypographyGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Heading",
			semantics: "heading",
			content: [
				"This is a heading",
				{
					content: "This is a heading with a weight of light",
					semantics: "heading",
					weight: "light",
				},
				{
					content: "This is a heading with a weight of heavy",
					semantics: "heading",
					weight: "heavy",
				},
				{
					content: "This is a strong heading",
					semantics: "heading",
					variant: ["strong"],
				},
				{
					content: "This is an emphasized heading",
					semantics: "heading",
					variant: ["emphasized"],
				},
				{
					content: "This is a strong emphasized heading",
					semantics: "heading",
					variant: ["strong", "emphasized"],
				},
				{
					content: "This is a heading with a serif font",
					semantics: "heading",
					glyph: "serif",
				},
			],
		},
		{
			testHeading: "Body",
			semantics: "body",
			content: [
				"This is a sentence of body text with default settings.",
				{
					content: "This is a sentence of body text with the strong variant.",
					semantics: "body",
					variant: ["strong"],
				},
				{
					content: "This is a sentence of body text with the emphasized variant.",
					semantics: "body",
					variant: ["emphasized"],
				},
				{
					content: "This is a sentence of body text with the strong and emphasized variant.",
					semantics: "body",
					variant: ["strong", "emphasized"],
				},
				{
					content: "This is a sentence of body text with the serif glyph.",
					semantics: "body",
					glyph: "serif",
				},
			],
		},
		{
			testHeading: "Detail",
			semantics: "detail",
			content: [
				"Detail",
				{
					content: "Strong detail",
					semantics: "detail",
					variant: ["strong"],
				},
				{
					content: "Emphasized detail",
					semantics: "detail",
					variant: ["emphasized"],
				},
				{
					content: "Strong + emphasized detail",
					semantics: "detail",
					variant: ["strong", "emphasized"],
				},
				{
					content: "Serif detail",
					semantics: "detail",
					glyph: "serif",
				},
			],
		},
		{
			testHeading: "Code",
			semantics: "code",
			content: [
				"console.log('Hello, code block!');",
				{
					content: "console.log('Hello, strong code!');",
					semantics: "code",
					variant: ["strong"],
				},
				{
					content: "console.log('Hello, emphasized code!');",
					semantics: "code",
					variant: ["emphasized"],
				},
				{
					content: "console.log('Hello, strong + emphasized code!');",
					semantics: "code",
					variant: ["strong", "emphasized"],
				},
			],
		},
	],
});
