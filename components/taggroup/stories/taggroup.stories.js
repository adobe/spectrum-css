import { Template } from "./template";

import { default as TagStories } from "@spectrum-css/tag/stories/tag.stories.js";
const ignoreProps = ["rootClass", "hasClearButton", "label"];

/**
 * A group of tags.
 */
export default {
	title: "Components/Tag group",
	component: "TagGroup",
	argTypes: {
		...Object.entries(TagStories.argTypes).reduce((acc, [key, value]) => {
			if (ignoreProps.includes(key)) return acc;
			if (["size"].includes(key))
				value.table = { ...value.table, category: "Shared settings" };
			else value.table = { ...value.table, category: "Tag settings" };
			return { ...acc, [key]: value };
		}, {}),
		ariaLabel: {
			name: "Aria-label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
				disable: true,
			},
			control: { type: "text" },
		},
		items: { table: { disable: true } },
		isRemovable: {
			name: "Removable tags",
			description: "True if a button is present to clear the tag.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Shared settings",
			},
			control: "boolean",
		},
		customStyles: {
			description: "Custom styles for testing the story, applied to the parent element.",
			table: {
				type: { summary: "object" },
				category: "Storybook Only",
			},
			if: { arg: "customStyles" }
		}
	},
	args: {
		rootClass: "spectrum-TagGroup",
		ariaLabel: "Tags",
		isRemovable: false,
	},
	parameters: {
		actions: {
			handles: [
				...(TagStories.parameters.actions.handles ?? [])
			],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	size: "l",
	items: [
		{
			label: "Tag 1",
		},
		{
			label: "Tag 1",
		},
		{
			label: "Tag 3",
		},
	],
};

export const Removable = Template.bind({});
Removable.args = {
	size: "l",
	isRemovable: true,
	isEmphasized: true,
	items: [
		{
			label: "Tag 1",
		},
		{
			label: "Tag 2",
		},
		{
			label: "Tag 3",
		},
	],
};

export const OverflowItems = Template.bind({});
OverflowItems.parameters = {
	docs: {
		description: {
			story:
				"When horizontal space is limited in a tag group, the individual tags wrap to form another line.",
		},
	},
};
OverflowItems.args = {
	size: "m",
	isRemovable: true,
	isEmphasized: false,
	customStyles: {"max-width": "300px"},
	items: [
		{
			label: "Tag 1 Example",
		},
		{
			label: "Tag 2 Example",
		},
		{
			label: "Tag 3 Example",
		},
		{
			label: "Tag 4",
		},
		{
			label: "Tag 5",
		},
		{
			label: "Tag 6",
		},
		{
			label: "Tag 7",
		},
	],
};
