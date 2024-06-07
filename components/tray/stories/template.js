import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = [],
	customStyles = {},
	id,
}) => html`
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
		})}
		</div>
	`;

export const TrayGroup = ({
	heading,
	...args
}) => html`
	<div>
		${Template({
			...args,
			content: [
				Dialog({
					heading,
					content: ["You have 5 new messages!"],
					isDismissable: false,
				})
			],
		})}
		${Template({
			...args,
			content: [
				Dialog({
					heading: "You have new messages waiting in your inbox",
					content: ["You have 5 new messages! This notification is extra long so it wraps to the next line"],
					isDismissable: false,
				})
			],
			customStyles: {
				"display": window.isChromatic() ? undefined : "none",
				"justify-content": "flex-end"
			},
		})}
	</div>
`;
