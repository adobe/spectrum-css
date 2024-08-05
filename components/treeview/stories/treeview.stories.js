import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template.js";
import { TreeViewGroup } from "./treeview.test.js";

/**
 * The typical usage of a treeview involves nesting a `.spectrum-Treeview element` within the `.spectrum-TreeView-item` parent element.
 *
 * The visibility of child treeviews is controlled by adding `.is-open` to the `.spectrum-TreeView-item` of the parent element.
 */
export default {
	title: "Tree view",
	component: "TreeView",
	argTypes: {
		items: { table: { disable: true } },
		variant: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		isQuiet: {
			name: "Quiet",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-TreeView",
		size: "m",
		isQuiet: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-TreeView-itemLink"],
		},
		componentVersion: version,
	},
};

/**
 * By default, treeviews span the entire width of their parent container and are used within panels.
 */
export const Default = TreeViewGroup.bind({});
Default.args = {
	items: [
		{
			id: "label1",
			label: "Label 1",
			link: "#",
		},
		{
			id: "group1",
			label: "Group 1",
			link: "#",
			isOpen: true,
			items: [
				{
					id: "label2",
					label: "Label 2",
					link: "#",
				},
				{
					id: "label3",
					label: "Label 3",
					link: "#",
				},
			],
		},
		{
			id: "group2",
			label: "Group 2",
			link: "#",
			items: [
				{
					id: "label3",
					label: "Label 3",
					link: "#",
				},
				{
					id: "group3",
					label: "Group 3",
					link: "#",
					items: [
						{
							id: "label4",
							label: "Label 4",
							link: "#",
						},
						{
							id: "group4",
							label: "Group 4 (Empty)",
							link: "#",
							items: [],
						},
					],
				},
			],
		},
	],
};

// ********* DOCS ONLY ********* //
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args
}, context);
Sizing.args = Default.args;
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};


/**
 * A tree view with a selected item.
 */
export const Selected = Default.bind({});
Selected.tags = ["!dev"];
Selected.args = {
	items: [
		{
			id: "layer1",
			label: "Layer 1",
			link: "#",
		},
		{
			id: "layer2",
			label: "Layer 2",
			link: "#",
			isSelected: true,
		},
	]
};
Selected.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A tree view with quiet selection.
 */
