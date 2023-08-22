import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";

import "@spectrum-css/dialog";

export const Template = ({
	rootClass = "spectrum-Dialog",
	isDismissable = true,
	isOpen = true,
	showModal = false,
	heading,
	content = [],
	customClasses = [],
	id,
	...globals
}) => {
	const { scale } = globals;
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
						...globals,
					}),
				])}
				<section class="${rootClass}-content">${content}</section>
				${when(isDismissable, () =>
					CloseButton({
						customClasses: [`${rootClass}-closeButton`],
						...globals,
					})
				)}
			</div>
		</div>
	`;

	if (showModal) {
		return Modal({
			...globals,
			isOpen,
			content: Dialog,
		});
	} else {
		return Dialog;
	}
};
