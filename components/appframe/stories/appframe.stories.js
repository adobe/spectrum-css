
import { Template } from "./template.js";

/**
 * The app frame component is a starting point for an app's overall layout. It contains the header, side navigation, and main content area.
 *
 * ⚠️ This is currently an early prototype based on a draft version of design specs.
 */
export default {
	title: "App frame",
	component: "AppFrame",
	argTypes: {
		hasSideNavigation: {
			name: "Has side navigation",
			type: { name: "boolean" },
			defaultValue: true,
			table: {
				type: { summary: "boolean" },
				category: "Component",
				defaultValue: { summary: "true" },
			},
			control: "boolean",
		},
		hasMinimizedSideNav: {
			name: "Minimized side navigation",
			description: "Displays a horizontally minimized version of the side nav menu items where only the icon is visible.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: false },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "hasSideNavigation" },
		},
		contentLayout: {
			name: "Content layout",
			description: "Different layout options. The options available here are a work in progress.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["default", "rounded"],
			control: "select",
		},
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-AppFrame",
		hasSideNavigation: true,
		hasMinimizedSideNav: false,
		contentLayout: "default",
	},
	parameters: {
		layout: "fullscreen",
	},
};

/**
 * Default, with side navigation
 */
export const Default = Template.bind({});
Default.args = {};
