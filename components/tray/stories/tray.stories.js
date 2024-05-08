import { html } from "lit";
import { when } from "lit/directives/when.js";

import { isOpen } from "@spectrum-css/preview/types";

import { Template } from "./template";

import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";

/**
 * Tray dialogs are typically used to portray information on mobile device or smaller screens.
 */
export default {
	title: "Components/Tray",
	component: "Tray",
	argTypes: {
		content: { table: { disable: true } },
		isOpen,
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-Tray",
		customClasses: ["spectrum-Modal"],
		isOpen: true,
		heading: "New Messages",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "200px"
			}
		},
		states: {
			isOpen: false,
		}
	},
};

export const Default = ({
	heading,
	...args
}) => html`
	${Template({
		...args,
		content: [
			() => Dialog({
					heading,
					content: ["You have 5 new messages!"],
					isDismissable: false,
				})
		],
	})}

	${when(window.isChromatic(), () => Template({
		...args,
		content: [
			() => Dialog({
					heading: "You have new messages waiting in your inbox",
					content: ["You have 5 new messages! This notification is extra long so it wraps to the next line"],
					isDismissable: false,
				})
		],
		customStyles: {
			"justify-content": "flex-end"
		},
	}))}
`;
