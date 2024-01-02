import { Template } from "./template";

import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

export default {
	title: "Components/Contextual help",
	description:
		"Contextual Help shows a user extra information in relation to another component or view.",
	component: "ContextualHelp",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		title: {
			name: "Title",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
		body: {
			name: "Body",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
		iconName: {
			name: "Icon",
			type: { name: "string", required: true },
			defaultValue: "Info",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "Info" },
			},
			options: ["Info", "Help"],
			control: "select",
		},
		popoverPlacement: {
			name: "Popover Placement",
			type: { name: "string", required: true },
			defaultValue: "bottom-start",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "Info" },
			},
			options: [
				"top",
				"top-left",
				"top-right",
				"top-start",
				"top-end",
				"bottom",
				"bottom-left",
				"bottom-right",
				"bottom-start",
				"bottom-end",
				"left",
				"left-top",
				"left-bottom",
				"start",
				"start-top",
				"start-bottom",
				"right",
				"right-top",
				"right-bottom",
				"end",
				"end-top",
				"end-bottom",
			],
			control: "select",
		},
		link: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-ContextualHelp",
		iconName: "Info",
		popoverPlacement: "bottom-start",
	},
	parameters: {
		actions: {
			handles: [...(ActionButtonStories?.parameters?.actions?.handles ?? [])],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("contextualhelp")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	title: "Permission required",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const WithLink = Template.bind({});
WithLink.args = {
	title: "Permission required",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	link: {
		content: "Learn about permissions",
		url: "#",
	},
};

export const TopPopover = Template.bind({});
TopPopover.args = {
	popoverPlacement: "top",
	customStyles: { "max-inline-size": "275px" },
	title: "Top popover example of text wrapping in the title",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
