import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes, viewports } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isFocused, isHovered, isOpen, isSelected } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { MenuItemGroup, MenuTraySubmenu, MenuWithVariants } from "./menu.test";
import { Template } from "./template";

/**
 * A menu is used for creating a menu list. The various elements inside a menu can be: a menu group, a menu item, or a menu divider. Often a menu will appear in a popover so that it displays as a togglig menu.
*/
export default {
	title: "Menu",
	component: "Menu",
	argTypes: {
		selectionMode: {
			name: "Selection mode",
			description: "Determines whether items in the menu can be selected, and how many",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Selection",
			},
			options: ["none", "single", "multiple"],
			control: "select",
		},
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
		shouldTruncate: {
			name: "Truncate menu item label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasDividers: {
			name: "Has dividers",
			description: "Shows dividers between sections",
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isTraySubmenu: {
			name: "Is tray submenu",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		labelledby: { table: { disable: true } },
		items: { table: { disable: true } },
		role: { table: { disable: true } },
		subrole: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Menu",
		selectionMode: "none",
		size: "m",
		shouldTruncate: false,
		role: "listbox",
		subrole: "option",
		hasDividers: false,
		items: [
			{
				idx: 1,
				heading: "Menu header - Menu with icons",
				id: "menu-heading-with-icons",
				items: [
					{
						label: "Default menu item",
						iconName: "Export"
					},
					{
						label: "Focused menu item",
						iconName: "FolderOpen",
						isFocused: true
					},
					{
						label: "A menu item with a longer label that causes the text to wrap to the next line",
						iconName: "Send",
					},
					{
						label: "Menu item with no icon",
					},
					{
						label: "Disabled menu item",
						iconName: "Share",
						isDisabled: true,
					},
				],
			},
			{ type: "divider" },
			{
				idx: 2,
				heading: "Menu header - With descriptions and icons",
				id: "menu-heading-short-desc",
				items: [
					{
						label: "Menu item with description",
						description: "Short description",
					},
					{
						label: "Selected item",
						description: "This item is checked if single-select or multi-select mode is turned on",
						isSelected: true,
					},
					{
						label: "Selected item with icon",
						iconName: "Cloud",
						description: "This item is checked if single-select or multi-select mode is turned on",
						isSelected: true,
					},
				],
			},
			{ type: "divider" },
			{
				idx: 3,
				heading: "Menu header - With actions, icons, short descriptions, and values and longer header text that wraps",
				id: "menu-heading-desc-icon-value",
				hasActions: true,
				items: [
					{
						label: "Menu item with action and a longer label that truncates if it is long enough to truncate",
						iconName: "Cut",
						description: "This item has a switch if multi-select mode is turned on.",
					},
					{
						label: "Menu item with action",
						iconName: "Copy",
						description: "In multi-select mode, this item will be switched on. In single-select mode, this item will be checked.",
						isSelected: true,
					},
					{
						label: "Menu item with action and value",
						iconName: "Paste",
						description: "This item has a value. If multi-select mode is turned on, it also has a switch and the value can be used to label the switch.",
						value: "⌘ C",
					},
					{
						label: "Disabled menu item with action",
						iconName: "Archive",
						description: "Disabled menu item with description and icon",
						isDisabled: true,
					},
				],
			},
			{
				idx: 4,
				heading: "Menu header - These menu items have drill-ins for a submenu",
				id: "menu-heading-drillin",
				items: [
					{
						label: "Menu item with drill-in",
						isDrillIn: true,
					},
					{
						label: "Menu item with drill-in and open submenu (not rendered)",
						isDrillIn: true,
						isOpen: true,
					},
					{
						label: "Menu item with drill-in and value",
						isDrillIn: true,
						value: "Value",
					},
					{
						label: "Disabled menu item with drill-in",
						isDrillIn: true,
						isDisabled: true,
					}
				],
			},
		],
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Menu-item"],
		},
		componentVersion: version,
		docs: {
			story: {
				height: "300px"
			}
		},
	},
};

export const Default = MenuWithVariants.bind({});
Default.argTypes = {
	isTraySubmenu: { table: { disable: true } },
};
Default.args = {};

