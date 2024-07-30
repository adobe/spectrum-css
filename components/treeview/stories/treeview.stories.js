import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { SizingGroup, Template, TreeViewGroup } from "./template";

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
export const Sizing = SizingGroup.bind({});
Sizing.args = Default.args;
Sizing.tags = ["autodocs", "!dev"];
Sizing.parameters = {
	chromatic: { disableAllSnapshots: true },
};


/**
 * A tree view with a selected item.
 */
export const Selected = Default.bind({});
Selected.tags = ["autodocs", "!dev"];
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
	chromatic: { disableAllSnapshots: true },
};

/**
 * A tree view with quiet selection.
 */
export const Quiet = Default.bind({});
Quiet.storyName = "Selected (Quiet)";
Quiet.tags = ["autodocs", "!dev"];
Quiet.args = {
	...Selected.args,
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableAllSnapshots: true },
};

/**
 * Detached tree views are meant to be used outside of a panel. Items in detached tree views have rounded corners.
 */
export const Detached = Default.bind({});
Detached.tags = ["autodocs", "!dev"];
Detached.args = {
	...Selected.args,
	variant: "detached",
};
Detached.parameters = {
	chromatic: { disableAllSnapshots: true },
};

/**
 * A detached, quiet tree view.
 */
export const DetachedQuiet = Default.bind({});
DetachedQuiet.storyName = "Detached (Quiet)";
DetachedQuiet.tags = ["autodocs", "!dev"];
DetachedQuiet.args = {
	...Selected.args,
	variant: "detached",
	isQuiet: true,
};
DetachedQuiet.parameters = {
	chromatic: { disableAllSnapshots: true },
};

/**
 * In this example, the Label 2 and Group 2 are disabled.
 */
export const Disabled = Template.bind({});
Disabled.tags = ["autodocs", "!dev"];
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
	chromatic: { disableAllSnapshots: true },
};

/**
 * Icons can be used to add clarification about tree view items. These help to signify content types, which creates easier reference and context within the hierarchy.
 *
 * In this example, a nested tree view with folder and file icons is shown. 
 */
export const FoldersAndFiles = Template.bind({});
FoldersAndFiles.args = {
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
	chromatic: { disableAllSnapshots: true },
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
	chromatic: { disableAllSnapshots: true },
};

/**
 * A quiet tree view with thumbnails using the layer variant. When using the quiet variant, less visual emphasis is given to the selected tree view item.
 */
export const ThumbnailsQuiet = Template.bind({});
ThumbnailsQuiet.storyName = "Thumbnails (Quiet)";
ThumbnailsQuiet.tags = ["autodocs", "!dev"];
ThumbnailsQuiet.args = {
	...Thumbnails.args,
	isQuiet: true,
};
ThumbnailsQuiet.parameters = {
	chromatic: { disableAllSnapshots: true },
};

export const Sections = Template.bind({});
Sections.args = {
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
Sections.tags = ["autodocs", "!dev"];
Sections.parameters = {
	chromatic: { disableAllSnapshots: true },
};


/**
 * A tree view with an item consisting of a drop target. The `.is-drop-target` class is added to the drop target item.
 */
export const DropTarget = Template.bind({});
DropTarget.args = {
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
DropTarget.tags = ["autodocs", "!dev"];
DropTarget.parameters = {
	chromatic: { disableAllSnapshots: true },
};

/**
 * A tree view drawn without nesting, suitable for infinite scrolling. With this version of the treeview, you must manage the visibility of "child items" manually based on the open state of the "parent item." The level of visual indentation is handled by a numbered `indent` variant class.
 */
export const Flat = Template.bind({});
Flat.storyName = "Flat Markup";
Flat.args = {
	customStyles: {
		"width": "500px",
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
	chromatic: { disableAllSnapshots: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
