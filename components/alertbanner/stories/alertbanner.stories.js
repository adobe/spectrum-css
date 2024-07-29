import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { AlertBannerGroup } from "./template";

/**
 * The alert banner show pressing and high-signal messages, such as system alerts. They're meant to be noticed and prompt users to take action.
 */
export default {
	title: "Alert banner",
	component: "AlertBanner",
	argTypes: {
		isOpen,
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Background color variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "info", "negative"],
			control: "radio",
		},
		hasActionButton: {
			name: "Display action button",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-AlertBanner",
		isOpen: false,
		variant: "neutral",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-AlertBanner button"],
		},
		componentVersion: version,
	},
};

export const Default = AlertBannerGroup.bind({});
Default.args = {
	isOpen: true,
	hasActionButton: true,
	text: "Your trial has expired",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
