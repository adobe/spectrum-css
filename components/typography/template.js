import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";

export const Template = (args = {}, context = {}) => {
	let {
		rootClass,
		semantics,
		size = "m",
		variant,
		weight,
		glyph = "sans-serif",
		id = getRandomId("typography"),
		content = [],
		customClasses = [],
		customStyles = {},
		skipLineBreak = false,
		lang = context.globals?.lang || "en-US",
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

		switch(size) {
			case "xxs":
				// Neither code nor body support xxs, but if paired with an xxs heading, use xs (the closest size to xxs)
				if (["body", "code"].includes(semantics)) {
					size = "xs";
				}
				// Detail doesn't support xxs, use s instead
				else if (["detail"].includes(semantics)) {
					size = "s";
				}
				break;
			case "xs":
				if (["detail"].includes(semantics)) {
					size = "s";
				}
				break;
			case "xxl":
				if (["detail", "code"].includes(semantics)) {
					size = "xl";
				}
				break;
			case "xxxl":
				if (["detail", "code"].includes(semantics)) {
					size = "xl";
				}
				break;
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
			[`${rootClass}--${glyph}`]: typeof glyph !== "undefined" && glyph !== "sans-serif",
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--${weight}`]: typeof weight !== "undefined",
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
				<code class=${classMap(classes)} style=${styleMap(customStyles)} id=${ifDefined(id)}>${c}</code>${when(!skipLineBreak, () => html`<br/>`)}
			`;

		return html`
			<span class=${classMap(classes)} style=${styleMap(customStyles)} id=${ifDefined(id)}>${c}</span>${when(!skipLineBreak, () => html`<br/>`)}
		`;
	});

	/** Wrap items with the spectrum-Typography wrapper if there are more than 1 items (this ensures correct margins) */
	return html`${when(
		content.length > 1,
		() => html`<div class="spectrum-Typography" id=${ifDefined(id)} lang=${ifDefined(lang)}>${processedContent}</div>`,
		() => html`${processedContent}`,
	)}`;
};

// ********* Template groups for displaying typography variants ********* //

const RegularBoldItalicGroup = (args, context) => Container({
	direction: "column",
	withBorder: false,
	wrapperStyles: {"row-gap": "0"},
	content: html`
		${Template({
			...args,
			context,
			content: [
				{
					content: `Regular ${args.semantics} text`,
					customStyles: {"margin-block-start": "0"},
				},
				{
					content: `Emphasized ${args.semantics} text`,
					variant: ["emphasized"],
				},
				{
					content: `Strong ${args.semantics} text`,
					variant: ["strong"],
				},
				{
					content: `Strong & emphasized ${args.semantics} text`,
					variant: ["strong", "emphasized"],
				},
			]
		})}`
});

export const DocsHeadingVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Default/sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "heading"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Heavy sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "heading", weight: "heavy"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Light sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "heading", weight: "light"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Serif",
			content: RegularBoldItalicGroup({...args, semantics: "heading", glyph: "serif"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Heavy serif",
			content: RegularBoldItalicGroup({...args, semantics: "heading", weight: "heavy", glyph: "serif"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Light serif",
			content: RegularBoldItalicGroup({...args, semantics: "heading", weight: "light", glyph: "serif"}, context)
		})}
	`
});

export const DocsBodyVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Default/sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "body"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Serif",
			content: RegularBoldItalicGroup({...args, semantics: "body", glyph: "serif"}, context)
		})}
	`
});

export const DocsDetailVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Default/sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "detail"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Serif",
			content: RegularBoldItalicGroup({...args, semantics: "detail", glyph: "serif"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Light sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "detail", weight: "light"}, context)
		})}
		${Container({
			direction: "column",
			heading: "Light Serif",
			content: RegularBoldItalicGroup({...args, semantics: "detail", glyph: "serif", weight: "light"}, context)
		})}
	`
});

export const DocsCodeVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Default/sans serif",
			content: RegularBoldItalicGroup({...args, semantics: "code"}, context)
		})}
	`
});

export const DocsHeadingBodyPairing = (args, context) => Container({
	direction: "column",
	withBorder: false,
	content: html`
	${Template({
		...args,
		context,
		content: [
			{
				semantics: "heading",
				content: "Lorem ipsum dolor",
				customStyles: {"margin-block-start": "0"},
			},
			{
				semantics: "body",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat. Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia."
			}
		]
	})}`
});

