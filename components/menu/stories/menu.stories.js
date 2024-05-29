import { withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template";

/**
 * A menu is used for creating a menu list. The various elements inside a menu can be: a menu group, a menu item, or a menu divider. Often a menu will appear in a popover so that it displays as a togglig menu.
*/
export default {
	title: "Components/Menu",
	component: "Menu",
	argTypes: {
		selectionMode: {
			name: "Selection Mode",
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
			name: "Max Inline Size",
			type: { name: "text", required: true },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "shouldTruncate", truthy: true },
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
		maxInlineSize: "150px",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Menu-item"],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "300px"
			}
		},
	},
	decorators: [
		withDownStateDimensionCapture(".spectrum-Menu-item:not(:disabled)"),
		(Story, context) => {
			if (!window.isChromatic()) return Story(context);
			return html`
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
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "1rem",
						"--mod-detail-margin-end": ".3rem",
					})}
				>
					${Story(context)}
				</div>
			`;
		},
	],
};

const ChromaticMenuWithVariants = (args) => {
	const menuData = [
		{
			stateTitle: "No selection",
			args: { ...args, selectionMode: "none" },
		},
		{
			stateTitle: "With dividers",
			args: { ...args, selectionMode: "none", hasDividers: true },
		},
		{
			stateTitle: "Single selection",
			args: { ...args, selectionMode: "single" },
		},
		{
			stateTitle: "Multi selection",
			args: { ...args, selectionMode: "multiple" },
		},
	];
	return menuData.map((item) => html`
	<style>
		/* For this testing preview, this is the heading closest to the component and therefore needs a separate color */
		.spectrum-Detail { --mod-detail-font-color: var(--spectrum-seafoam-900); }
	</style>
	<div class="spectrum-Typography">
		${Typography({
			semantics: "detail",
			size: "l",
			content: [ item.stateTitle ],
		})}
		<div>
			${Template({...args, ...item.args})}
		</div>
	</div>

`);
};

export const MenuWithVariants = (args) => window.isChromatic() ?
	ChromaticMenuWithVariants(args) : Template(args);
