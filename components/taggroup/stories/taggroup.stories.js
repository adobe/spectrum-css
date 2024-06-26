import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { default as TagStories } from "@spectrum-css/tag/stories/tag.stories.js";
import { version } from "../package.json";
import { TagGroups, Template } from "./template";

const ignoreProps = ["rootClass", "hasClearButton", "label"];

/**
 * A group of tags.
 */
export default {
	title: "Tag group",
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
		isRemovable: false,
		size: "m",
	},
	parameters: {
		actions: {
			handles: [
				...(TagStories.parameters.actions.handles ?? [])
			],
		},
		componentVersion: version,
	},
};

export const Default = TagGroups.bind({});
Default.args = {
	ariaLabel: "Tags",
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

// ********* DOCS ONLY ********* //
/**
 * When horizontal space is limited in a tag group, the individual tags wrap to form another line.
 */
export const OverflowItems = Template.bind({});
OverflowItems.tags = ["autodocs", "!dev"];
OverflowItems.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
OverflowItems.args = {
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

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
