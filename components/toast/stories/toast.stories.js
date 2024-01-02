import { html } from "lit";
import { when } from "lit/directives/when.js";

import isChromatic from "chromatic/isChromatic";

import { Template } from "./template";

export default {
	title: "Components/Toast",
	description:
		"Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken.",
	component: "Toast",
	argTypes: {
		variant: {
			table: { disable: true },
		},
		message: {
			name: "Message",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		inlineButtonLabel: {
			name: "Inline button label",
			description: "Label for the inline button; if blank, no button is shown",
			type: { name: "string" },
			table: {
				category: "Advanced",
				type: { summary: "string" },
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-Toast",
		message: "File has been archived",
		inlineButtonLabel: "Undo",
		customStorybookStyles: {
			alignItems: "flex-start"
		},
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Toast button"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("toast")
				? "migrated"
				: "legacy",
		},
	},
};

const Toasts = (args) => html`
	${Template(args)}
	${when(isChromatic(), () => Template({
		...args,
		variant: "info",
		message: "A new version of Lightroom Classic is now available",
		inlineButtonLabel: "Update",
	}))}
	${when(isChromatic(), () => Template({
		...args,
		variant: "positive",
		message: "Copied to clipboard",
		inlineButtonLabel: "Eject",
	}))}
	${when(isChromatic(), () => Template({
		...args,
		variant: "negative",
		message: "Unable to delete file",
		inlineButtonLabel: "Eject",
	}))}
`;

export const Default = Toasts.bind({});
Default.args = {};

export const Express = Toasts.bind({});
Express.args = { express: true };
