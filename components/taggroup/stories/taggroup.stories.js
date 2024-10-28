import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { default as TagStories } from "@spectrum-css/tag/stories/tag.stories.js";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { TagGroups } from "./taggroup.test.js";
import { Template } from "./template.js";

const ignoreProps = ["rootClass", "hasClearButton", "label"];

/**
 * A group of [tags](?path=/docs/components-tag--docs). Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request.
 *
 * When horizontal space is limited in a tag group, the individual tags wrap to form another line.
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
		packageJson,
		metadata,
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
 * A tag group can contain removable tags when the context is for editing or non-removable tags when tags are read-only. Removable and non-removable tags cannot be combined within the tag group.
 */
export const Removable = Template.bind({});
Removable.tags = ["!dev"];
Removable.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
Removable.args = {
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
			avatarUrl: "example-ava.png",
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
export const WithForcedColors = TagGroups.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
