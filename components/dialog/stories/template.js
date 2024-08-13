import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Dialog",
	isDismissable = true,
	isFullScreen = false,
	isFullScreenTakeover = false,
	isOpen = true,
	showModal = false,
	hasFooter = false,
	heading,
	content = [],
	footer = [],
	customClasses = [],
	id = getRandomId("dialog"),
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	const scale = globals.scale ?? "medium";
	const toggleOpen = function () {
		updateArgs({ isOpen: !isOpen });
	};

	const Dialog = html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${scale}`]: true,
				[`${rootClass}--dismissable`]: isDismissable && !isFullScreen && !isFullScreenTakeover,
				[`${rootClass}--fullscreen`]: isFullScreen,
				[`${rootClass}--fullscreenTakeover`]: isFullScreenTakeover,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
		>
			<div class="${rootClass}-grid">
				${when(heading, () => [
					html`<h1 class="${rootClass}-heading">${heading}</h1>`,
					Divider({
						horizontal: true,
						customClasses: [`${rootClass}-divider`],
					}, context),
				])}
				<section class="${rootClass}-content">
					${renderContent(content)}
				</section>
				${when(hasFooter || footer, () => {
					return html`
						<footer class="${rootClass}-footer" style=${styleMap({
							"justify-content": "flex-end",
						})}>
							${when(typeof footer !== "undefined" && Array.isArray(footer) && footer.length > 0,
								() => renderContent(footer),
								() => ButtonGroup({
									items: [
										{
											label: "Cancel",
											treatment: "outline",
											variant: "secondary",
										},
										{
											label: "Save",
											treatment: "fill",
											variant: "accent"
										},
									],
								}, context)
							)}
						</footer>
					`;
				})}
				${when(isDismissable && !isFullScreen && !isFullScreenTakeover, () =>
					CloseButton({
						customClasses: [`${rootClass}-closeButton`],
						onclick: toggleOpen,
					}, context)
				)}
			</div>
		</div>
	`;

	if (showModal) {
		return html`
			${Modal({
				isOpen,
				content: [ () => Dialog],
			}, context)}
		`;
	}
	else {
		return Dialog;
	}
};
