import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
// import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Dialog",
	isDismissible = false,
	isOpen = true,
	showModal = false,
	hasFooter = false,
	heading,
	header,
	footer,
	hasCheckbox = false,
	content = [],
	customClasses = [],
	id,
	size = "medium",
	layout,
	heroImageUrl,
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;
	const toggleOpen = () => updateArgs({ isOpen: !isOpen });

	const Dialog = html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--dismissable`]: isDismissible && ["fullscreen", "fullscreenTakeover"].every(l => layout !== l),
				[`${rootClass}--${layout}`]: typeof layout !== "undefined",
				[`${rootClass}--${size}`]: typeof size !== "undefined", 
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${ifDefined(styleMap(customStyles))}
		> 
			<div class="${rootClass}-grid">
				${when(typeof heroImageUrl !== "undefined", () =>
					html`
						<div 
							class="spectrum-Dialog-hero"
							style="background-image:url(${heroImageUrl})">
						</div>
					`
				)}
				<div class="${rootClass}-header">
					${when(heading, () => html`
						<h1 class="${rootClass}-heading">${heading}</h1>
					`)}
					${when(header, () => html`
						${Typography({
							semantics: "body",
							size: "m",
							content: header
						})}
					`)}
				</div>
				${when(isDismissible, () =>
					CloseButton({
            customClasses: [`${rootClass}-closeButton`],
            onclick: () => {
              updateArgs(toggleOpen);
            },
          }, context) 
				)}
				${when(layout === "fullscreen" || layout === "fullscreenTakeover", () => html`
					<div class="${rootClass}-buttonGroup">
						${ButtonGroup({
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
							onclick: () => {
								updateArgs(toggleOpen);
							},
						}, context)}
					</div>
				`)}
				<section class="${rootClass}-content">${content.map((c) => (typeof c === "function" ? c({}) : c))}</section>
				<!--start of footer when block -->
				${when(hasFooter, () => html`
					<footer class="${rootClass}-footer">
						${when(typeof footer !== "undefined", () => html`
							${when(hasCheckbox, () => html`
						 		${Checkbox({
									label: footer,
								})}
								<div class="${rootClass}-buttonGroup">
									${ButtonGroup({
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
										onclick: () => {
											updateArgs(toggleOpen);
										},
									}, context)}
								</div>
							`,
							() => html`
							 	${footer}
								<div class="${rootClass}-buttonGroup">
									${ButtonGroup({
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
										onclick: () => {
											updateArgs(toggleOpen);
										},
									}, context)}
								</div>
							 `
							)}
						<!-- end when checkbox -->
						`)}
						<!-- end when footer isn't undefined -->
					</footer>
					`,
					() => html`
						<div class="${rootClass}-noFooter"></div>
				`)}
				<!--end of footer when block -->
			</div>
		</div>
	`;
	if (showModal) {
		return html`
			${Underlay({
				isOpen,
			})}
			${Modal({
				isOpen,
				content: Dialog,
				variant: layout,
			}, context)}
		`;
	}
	else {
		return Dialog;
	}
};
