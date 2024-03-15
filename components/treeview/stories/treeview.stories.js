// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Tree view",
	description:
		"The typical usage of a treeview involves nesting a .spectrum-Treeview element within the .spectrum-TreeView-item parent element.",
	component: "Treeview",
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
		customStyles: {
			name: "Custom styles",
			description: "Storybook only styles for testing the story, applied to the parent element.",
			table: {
				type: { summary: "object" },
				category: "Advanced",
			},
			if: { arg: 'customStyles' }
		}
	},
	args: {
		rootClass: "spectrum-TreeView",
		size: "m",
		isQuiet: false,
		customStyles: {
			'max-inline-size': '600px',
		},
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-TreeView-itemLink"],
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

export const Flat = Template.bind({});
Flat.storyName = 'Flat Markup';
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
			customClasses: ['spectrum-TreeView-item--indent1'],
		},
		{
			id: "label3",
			label: "Label 3",
			link: "#",
			customClasses: ['spectrum-TreeView-item--indent1'],
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
			customClasses: ['spectrum-TreeView-item--indent1'],
		},
		{
			id: "group3",
			label: "Group 3",
			link: "#",
			isOpen: true,
			items: [],
			customClasses: ['spectrum-TreeView-item--indent1'],
		},
		{
			id: "label6",
			label: "Label 6",
			link: "#",
			customClasses: ['spectrum-TreeView-item--indent2'],
		},
	],
};
