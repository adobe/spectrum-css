import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isFocused, isHovered, isSelected, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { TagGroups } from "./tag.test.js";
import { SelectedTemplate, TagsDefaultOptions } from "./template.js";

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
			description: "Can consist of a thumbnail, icon, or avatar",
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
		isEmphasized: {
			...isEmphasized,
		},
		isDisabled,
		isSelected,
		isHovered,
		isFocused,
		isActive,
		hasClearButton: {
			name: "Clear button",
			description: "True if a button is present to clear the tag.",
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
		size: "m",
		label: "Tag label",
		iconName: "Circle",
		avatarUrl: "example-ava.png",
		thumbnailUrl: "example-card-landscape.png",
		isSelected: false,
		isDisabled: false,
		isEmphasized: false,
		isHovered: false,
		isFocused: false,
		isActive: false,
		hasClearButton: false,
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
	},
};

export const Default = TagGroups.bind({});
Default.tags = ["!autodocs"];
Default.args = {};

// ********* VRT ONLY ********* //
// @todo combine variants into one snapshot
export const WithForcedColors = TagGroups.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

export const Standard = TagsDefaultOptions.bind({});
Standard.args = Default.args;
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};

Standard.storyName = "Default";

export const Selected = SelectedTemplate.bind({});
Selected.tags = ["!dev"];
Selected.args = {
	isSelected: true
};

Selected.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = TagsDefaultOptions.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};

Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Emphasized = TagsDefaultOptions.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true
};

Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Removable = TagsDefaultOptions.bind({});
Removable.tags = ["!dev"];
Removable.args = {
	hasClearButton: true,
};

Removable.parameters = {
	chromatic: { disableSnapshot: true },
};

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
 * When the tag text is too long for the available horizontal space, it truncates. The full text should be revealed with a tooltip on hover.
 * */

export const TextOverflow = TagGroups.bind({});
TextOverflow.tags = ["!dev"];
TextOverflow.args = {
	hasIcon: true,
	iconName: "CheckmarkCircle",
	label: "An example of text overflow behavior. When the button text is too long for the horizontal space available, it will truncate and stay on one line.",
	customStyles: { "max-inline-size": "200px" }
};

TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};
