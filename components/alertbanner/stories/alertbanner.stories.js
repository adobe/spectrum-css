import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { AlertBannerGroup } from "./alertbanner.test.js";
import { ActionableOptionsTemplate, Template, TextOverflowTemplate } from "./template.js";

/**
 * The alert banner shows pressing and high-signal messages, such as system alerts. It is meant to be noticed and prompt users to take action.
 * It should occupy all of the available horizontal space until it reaches its maximum allowed width.
 */
export default {
	title: "Alert banner",
	component: "AlertBanner",
	argTypes: {
		isOpen,
		text: {
			name: "Text",
			description: "Text of the message displayed within the alert banner.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Semantic variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "neutral" },
			},
			options: ["neutral", "info", "negative"],
			control: "radio",
		},
		actionButtonText: {
			name: "Action button text",
			description: "Label text for the optional action button. When empty, the action button does not display.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		showCloseButton: {
			name: "Show close button",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		}
	},
	args: {
		rootClass: "spectrum-AlertBanner",
		isOpen: false,
		variant: "neutral",
		actionButtonText: "Action",
		text: "Your trial has expired",
		showCloseButton: true,
	},
	parameters: {
		layout: "padded",
		actions: {
			handles: ["click .spectrum-AlertBanner button"],
		},
		packageJson,
		metadata,
	},
};

export const Default = AlertBannerGroup.bind({});
Default.tags = ["!autodocs"];
Default.args = {
	isOpen: true,
};

// ********* VRT ONLY ********* //
export const WithForcedColors = AlertBannerGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
 * Neutral is the default semantic variant.
 */
export const Neutral = Template.bind({});
Neutral.storyName = "Variant: neutral";
Neutral.tags = ["!dev"];
Neutral.args = {
	isOpen: true,
	variant: "neutral",
	text: "Your trial has expired",
};
Neutral.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Informative = Template.bind({});
Informative.storyName = "Variant: informative";
Informative.tags = ["!dev"];
Informative.args = {
	isOpen: true,
	variant: "info",
	text: "Your trial will expire in 3 days",
};
Informative.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Negative = Template.bind({});
Negative.storyName = "Variant: negative";
Negative.tags = ["!dev"];
Negative.args = {
	isOpen: true,
	variant: "negative",
	text: "Connection interupted. Check your network to continue.",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The alert banner component can contain both an icon-only close button and a button with a contextual action to
 * take. Whenever possible, include the in-line action button if there's a way for a user to quickly address the issue
 * associated with an alert. There should never be more than one button with a contextual action in an alert banner.
 *
 * The close button is optional, depending on context. Consider adding one to let a user easily dismiss the alert.
 */
export const ActionableOptions = ActionableOptionsTemplate.bind({});
ActionableOptions.storyName = "Actionable and dismissable";
ActionableOptions.tags = ["!dev"];
ActionableOptions.args = {
	isOpen: true,
	variant: "negative",
};
ActionableOptions.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the text is too long for the available horizontal space, it wraps to form another line. In
 * actionable alert banners, the button moves below the text.
 */
export const TextOverflow = TextOverflowTemplate.bind({});
TextOverflow.storyName = "Text overflow behavior";
TextOverflow.tags = ["!dev"];
TextOverflow.args = {
	isOpen: true,
	variant: "negative",
};
TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};
