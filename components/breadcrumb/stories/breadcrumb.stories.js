import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { BreadcrumbGroup } from "./breadcrumb.test.js";
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
MultilineNested.storyName = "Multiline nested";
MultilineNested.tags= ["!dev"];
MultilineNested.parameters = {
	chromatic: { disableSnapshot: true },
};

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

export const Nested = Template.bind({});
Nested.args = {
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
Nested.tags = ["!dev"];
Nested.parameters = {
	chromatic: { disableSnapshot: true },
};

export const NestedRootVisible = Template.bind({});
NestedRootVisible.args = {
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
NestedRootVisible.tags = ["!dev"];
NestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
NestedRootVisible.storyName = "Nested (root visible)";

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

export const MultilineDragged = Template.bind({});
MultilineDragged.args = {
	items: [
		{
			label: "Nav root",
		},
		{
			label: "Trendy",
			isDragged: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
	variant: "multiline",
	isDragged: true,
};
MultilineDragged.tags = ["!dev"];
MultilineDragged.parameters = {
	chromatic: { disableSnapshot: true },
};
MultilineDragged.storyName = "Multiline (dragged)";

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
MultilineNestedRootVisible.storyName = "Multiline nested (root visible)";

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
CompactNested.storyName = "Compact nested";

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
CompactNestedRootVisible.storyName = "Compact nested (root visible)";

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