export const Quiet = Default.bind({});
Quiet.storyName = "Selected (Quiet)";
Quiet.tags = ["!dev"];
Quiet.args = {
	...Selected.args,
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Detached tree views are meant to be used outside of a panel. Items in detached tree views have rounded corners.
 */
export const Detached = Default.bind({});
Detached.tags = ["!dev"];
Detached.args = {
	...Selected.args,
	variant: "detached",
};
Detached.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A detached, quiet tree view.
 */
export const DetachedQuiet = Default.bind({});
DetachedQuiet.storyName = "Detached (Quiet)";
DetachedQuiet.tags = ["!dev"];
DetachedQuiet.args = {
	...Selected.args,
	variant: "detached",
	isQuiet: true,
};
DetachedQuiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * In this example, the Label 2 and Group 2 are disabled.
 */
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	items: [
		{
			id: "label1",
			label: "Label 1",
			link: "#",
			isSelected: true,
		},
		{
			id: "group1",
			label: "Group 1",
			link: "#",
			isOpen: true,
			items: [
				{
					id: "label2",
					label: "Label 2",
					link: "#",
					isDisabled: true,
				},
				{
					id: "label3",
					label: "Label 3",
					link: "#",
				},
			],
		},
		{
			id: "group2",
			label: "Group 2",
			isDisabled: true,
			link: "#",
			items: [
				{
					id: "label3",
					label: "Label 3",
					link: "#",
				},
				{
					id: "group3",
					label: "Group 3",
					link: "#",
					items: [
						{
							id: "label4",
							label: "Label 4",
							link: "#",
						},
						{
							id: "group4",
							label: "Group 4 (Empty)",
							link: "#",
							items: [],
						},
					],
				},
			],
		},
	],
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A tree view drawn without nesting, suitable for infinite scrolling. With this version of the treeview, you must manage the visibility of "child items" manually based on the open state of the "parent item." The level of visual indentation is handled by a numbered `indent` variant class.
 *
 * This example sets a maximum width of 500px (`max-inline-size`) in order to demonstrate how longer text truncates.
 */
export const Flat = Template.bind({});
Flat.storyName = "Flat Markup";
Flat.args = {
	customStyles: {
		"max-inline-size": "500px",
	},
	items: [
		{
			id: "label1",
			label: "Label 1. This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
			link: "#",
		},
		{
			id: "group1",
			label: "Group 1",
			link: "#",
			isOpen: true,
			items: [],
		},
		{
			id: "label2",
			label: "Label 2",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "label3",
			label: "Label 3",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "label4",
			label: "Label 4",
			link: "#",
		},
		{
			id: "group2",
			label: "Group 2",
			link: "#",
			isOpen: true,
			items: [],
		},
		{
			id: "label5",
			label: "Label 5",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "group3",
			label: "Group 3",
			link: "#",
			isOpen: true,
			items: [],
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "label6",
			label: "Label 6",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent2"],
		},
	],
};
Flat.tags = ["!dev"];
Flat.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Icons can be used to add clarification about tree view items. These help to signify content types, which creates easier reference and context within the hierarchy.
 *
 * In this example, a nested tree view with folder and file icons is shown. This example also sets a maximum width of 500px (`max-inline-size`) in order to demonstrate how longer text truncates.
 */
export const FoldersAndFiles = Template.bind({});
FoldersAndFiles.args = {
	customStyles: {
		"max-inline-size": "500px",
	},
	items: [
		{
			id: "label1",
			label: "Label 1",
			link: "#",
			icon: "Document",
		},
		{
			id: "group1",
			label: "Group 1",
			link: "#",
			isOpen: true,
			icon: "Folder",
			items: [
				{
					id: "label2",
					label: "Label 2",
					link: "#",
					icon: "Document",
				},
				{
					id: "label3",
					label: "Label 3",
					link: "#",
					icon: "Document",
				},
				{
					id: "label4",
					label: "This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
					link: "#",
					icon: "Document",
				},
			],
		},
		{
			id: "group2",
			label: "Group 2",
			link: "#",
			icon: "Folder",
			items: [
				{
					id: "label3",
					label: "Label 3",
					link: "#",
					icon: "Document",
				},
				{
					id: "group3",
					label: "Group 3",
					link: "#",
					icon: "Folder",
					items: [
						{
							id: "label4",
							label: "Label 4",
							link: "#",
							icon: "Document",
						},
					],
				},
			],
		},
	],
};
FoldersAndFiles.tags = ["!dev"];
FoldersAndFiles.parameters = {
	chromatic: { disableSnapshot: true },
};


/**
 * Use thumbnails when a user needs to have a preview of the content contained in a tree view item. For its primary use within layer panels, the first example uses the layer variant of thumbnail. The second example uses the default thumbnail.
 */
export const Thumbnails = Template.bind({});
Thumbnails.args = {
	variant: "thumbnail",
	items: [
		{
			id: "group1",
			label: "Group 1",
			link: "#",
			isOpen: true,
			thumbnail: {
				imageURL: "thumbnail.png",
				altText: "Woman crouching",
			},
			items: [
				{
					id: "label2",
					label: "Label 2",
					link: "#",
					isSelected: true,
					thumbnail: {
						imageURL: "thumbnail.png",
						altText: "Woman crouching",
					},
				},
				{
					id: "label3",
					label: "Label 3",
					link: "#",
					thumbnail: {
						imageURL: "flowers.png",
						altText: "Flowers",
					},
				},
			],
		},
	],
};
Thumbnails.tags = ["!dev"];
Thumbnails.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A quiet tree view with thumbnails using the layer variant. When using the quiet variant, less visual emphasis is given to the selected tree view item.
 */
export const ThumbnailsQuiet = Template.bind({});
ThumbnailsQuiet.storyName = "Thumbnails (Quiet)";
ThumbnailsQuiet.tags = ["!dev"];
ThumbnailsQuiet.args = {
	...Thumbnails.args,
	isQuiet: true,
};
ThumbnailsQuiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithSections = Template.bind({});
WithSections.args = {
	items: [
		{
			type: "heading",
			label: "Section 1",
			items: [
				{
					id: "group1",
					label: "Group 1",
					link: "#",
					isOpen: true,
					items: [
						{
							id: "label2",
							label: "Label 2",
							link: "#",
						},
						{
							id: "label3",
							label: "Label 3",
							link: "#",
						},
					],
				},
			],
		},
		{
			type: "heading",
			label: "Section 2",
			items: [
				{
					id: "label4",
					label: "Label 4",
					link: "#",
				},
			]
		},
	],
};
WithSections.tags = ["!dev"];
WithSections.parameters = {
	chromatic: { disableSnapshot: true },
};


/**
 * A tree view with an item consisting of a drop target. The `.is-drop-target` class is added to the drop target item.
 */
export const WithDropTarget = Template.bind({});
WithDropTarget.args = {
	items: [
		{
			id: "label2",
			label: "Label 2",
			link: "#",
			isDropTarget: true,
		},
		{
			id: "label3",
			label: "Label 3",
			link: "#",
		},
	],
};
WithDropTarget.tags = ["!dev"];
WithDropTarget.parameters = {
	chromatic: { disableSnapshot: true },
};

export const FlatMarkup = Template.bind({});
FlatMarkup.args = {
	items: [
		{
			id: "label1",
			label: "Label 1. This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
			link: "#",
			isSelected: true,
		},
		{
			id: "group1",
			label: "Group 1",
			link: "#",
			isOpen: true,
			items: [],
		},
		{
			id: "label2",
			label: "Label 2",
			link: "#",
			isDisabled: true,
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "label3",
			label: "Label 3",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "label4",
			label: "Label 4",
			link: "#",
		},
		{
			id: "group2",
			label: "Group 2",
			link: "#",
			isOpen: true,
			items: [],
		},
		{
			id: "label5",
			label: "Label 5",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "group3",
			label: "Group 3",
			link: "#",
			isOpen: true,
			items: [],
			customClasses: ["spectrum-TreeView-item--indent1"],
		},
		{
			id: "label6",
			label: "Label 6",
			link: "#",
			customClasses: ["spectrum-TreeView-item--indent2"],
		},
	],
};
FlatMarkup.tags = ["!dev"];
FlatMarkup.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TreeViewGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
