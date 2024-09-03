import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { AlertBannerGroup } from "./alertbanner.test.js";

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
		packageJson: pkgJson,
	},
};

export const Default = AlertBannerGroup.bind({});
Default.args = {
	isOpen: true,
	hasActionButton: true,
	text: "Your trial has expired",
	customStyles: {
		"inline-size": "600px",
	}
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
