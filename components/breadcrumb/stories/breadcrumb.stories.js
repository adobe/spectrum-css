import { Template } from "./template";

/**
 * Breadcrumbs show hierarchy and navigational context for a user's location within an app.
 */
export default {
	title: "Breadcrumbs",
	component: "Breadcrumbs",
	argTypes: {
		items: { table: { disable: true } },
		variant: {
			name: "Variant",
			description: "Adjusts the overall sizing and density.",
			type: { name: "string" },
			defaultValue: "medium",
			table: {
				type: { summary: "string" },
				category: "Component",
				// defaultValue: { summary: "medium" },
			},
			options: ["medium", "large", "multiline"],
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
		variant: "medium",
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
