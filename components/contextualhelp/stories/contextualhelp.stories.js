import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * Contextual help shows a user extra information in relation to another component or view.
 */
export default {
	title: "Contextual help",
	component: "ContextualHelp",
	argTypes: {
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
			handles: [
				...(ActionButtonStories?.parameters?.actions?.handles ?? [])
			],
		},
		componentVersion: version,
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
		text: "Learn about permissions",
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

// ********* DOCS ONLY ********* //
export const HelpDefault = Template.bind({});
HelpDefault.tags = ["autodocs", "!dev"];
HelpDefault.args = {
	title: "Permission required",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	iconName: "Help",
};
HelpDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HelpWithLink = Template.bind({});
HelpWithLink.tags = ["autodocs", "!dev"];
HelpWithLink.args = {
	title: "Permission required",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	link: {
		text: "Learn about permissions",
		url: "#",
	},
	iconName: "Help",
};
HelpWithLink.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HelpTopPopover = Template.bind({});
HelpTopPopover.tags = ["autodocs", "!dev"];
HelpTopPopover.args = {
	popoverPlacement: "top",
	customStyles: { "max-inline-size": "275px" },
	title: "Top popover example of text wrapping in the title",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	iconName: "Help",
};
HelpTopPopover.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
