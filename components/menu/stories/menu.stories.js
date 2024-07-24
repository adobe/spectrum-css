import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { html } from "lit";
import { version } from "../package.json";
import { MenuItemWithVariants, MenuWithVariants, Template } from "./template";

const menuArgTypes = {
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
	maxInlineSize: {
		name: "Max inline size",
		type: { name: "text", required: true },
		table: {
			type: { summary: "text" },
			category: "Component",
		},
		control: "text",
		if: { arg: "shouldTruncate", truthy: true },
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
};

const menuItemArgTypes = {
	isDisabled: {
		name: "Menu item is disabled",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "State",
		},
		control: "boolean",
	},
	itemIcon: {
		...(IconStories?.argTypes?.iconName ?? {}),
		if: false,
	},
	isItemSelected: {
		name: "Menu item is selected",
		description: "Selected state when single or multi-select mode is turned on",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Selection",
			control: "boolean"
		},
		if: { arg: "selectionMode", not: { eq: "none" } },
	},
	hasItemDescription: {
		name: "Has menu item description",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Content",
			control: "boolean",
		},
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
	singleItemDescription: {
		name: "Menu item description for single menu item",
		type: { name: "text", required: true },
		table: {
			type: { summary: "text" },
			category: "Content",
		},
		control: "text",
		if: { arg: "hasItemDescription", truthy: true },
	},
	hasValue: {
		name: "Has value text",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Content",
			control: "boolean",
		},
	},
	singleItemValue: {
		name: "Menu item value for single menu item",
		type: { name: "text", required: true },
		table: {
			type: { summary: "text" },
			category: "Content",
		},
		control: "text",
		if: { arg: "hasValue", truthy: true },
	},
};

/**
 * A menu is used for creating a menu list. The various elements inside a menu can be: a menu group, a menu item, or a menu divider. Often a menu will appear in a popover so that it displays as a togglig menu.
*/
export default {
	title: "Menu",
	component: "Menu",
	argTypes: menuArgTypes,
	args: {
		rootClass: "spectrum-Menu",
		selectionMode: "none",
		size: "m",
		shouldTruncate: false,
		maxInlineSize: "150px",
		role: "listbox",
		subrole: "option",
		customStyles: { maxWidth: "400px" },
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
		docs: {
			story: {
				height: "300px"
			}
		},
		componentVersion: version,
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail { display: inline-block; }
				.spectrum-Typography > div {
					border: 1px solid var(--spectrum-gray-200);
					border-radius: 4px;
					padding: 0 1em 1em;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			${Story(context)}
		`,
	],
};

export const Default = MenuWithVariants.bind({});
Default.argTypes = {
	isTraySubmenu: { table: { disable: true } },
};
Default.args = {};

export const Collapsible = Template.bind({});
Collapsible.argTypes = {
	selectionMode: { table: { disable: true } },
	hasDividers: { table: { disable: true } },
	isTraySubmenu: { table: { disable: true } },
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

export const TraySubmenu = Template.bind({});
TraySubmenu.argTypes = {
	selectionMode: { table: { disable: true } },
	hasDividers: { table: { disable: true } },
};
TraySubmenu.args = {
	selectionMode: "multiple",
	customStyles: {
		"--mod-menu-inline-size": "100%",
	},
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

export const MenuItem = MenuItemWithVariants.bind({});
MenuItem.argTypes = {
	isItemActive: { table: { disable: true } },
	isItemFocused: { table: { disable: true } },
	isItemHovered: { table: { disable: true } },
	...menuItemArgTypes,
};
MenuItem.args = {
	items: [
		{
			label: "Start a chat",
			iconName: "Chat"
		},
	],
	hasActions: false,
	hasValue: false,
	hasItemDescription: false,
	isDisabled: false,
	isItemActive: false,
	isItemFocused: false,
	isItemHovered: false,
	isItemSelected: false,
	singleItemDescription: "Menu item description",
	singleItemValue: "Value",
};

// ********* DOCS ONLY ********* //
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
export const WithForcedColors = MenuItemWithVariants.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
