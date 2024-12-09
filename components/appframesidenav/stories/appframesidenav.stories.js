import { Template, defaultSideNavItems } from "./template.js";

/**
 * The app frame side navigation has a series of navigation items with an icon and a text label and can be
 * viewed expanded or collapsed with icons only. It has an option for a button above the navigation items,
 * and for some navigation item(s) to be displayed at the vertical end.
 */
export default {
	title: "Components/App frame side nav",
	component: "App frame side nav",
	argTypes: {
		isCondensed: {
			name: "Condensed (icons only)",
			description: "Displays a horizontally condensed version of the side nav menu items where only the icon is visible.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: false },
				category: "Component",
			},
			type: { required: true },
			control: "boolean",
		},
		showTopButton: {
			name: "Show top button",
			description: "Displays a button above the navigation items.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: true },
				category: "Component",
			},
			type: { required: true },
			control: "boolean",
		},
		topButtonText: {
			name: "Top button label text",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		items: {
			name: "Navigation items",
			description: "Array of objects with `label` and `workflowIconName`. Optionally `isCurrent` marks the current page.",
			table: {
				category: "Content",
			},
			type: { required: true },
			control: "object",
		},
	},
	args: {
		rootClass: "spectrum-AppFrameSideNav",
		showTopButton: true,
		topButtonText: "Create",
		items: defaultSideNavItems,
		isCondensed: false,
	},
};

export const Default = Template.bind({});
Default.args = {};
