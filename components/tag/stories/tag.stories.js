import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isEmphasized, isInvalid, isSelected, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { TagGroups } from "./tag.test.js";
import { RemovableTemplate, StandardTemplate, TagsDefaultOptions } from "./template.js";

/**
 * A tag categorizes content. They can represent keywords or people, and are grouped to describe an item or a search request.
 */
export default {
	title: "Tag",
	component: "Tag",
	argTypes: {
		size: size(["s", "m", "l"]),
		hasIcon: {
			name: "Has icon",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "hasAvatar", truthy: false },
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: { arg: "hasIcon", truthy: true },
		},
		hasAvatar: {
			name: "Has avatar",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "hasIcon", truthy: false },
		},
		avatarUrl: {
			name: "Avatar image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "hasAvatar", truthy: true },
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized: {
			...isEmphasized,
			if: { arg: "isInvalid", truthy: false },
		},
		isInvalid,
		isDisabled,
		isSelected,
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
		hasIcon: false,
		iconName: "Info",
		avatarUrl: "example-ava.png",
		hasAvatar: false,
		isSelected: false,
		isDisabled: false,
		isInvalid: false,
		isEmphasized: false,
		hasClearButton: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		packageJson: pkgJson,
	},
};

export const Default = TagGroups.bind({});
Default.args = {};
Default.tags = ["!autodocs"];


export const Standard = StandardTemplate.bind({});
Standard.args = Default.args;
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};

Standard.storyName = "Default";


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

export const Removable = RemovableTemplate.bind({});
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
