import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = [],
	customStyles = {},
	id,
} = {}, context) => html`
		<div
			class=${classMap({
				[`${rootClass}-wrapper`]: true,
			})}
			style=${styleMap(customStyles)}
		>
		${Modal({
			customClasses: [rootClass, ...customClasses],
			isOpen,
			content,
			id,
			skipWrapper: true,
		}, context)}
		</div>
	`;

export const TrayGroup = Variants({
	Template,
	testData: [
		{
			content: [
				Dialog.bind(null, {
					heading: "You have new messages waiting in your inbox",
					content: ["You have 5 new messages! This notification is extra long so it wraps to the next line"],
					isDismissable: true,
				})
			],
		},
	],
});
