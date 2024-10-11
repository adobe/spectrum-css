import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDragged } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { BreadcrumbGroup } from "./breadcrumb.test.js";
import { Template } from "./template.js";

/**
 * Breadcrumbs show hierarchy and navigational context for a user's location within an app.
 *
 * ## Nesting
 * Breadcrumbs truncate when there is not enough room to display all levels of the breadcrumb list, or as a way of managing relevance of the visible breadcrumb items in a deeply nested hierarchy. The truncation of breadcrumb items begins when either there is not enough room to display all items, or if there are 5 or more breadcrumbs to display. They are typically indicated by the truncated menu folder icon.
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
			defaultValue: "Default",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "Default" },
			},
			options: ["default", "compact", "multiline"],
			control: "select",
		},
		isDragged,
	},
	args: {
		rootClass: "spectrum-Breadcrumbs",
		isDragged: false,
		variant: "default",
	},
	parameters: {
		packageJson,
		metadata,
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
		},
		{
			label: "Trend",
			isDragged: true,
		},
		{
			label: "January 2019 assets",
		},
	],
};

export const DefaultNested = Template.bind({});
DefaultNested.args = {
	items: [
		{
			iconName: "FolderOpen",
			iconSet: "workflow",
		},
		{
			label: "Sub item",
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 assets",
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
			iconSet: "workflow",
		},
		{
			label: "Trend",
		},
		{
			label: "January 2019 assets",
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
	...Default.args,
	variant: "multiline",
};
Multiline.tags = ["!dev"];
Multiline.parameters = {
	chromatic: { disableSnapshot: true },
};

export const MultilineNested = Template.bind({});
MultilineNested.args = {
	...DefaultNested.args,
	variant: "multiline",
};
MultilineNested.storyName = "Multiline, nested";
MultilineNested.tags= ["!dev"];
MultilineNested.parameters = {
	chromatic: { disableSnapshot: true },
};

export const MultilineNestedRootVisible = Template.bind({});
MultilineNestedRootVisible.args = {
	...DefaultNestedRootVisible.args,
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
	...Default.args,
	variant: "compact",
};
Compact.tags = ["!dev"];
Compact.parameters = {
	chromatic: { disableSnapshot: true },
};

export const CompactNested = Template.bind({});
CompactNested.args = {
	...DefaultNested.args,
	variant: "compact",
};
CompactNested.tags = ["!dev"];
CompactNested.parameters = {
	chromatic: { disableSnapshot: true },
};
CompactNested.storyName = "Compact, nested";

export const CompactNestedRootVisible = Template.bind({});
CompactNestedRootVisible.args = {
	...DefaultNestedRootVisible.args,
	variant: "compact",
};
CompactNestedRootVisible.tags = ["!dev"];
CompactNestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
CompactNestedRootVisible.storyName = "Compact, nested (root visible)";

/**
 * Breadcrumbs can have optional behavior to allow for drag and drop functionality.
 */
export const Dragged = Template.bind({});
Dragged.args = {
	...Default.args,
	isDragged: true,
};
Dragged.tags = ["!dev"];
Dragged.parameters = {
	chromatic: { disableSnapshot: true },
};

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
			iconSet: "workflow",
			isDisabled: true,
		},
		{
			label: "Trendy",
			isDisabled: true,
		},
		{
			label: "January 2019 assets",
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