export const TraySubmenu = MenuTraySubmenu.bind({});
TraySubmenu.argTypes = {
	selectionMode: { table: { disable: true } },
	hasDividers: { table: { disable: true } },
};
TraySubmenu.args = {
	selectionMode: "multiple",
	isTraySubmenu: true,
	items: [
		{
			heading: "Snap to",
			items: [
				{
					label: "Guides",
					isSelected: true,
				},
				{
					label: "Grid",
				},
				{
					label: "Rulers",
				},
			]
		}
	],
};
TraySubmenu.parameters = {
	layout: "fullscreen",
	docs: {
		story: {
			inline: false,
			height: "400px"
		}
	},
	chromatic: {
		"Viewport | small": {
			viewport: viewports.small,
		},
	},
};

export const MenuItem = MenuItemGroup.bind({});
MenuItem.argTypes = {
	isDisabled,
	isActive,
	isFocused,
	isHovered,
	isOpen,
	isSelected,
	label: {
		name: "Label",
		type: { name: "string" },
		table: {
			type: { summary: "string" },
			category: "Content",
		},
	},
	description: {
		name: "Description",
		description: "Additional information about the menu item",
		type: { name: "string" },
		table: {
			type: { summary: "string" },
			category: "Content",
		},
	},
	value: {
		name: "Value",
		description: "Value of the menu item",
		type: { name: "string" },
		table: {
			type: { summary: "string" },
			category: "Content",
		},
	},
	iconName: {
		...(IconStories?.argTypes?.iconName ?? {}),
		if: false,
	},
	hasActions: {
		name: "Has switches",
		description: "If multiple selection is enabled, show switches instead of checkboxes to show which items have been selected",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Selection",
		},
		control: "boolean",
		if: { arg: "selectionMode", eq: "multiple" },
	},
	// These settings are not used in the MenuItem story
	hasDividers: { table: { disable: true } },
	isTraySubmenu: { table: { disable: true } },
};
MenuItem.args = {
	label: "Start a chat",
	iconName: "Chat",
	description: "Menu item description",
	value: "⌘ N",
};

// ********* DOCS ONLY ********* //
export const Collapsible = Template.bind({});
Collapsible.argTypes = {
	selectionMode: { table: { disable: true } },
	hasDividers: { table: { disable: true } },
	isTraySubmenu: { table: { disable: true } },
};

Collapsible.parameters = {
	chromatic: { disableSnapshot: true },
};
Collapsible.args = {
	shouldTruncate: true,
	items: [
		{
			label: "Web Design",
			iconName: "DesktopAndMobile",
			isCollapsible: true,
			isOpen: true,
			items: [
				{
					label: "Web Large",
					itemValue: "1920 x 1080",
				},
				{
					label: "Web Medium",
					itemValue: "1366 x 768",
				},
				{
					label: "Web Small",
					itemValue: "1280 x 800",
				},
			],
		},
		{
			label: "Mobile",
			isCollapsible: true,
			isOpen: true,
			items: [
				{
					label: "Web Large",
					itemValue: "1920 x 1080",
				},
				{
					label: "Web Medium",
					itemValue: "1366 x 768",
				},
				{
					label: "Web Small",
					itemValue: "1280 x 800",
				},
			],
		},
		{
			label: "Tablet",
			iconName: "DeviceTablet",
			isCollapsible: true,
			items: [
				{ label: "Defaults to not visible within closed item" },
			],
		},
		{
			label: "Social Media",
			iconName: "ShareAndroid",
			isCollapsible: true,
			items: [
				{ label: "Defaults to not visible within closed item" },
			],
		},
		{
			label: "Watches",
			iconName: "Watch",
			isCollapsible: true,
			items: [
				{ label: "Defaults to not visible within closed item" },
			],
		},
	],
};

// story used in Picker component
export const WithDividers = Template.bind({});
WithDividers.storyName = "Standard with dividers";
WithDividers.tags = ["!dev"];
WithDividers.parameters = {
	chromatic: { disableSnapshot: true },
};
WithDividers.args = {
	items: [
		{ label: "Deselect" },
		{ label: "Select inverse" },
		{ label: "Feather" },
		{ label: "Select and mask" },
		{ type: "divider" },
		{ label: "Save selection" },
		{ label: "Make work path", isDisabled: true },
	],
	hasDividers: true,
};

// ********* VRT ONLY ********* //
export const WithForcedColors = MenuItemGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
