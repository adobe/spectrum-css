import { ArgGrid, Container } from "@spectrum-css/preview/decorators/utilities.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
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
		withTip: Popover.argTypes.withTip,
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
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		items: { table: { disable: true } },
	},
	args: {
		isOpen: false,
		withTip: Popover.args.withTip,
		position: "bottom-start",
		iconName: "AddCircle",
		label: "Add",
	},
	parameters: {
		actions: {
			handles: [
				...(Popover?.parameters?.actions?.handles ?? []),
				...(ActionButton?.parameters?.actions?.handles ?? []),
				...(Menu.parameters?.actions?.handles ?? []),
			],
		},
		docs: {
			story: {
				height: "200px",
			}
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-token-specs?node-id=19758-3424",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

export const Default = ActionMenuGroup.bind({});
Default.args = {
	isOpen: true,
	iconName: "AddCircle",
	label: "Add",
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
		type: "divider"
	}, {
		heading: "Edit page",
		items: [{
			label: "Edit timeline",
			iconName: "Clock",
			description: "Add time to this page"
		}],
	}],
};

// ********* DOCS ONLY ********* //

/**
 * Action menus can be positioned in four locals relative to the trigger but <u>only one menu can be triggered at a single time</u>.
 */
export const PlacementOptions = (args, context) => ArgGrid({
	Template,
	argKey: "position",
	widthBorder: false,
	...args,
}, context);
PlacementOptions.args = Default.args;
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
		Template(Default.args, context),
	],
});
PlaceholderIcon.args = {
	iconName: "More",
	label: "",
	isOpen: true,
	items: [{
		heading: "Menu section header",
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
