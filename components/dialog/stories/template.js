import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Dialog",
	isDismissible = true,
	hasDivider = true,
	isOpen = true,
	showModal = false,
	heading,
	content = [],
	customClasses = [],
	id,
	size = "medium",
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
				[`${rootClass}--${size}`]: typeof size !== "undefined", 
				[`${rootClass}--dismissable`]: isDismissible,
				[`${rootClass}--${layout}`]: typeof layout !== "undefined",
				[`${rootClass}--noDivider`]: !hasDivider,
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
							style="background-image:url(${heroImageUrl ?  heroImageUrl : "example-card-portrait.png"})">
						</div>
					`
				)}
				<h1 class="${rootClass}-heading">${heading}</h1>
				${when(hasDivider, () =>
					Divider({
						horizontal: true,
						customClasses: [`${rootClass}-divider`],
					}, context),
				)}
				<section class="${rootClass}-content">
					${content.map((c) => (typeof c === "function" ? c({}, context) : c))}
				</section>
				${when(isDismissible, () =>
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
				variant: layout,
			}, context)}
		`;
	}
	else {
		return Dialog;
	}
};

export const DialogGroup = Variants({
	Template,
	testData: [
		{
			showModal: false,
			isDismissible: true,
		},
		{
			testHeading: "Not dismissible",
			isDismissible: false,
			showModal: false,
		},
		{
			testHeading: "With hero",
			hasHeroImage: true,
			isDismissible: true,
			hasDivider: false,
			showModal: false,
		},
		{
			testHeading: "Fullscreen",
			layout: "fullscreen",
			showModal: false,
		},
		{
			testHeading: "Takeover",
			layout: "fullscreenTakeover",
			showModal: false,
		}
	],
});
