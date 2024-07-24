import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template";
import { ToastGroup } from "./toast.test";

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
		rootClass: "spectrum-Toast",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Toast button"],
		},
		componentVersion: version,
	},
};

export const Default = ToastGroup.bind({});
Default.args = {
	message: "File has been archived",
	inlineButtonLabel: "Undo",
};

// ********* DOCS ONLY ********* //
export const Info = Template.bind({});
Info.tags = ["autodocs", "!dev"];
Info.args = {
	variant: "info",
	message: "A new version of Lightroom Classic is now available",
	inlineButtonLabel: "Update",
};
Info.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Negative = Template.bind({});
Negative.tags = ["autodocs", "!dev"];
Negative.args = {
	variant: "negative",
	message: "Unable to delete file",
	inlineButtonLabel: "Eject",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Positive = Template.bind({});
Positive.tags = ["autodocs", "!dev"];
Positive.args = {
	variant: "positive",
	message: "Copied to clipboard",
	inlineButtonLabel: "Eject",
};
Positive.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ToastGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
