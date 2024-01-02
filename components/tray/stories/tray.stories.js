
import { html } from "lit";
import { when } from "lit/directives/when.js";

import isChromatic from "chromatic/isChromatic";

import { Template } from "./template";

import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";

export default {
	title: "Components/Tray",
	description:
		"Tray dialogs are typically used to portray information on mobile device or smaller screens.",
	component: "Tray",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		content: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
		},
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
		customStyles: {
			// Prevents overflow in the docs preview
			// @todo block-size 100vh assumes the tray exists at the root of an app; it should conform to it's container though instead
			blockSize: "100%",
		},
		isOpen: true,
		heading: "Tray dialog",
		content: [
			() => Dialog({
				heading: "New messages",
				content: ["You have 5 new messages!"],
				isDismissable: false,
			})
		],
		customStorybookStyles: isChromatic() ? {
			blockSize: "400px",
			inlineSize: "800px",
		} : {},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("tray")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = (args) => html`
	${Template({
		...args,
		customStyles: isChromatic() ? {
			blockSize: "400px",
			justifyContent: "start",
			alignItems: "end",
			position: "relative",
		} : {
			alignItems: "end",
		},
	})}
	${when(isChromatic(), () => Template({
		...args,
		content: [
			() => Dialog({
				heading: "You have new messages waiting in your inbox",
				content: ["You have 5 new messages! This notification is extra long so it wraps to the next line"],
				isDismissable: false,
			})
		],
		customStyles: {
			blockSize: "400px",
			justifyContent: "end",
			position: "relative",
			alignItems: "end",
		}
	}))}
`;
Default.args = {};
