import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { BreadcrumbGroup } from "./breadcrumb.test.js";
import { Template } from "./template";

/**
 * Breadcrumbs show hierarchy and navigational context for a user's location within an app.
 * 
 * ## Nesting
 * Breadcrumbs truncate when there is not enough room to display all levels of the breadcrumb list, or as a way of managing relevance of the visible breadcrumb items in a deeply nested hierarchy. The truncation of breadcrumb items begins when either there is not enough room to display all items, or if there are 5 or more breadcrumbs to display.
 * 
 * The nested variants below are non-functional. Implementations can add their own overflow menus to display all options within a breadcrumb.
 * 
 * ## Root Context
 * Some applications find that displaying the root directory is useful for user orientation. This variation keeps the root visible when other folders are truncated into a menu. For example, when users can navigate file directories on their device as well as in the cloud, exposing a root directory called “On this device” is very helpful.
 */
export default {
	title: "Breadcrumbs",
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
			options: ["default", "compact", "multiline"],
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
		variant: "default",
	},
	parameters: {
		componentVersion: version,
	},
};

/**
 * By default, breadcrumbs are displayed inline with the hierarchy shown in reading order.
 */
export const Default = BreadcrumbGroup.bind({});
Default.args = {
	items: [
		{
			label: "Nav root",
			isDragged: true,
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 Assets",
		},
	],
};

export const MultilineNested = Template.bind({});
MultilineNested.args = {
	items: [
		{
			iconName: "FolderOpen",
		},
		{
			label: "Sub Item",
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
MultilineNested.storyName = "Multiline, nested";
MultilineNested.tags= ["!dev"];
MultilineNested.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Breadcrumbs can have optional behavior to allow for drag and drop functionality.
 */
export const Dragged = Template.bind({});
Dragged.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			label: "Trend",
			isDragged: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
	isDragged: true,
};
Dragged.tags = ["!dev"];
Dragged.parameters = {
	chromatic: { disableSnapshot: true },
};

export const DefaultNested = Template.bind({});
DefaultNested.args = {
	items: [
		{
			iconName: "FolderOpen",
		},
		{
			label: "Sub Item",
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 Assets",
		},
	],
};
DefaultNested.tags = ["!dev"];
DefaultNested.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultNested.storyName = "Default, nested";

export const DefaultNestedRootVisible = Template.bind({});
DefaultNestedRootVisible.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			iconName: "FolderOpen",
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 Assets",
		},
	],
};
DefaultNestedRootVisible.tags = ["!dev"];
DefaultNestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultNestedRootVisible.storyName = "Default, nested (root visible)";

/**
 * The multiline variation places emphasis on the selected breadcrumb item as a page title, helping a user to more clearly identify their current location.
 */
export const Multiline = Template.bind({});
Multiline.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "multiline",
};
Multiline.tags = ["!dev"];
Multiline.parameters = {
	chromatic: { disableSnapshot: true },
};

export const MultilineNestedRootVisible = Template.bind({});
MultilineNestedRootVisible.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			iconName: "FolderOpen",
		},
		{
			label: "Trendy",
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "multiline",
};
MultilineNestedRootVisible.tags = ["!dev"];
MultilineNestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
MultilineNestedRootVisible.storyName = "Multiline, nested (root visible)";

/**
 * When needing to optimize for functional space, the compact option is useful for reducing the height of the breadcrumbs while still maintaining the proper user context.
 */
export const Compact = Template.bind({});
Compact.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			label: "Trendy",
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "compact",
};
Compact.tags = ["!dev"];
Compact.parameters = {
	chromatic: { disableSnapshot: true },
};

export const CompactNested = Template.bind({});
CompactNested.args = {
	items: [
		{
			iconName: "FolderOpen",
		},
		{
			label: "Sub Item",
		},
		{
			label: "Trendy",
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "compact",
};
CompactNested.tags = ["!dev"];
CompactNested.parameters = {
	chromatic: { disableSnapshot: true },
};
CompactNested.storyName = "Compact, nested";

export const CompactNestedRootVisible = Template.bind({});
CompactNestedRootVisible.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			iconName: "FolderOpen",
		},
		{
			label: "Trendy",
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "compact",
};
CompactNestedRootVisible.tags = ["!dev"];
CompactNestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
CompactNestedRootVisible.storyName = "Compact, nested (root visible)";

/**
 * The example below has two disabled breadcrumb items. When disabling the text link, the `is-disabled` class gets added to `.spectrum-Breadcrumbs-itemLink`. When disabling the Action button, the `[disabled]` attribute is applied.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			iconName: "FolderOpen",
			isDisabled: true,
		},
		{
			label: "Trendy",
			isDisabled: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = BreadcrumbGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
