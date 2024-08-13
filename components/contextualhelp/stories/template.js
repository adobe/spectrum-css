import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ContextualHelp",
	id = getRandomId("contextualhelp"),
	iconName,
	title,
	body,
	link,
	popoverPlacement,
	customStyles = {},
	customClasses = [],
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
		>
			${Popover({
				isOpen: true,
				trigger: (passthrough) => ActionButton({
					...passthrough,
					size: "xs",
					iconName,
					customClasses: [`${rootClass}-button`],
				}, context),
				content: [
					title ? html`<h2 class="${rootClass}-heading">${title}</h2>` : "",
					body ? html`<p class="${rootClass}-body">${body}</p>` : "",
					link
						? Link({
								text: link.text,
								url: link.url,
								customClasses: [`${rootClass}-link`],
						})
						: nothing,
				],
				position: popoverPlacement,
				customClasses: [`${rootClass}-popover`],
				customStyles,
				popoverWidth: 275,
				popoverHeight: 150,
			}, context)}
		</div>
	`;
};
