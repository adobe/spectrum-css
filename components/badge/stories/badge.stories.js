// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
	title: "Components/Badge",
	description:
		"A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention.",
	component: "Badge",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		variant: {
			name: "Background color variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "accent", "informative", "positive", "negative", "gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"],
			control: "select",
		},
		fixed: {
			name: "Fixed layout",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: [
				"fixed-inline-start",
				"fixed-inline-end",
				"fixed-block-start",
				"fixed-block-end",
			],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Badge",
		size: "m",
		variant: "neutral",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("badge")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	label: "Badge",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	iconName: "Info",
	label: "Badge",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
	iconName: "Info",
};
