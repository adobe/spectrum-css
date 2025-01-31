import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { CoachMarkGroup } from "./coachmark.test.js";
import {
	CoachmarkMenuStatesTemplate,
	CoachMarkMediaStateTemplates,
	CoachmarkShortcutStatesTemplate,
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
		hasKeyboardShortcut: {
			name: "Has keyboard shortcuts",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
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
		docs: {
			story: {
				height: "300px",
			},
		},
	},
};

export const Default = CoachMarkGroup.bind({});
Default.title = "Standard";
Default.tags = ["!autodocs"];
Default.args = {
	title: "Coach mark title",
	image: "example-card-landscape.png",
	hasKeyboardShortcut: false,
};
Default.parameters = {
	docs: {
		story: {
			height: "450px",
		},
	},
};

/**
 * Coach marks are temporary messages that educate users through new or unfamiliar product experiences. They can be chained into a sequence to form a tour. They may contain images or media that relate to their content, such as demonstrations of gestures, the UI being used, or illustrations.
 */
export const Standard = CoachmarkMenuStatesTemplate.bind({});
Standard.storyName = "Default";
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
	docs: {
		story: {
			height: "450px",
		},
	},
};
Standard.args = { image: "example-card-landscape.png" };

/** Images and media have a minimum height and can grow with the parent component. Fixed height media is constrained to a 4:3 aspect ratio. */
export const MediaStates = CoachMarkMediaStateTemplates.bind({});
MediaStates.tags = ["!dev"];
MediaStates.args = {
	hasImage: true,
};
MediaStates.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
	docs: {
		story: {
			height: "725px",
		},
	},
};

/** Keyboard shortcuts may be shown in place of or below the action menu. */
export const ShortCutStories = CoachmarkShortcutStatesTemplate.bind({});
ShortCutStories.tags = ["!dev"];
ShortCutStories.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
	docs: {
		story: {
			height: "450px",
		},
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
