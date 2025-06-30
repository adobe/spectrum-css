import { Template, defaultSideNavItems } from "./template.js";

/**
 * The app frame side navigation has a series of navigation items with an icon and a text label and can be
 * viewed expanded or minimized with icons only. It has an option for a button above the navigation items,
 * and for some navigation item(s) to be displayed at the vertical end.
 *
 * ⚠️ This is currently an early prototype based on a draft version of design specs.
 */
export default {
	title: "App frame side nav",
	component: "AppFrameSideNav",
	argTypes: {
		isMinimized: {
			name: "Minimized (icons only)",
			description: "Displays a horizontally minimized version of the side nav menu items where only the icon is visible.",
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
			description: "Array of objects with `label` and `workflowIconName`. Optionally, `isCurrent` marks the current page. `isEndSectionBoundary` marks the first nav item that should be aligned at the optional bottom \"end section\"; this should only be applied to one item.",
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
		isMinimized: false,
	},
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Some navigation items can be displayed at the vertical "end section" when the navigation is taller than the height of its content.
 * For example, in the app frame the side nav may take up the full viewport height.
 * The end section is designated by applying the class `spectrum-AppFrameSideNav-list-item--endSectionStart` to one of the navigation list items.
 * All subsequent list items will appear in the end section.
 *
 * This behavior is demonstrated in the following example by setting a minimum height on the navigation.
 */
export const EndSection = Template.bind({});
EndSection.args = {
	customStyles: {
		minBlockSize: "450px",
	},
};

/**
 * The minimized version of the app frame side nav only displays the icons.
 *
 * Accessibility notes:
 * - The text labels should still be present for screen readers.
 * - Implementations should show the text label on hover in a popover [WIP; this needs more info].
 */
export const Minimized = Template.bind({});
Minimized.args = {
	isMinimized: true,
};
