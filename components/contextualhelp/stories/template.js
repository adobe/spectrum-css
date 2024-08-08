import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-ContextualHelp",
	id,
	iconName,
	title,
	body,
	link,
	popoverPlacement,
	customStyles = {},
	customClasses = [],
}, context) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		style=${styleMap(customStyles)}
	>
		${popoverPlacement.includes("top")
			? html`<div
					class="dummy-spacing"
					style="position: relative; height: 200px;"
				></div> `
			: ""}
		${ActionButton({
			size: "xs",
			iconName,
			customClasses: [`${rootClass}-button`],
		}, context)}
		${Popover({
			isOpen: true,
			content: [
				title ? html`<h2 class="${rootClass}-heading">${title}</h2>` : "",
				body ? html`<p class="${rootClass}-body">${body}</p>` : "",
				link
					? Link({
							text: link.text,
							url: link.url,
							customClasses: [`${rootClass}-link`],
					})
					: "",
			],
			position: popoverPlacement,
			customClasses: [`${rootClass}-popover`],
			customStyles: { top: "25px" },
		}, context)}
	</div>
`;
