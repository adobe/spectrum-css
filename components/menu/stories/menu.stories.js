import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isFocused, isHovered, isSelected, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { MenuItemGroup, MenuTraySubmenu, MenuWithVariants } from "./menu.test.js";
import { DisabledItemGroup, OverflowGroup, SelectionGroup, SubmenuInPopover, Template } from "./template.js";

/**
 * A menu is used for creating a menu list. The various elements inside a menu can be: a menu group, a menu item, or a
 * menu divider. Often a menu will appear in a popover so that it displays as a toggling menu.
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
		size: size(["s", "m", "l", "xl"]),
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
			{ label: "Edit" },
			{ label: "Select Inverse" },
			{ label: "Save Selection" },
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=37252-553",
		},
		packageJson: pkgJson,
	},
};

export const Default = MenuWithVariants.bind({});
Default.tags = ["!autodocs"];
Default.argTypes = {
	isTraySubmenu: { table: { disable: true } },
};
Default.args = {
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
};

/**
 * When a menu is displayed within a tray, a submenu will replace the tray content when the parent menu item is
 * selected. A submenu displays a back button (labeled by the title of the parent item) at the top of the tray to
 * return the user to the previous level of the menu. The back arrow size scale used with the various menu sizes are
 * small: 200, medium: 300, large: 400, and extra large: 500.
 */
export const TraySubmenu = MenuTraySubmenu.bind({});
TraySubmenu.storyName = "Submenu in tray";
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
	viewport: {
		defaultViewport: "mobile2"
	},
};

export const MenuItem = MenuItemGroup.bind({});
MenuItem.tags = ["!autodocs"];
MenuItem.argTypes = {
	isDisabled,
	isActive,
	isFocused,
	isHovered,
	isSelected: {
		...isSelected,
		description: "Used with single or multi-select mode turned on",
	},
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
	isDisabled: false,
	isActive: false,
	isFocused: false,
	isHovered: false,
	isSelected: false,
	hasActions: false,
};
MenuItem.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=37252-2242&node-type=frame&t=Kcz7zeePp3PeRusJ-11",
	},
};

/**
 * This option will display submenus in a collapsed, nested format within the parent menu’s container. It can be used
 * for both popover and tray container styles.
 *
 * When displaying collapsible menu items in a tray, the tray should have a fixed height in order to prevent
 * disorienting behavior when the items are collapsed or expanded.
 */
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

// ********* DOCS ONLY ********* //
/**
 * A menu item should always have a label that clearly describes the action or option that it represents. A menu item
 * can also display a related value in the value area. Examples of values include the selected option from a submenu, a
 * keyboard shortcut for the action, or other content that clarifies the menu item. When necessary, menu items may also
 * display an icon and additional description text.
 *
 * Menu sizes should correspond to the size of the menu trigger component (such as an
 * [action button](?path=/docs/components-action-button--docs)). Similarly, any components displayed inside a menu item
 * (such as a [switch](?path=/docs/components-switch--docs)) must also be of the same size.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.storyName = "Default";
Sizing.tags = ["!dev"];
Sizing.args = {
	items: [
		{
			idx: 1,
			label: "Menu item",
		},
		{
			idx: 2,
			label: "Menu item with icon",
			iconName: "Cloud",
		},
		{
			idx: 3,
			label: "Menu item with optional description",
			description: "Short description of menu item",
		},
		{
			idx: 4,
			label: "Menu item with value",
			value: "Value",
		},
		{
			idx: 5,
			label: "Menu item with icon and description",
			description: "Short description of menu item",
			iconName: "Cloud",
		},
	]
};
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a menu item contains a submenu, a drill-in chevron will appear at the end of the menu item to show that a
 * submenu is available.
 */
export const DrillInChevron = Template.bind({});
DrillInChevron.storyName = "Submenu drill-in chevron";
DrillInChevron.tags = ["!dev"];
DrillInChevron.parameters = {
	chromatic: { disableSnapshot: true },
};
DrillInChevron.args = {
	items: [
		{
			label: "Menu item (with submenu)",
			isDrillIn: true,
		},
		{
			label: "Menu item",
		},
		{
			label: "Menu item",
		}
	],
};

export const PopoverSubmenu = SubmenuInPopover.bind({});
PopoverSubmenu.storyName = "Submenu in popover";
PopoverSubmenu.tags = ["!dev"];
PopoverSubmenu.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A menu section has the options of single selection, multiple selection, or having no selection. By default, menu
 * items have no selection, and perform an action on press.
 *
 * For single selection menu sections, menu items show a single checkmark to indicate the selected item. Multiple
 * selection menu sections display checkboxes or switches beside each menu item.
 */
export const MenuItemSelection = SelectionGroup.bind({});
MenuItemSelection.storyName = "Selection of menu items";
MenuItemSelection.tags = ["!dev"];
MenuItemSelection.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The last item in each of these menus is disabled. A menu item in a disabled state shows that an option exists, but
 * is not available in that circumstance. This state can be used to maintain layout continuity and to communicate that
 * an action may become available later.
 */
export const DisabledItems = DisabledItemGroup.bind({});
DisabledItems.storyName = "Disabled items";
DisabledItems.tags = ["!dev"];
DisabledItems.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a menu item’s label or description exceed the available horizontal space, the default behavior is to wrap the
 * text to a new line.
 *
 * Menu item labels and headings can be truncated with an ellipsis by using the `spectrum-Menu-itemLabel--truncate`
 * class. Truncation can only occur if the menu has a set `inline-size` or `max-inline-size`, or it is constrained by
 * the width of its parent element(s). For demonstration purposes, a `max-inline-size` is set on the following menu
 * examples. When text is truncated, it should be revealed with a tooltip on hover (not displayed here).
 *
 * Truncation can be used in conjunction with icons, values, and drill-ins in a menu item. Note that descriptions
 * within a menu item always wrap by default and do not have a truncation option.
 */
export const TextOverflow = OverflowGroup.bind({});
TextOverflow.storyName = "Text overflow";
TextOverflow.tags = ["!dev"];
TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};
TextOverflow.args = {
	customStyles: {
		"max-inline-size": "150px",
	}
};

// story used in Picker component as well as docs page
/**
 * Menu sections contain groupings of related menu items. Dividers appear between sections when two or more sections
 * are used within the same menu.
 */
export const WithDividers = Template.bind({});
WithDividers.storyName = "Sections with dividers";
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

/**
 * Use a section header when a menu section requires a descriptor. Section headers are helpful when two or more
 * sections differ in their functionality or relationships.
 */
export const WithDividersAndHeaders = Template.bind({});
WithDividersAndHeaders.storyName = "Sections with dividers and headers";
WithDividersAndHeaders.tags = ["!dev"];
WithDividersAndHeaders.parameters = {
	chromatic: { disableSnapshot: true },
};
WithDividersAndHeaders.args = {
	hasDividers: true,
	selectionMode: "single",
	items: [
		{
			idx: 1,
			heading: "Tools",
			id: "menu-tools",
			selectionMode: "single",
			items: [
				{
					label: "Marquee",
					isSelected: true,
					iconName: "Selection",
				},
				{
					label: "Add",
					iconName: "SelectAdd",
				},
				{
					label: "Subtract",
					iconName: "SelectSubtract",
				},
			]
		},
		{ type: "divider" },
		{
			idx: 2,
			heading: "Actions",
			id: "menu-actions",
			selectionMode: "single",
			items: [
				{
					label: "Deselect",
					iconName: "Deselect",
					isDisabled: true,
				}
			]
		}
	],
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
