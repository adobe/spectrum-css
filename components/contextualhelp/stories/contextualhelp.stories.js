import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { ContextualHelpGroup } from "./contextualhelp.test.js";
import { Template } from "./template.js";

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
		title: "Permission required",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		customStyles: { "inline-size": "275px" },
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButtonStories?.parameters?.actions?.handles ?? [])
			],
		},
		componentVersion: version,
	},
	tags: ["!autodocs"],
};

export const Default = ContextualHelpGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const WithLink = Template.bind({});
WithLink.tags = ["!dev"];
WithLink.args = {
	link: {
		text: "Learn about permissions",
		url: "#",
	},
};
WithLink.parameters = {
	chromatic: { disableSnapshot: true },
};

export const TopPopover = Template.bind({});
TopPopover.tags = ["!dev"];
TopPopover.args = {
	popoverPlacement: "top",
	customStyles: {
		"inline-size": "275px",
		"margin-top": "170px",
	},
	title: "Top popover example of text wrapping in the title",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
TopPopover.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HelpDefault = Template.bind({});
HelpDefault.tags = ["!dev"];
HelpDefault.args = {
	iconName: "Help",
};
HelpDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HelpWithLink = Template.bind({});
HelpWithLink.tags = ["!dev"];
HelpWithLink.args = {
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
HelpTopPopover.tags = ["!dev"];
HelpTopPopover.args = {
	popoverPlacement: "top",
	customStyles: {
		"inline-size": "275px",
		"margin-top": "170px",
	},
	title: "Top popover example of text wrapping in the title",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	iconName: "Help",
};
HelpTopPopover.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ContextualHelpGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
