import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Modal",
	customClasses = [],
	customStyles = {},
	customWrapperClasses = [],
	customWrapperStyles = {},
	isOpen = true,
	variant,
	content = [],
	...globals
}) => {
	function processContent(c) {
		if (typeof c === "string") return c;
		if (typeof c === "function") c = c(globals);
		if (typeof c === "object" && Object.keys(c).includes("_$litType$")) return c;

		return Template({
			rootClass,
			customClasses,
			customStyles,
			customWrapperClasses,
			customWrapperStyles,
			isOpen,
			variant,
			...globals,
			...c,
		});
	}
	if (Array.isArray(content)) {
		content = content.map((c) => {
			return processContent(c);
		});
	} else {
		content = processContent(content);
	}

	return html`
		<div
			class=${classMap({
			[`${rootClass}-wrapper`]: true,
			...customWrapperClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
			style=${ifDefined(styleMap(customWrapperStyles))}
		>
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					"is-open": isOpen,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${ifDefined(styleMap(customStyles))}
			>
				${content}
			</div>
		</div>
	`;
};
