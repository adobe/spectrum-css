import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * A dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions.
 * 
 * The alert variants that were previously a part of Dialog were moved to their own component, [Alert Dialog](/docs/components-alert-dialog--docs).
 */
export default {
	title: "Components/Dialog",
	component: "Dialog",
	argTypes: {
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		header: { 
			name: "Additional header content",
			description: "Controls header content",
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
			description: "Adds a footer to the dialog for additional context",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
		},
		hasCheckbox: {
			name: "Has checkbox",
			description: "Adds a checkbox to the footer content.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: { type: "boolean" },
			if: { arg: "layout", eq: "default" },
		},
		footer: {
			name: "Footer text",
			description: "Text content of the dialog footer.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
			if: { arg: "layout", eq: "default" },
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["small", "medium", "large"],
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
			},
			// TODO: add the fullscreen and fullscreenTakeover layouts back to options[] once guidance on fullscreen dialogs is determined
			options: ["default"],
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
		heroImageUrl: {
			name: "Hero Image",
			type: { name: "string" },
			description: "Adds a cover image to the header of a dialog.",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "layout", eq: "default" },
		},
	},
	args: {
		rootClass: "spectrum-Dialog",
		hasFooter: true,
		footer: "Do not show this message again.",
		isDismissible: false,
		isOpen: true,
		showModal: false,
		size: "medium",
		layout: "default",
		hasCheckbox: true,
	},
	parameters: {
		actions: {
			handles: [],
		},
		docs: {
			story: {
				inline: false,
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
 * The default size for dialog is medium.
 */
export const Default = Template.bind({});
Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	header: "*Required",
	showModal: true,
	content: [
		() => Typography({
			semantics: "body",
			size: "m",
			content: ExampleContent,
		}),
	],
};

/* TODO: For all dialog stories: the "is-hidden-story" tags replicates "!dev" in older versions
of Storybook, to remove the stories from the side navigation, reflecting the intended behavior.
Remove "is-hidden-story" in favor of only "!dev" tags when possible.
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
	heroImageUrl: "example-card-portrait.png",
};

/**
 * The content inside the body area can scroll when necessary.
 */
export const WithScroll = Template.bind({});
WithScroll.args = {
	...Default.args,
	content: [ExampleContent, ExampleContent, ExampleContent, ExampleContent],
	customStyles: {
		"max-block-size": "400px",
	}
};
WithScroll.tags = ["is-hidden-story", "!dev"];
WithScroll.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A fullscreen dialog will automatically fill almost all of the available screen space. A margin is included around the outside of the dialog.
 */
export const Fullscreen = Template.bind({});
Fullscreen.args = {
	...Default.args,
	layout: "fullscreen",
};
Fullscreen.parameters = {
	chromatic: { disableSnapshot: true },
};
/* TODO: Remove "is-hidden-story" tag once guidance for S2 fullscreen dialogs has been determined. */
Fullscreen.tags = ["is-hidden-story"];

/**
 * A fullscreen takeover dialog will fill all of the available screen space.
 */
export const FullscreenTakeover = Template.bind({});
FullscreenTakeover.parameters = {
	chromatic: { disableSnapshot: true },
};
FullscreenTakeover.args = {
	...Default.args,
	layout: "fullscreenTakeover",
	content: [ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent, ExampleContent],
};
/* TODO: Remove "is-hidden-story" tag once guidance for S2 fullscreen dialogs has been determined. */
FullscreenTakeover.tags = ["is-hidden-story"];

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
	},
};
