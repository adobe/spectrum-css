import { Template } from "./template";

export default {
	title: "Components/Breadcrumbs",
	description:
		"Breadcrumbs show hierarchy and navigational context for a user’s location within an app.",
	component: "Breadcrumbs",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
		items: [
			{
				label: "Nav root",
				isDragged: true,
			},
			{
				iconName: "FolderOpen",
				isDisabled: true,
			},
			{
				label: "Trend",
				isDisabled: true,
			},
			{
				label: "January 2019 assets",
			},
		],
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("breadcrumb")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const NestedMultiline = Template.bind({});
NestedMultiline.args = {
	variant: "multiline",
};
