import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
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
		iconSet: { table: { disable: true } },
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
		iconSet: "workflow",
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=49480-1934",
		},
		packageJson,
		metadata,
		docs: {
			story: {
				height: "200px",
			},
		},
	},
};

/**
 * The default contextual help component uses an info icon to signify that it represents in-line information, and does not incorporate a link in its content. Specific, brief, and contextual guidance is best for this component's supplemental or nice-to-know content. The default placement of the popover is `bottom-start`.
 */
export const Default = ContextualHelpGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * If using a standalone [link](/docs/components-link--docs), do not add punctuation to the end of the link text. Make sure that the landing experience is intuitive, helpful, and naturally builds upon the information being introduced in this component. For example, don’t link to an external sales website unless the information there is directly related to a user being able to do something within the product.
 * 
 * A generic “Learn more” can be acceptable, but it’s more helpful, particularly for screen reader users, to include another word or two in the link text that gives more context about the link's destination.
 */
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
WithLink.storyName = "Default - info icon with link";

/**
 * This is an example of the contextual help component within a popover with a placement of `top`. Read more about the 22 available placement positions in the [popover documentation](/docs/components-popover--docs).
 */
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
	docs: {
		story: {
			height: "auto",
		},
	},
};
TopPopover.storyName = "Default - top popover";

/**
 * When displaying help or resources to learn more, the contextual help should use the help icon. The content in this variant provides more detailed, in-depth guidance about a task, UI element, tool or keyboard shortcuts.
 */
export const HelpDefault = Template.bind({});
HelpDefault.tags = ["!dev"];
HelpDefault.args = {
	iconName: "Help",
};
HelpDefault.parameters = {
	chromatic: { disableSnapshot: true },
};
HelpDefault.storyName = "Help icon";

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
HelpWithLink.storyName = "Help icon - with link";

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
	docs: {
		story: {
			height: "auto",
		},
	},
};
HelpTopPopover.storyName = "Help icon - top popover";

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
