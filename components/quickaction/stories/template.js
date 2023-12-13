import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-QuickActions",
	size = "m",
	isOpen = false,
	textOnly = false,
	position,
	// noOverlay = false,
	content = [],
	id,
	customClasses = [],
	...globals
}) => {
	if (!content.length) {
		console.warn("QuickActions: requires content be passed in to render.");
		return html``;
	}

	if (!content.some((c) => c.icon)) {
		textOnly = true;
	}

	return html`
		<div
			class="${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-open": isOpen,
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				[`${rootClass}--textOnly`]: textOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}"
			id=${ifDefined(id)}
		>
			${content.map((c) => {
				if ((typeof c === "object" && c.iconName) || c.label) {
					return ActionButton({ ...globals, ...c, isQuiet: true });
				} else return c;
			})}
		</div>
	`;
};
