import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { useArgs, useGlobals } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

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
}, context) => {
	const [, updateArgs] = useArgs();
	const scale = window.__scale;

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
					}, context),
				])}
				<section class="${rootClass}-content">${content.map((c) => (typeof c === "function" ? c({}, context) : c))}</section>
				${when(isDismissable, () =>
					CloseButton({
						customClasses: [`${rootClass}-closeButton`],
						...globals,
						onclick: () => {
							updateArgs({ isOpen: !isOpen });
						},
					}, context)
				)}
			</div>
		</div>
	`;

	if (showModal) {
		return html`
			${Underlay({
				...globals,
				isOpen,
			}, context)}
			${Button({
				...globals,
				size: "m",
				variant: "secondary",
				label: "Click to open dialog",
				treatment: "outline",
				customClasses: [],
				customStyles: {
					position: "absolute",
					insetInlineStart: "50%",
					insetBlockStart: "50%",
					transform: "translate(-50%, -50%)",
				},
				onclick: () => {
					updateArgs({ isOpen: !isOpen });
				},
			}, context)}
			${Modal({
				...globals,
				isOpen,
				content: Dialog,
			}, context)}
		`;
	}
	else {
		return Dialog;
	}
};
