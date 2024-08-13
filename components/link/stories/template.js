import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Link",
	url = "#",
	text,
	variant,
	staticColor,
	isQuiet = false,
	isHovered = false,
	isActive = false,
	isFocused = false,
	isVisited = false,
	id = getRandomId("link"),
	customClasses = [],
} = {}) => {
	return html`
		<a
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				"is-hover": isHovered,
				"is-active": isActive,
				"is-focus-visible": isFocused,
				"is-visited": isVisited,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			href=${ifDefined(url)}
		>
			${text}
		</a>
	`;
};

export const TemplateWithFillerText = (args, context) => html`
	<div>
		Hello, this is a
		${Template(args, context)}
		. This is just filler text, but if you keep reading maybe something good will happen.
	</div>
`;
