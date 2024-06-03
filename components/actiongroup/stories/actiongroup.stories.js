import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

/**
 * The action group component is a collection of action buttons.
 */
export default {
	title: "Action group",
	component: "ActionGroup",
	argTypes: {
		areQuiet: ActionButton.argTypes.isQuiet,
		areEmphasized: ActionButton.argTypes.isEmphasized,
		staticColor: ActionButton.argTypes.staticColor,
		content: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl"],
			control: "select",
		},
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		compact: {
			name: "Compact layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		justified: {
			name: "Justified",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ActionGroup",
		size: "m",
		areQuiet: ActionButton.args.isQuiet,
		areEmphasized: ActionButton.args.isEmphasized,
		staticColor: ActionButton.args.staticColor,
		vertical: false,
		compact: false,
		justified: false,
	},
	parameters: {
		actions: {
			handles: [...ActionButton.parameters.actions.handles],
		},
		status: {
			type: "migrated",
		},
	},
};

const items = [
	{
		iconName: "Edit",
		label: "Edit",
	},
	{
		iconName: "Copy",
		label: "Copy",
	},
	{
		iconName: "Delete",
		label: "Delete",
		isSelected: true,
	},
];

export const Default = Template.bind({});
Default.args = {
	content: items
};


export const Compact = Template.bind({});
Compact.args = {
	compact: true,
	content: items
};

export const Vertical = Template.bind({});
Vertical.args = {
	vertical: true,
	content: items
};

export const VerticalCompact = Template.bind({});
VerticalCompact.args = {
	vertical: true,
	compact: true,
	content: items
};

export const Justified = Template.bind({});
Justified.args = {
	justified: true,
	content: items
};

export const Quiet = Template.bind({});
Quiet.args = {
	areQuiet: true,
	content: items
};
