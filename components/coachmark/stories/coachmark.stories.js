import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { CoachMarkGroup } from "./coachmark.test.js";
import {
	CoachMarkMediaOptionsTemplate,
	CoachmarkMenuStatesTemplate,
	Template,
} from "./template.js";

/**
 * The coach mark component can be used to bring added attention to specific parts of a page, like during a tour. It is a separate component from [the coach indicator](/docs/components-coach-indicator--docs) and similar to [a popover](/docs/components-purpose--docs).
 */
export default {
	title: "Coach mark",
	component: "CoachMark",
	argTypes: {
		hasActionMenu: {
			name: "Has action menu",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasPagination: {
			name: "Pagination",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasImage: {
			name: "Has image",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		imageIsFixedHeight: {
			name: "Fixed image height",
			description: "By default this displays an image with a 4:3 aspect ratio.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			if: { arg: "hasImage", truthy: true },
		},
		imageSource: {
			name: "Image source",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "hasImage", truthy: true },
		},
		title: {
			name: "Title text",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
	},
	args: {
		title: "Coach mark title",
		rootClass: "spectrum-CoachMark",
		hasActionMenu: false,
		hasPagination: true,
		hasImage: true,
		imageIsFixedHeight: false,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton.parameters?.actions?.handles ?? []),
				...(Menu.parameters?.actions?.handles ?? []),
			],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=37804-254",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

export const Default = CoachMarkGroup.bind({});
Default.title = "Standard";
Default.tags = ["!autodocs"];
Default.parameters = {};

/**
 * Coach marks are temporary messages that educate users through new or unfamiliar product experiences. They can be chained into a sequence to form a tour. They may contain images or media that relate to their content, such as demonstrations of gestures, the UI being used, or illustrations. All coach marks can have any combination of action menu and media.
 */
export const Standard = Template.bind({});
Standard.storyName = "Default";
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
Standard.args = {
	imageSource: "example-card-landscape.png",
};

export const StandardNoMedia = Template.bind({});
StandardNoMedia.storyName = "Default, no media";
StandardNoMedia.tags = ["!dev"];
StandardNoMedia.args = {
	hasImage: false,
};
StandardNoMedia.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Images and media have a minimum height and can grow with the parent component. Fixed height media is constrained to a 4:3 aspect ratio by applying the `spectrum-CoachMark-image-wrapper--fixedHeight` class. When this fixed height class is used, the height can be customized using the modifiable custom property `--spectrum-coachmark-media-fixed-height`.
 */
export const MediaOptions = CoachMarkMediaOptionsTemplate.bind({});
MediaOptions.tags = ["!dev"];
MediaOptions.args = {
	imageSource: "example-card-portrait.png",
};
MediaOptions.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
MediaOptions.storyName = "Media options";

/** The action menu, if enabled, is shown in line with the title. */
export const WithActionMenu = CoachmarkMenuStatesTemplate.bind({});
WithActionMenu.storyName = "With action menu";
WithActionMenu.tags = ["!dev"];
WithActionMenu.args = {
	hasActionMenu: true,
};
WithActionMenu.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = CoachMarkGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
