import { ArgGrid, Container } from "@spectrum-css/preview/decorators/utilities.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";

import { Template as IconTemplate } from "@spectrum-css/icon/stories/template.js";
import { ActionMenuGroup } from "./actionmenu.test.js";
import { Template } from "./template.js";

import metadata from "../dist/metadata.json";
import packageJson from "../package.json";

/**
 * Action menu allows users to access and execute various commands or tasks related to their current workflow. It's typically triggered from an action button by user interaction.
 *
 * Note that the accessibility roles are different for an action menu compared to a normal menu. The action menu is a combination of a menu, popover, and action button.
 */
export default {
	title: "Action menu",
	component: "ActionMenu",
	argTypes: {
		position: {
			...Popover.argTypes.position,
			options: [
				"bottom-start",
				"bottom-end",
				"start-top",
				"end-top",
			]
		},
		isOpen,
		hasLongPress: {
			name: "Long press",
			description: "If the trigger supports a long-press action which triggers the menu, this should be set to true.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Accessibility",
			},
			control: "boolean",
		},
		menuArgs: { table: { disable: true } },
		triggerArgs: { table: { disable: true } },
	},
	args: {
		isOpen: true,
		position: "bottom-start",
		hasLongPress: false,
		triggerArgs: {
			iconName: "More",
			iconSet: "workflow",
		},
	},
	parameters: {
		actions: {
			handles: [
				...(Popover?.parameters?.actions?.handles ?? []),
				...(ActionButton?.parameters?.actions?.handles ?? []),
				...(Menu.parameters?.actions?.handles ?? []),
			],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-token-specs?node-id=20959-21513&node-type=frame&t=jbePQKK1yLdrHG2M-11",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

/**
 * Action menu allows users to access and execute various commands or tasks related to their current workflow. It's typically triggered from an action button by user interaction.
 *
 * Note that the accessibility roles are different for an action menu compared to a normal menu. The action menu is a combination of a menu, popover, and action button.
 */
export const Default = ActionMenuGroup.bind({});
Default.args = {
	triggerArgs: {
		iconName: "AddCircle",
		label: "Add",
	},
	menuArgs: {
		hasActions: true,
		selectionMode: "multiple",
		items: [{
			heading: "Menu section header",
			description: "Menu section description",
			items: [{
				label: "Menu item",
				iconName: "Circle",
			},
			{
				label: "Menu item",
				iconName: "Circle",
			},
			{
				label: "Menu item",
				iconName: "Circle",
			}],
		}, {
			heading: "Menu section header",
			description: "Menu section description",
			selectionMode: "none",
			hasActions: false,
			items: [{
				label: "Menu item",
				iconName: "Circle",
			},
			{
				label: "Menu item",
				iconName: "Circle",
			},
			{
				label: "Menu item",
				iconName: "Circle",
			},],
		}],
	},
};

// ********* DOCS ONLY ********* //
/**
 * By default, the menu is opened by pressing the trigger element or activating it via the <kbd>Space</kbd> or <kbd>Enter</kbd> keys. However, there may be cases where the trigger should perform a separate action on press such as selection, and should only display the menu when long pressed. For this use-case, the menu will only be opened when pressing and holding the trigger or by using the <kbd>Option</kbd> (Alt on Windows) + <kbd>Down arrow</kbd>/<kbd>Up arrow</kbd> keys while focusing the trigger.
 *
 * This example illustrates the expected visuals and states of the action menu for a trigger with both long press and short press behaviors.
 */
export const LongPress = Template.bind({});
LongPress.args = {
	position: "end-top",
	hasLongPress: true,
	isOpen: true,
	triggerArgs: {
		iconName: "CropRotate",
	},
	menuArgs: {
		customStyles: {
			"--mod-menu-inline-size": "max-content",
		},
		selectionMode: "single",
		items: [{
			label: "Crop rotate",
			iconName: "CropRotate",
			isSelected: true,
		}, {
			label: "Slice",
			iconName: "VectorDraw",
		}, {
			label: "Clone stamp",
			iconName: "StampClone",
		}],
	},
};
LongPress.tags = ["!dev"];
LongPress.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Action menus can be positioned in four locals relative to the trigger but <u>only one menu can be triggered at a single time</u>.
 */
export const PlacementOptions = (args, context) => ArgGrid({
	Template,
	argKey: "position",
	withBorder: false,
	...args,
}, context);
PlacementOptions.args = {
	triggerArgs: {
		iconName: "More",
	},
	menuArgs: {
		customStyles: {
			"--mod-menu-inline-size": "max-content",
		},
		items: [{
			label: "Details",
			iconName: "FileText"
		}, {
			label: "Share",
			iconName: "Share"
		}, {
			label: "Remove",
			iconName: "Delete"
		}],
	},
};
PlacementOptions.tags = ["!dev"];
PlacementOptions.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Icon used is a placeholder and can be swapped with any other from icon set along with corresponding label.
 */
export const PlaceholderIcon = (args, context) => Container({
	withBorder: false,
	content: [
		Template(args, context),
		IconTemplate({
			iconName: "ArrowRight400",
			setName: "ui",
			fill: "var(--spectrum-gray-400)",
			customStyles: {
				"margin-block-start": "var(--spectrum-spacing-200)",
			},
		}, context),
		Template({
			...args,
			isOpen: true,
			triggerArgs: {
				iconName: "AddCircle",
				label: "Add",
			},
			menuArgs: {
				items: [{
					heading: "Add new page",
					items: [
						{
							label: "Same size",
							iconName: "Copy"
						},
						{
							label: "Custom size",
							iconName: "Properties"
						},
						{
							label: "Duplicate",
							iconName: "Duplicate"
						}
					]
				}, {
					heading: "Edit page",
					items: [{
						label: "Edit timeline",
						iconName: "Clock",
						description: "Add time to this page"
					}],
				}]
			},
		}, context),
	],
});
PlaceholderIcon.args = {
	triggerArgs: {
		iconName: "More",
		label: "",
	},
	isOpen: true,
	menuArgs: {
		customStyles: {
			"--mod-menu-inline-size": "max-content",
		},
		items: [{
			heading: "Menu section header",
			customStyles: {
				"--mod-menu-inline-size": "100%",
			},
			items: [
				{
					label: "Menu item",
					iconName: "Circle"
				},
				{
					label: "Menu item",
					iconName: "Circle"
				},
				{
					label: "Menu item",
					iconName: "Circle"
				}
			]
		}],
	},
};
PlaceholderIcon.tags = ["!dev"];
PlaceholderIcon.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};


// ********* VRT ONLY ********* //
export const WithForcedColors = ActionMenuGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
