import { disableDefaultModes } from "@spectrum-css/preview/modes";
import pkgJson from "../package.json";
import { ActionTemplate, Template, ToastWrapOptions } from "./template.js";
import { ToastGroup } from "./toast.test.js";

/**
 * Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken.
 * 
 * They must include text to communicate a message. Write the text as concisely as possible while still being clear about what has happened or is happening. View the toast [content standards](https://spectrum.adobe.com/page/toast/#Content-standards) for writing guidelines.
 */
export default {
	title: "Toast",
	component: "Toast",
	argTypes: {
		variant: {
			name: "Variant",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "neutral" },
				category: "Component",
			},
			control: "select",
			options: ["neutral", "info", "negative", "positive"],
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
		packageJson: pkgJson,
	},
};

/**
 * The neutral toast is the default variant. It is gray and does not have an icon. This is used when the message is neutral in tone or when its semantics do not fit in any of the other variants.
*/

export const Default = ToastGroup.bind({});
Default.args = {
	message: "File has been archived",
	inlineButtonLabel: "Undo",
	variant: "neutral"
};

// ********* DOCS ONLY ********* //

/**
 * The informative toast uses the informative semantic color (blue) and has an info icon to help those with color vision deficiency discern the message tone. Similar to the accent button, this should be used when the message should call extra attention compared to the neutral variant.
 */

export const Info = Template.bind({});
Info.tags = ["!dev"];
Info.args = {
	variant: "info",
	message: "A new version of Lightroom Classic is now available",
	inlineButtonLabel: "Update",
};
Info.parameters = {
	chromatic: { disableSnapshot: true },
};

/** 
 * The negative toast uses the negative semantic color (red) and has an alert icon to help those with color vision deficiency to discern the message tone. This is used to show an error or failure.
*/

export const Negative = Template.bind({});
Negative.tags = ["!dev"];
Negative.args = {
	variant: "negative",
	message: "Unable to delete file",
	inlineButtonLabel: "Eject",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The positive toast uses the positive semantic color (green) and has a checkmark icon to help those with color vision deficiency discern the message tone. This is used to inform about a successful action or completion of a task. 
 */

export const Positive = Template.bind({});
Positive.tags = ["!dev"];
Positive.args = {
	variant: "positive",
	message: "Copied to clipboard",
	inlineButtonLabel: "Eject",
};
Positive.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the message text is too long for the horizontal space available, it wraps to form another line. 
*/

export const Wrapping = ToastWrapOptions.bind({});
Wrapping.tags = ["!dev"];
Wrapping.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A toast can have up to one action: [a static white, secondary, outline button.](https://spectrum.adobe.com/page/button#Static-color) This label should be kept concise, and it should only be used when there’s a direct action available that is related to the toast text.
*/

export const Action = ActionTemplate.bind({});
Action.tags = ["!dev"];
Action.parameters = {
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