MenuWithVariants.argTypes = {
	hasDividers: {
		name: "Has dividers",
		description: "Shows dividers between sections",
		table: {
			type: { summary: "boolean" },
			category: "Component",
		},
		control: "boolean",
	},
};
MenuWithVariants.args = {
	role: "listbox",
	subrole: "option",
	customStyles: { maxWidth: "400px" },
	selectionMode: "none",
	hasDividers: false,
	items: [
		{
			idx: 1,
			heading: "Menu header - Menu",
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
					thumbnailUrl: "thumbnail.png",
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
			heading: "Menu header - With descriptions",
			sectionDescription: "This menu header also has a description",
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
					thumbnailUrl: "thumbnail.png",
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
			heading: "Menu header - With actions, icons, thumbnails, short descriptions, and values and longer header text that wraps",
			sectionDescription: "This menu header also has a description that is long enough to hopefully just maybe wrap if it's long enough",
			id: "menu-heading-desc-icon-value",
			hasSwitches: true,
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
					description: "Disabled menu item with description and icon",
					isDisabled: true,
					thumbnailUrl: "thumbnail.png",
				},
				{
					label: "Menu item with external link action",
					description: "Menu item with external link action (does not work in multi-select mode)",
					hasExternalLink: true,
				},
				{
					label: "Disabled menu item with external link action",
					description: "Menu item with external link action (does not work in multi-select mode)",
					hasExternalLink: true,
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

export const Collapsible = Template.bind({});
Collapsible.argTypes = {
	selectionMode: { table: { disable: true } },
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
	isTraySubmenu: {
		name: "Is tray submenu",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Component",
		},
		control: "boolean",
	}
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

const Sizes = (args) => ["s", "m", "l", "xl"].map((size) => html`
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: [
				{
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size]
			]
		})}
		<div>
			${Template({...args, size})}
		</div>
	</div>
`);

const States = (args) => {
	const { titlePrefix, firstAndLast } = args;
	let stateData = [
		{
			stateTitle: "Default",
			args: {},
		},
		{
			stateTitle: "Hover",
			args: { ...args, isItemHovered: true },
		},
		{
			stateTitle: "Active (Down)",
			args: { ...args, isItemActive: true },
		},
		{
			stateTitle: "Focused",
			args: { ...args, isItemFocused: true },
		},
		{
			stateTitle: "Disabled",
			args: { ...args, isDisabled: true },
		}
	];

	// if testing hover/active/focus feels too heavy handed, we can remove those states
	if (firstAndLast) {
		stateData = [stateData[0], stateData[stateData.length - 1]];
	}

	return stateData.map((stateItem) => html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [`${titlePrefix ? titlePrefix + ", ": ""}${stateItem.stateTitle}`],
			})}
			<div>
				${Template({...args, ...stateItem.args})}
			</div>
		</div>
	`);
};

const SingleItemSelectedStates = (args) => {
	return html`
			${States({
				...args,
				items: [{ label: "Not selected", isSelected: false, ...args.items[0] }],
				titlePrefix: "Not selected",
				firstAndLast: true,
			})}
			${States({
				...args,
				items: [{ label: "Selected item", isSelected: true, ...args.items[0] }],
				titlePrefix: "Selected",
				firstAndLast: true,
			})}
	`;
};

const MultiCheckboxSelectedStates = (args) => {
	return html`
		${States({
			...args,
			items: [{ label: "Not selected", isSelected: false, ...args.items[0]}],
			titlePrefix: "Not Selected",
			firstAndLast: true,
		})}
		${States({
			...args,
			items: [{ label: "Selected item", isSelected: true, ...args.items[0]}],
			titlePrefix: "Selected",
			firstAndLast: true,
		})}
	`;
};

const WithValueStates = (args) => {
	const baseValueArgs = {...args, hasValue: true, singleItemValue: "Value"};
	const valueData = [
		{
			stateTitle: "With value",
			args: { ...baseValueArgs },
		},
		{
			stateTitle: "With value, disabled",
			args: { ...baseValueArgs, isDisabled: true },
		},
		{
			stateTitle: "With value and switch",
			args: { ...baseValueArgs, hasSwitches: true },
		},
		{
			stateTitle: "With value, truncated label",
			args: { ...baseValueArgs, shouldTruncate: true, maxInlineSize: "195px", items: [{ label: "Truncated label on menu item" }] },
		},
	];

	return valueData.map((valueItem) => html`
		<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: [ valueItem.stateTitle ],
		})}
			<div>
				${Template({ ...args, ...valueItem.args })}
			</div>
		</div>
	`);
};

const ChromaticMenuItem = (args) => {
	const sectionData = [
		{
			sectionTitle: "No selection",
			sectionMarkup: States(args),
		},
		{
			sectionTitle: "With item description and truncation",
			sectionMarkup: States({...args, shouldTruncate: true, maxInlineSize: "150px", items: [{ label: "This is a longer menu item that will truncate", description: "This is a description of the menu item"}]}),
		},
		{
			sectionTitle: "Single selection",
			sectionMarkup: SingleItemSelectedStates({...args, selectionMode: "single" }),
		},
		{
			sectionTitle: "Single selection with icon",
			sectionMarkup: SingleItemSelectedStates({...args, selectionMode: "single", items: [{ label: "With icon", iconName: "Share" }] }),
		},
		{
			sectionTitle: "Multi-selection with checkboxes",
			sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple"}),
		},
		{
			sectionTitle: "Multi-selection with checkboxes and icon",
			sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple", items: [{ label: "With icon", iconName: "Share" }]}),
		},
		{
			sectionTitle: "Multi-selection with switches",
			sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple", hasSwitches: true}),
		},
		{
			sectionTitle: "Multi-selection with switches and switch label",
			sectionMarkup: MultiCheckboxSelectedStates({...args, selectionMode: "multiple", hasSwitches: true, items: [{ label: "Menu item", value: "switch label"}]}),
		},
		{
			sectionTitle: "With values",
			sectionMarkup: WithValueStates(args),
		},
		{
			sectionTitle: "Sizes",
			sectionMarkup: Sizes({ ...args, selectionMode: "single", items: [{ label: "With sizing", isSelected: true, iconName: "Share" }] }),
		},
	];
	return sectionData.map((sectionItem) => html`
		<div class="spectrum-Typography">
		${Typography({
			semantics: "detail",
			size: "l",
			content: [sectionItem.sectionTitle],
		})}
		<div
			style=${styleMap({
				display: "flex",
				flexWrap: "wrap",
				gap: "1.5rem",
			})}
		>
			${sectionItem.sectionMarkup}
		</div>
	</div>
	`);
};

export const MenuItemOnly = (args) => window.isChromatic() ?
	ChromaticMenuItem(args) : Template(args);
MenuItemOnly.args = {
	items: [
		{
			label: "Hello menu item",
		},
	],
	hasExternalLink: false,
	hasSwitches: false,
	hasValue: false,
	hasItemDescription: false,
	hasIcon: false,
	hasThumbnail: false,
	isDisabled: false,
	isItemActive: false,
	isItemFocused: false,
	isItemHovered: false,
	isItemSelected: false,
	singleItemDescription: "Menu item description",
	singleItemValue: "Value",
};
MenuItemOnly.argTypes = {
	isItemActive: { table: { disable: true } },
	isItemFocused: { table: { disable: true } },
	isItemHovered: { table: { disable: true } },
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
		if: { arg: "hasIcon", truthy: true },
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
	hasExternalLink: {
		name: "Has external link",
		description: "Has external link action",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Content",
		},
		control: "boolean",
	},
	hasSwitches: {
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
	hasIcon: {
		name: "Has icon",
		description: "Displays an icon in the label",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Content",
		},
		control: "boolean",
		if: { arg: "hasThumbnail", truthy: false },
	},
	hasThumbnail: {
		name: "Has thumbnail",
		description: "Displays a thumbnail in the label",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Content",
		},
		control: "boolean",
		if: { arg: "hasIcon", truthy: false },
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

// story used in Picker component
export const Default = Template.bind({});
Default.storyName = "Standard with Dividers";
Default.tags = ["docs-only"];
Default.parameters = {
	chromatic: { disableSnapshot: true },
};
Default.args = {
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
