import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDragged, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { BreadcrumbGroup } from "./breadcrumb.test.js";
import { BreadcrumbTitleHeadings, Template } from "./template.js";

/**
 * Breadcrumbs show hierarchy and navigational context for a user's location within an app.
 */
export default {
	title: "Breadcrumbs",
	component: "Breadcrumbs",
	argTypes: {
		items: {
			name: "Breadcrumb items",
			description: "Additional breadcrumb items after the nav root item, including their label text.<br>Advanced:<ul><li>To show an item as disabled, add a key named `isDisabled` with a value of `true`.</li><li>The \"Show dragged item\" control will affect the item with `isDragged` set to `true`.</li></ul>",
			control: "array",
			table: {
				category: "Content",
			},
		},
		size: {
			...size(["m", "l"]),
			if: { arg: "variant", neq: "multiline" },
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			defaultValue: "Default",
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
			...isDragged,
			name: "Show dragged item",
			description: "Breadcrumbs can have optional behavior to allow for drag and drop functionality. Setting this to true will style a breadcrumb item as if something is currently being dragged on top of it.",
		},
		titleHeadingSize: {
			name: "Breadcrumb title heading size",
			description: "The breadcrumb title can be customized in the multiline variant using an additional element that uses the typography component's heading classes. The preferred heading sizes are small, medium, large, and extra-large. When no heading classes are used, the text will be sized the same as a large heading by default.",
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
		},
		showTruncatedMenu: {
			name: "Show truncated menu",
			description: "Displays a breadcrumb item with a folder icon, that would house truncated breadcrumb items.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		showRootContext: {
			name: "Show with root context",
			description: "Includes a visible breadcrumb item before the truncated menu, for displaying a root directory.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "showTruncatedMenu" },
		},
		truncatedMenuIsDisabled: {
			name: "Show truncated menu as disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "showTruncatedMenu" },
		},
		rootItemText: {
			name: "Root breadcrumb item label",
			type: { name: "string" },
			defaultValue: "Nav root",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-Breadcrumbs",
		isDragged: false,
		variant: undefined,
		size: "m",
		showTruncatedMenu: false,
		showRootContext: false,
		truncatedMenuIsDisabled: false,
		rootItemText: "Nav root",
		items: [
			{
				label: "Sub item",
				isDragged: true,
			},
			{
				label: "Trend",
			},
			{
				label: "January 2019 assets",
			},
		],
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=29434-6624",
		},
		packageJson,
		metadata,
	},
};

/**
 * By default, breadcrumbs are displayed inline with the hierarchy shown in reading order.
 * The medium size is used by default, and it should display the medium truncated menu action button.
 * The separator UI icon displayed should be `Chevron100`.
 */
export const Default = BreadcrumbGroup.bind({});
Default.args = {};

/**
 * Breadcrumbs truncate when there is not enough room to display all levels of the breadcrumb list, or as a way of managing relevance of the visible breadcrumb items in a deeply nested hierarchy. The truncation of breadcrumb items begins when either there is not enough room to display all items, or if there are 5 or more breadcrumbs to display. This truncated menu is an icon only action button that typically displays a folder icon.
 *
 * The nested variants below are non-functional. Implementations should make sure to follow the design guidelines for overflow behavior and displaying all options within the truncated menu.
 */
export const DefaultNested = Template.bind({});
DefaultNested.args = {
	showTruncatedMenu: true,
	items: [
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
DefaultNested.storyName = "Default, nested (truncated menu)";

/**
 * Some applications find that displaying the root directory is useful for user orientation. This variation keeps the root visible when other folders are
 * truncated into a menu. For example, when users can navigate file directories on their device as well as in the cloud, exposing a root directory
 * called “On this device” is very helpful.
 */
export const DefaultNestedRootVisible = Template.bind({});
DefaultNestedRootVisible.args = {
	showTruncatedMenu: true,
	showRootContext: true,
	items: [
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
DefaultNestedRootVisible.storyName = "Default, nested with root context";

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
MultilineNested.storyName = "Multiline, nested (truncated menu)";
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
MultilineNestedRootVisible.storyName = "Multiline, nested with root context";

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
LargeNested.storyName = "Large, nested (truncated menu)";

export const LargeNestedRootVisible = Template.bind({});
LargeNestedRootVisible.args = {
	...DefaultNestedRootVisible.args,
	size: "l",
};
LargeNestedRootVisible.tags = ["!dev"];
LargeNestedRootVisible.parameters = {
	chromatic: { disableSnapshot: true },
};
LargeNestedRootVisible.storyName = "Large, nested with root context";

/**
 * Breadcrumbs can have optional behavior to allow for drag and drop functionality.
 * When a breadcrumb item has something being dragged on top of it, the class `is-dragged` is added to it.
 * This example adds that class to the second breadcrumb item.
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
 * gets added to `.spectrum-Breadcrumbs-itemLink`. When disabling the truncated menu action button, the `[disabled]` attribute is applied.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	showTruncatedMenu: true,
	truncatedMenuIsDisabled: true,
	items: [
		{
			label: "Trend",
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
 * the [typography component](/docs/components-typography--docs). The preferred heading sizes are `.spectrum-Heading--sizeS`,
 * `.spectrum-Heading--sizeM`, `.spectrum-Heading--sizeL` (default), and `.spectrum-Heading--sizeXL`. If no heading element or classes are
 * used, the text will be sized the same as a large heading by default.
 */
export const MultilineTitleSizes = BreadcrumbTitleHeadings.bind({});
MultilineTitleSizes.args = {
	...Multiline.args,
	showTruncatedMenu: true,
};
MultilineTitleSizes.storyName = "Multiline, title heading sizes";
MultilineTitleSizes.tags = ["!dev"];
MultilineTitleSizes.parameters = {
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
