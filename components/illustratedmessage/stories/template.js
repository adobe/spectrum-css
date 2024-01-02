import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { when } from "lit/directives/when.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

import illustration from "!!raw-loader!./illustration.svg?raw";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-IllustratedMessage",
	heading,
	description,
	customClasses = [],
	customStyles = {},
	useAccentColor = false,
}) => {
	if (!useAccentColor) {
		customStyles["--spectrum-illustrated-message-illustration-accent-color"] = "unset";
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${unsafeHTML(illustration)}
			${when(
				typeof heading !== "undefined",
				() => Typography({ semantics: "heading", size: "m", content: [heading], customClasses: [`${rootClass}-heading`] })
			)}
			${when(
				typeof description !== "undefined",
				() => Typography({ semantics: "body", size: "s", content: [description], customClasses: [`${rootClass}-description`] })
			)}
		</div>
	`;
};
