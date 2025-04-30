import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isHovered, isKeyboardFocused, isReadOnly, isSelected, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { TagGroups } from "./tag.test.js";
import { TagsDefaultOptions } from "./template.js";

/**
 * A tag categorizes content. It can represent keywords or people, and are [grouped](?path=/docs/components-tag-group--docs) to describe an item or a search request.
 */
export default {
	title: "Tag",
	component: "Tag",
	argTypes: {
		size: size(["s", "m", "l"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		visualContent: {
			name: "Visual content",
			description: "Can consist of a thumbnail, icon, or avatar.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["none", "avatar", "icon", "thumbnail"],
			control: "select",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: { arg: "visualContent", eq: "icon" },
		},
		avatarUrl: {
			name: "Avatar image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "visualContent", eq: "avatar" },
		},
		thumbnailUrl: {
			name: "Thumbnail image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "visualContent", eq: "thumbnail" },
		},
		isEmphasized,
		isDisabled,
		isSelected,
		isHovered,
		isKeyboardFocused,
		isActive,
		isReadOnly,
		isRemovable: {
			name: "Removable",
			description: "Has a clear button to clear the tag.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tag",
		size: "s",
		label: "Tag label",
		iconName: "Circle",
		avatarUrl: "example-ava.png",
		thumbnailUrl: "example-card-landscape.png",
		isSelected: false,
		isDisabled: false,
		isEmphasized: false,
		isHovered: false,
		isKeyboardFocused: false,
		isActive: false,
		isReadOnly: false,
		isRemovable: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=715-2687",
		},
		packageJson,
		metadata,
		downState: {
			selectors: [".spectrum-Tag:not(:disabled)"],
		},
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

export const Default = TagGroups.bind({});
Default.tags = ["!autodocs"];
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = TagGroups.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * Tags should always include a label to represent search terms, filters, or keywords. Tags also
 * have the option to include an [icon](?path=/docs/components-icon--docs),
 * [avatar](?path=/docs/components-avatar--docs), or
 * [thumbnail](?path=/docs/components-thumbnail--docs) in addition to the label.
 */
export const Standard = TagsDefaultOptions.bind({});
Standard.args = Default.args;
Standard.storyName = "Default";
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};


export const Selected = TagsDefaultOptions.bind({});
Selected.storyName = "Selected default";
Selected.tags = ["!dev"];
Selected.args = {
	isSelected: true
};
Selected.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A tag in a disabled state shows that a tag exists, but is not available in that circumstance.
 * This can be used to maintain layout continuity and communicate that a tag may become available later.
 */
export const Disabled = TagsDefaultOptions.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Emphasized = TagsDefaultOptions.bind({});
Emphasized.storyName = "Selected emphasized";
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
	isSelected: true,
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Tags have the option to be removable or not. Removable tags have a small clear ("x") button.
 */
export const Removable = TagsDefaultOptions.bind({});
Removable.storyName = "Default, removable";
Removable.tags = ["!dev"];
Removable.args = {
	isRemovable: true,
};
Removable.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Tags have a read-only option for when content in the disabled state still needs to be shown.
 * Read-only tags cannot be interacted with or changed.
 */
export const ReadOnly = TagsDefaultOptions.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.tags = ["!dev"];
ReadOnly.args = {
	isReadOnly: true,
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The default size of a tag is small, but tags are also available in medium and large sizes.
 */
export const Sizing = (args, context) => Sizes({
	Template: TagsDefaultOptions,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};


/**
 * When the tag text is too long for the available horizontal space, it truncates. The full text
 * should be revealed with a tooltip on hover. Tags have a maximum width that differs depending on
 * the size of the tag.
 * */

export const TextOverflow = (args, context) => Sizes({
	Template: TagGroups,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
TextOverflow.tags = ["!dev"];
TextOverflow.args = {
	hasIcon: true,
	iconName: "CheckmarkCircle",
	label: "An example of text overflow behavior. When the button text is too long for the horizontal space available, it will truncate and stay on one line.",
};

TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};
