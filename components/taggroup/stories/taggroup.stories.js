import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid } from "@spectrum-css/preview/types";
import { default as TagStories } from "@spectrum-css/tag/stories/tag.stories.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { exampleTagItems, TagGroupDisabledItem, TagGroups, TagGroupSizingTemplate } from "./taggroup.test.js";
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
		isInvalid: {
			...isInvalid,
			description: "Displays help text below the tag group with invalid icon and styling.",
			if: { arg: "helpText", neq: "" },
		},
		ariaLabel: { table: { disable: true } },
		label: { table: { disable: true } },
		items: { table: { disable: true } },
		actionButtonText: {
			name: "Action button text",
			description: "Displays an action button below the tag group, if left blank, the action button will not be displayed.",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Content",
			},
			control: "text",
		},
		fieldLabel: {
			name: "Field label",
			description: "Displays a label above the tag group, if left blank, the label will not be displayed.",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Content",
			},
			control: "text",
		},
		fieldLabelPosition: {
			name: "Field label position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			options: ["top", "side"],
			control: "select",
			if: { arg: "fieldLabel", truthy: true },
		},
		helpText: {
			name: "Help text",
			description: "Displays help text below the tag group, if left blank, the help text will not be displayed.",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Content",
			},
			control: "text",
		},
		numberOfTags: {
			name: "Number of tags",
			description: "The number of tags to display in the tag group. If the number of tags is 0, the tag group will show a placeholder text to communicate the empty state.",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "number", min: 0, max: 30, step: 1 },
		},
	},
	args: {
		...TagStories.args,
		rootClass: "spectrum-TagGroup",
		isRemovable: false,
		size: "m",
		actionButtonText: "Show all",
		helpText: "Help text description",
		fieldLabel: "Tag group label",
		fieldLabelPosition: "top",
		isInvalid: false,
		numberOfTags: 3,
		ariaLabel: "Tags",
	},
	parameters: {
		actions: {
			handles: [
				...(TagStories.parameters.actions.handles ?? [])
			],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=45924-645",
		},
		packageJson,
		metadata,
		downState: {
			selectors: [".spectrum-Tag", ".spectrum-ActionButton"],
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

export const Default = TagGroups.bind({});
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * A tag group on its own should always have a label. Labels can be placed either on top or on the side of the tags, but top labels are the default and are recommended because they work better with long copy, localization, and responsive layouts.
 */
export const DefaultWithLabel = TagGroups.bind({});
DefaultWithLabel.storyName = "Label position - default/top";
DefaultWithLabel.tags = ["!dev"];
DefaultWithLabel.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
DefaultWithLabel.args = {
	actionButtonText: "",
	helpText: "",
	items: exampleTagItems,
	fieldLabel: "Tags",
};

/**
 * Tag group labels can also be placed on the side of the tag group. Side labels are most useful when vertical space is limited.
 */
export const SideLabel = Template.bind({});
SideLabel.storyName = "Label position - side";
SideLabel.tags = ["!dev"];
SideLabel.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
SideLabel.args = {
	fieldLabelPosition: "side",
	items: exampleTagItems,
	fieldLabel: "Tags",
	helpText: "These tags were automatically added."
};

/**
 * A tag group can contain removable tags when the context is for editing or non-removable tags when tags are read-only. Removable and non-removable tags cannot be combined within the tag group.
 *
 * When horizontal space is limited in a tag group, the tags wrap to form another line. Individual tags don't wrap between lines; they'll either move to the next line or the text within the tag will truncate.
 */
export const RemovableAndWrapping = Template.bind({});
RemovableAndWrapping.storyName = "Removable and wrapping";
RemovableAndWrapping.tags = ["!dev"];
RemovableAndWrapping.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
RemovableAndWrapping.args = {
	fieldLabel: "Tags",
	actionButtonText: "",
	helpText: "",
	isRemovable: true,
	customStyles: {"max-width": "300px"},
	items: [
		{
			label: "Hiking and camping",
		},
		{
			label: "Surfing",
		},
		{
			label: "Outdoors",
		},
		{
			label: "Tag with avatar",
			avatarUrl: "example-ava.png",
		},
		{
			label: "Traveling",
		},
		{
			label: "Tag with thumbnail",
			thumbnailUrl: "flowers.png",
		},
		{
			label: "Tag with icon",
			iconName: "Cloud",
		},
	],
};

/**
 * A single quiet [action button](?path=/docs/components-action-button--docs) may be included at the end of a tag group if the action affects the entire group. Common actions include "show all," "show less," and "clear all." A counter of the number of tags can be included in the action button label if appropriate for the context.
 */
export const WithActionButton = Template.bind({});
WithActionButton.storyName = "With action button";
WithActionButton.tags = ["!dev"];
WithActionButton.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
WithActionButton.args = {
	actionButtonText: "Show all (13)",
	helpText: "",
	items: exampleTagItems,
	fieldLabel: "Tags",
};

/**
 * A tag group can have [help text](?path=/docs/components-help-text--docs) below the group to give extra context or instruction. The help text may be invalid, indicating an error for when requirements aren't met.
 */
export const WithHelpText = Template.bind({});
WithHelpText.storyName = "With help text";
WithHelpText.tags = ["!dev"];
WithHelpText.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
WithHelpText.args = {
	fieldLabel: "Tags",
	isInvalid: true,
	actionButtonText: "",
	helpText: "Add at least three tags.",
	items: [
		{ label: "2025" },
		{ label: "Australia" },
	],
};

/**
 * Avoid disabling an entire tag group. In cases where users can't interact with an entire group of tags, consider either using non-removable tags or hiding the tag group altogether. Don't disable all individual tags; having a tag group that's disabled isn't accessible and it can be frustrating for users.
 */
export const Disabled = TagGroupDisabledItem.bind({});
Disabled.storyName = "With disabled tag";
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
Disabled.args = {
	fieldLabel: "Tags",
	helpText: "These tags were automatically added."
};

/**
 * When a stand alone tag group has no tags, it shows placeholder text to communicate the empty state. The wording of the placeholder text can be customizable.
 */
export const WithNoTags = Template.bind({});
WithNoTags.storyName = "With no tags (empty state)";
WithNoTags.tags = ["!dev"];
WithNoTags.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
WithNoTags.args = {
	fieldLabel: "Tags",
	numberOfTags: 0,
	helpText: "",
	actionButtonText: "",
};

/**
 * The default size of a tag group is medium, but tags are also available in small and large sizes.
 */
export const Sizing = (args, context) => Sizes({
	Template: TagGroupSizingTemplate,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
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
