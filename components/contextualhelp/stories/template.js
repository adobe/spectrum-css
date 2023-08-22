import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";

import "@spectrum-css/contextualhelp";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
	rootClass = "spectrum-ContextualHelp",
	id,
	iconName,
	title,
	body,
	link,
	popoverPlacement,
	customClasses = [],
	...globals
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${popoverPlacement.includes("top")
				? html`<div
						class="dummy-spacing"
						style="position: relative; height: 125px;"
				  ></div> `
				: ""}
			${ActionButton({
				...globals,
				size: "xs",
				iconName,
				customClasses: [`${rootClass}-button`],
			})}
			${Popover({
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
			})}
		</div>
	`;
};
