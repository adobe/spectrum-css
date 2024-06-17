import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { version } from "../package.json";
// import { DialogFullscreen, DialogFullscreenTakeover, DialogGroup } from "./dialog.test.js";
import { Template } from "./template.js";

/**
 * A dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions. Standard dialogs are the most frequent type of dialogs. They appear in the center of the screen over the interface and should be used for moderately complex tasks. Takeover dialogs are large types of dialogs. They use the totality of the screen and should be used for modal experiences with complex workflows.
 * 
 * ## Usage with modal component
 * When a dialog component is used in tandem with a [modal](/docs/components-modal--docs), implementations should set `--mod-modal-background-color` to `transparent`. This will prevent any background color used in the modal from peeking through from behind the dialog at the rounded corners, allowing the dialog's background color to take precedence.
 * 
 * The alert variants that were previously a part of Dialog were moved to their own component, [alert dialog](/docs/components-alert-dialog--docs).
 */
export default {
	title: "Dialog",
	component: "Dialog",
	argTypes: {
		heading: {
			name: "Heading",
			description: "Title for the dialog.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		header: { 
			name: "Additional header content",
			description: "Controls header content.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		content: { table: { disable: true } },
		hasFooter: {
			name: "Has footer",
			description: "Adds a footer to the dialog, containing the button group, checkbox, and footer text. Currently only supported in the default layout.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
		},
		footer: {
			name: "Footer text",
			description: "Text content of the dialog footer. Represents the checkbox label if a checkbox is present, or stands alone if there is no checkbox. Currently only supported in the default layout.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
			if: { arg: "hasFooter", truthy: true, },
		},
		hasCheckbox: {
			name: "Has checkbox",
			description: "Adds a checkbox to the footer content. Currently only supported in the default layout.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: { type: "boolean" },
			if: { arg: "hasFooter", truthy: true, },
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		layout: {
			name: "Layout",
			type: { name: "string" },
			defaultValue: "Default",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "Default" },
				disable: true,
			},
			options: ["default", "fullscreen", "fullscreenTakeover"],
			control: "select",
		},
		isDismissible: {
			name: "Dismissible",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "layout", eq: "default" },
		},
		showModal: {
			name: "Wrap the dialog in a modal",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		hasHeroImage: {
			name: "Has hero image",
			type: { name: "boolean" },
			description: "Adds a cover image to the header of a dialog.",
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
			if: { arg: "layout", eq: "default" },
		},
		heroImageUrl: {
			name: "Hero Image",
			type: { name: "string" },
			description: "Select a cover image for the hero section of a dialog.",
			defaultValue: "example-card-portrait.png",
			table: {
				type: { summary: "string" },
				category: "Content",
				defaultValue: { summary: "example-card-portrait.png" },
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "hasHeroImage", truthy: true },
		},
	},
	args: {
		rootClass: "spectrum-Dialog",
		hasFooter: true,
		footer: "Do not show this message again.",
		isDismissible: false,
		isOpen: true,
		showModal: false,
		size: "m",
		layout: "default",
		hasCheckbox: true,
		hasHeroImage: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		docs: {
			story: {
				// inline: false,
				height: "500px",
			},
		},
		componentVersion: version,
		status: {
			type: "migrated",
		},
	},
};

const ExampleContent = "Standard dialog description. This should briefly communicate any additional information or context about the standard dialog title, to help users make one of the decisions offered by the buttons. Make it no more than a few short sentences.";

/**
 * The default size for dialog is medium. The default dialog also has a checkbox in the footer.
 */
export const Default = Template.bind({});
Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	header: "* Required",
	showModal: true,
	content: [
		(passthroughs, context) =>  Typography({
			semantics: "body",
			size: "m",
			content: [ ExampleContent ],
			...passthroughs,
		}, context),
	],
};

/* TODO: For all dialog stories: the "is-hidden-story" tags in older versions of Storybook. In newer versions,
use "!dev" to remove the stories from the side navigation, reflecting the intended behavior.
Remove "is-hidden-story" in favor of "!dev" tags when possible.
*/
// ********* DOCS ONLY ********* //
export const DefaultSmall = Template.bind({});
DefaultSmall.tags = ["is-hidden-story", "!dev"];
DefaultSmall.storyName = "Dialog - small",
DefaultSmall.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultSmall.args = {
	...Default.args,
	size: "small",
};

export const DefaultLarge = Template.bind({});
DefaultLarge.tags = ["is-hidden-story", "!dev"];
DefaultLarge.storyName = "Dialog - large",
DefaultLarge.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultLarge.args = {
	...Default.args,
	size: "large",
};

/**
 * A dialog that can be dismissed without taking an action.
 */
export const Dismissible = Template.bind({});
Dismissible.tags = ["is-hidden-story", "!dev"];
Dismissible.parameters = {
	chromatic: { disableSnapshot: true },
};
Dismissible.args = {
	...Default.args,
	isDismissible: true,
};

/**
 * Dialogs can have a hero or cover image header.
 */
export const WithHero = Template.bind({});
WithHero.tags = ["is-hidden-story", "!dev"];
WithHero.storyName = "With hero image";
WithHero.parameters = {
	docs: {
		story: {
			height: "650px",
		},
	},
	chromatic: { disableSnapshot: true },
};
WithHero.args = {
	...Default.args,
	hasHeroImage: true,
};

/**
 * The content inside the body area can scroll when necessary.
 */
export const WithScroll = Template.bind({});
WithScroll.args = {
	...Default.args,
	content: [ ExampleContent, ExampleContent, ExampleContent, ExampleContent ],
	customStyles: {
		"max-block-size": "400px",
	}
};
WithScroll.storyName = "Scrollable";
WithScroll.tags = ["is-hidden-story", "!dev"];
WithScroll.parameters = {
	chromatic: { disableSnapshot: true },
};

/* TODO: once this gets rebased with `main`, make sure to use the fullscreen and fullscreenTakeover test templates
that are imported above, but commented out.
 */
/**
 * The full screen variant shows a large dialog background, only revealing a small portion of the page around the outside of the dialog, behind an overlay. The size of the dialog varies with the size of the screen, in both width and height.
 */
export const Fullscreen = Template.bind({});
Fullscreen.args = {
	...Default.args,
	layout: "fullscreen",
	hasFooter: false,
};
Fullscreen.parameters = {
	chromatic: { disableSnapshot: true },
};

// TODO: Because storybook doesn't support for multiple conditionals, we've removed the hasFooter
// arg from the control table for the fullscreen and fullscreenTakeover stories only. Ideally, we
// could have some of our controls display when more than one arg is met to avoid custom argTypes.
// For instance, hasCheckbox would appear when layout: "default", AND footer is truthy.
// https://github.com/storybookjs/storybook/discussions/18542
Fullscreen.argTypes = {
	hasFooter: { table: { disable: true, } },
};

/**
 * The full screen takeover variant is similar to the full screen variant except that the background covers the entire screen. The page behind the dialog is not visible. This variant should be reserved for workflows where displaying a second dialog on top of the first one is to be expected.
 */
export const FullscreenTakeover = Template.bind({});
FullscreenTakeover.storyName = "Fullscreen takeover";
FullscreenTakeover.parameters = {
	chromatic: { disableSnapshot: true },
};
FullscreenTakeover.args = {
	...Default.args,
	layout: "fullscreenTakeover",
	hasFooter: false,
	content: [ ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent ],
};
FullscreenTakeover.argTypes = {
	hasFooter: { table: { disable: true, } },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
	},
};
