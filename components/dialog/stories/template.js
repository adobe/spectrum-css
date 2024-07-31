import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Dialog",
	isDismissable = true,
	isOpen = true,
	showModal = false,
	heading,
	content = [],
	customClasses = [],
	id,
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;
	const scale = globals.scale ?? "medium";
	const toggleOpen = function () {
		updateArgs({ isOpen: !isOpen });
	};

	const Dialog = html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${scale}`]: true,
				[`${rootClass}--dismissable`]: isDismissable,
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
					${content.map((c) => (typeof c === "function" ? c({}, context) : c))}
				</section>
				${when(isDismissable, () =>
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

export const DialogGroup = Variants({
	Template,
	testData: [
		{
			showModal: false,
		},
		{
			testHeading: "Not dismissable",
			isDismissable: false,
			showModal: false,
		},
	],
});
