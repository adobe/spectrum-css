import { Template } from "./template";

/**
 * Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken.
 */
export default {
	title: "Toast",
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
				category: "Component",
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
		rootClass: "spectrum-Toast"
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

export const Default = Template.bind({});
Default.args = {
	message: "File has been archived",
	inlineButtonLabel: "Undo",
};

export const Info = Template.bind({});
Info.args = {
	variant: "info",
	message: "A new version of Lightroom Classic is now available",
	inlineButtonLabel: "Update",
};

export const Negative = Template.bind({});
Negative.args = {
	variant: "negative",
	message: "Unable to delete file",
	inlineButtonLabel: "Eject",
};

export const Positive = Template.bind({});
Positive.args = {
	variant: "positive",
	message: "Copied to clipboard",
	inlineButtonLabel: "Eject",
};
