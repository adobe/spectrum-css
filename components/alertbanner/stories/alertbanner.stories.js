import { Template } from "./template";

export default {
	title: "Components/Alert banner",
	description:
		"The Alert banner show pressing and high-signal messages, such as system alerts. They’re meant to be noticed and prompt users to take action.",
	component: "AlertBanner",
	argTypes: {
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		hasActionButton: {
			name: "Display action button",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-AlertBanner",
		isOpen: true,
		variant: "neutral",
		hasActionButton: true,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-AlertBanner button"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("alertbanner")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	hasActionButton: false,
	text: "Your trial has expired"
};

export const Info = Template.bind({});
Info.args = {
	variant: "info",
	text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purcahsed the software."
};

export const Negative = Template.bind({});
Negative.args = {
	variant: "negative",
	text: "Connection interupted. Check your network to continue."
};