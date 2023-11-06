import { Template } from "./template";

import { isOpen } from "@spectrum-css/preview/types/states.js";

/** The Alert banner show pressing and high-signal messages, such as system alerts. They’re meant to be noticed and prompt users to take action. */
export default {
	title: "Components/Alert banner",
	component: "AlertBanner",
	argTypes: {
		isOpen,
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Component",
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
	},
	args: {
		rootClass: "spectrum-AlertBanner",
		isOpen: true,
		variant: "neutral",
		text: "Your trial has expired. Please purchase to continue. Your work has been saved and is ready for you to open again after purchase.",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-AlertBanner button"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("alertbanner")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
