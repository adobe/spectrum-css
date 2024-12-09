import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
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
	size = "m",
	layout,
	hasHeroImage = false,
	heroImageUrl,
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;
	const toggleOpen = () => updateArgs({ isOpen: !isOpen });

	const Dialog = html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--dismissible`]: isDismissible && ["fullscreen", "fullscreenTakeover"].every(l => layout !== l),
				[`${rootClass}--${layout}`]: typeof layout !== "undefined",
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined", 
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${ifDefined(styleMap(customStyles))}
		> 
			<div class="${rootClass}-grid">
				${when(hasHeroImage, () =>
					html`
						<div 
							class="spectrum-Dialog-hero"
							style="background-image:url(${heroImageUrl ? heroImageUrl : "example-card-portrait.png"})">
						</div>
					`
				)}
				<div class="${rootClass}-header">
					${when(heading, () => html`
						<h1 class="${rootClass}-heading">${heading}</h1>
					`)}
					${when(header, () => html`
						<span class="${rootClass}-header-content">
							${Typography({
								semantics: "body",
								size: "m",
								// @todo: takeover dialogs can accept other components in their headers. could the renderContent function work here?
								content: [ header ]
							})}
						</span>
					`,
				)}
				</div>
				<section class="${rootClass}-content">${content.map((c) => (typeof c === "function" ? c({}) : c))}</section>
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
				${when(hasFooter, () => html`
					<footer class="${rootClass}-footer">
						${when(typeof footer !== "undefined", () => html`
							<div class="${rootClass}-footer-content">
								${when(hasCheckbox, () => html`
						 			${Checkbox({
										label: footer,
									})}
								`,
									() => 
										Typography({
											semantics: "body",
											size: "m",
											content: [ footer ]
										})
								)}
							</div>
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
						 	<div class="${rootClass}-noFooter"></div>
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
					</footer>
					`,
					() => html`
						<div class="${rootClass}-noFooter"></div>
				`)}
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
				customStyles: {
					"--mod-modal-background-color": "transparent"
				},
			}, context)}
		`;
	}
	else {
		return Dialog;
	}
};
