import { BreadcrumbTitleHeadings, Template } from "./template";

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
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["m", "l"],
			control: {
				type: "select",
				labels: {
					m: "Medium",
					l: "Large",
				},
			},
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			defaultValue: "medium",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [undefined, "multiline"],
			control: {
				type: "select",
				labels: {
					undefined: "Default",
					multiline: "Multiline",
				},
			},
		},
		isDragged: {
			name: "Show dragged item",
			description: "Breadcrumbs can have optional behavior to allow for drag and drop functionality. Setting this to true will style the first breadcrumb item as if something is currently being dragged on top of it.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean"
		},
		titleHeadingSize: {
			name: "Breadcrumb title heading size",
			description: "The breadcrumb title can be customized in the multiline variant using an additional element that uses the typography component's heading classes. The preferred heading sizes are small,  medium large, and extra-large. When no heading classes are used, the text will be sized the same as a large heading by default.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: {
				type: "select",
				labels: {
					undefined: "Default",
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				},
			},
			defaultValue: undefined,
			options: [undefined, "s", "m", "l", "xl"],
			if: { arg: "variant", eq: "multiline" },
		}
	},
	args: {
		rootClass: "spectrum-Breadcrumbs",
		isDragged: false,
		variant: undefined,
		size: "m",
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

/**
 * By default, breadcrumbs are displayed inline with the hierarchy shown in reading order.
 * The medium size is used by default, and it should display the medium truncated menu action button.
 * The separator UI icon displayed should be `Chevron100`.
 */
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
 * When using the large size, the truncated menu action button should also use the large size. The separator UI icon displayed should be `Chevron100`.
 */
export const Large = Template.bind({});
Large.args = {
	...Default.args,
	size: "l",
};
Large.tags = ["!dev"];
Large.parameters = {
	chromatic: { disableSnapshot: true },
};

export const LargeNested = Template.bind({});
LargeNested.args = {
	...DefaultNested.args,
	size: "l",
};
LargeNested.tags = ["!dev"];
LargeNested.parameters = {
	chromatic: { disableSnapshot: true },
};
LargeNested.storyName = "Large, nested";

export const LargeNestedRootVisible = Template.bind({});
LargeNestedRootVisible.args = {
	...DefaultNestedRootVisible.args,
	size: "l",
};
LargeNestedRootVisible.tags = ["!dev"];
LargeNestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
LargeNestedRootVisible.storyName = "Large, nested (root visible)";

/**
 * Breadcrumbs can have optional behavior to allow for drag and drop functionality.
 * When a breadcrumb item has something being dragged on top of it, the class `is-dragged` is added to it.
 * This example adds that class to the first breadcrumb item.
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
 * The example below has two disabled breadcrumb items. When disabling the text link, the `is-disabled` class
 * gets added to `.spectrum-Breadcrumbs-itemLink`. When disabling the Action button, the `[disabled]` attribute is applied.
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

/**
 * For the multiline variant, the breadcrumb title can be customized using an additional element that uses the heading classes from
 * the [typography component](?path=/docs/components-typography). The preferred heading sizes are `.spectrum-Heading--sizeS`,
 * `.spectrum-Heading--sizeM`, `.spectrum-Heading--sizeL` (default), and `.spectrum-Heading--sizeXL`. If no heading element or classes are
 * used, the text will be sized the same as a large heading by default.
 */
export const MultilineTitleSizes = BreadcrumbTitleHeadings.bind({});
MultilineTitleSizes.args = {
	...DefaultNested.args,
	variant: "multiline",
};
MultilineTitleSizes.storyName = "Multiline breadcrumb title heading sizes";
MultilineTitleSizes.tags= ["!dev"];
MultilineTitleSizes.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
/*
export const WithForcedColors = BreadcrumbGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
*/
