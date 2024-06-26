import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ActionMenuGroup } from "./template";

/**
 * The action menu component is an action button with a popover. The `is-selected` class should be applied to the button when the menu is open. Note that the accessibility roles are different for an action menu compared to a normal menu.
 */
export default {
	title: "Action menu",
	component: "ActionMenu",
	argTypes: {
		withTip: Popover.argTypes.withTip,
		position: Popover.argTypes.position,
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
		id: { table: { disable: true } },
		testId: { table: { disable: true } },
		triggerId: { table: { disable: true } },
	},
	args: {
		isOpen: false,
		withTip: Popover.args.withTip,
		position: Popover.args.position,
	},
	parameters: {
		docs: {
			story: {
				height: "250px",
			},
		},
		actions: {
			handles: [
				...(Popover?.parameters?.actions?.handles ?? []),
				...(ActionButton?.parameters?.actions?.handles ?? []),
				...(Menu.parameters?.actions?.handles ?? []),
			],
		},
		componentVersion: version,
	},
};

export const Default = ActionMenuGroup.bind({});
Default.args = {
	isOpen: true,
	id: "popover-0",
	triggerId: "trigger-0",
	position: "bottom",
	label: "More actions",
	iconName: "More",
	items: [
		{
			label: "Action 1",
		},
		{
			label: "Action 2",
		},
		{
			label: "Action 3",
		},
		{
			label: "Action 4",
		},
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
