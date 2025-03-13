import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { capitalize } from "lodash-es";

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
	isInline = false,
	id = getRandomId("link"),
	customClasses = [],
} = {}) => {
	return html`
		<a
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--inline`]: isInline,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				[`${rootClass}--static${capitalize(staticColor)}`]:
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
	<p>
		Hello, this is a
		${Template(args, context)}
		. This is just filler text, but if you keep reading maybe something good will happen.
	</p>
`;

export const MultilineText = (args, context) => html`
	<p style="width: 200px;">
		I like focus styles. They are very important for accessibility. They help users know where they are on the page.
		${Template({
			...args,
			text: "This is a link that spans multiple lines",
			isFocused: true,
			isInline: true,
		}, context)}
		They are also very pretty.
	</p>
`;

export const LinkGroupText = (args, context) => Container({
	withBorder: false,
	direction: "row",
	content: html`
	${Container({
		withBorder: false,
		direction: "column",
		heading: "Default",
		content: html`
			${Template({
				...args,
				text: "Learn more",
			}, context)}
		`,
	}, context)}
	${Container({
		withBorder: false,
		direction: "column",
		heading: "Quiet",
		content: html`
			${Template({
				...args,
				text: "Learn more",
				isQuiet: true,
			}, context)}
		`,
	}, context)}
`,
}, context);
