import { Template } from "./template";

import { default as TagStories } from "@spectrum-css/tag/stories/tag.stories.js";

const ignoreProps = ["rootClass", "hasClearButton", "label"];

export default {
	title: "Components/Tag group",
	description: "A group of tags.",
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
	},
	args: {
		rootClass: "spectrum-TagGroup",
		ariaLabel: "Tags",
		isRemovable: false,
		size: "l",
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
	},
	parameters: {
		actions: {
			handles: [...(TagStories.parameters.actions.handles ?? [])],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("taggroup")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Removable = Template.bind({});
Removable.args = {
	isRemovable: true,
	isEmphasized: true,
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
	customStyles: {'max-width': '300px'},
	items: [
		{
			label: "Tag 1 example",
		},
		{
			label: "Tag 2 example",
		},
		{
			label: "Tag 3 example",
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
