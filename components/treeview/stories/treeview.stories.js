import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template, TreeViewGroup } from "./template";

/**
 * The typical usage of a treeview involves nesting a .spectrum-Treeview element within the .spectrum-TreeView-item parent element.
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

export const Default = TreeViewGroup.bind({});
Default.args = {
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
			isSelected: true,
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
FoldersAndFiles.tags = ["autodocs", "!dev"];
FoldersAndFiles.parameters = {
	chromatic: { disableSnapshot: true },
};

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
Thumbnails.tags = ["autodocs", "!dev"];
Thumbnails.parameters = {
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
WithSections.tags = ["autodocs", "!dev"];
WithSections.parameters = {
	chromatic: { disableSnapshot: true },
};

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
WithDropTarget.tags = ["autodocs", "!dev"];
WithDropTarget.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Flat = Template.bind({});
Flat.storyName = "Flat Markup";
Flat.args = {
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
Flat.tags = ["autodocs", "!dev"];
Flat.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
