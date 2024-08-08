import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TreeViewGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Folders and files",
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
							label: "Label 4",
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
		},
		{
			testHeading: "Thumbnails",
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
		},
		{
			testHeading: "With sections",
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
		}, {
			testHeading: "With drop target",
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
		}, {
			testHeading: "Flat markup",
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
		}, {
			testHeading: "Overflow behavior",
			items: [
				{
					id: "label1",
					label: "Label 1",
					link: "#",
				},
				{
					id: "label1",
					label: "This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
					link: "#",
					isSelected: true,
				},
				{
					id: "label1",
					label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					link: "#",
				},
			],
			customStyles: {
				maxInlineSize: "600px",
			},
		}
	],
	sizeDirection: "row",
});
