import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

export default {
	title: "Components/Action group",
	description: "The Action group component is a collection of action buttons.",
	component: "ActionGroup",
	argTypes: {
		areQuiet: ActionButton.argTypes.isQuiet,
		areEmphasized: ActionButton.argTypes.isEmphasized,
		staticColors: ActionButton.argTypes.staticColor,
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
		staticColors: ActionButton.args.staticColor,
		vertical: false,
		compact: false,
		justified: false,
		content: [
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
		],
	},
	parameters: {
		actions: {
			handles: [...ActionButton.parameters.actions.handles],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("actiongroup")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Compact = Template.bind({});
Compact.args = {
	compact: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
	vertical: true,
};

export const VerticalCompact = Template.bind({});
VerticalCompact.args = {
	vertical: true,
	compact: true,
};

export const Justified = Template.bind({});
Justified.args = {
	justified: true,
	customStorybookStyles: {
		display: "block"
	}
};

export const Quiet = Template.bind({});
Quiet.args = {
	areQuiet: true,
};

export const Express = Template.bind({});
Express.args = {
	express: true
};
