import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

/**
 * Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken.
 */
export default {
	title: "Components/Toast",
	component: "Toast",
	argTypes: {
		variant: {
			name: "Style",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
			},
			options: ["info", "negative", "positive"],
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
				category: "Content",
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
			"display": "flex",
			"align-items": "flex-start",
			"gap": "20px",
			"flex-wrap": "wrap",
		}
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Toast button"],
		},
		status: {
			type: "migrated",
		},
	},
};

const Toasts = (args) => html`
	${Template(args)}
	${when(window.isChromatic(), () => Template({
		...args,
		inlineButtonLabel: undefined
	}))}
`;

export const Default = Toasts.bind({});
Default.args = {};
