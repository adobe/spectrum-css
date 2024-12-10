import { SizingTemplate, Template } from "./template";

/**
 * The illustrated message component is used for status and errors. It is also used for calls-to-action, such as within the drop zone component.
 */
export default {
	title: "Illustrated message",
	component: "IllustratedMessage",
	argTypes: {
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		description: {
			name: "Description",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		isHorizontal: {
			name: "Horizontal orientation",
			description: "The default content orientation is vertical. Add the horizontal class to align the illustration to the left.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		hasButtons: {
			name: "Show button group",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-IllustratedMessage",
		isHorizontal: false,
		size: "m",
		hasButtons: true,
		heading: "Error 404: Page not found",
		description: "This page isn't available. Try checking the URL or visit a different page.",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		layout: "centered"
	},
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Horizontal illustrated messages are displayed on extra large screen sizes or in a menu.
*/
export const Horizontal = Template.bind({});
Horizontal.tags = ["!dev"];
Horizontal.args = {
	isHorizontal: true
};
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Illustrated message comes in three sizes: small, medium, and large.
 * - Small illustrated message is typically used in quick or in-line actions.
 * - The medium size is the default, and often used in panels.
 * - The large size illustrated message is generally used in full page layouts and dialogs.
 */
export const Sizing = SizingTemplate.bind({});
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};
