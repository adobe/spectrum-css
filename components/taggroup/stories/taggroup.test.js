import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template } from "./template.js";

export const exampleTagItems = [
	{ label: "2025" },
	{ label: "Outdoors" },
	{ label: "Blue" },
	{ label: "Australia" },
	{ label: "Project Alpha" },
	{ label: "Project Beta" },
];

const overflowingTagItems = [
	...exampleTagItems,
	{ label: "Sports" },
	{ label: "Surfing" },
	{ label: "Water" },
	{ label: "Hawaii" },
];

const itemsWithDisabledTag = [
	...exampleTagItems,
	{ label: "Disabled tag", isDisabled: true },
];

export const TagGroupSizingTemplate = (args, context) => {
	return html`
		${Template({
			...args,
			items: exampleTagItems,
			customStyles: {
				"max-width": "300px",
			},
		}, context)}
	`;
};

export const TagGroupDisabledItem = (args, context) => {
	return html`
		${Template({
			...args,
			items: itemsWithDisabledTag,
		}, context)}
	`;
};

export const TagGroups = Variants({
	Template,
	SizeTemplate: TagGroupSizingTemplate,
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
			actionButtonText: "",
			helpText: "",
			items: exampleTagItems,
		},
		{
			testHeading: "Removable, with action button and help text",
			isRemovable: true,
			actionButtonText: "Show all",
			helpText: "Add at least three tags.",
			isInvalid: true,
			items: [
				{ label: "2025" },
				{ label: "Australia" },
			],
		},
		{
			testHeading: "Top label variant showing action button, help text, and wrapping rows of tags",
			actionButtonText: "Show all",
			helpText: "Tags are automatically added.",
			isInvalid: false,
			customStyles: {"max-width": "300px"},
			items: overflowingTagItems,
		},
		{
			testHeading: "Side label variant showing action button, help text, and wrapping rows of tags",
			actionButtonText: "Show all",
			helpText: "Tags are automatically added.",
			isInvalid: false,
			fieldLabelPosition: "side",
			customStyles: {"max-width": "400px"},
			items: overflowingTagItems,
		},
		{
			testHeading: "Empty state, top label",
			numberOfTags: 0,
			helpText: "",
			actionButtonText: "",
			items: [],
		},
		{
			testHeading: "Empty state, side label",
			fieldLabelPosition: "side",
			numberOfTags: 0,
			helpText: "",
			actionButtonText: "",
			items: [],
		},
	],
});
