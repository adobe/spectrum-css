// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Breadcrumbs",
	description:
		"Breadcrumbs show hierarchy and navigational context for a user’s location within an app.",
	component: "Breadcrumbs",
	argTypes: {
		items: { table: { disable: true } },
		variant: {
			name: "Variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "multiline"],
			control: "inline-radio",
		},
		isDragged: {
			name: "Dragged",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean"
		},
	},
	args: {
		rootClass: "spectrum-Breadcrumbs",
		isDragged: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			label: "Nav root",
			isDragged: true,
		},
		{
			label: "Trend",
			isDisabled: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
};

export const NestedMultiline = Template.bind({});
NestedMultiline.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			iconName: "FolderOpen",
			isDisabled: true,
		},
		{
			label: "Trend",
			isDragged: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "multiline",
};