// ********* Template groups for Internationalization ********* //

const InternationalizedRegularBoldItalicGroup = (args, context) => Container({
	direction: "column",
	withBorder: false,
	wrapperStyles: {"row-gap": "0"},
	content: html`
		${Template({
			...args,
			context,
			content: [
				{
					content: html`${args.internationalizedContent.regular} (regular ${args.semantics})`,
					customStyles: {"margin-block-start": "0"},
				},
				{
					content: html`${args.internationalizedContent.emphasized} (emphasized ${args.semantics})`,
					variant: ["emphasized"],
				},
				{
					content: html`${args.internationalizedContent.strong} (strong ${args.semantics})`,
					variant: ["strong"],
				}
			]
		})}`
});

// @todo these are carryover from the docs site; need to ensure accuracy in translation
// they might all mean "heading"
const JapaneseInternationalizedContent = {
	regular: "見出し",
	emphasized: "見出し 重点",
	strong: "見出し 強い強調",
};

const ArabicInternationalizedContent = {
	regular: "القسم",
	emphasized: "القسم تشديد",
	strong: "القسم تأكيد قو",
};

const HebrewInternationalizedContent = {
	regular: "גוף הדגשות",
	emphasized: "גוף חזק",
	strong: "גוף חזק",
};

export const DocsInternationalizedHeadingVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Japanese (default)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "ja",
				internationalizedContent: JapaneseInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Japanese (heavy)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "ja",
				internationalizedContent: JapaneseInternationalizedContent,
				weight: "heavy"
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Japanese (light)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "ja",
				internationalizedContent: JapaneseInternationalizedContent,
				weight: "light"
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Arabic (default)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "ar",
				internationalizedContent: ArabicInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Arabic (heavy)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "ar",
				internationalizedContent: ArabicInternationalizedContent,
				weight: "heavy"
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Arabic (light)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "ar",
				internationalizedContent: ArabicInternationalizedContent,
				weight: "light"
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Hebrew (default)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "he",
				internationalizedContent: HebrewInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Hebrew (heavy)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "he",
				internationalizedContent: HebrewInternationalizedContent,
				weight: "heavy"
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Hebrew (light)",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "heading",
				lang: "he",
				internationalizedContent: HebrewInternationalizedContent,
				weight: "light"
			}, context)
		})}
	`
});

export const DocsInternationalizedBodyVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Japanese",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "body",
				lang: "ja",
				internationalizedContent: JapaneseInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Arabic",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "body",
				lang: "ar",
				internationalizedContent: ArabicInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Hebrew",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "body",
				lang: "he",
				internationalizedContent: HebrewInternationalizedContent,
			}, context)
		})}
	`
});

export const DocsInternationalizedDetailVariants = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			heading: "Japanese",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "detail",
				lang: "ja",
				internationalizedContent: JapaneseInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Arabic",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "detail",
				lang: "ar",
				internationalizedContent: ArabicInternationalizedContent,
			}, context)
		})}
		${Container({
			direction: "column",
			heading: "Hebrew",
			content: InternationalizedRegularBoldItalicGroup({
				...args,
				semantics: "detail",
				lang: "he",
				internationalizedContent: HebrewInternationalizedContent,
			}, context)
		})}
	`
});

export const DocsInternationalizedCodeVariants = (args, context) => Container({
	withBorder: false,
	wrapperStyles: {"row-gap": "0"},
	content: html`
	${Container({
		direction: "column",
		heading: "Japanese",
		wrapperStyles: {"row-gap": "0"},
		content: html`
				${Template({
					...args,
					context,
					content: ["暗号", "Code"],
					semantics: "code",
					lang: "ja",
					skipLineBreak: true,
				})}
			`
	})}
	`
});

export const DocsInternationalizedHeadingBodyPairing = (args, context) => Container({
	direction: "column",
	withBorder: false,
	content: html`
	${Template({
		...args,
		context,
		lang: "ja",
		content: [
			{
				semantics: "heading",
				content: "見出し",
				customStyles: {"margin-block-start": "0"},
			},
			{
				semantics: "body",
				content: "見出しとよく対になる本文。",
			}
		],
	})}`
});
