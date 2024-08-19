import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const Dialog = ({
	rootClass = "spectrum-AlertDialog",
	heading,
	content,
	customClasses = [],
	buttons,
	variant,
	icon = false,
	id = getRandomId("alertdialog"),
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			aria-labelledby="dialog_label"
			style=${styleMap(customStyles)}
		>
			<div class="${rootClass}-grid">
				<div class="spectrum-AlertDialog-header">
					<h1 class="${rootClass}-heading" id="dialog_label">${heading}</h1>
					${when(icon, () => Icon({
						size: "m",
						iconName: "Alert",
						setName: "workflow",
						customClasses: [`${rootClass}-icon`],
					}, context))}
				</div>
				${Divider({
					horizontal: true,
					customClasses: [`${rootClass}-divider`],
					}, context)}
				<section class="${rootClass}-content">${content}</section>
				${ButtonGroup({ items: buttons }, context)}
			</div>
		</div>
	`;
};

export const Template = ({
	isOpen = true,
	customModalStyles = {},
	skipWrapper = false,
	...args
} = {}, context = {}) => {
	return Modal({
		isOpen,
		content: [
			Dialog(args, context)
		],
		customStyles: customModalStyles,
		skipWrapper,
	}, context);
};
