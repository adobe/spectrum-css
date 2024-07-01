import { Template } from "./template";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

/**
 * A dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions.
 * 
 * The alert variants that were previously a part of Dialog were moved to their own component, [Alert Dialog](/docs/components-alert-dialog--docs).
 */
export default {
	title: "Dialog",
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
		content: { table: { disable: true } },
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
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["fullscreen", "fullscreenTakeover"],
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
		},
		hasDivider: {
			name: "Divider",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
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
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
		},
		heroImageUrl: {
			name: "Hero Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "hasHeroImage", truthy: true },
		},
	},
	args: {
		rootClass: "spectrum-Dialog",
		isDismissible: false,
		hasDivider: true,
		showModal: false,
		isOpen: true,
		size: "medium",
		hasHeroImage: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Dialog button"],
		},
		docs: {
			story: {
				inline: false,
				height: "500px",
			},
		},
	},
};

const ExampleContent = Typography({
	semantics: "body",
	size: "m",
	content: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis."
	]
});

/**
 * The default size for dialog is medium.
 */
export const Default = Template.bind({});
Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	content: [
		() => ExampleContent
	],
};

/*
 * Stories for "docs only."
 */
export const DefaultSmall = Template.bind({});
DefaultSmall.tags = ["autodocs", "!dev"];
DefaultSmall.storyName = "Dialog - small",
DefaultSmall.parameters = {};
DefaultSmall.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	size: "small",
	content: [
		() => ExampleContent
	],
};

export const DefaultLarge = Template.bind({});
DefaultLarge.tags = ["autodocs", "!dev"];
DefaultLarge.storyName = "Dialog - large",
DefaultLarge.parameters = {};
DefaultLarge.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	size: "large",
	content: [
		() => ExampleContent
	],
};

/**
 * A dialog that can be dismissed without taking an action. Dismissible dialogs should never have buttons.
 */
export const Dismissible = Template.bind({});
Dismissible.tags = ["autodocs", "!dev"];
Dismissible.parameters = {};
Dismissible.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	isDismissible: true,
	content: [
		() => ExampleContent
	],
};

/**
 * Dialogs can forgo the divider if they have content that spans the entire width of the dialog.
 */
export const NoDivider = Template.bind({});
NoDivider.tags = ["autodocs", "!dev"];
NoDivider.parameters = {};
NoDivider.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	isDismissible: true,
	hasDivider: false,
	content: [
		() => ExampleContent
	],
};

/**
 * Dialogs can have a hero or cover image header.
 */
export const WithHero = Template.bind({});
WithHero.tags = ["autodocs", "!dev"];
WithHero.parameters = {
	docs: {
		story: {
			height: "650px",
		},
	},
};
WithHero.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	isDismissible: true,
	showModal: true,
	hasHeroImage: true,
	heroImageUrl: "example-card-portrait.png",
	content: [
		() => ExampleContent
	],
};

/**
 * The content inside the body area can scroll when necessary.
 */
export const WithScroll = Template.bind({});
WithScroll.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	content: [
		() => ExampleContent, ExampleContent, ExampleContent, ExampleContent
	],
	customStyles: {
		"max-block-size": "400px",
	}
};
WithScroll.tags = ["autodocs", "!dev"];
WithScroll.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A fullscreen dialog will automatically fill almost all of the available screen space. A margin is included around the outside of the dialog.
 */
export const Fullscreen = Template.bind({});
Fullscreen.tags = ["autodocs", "!dev"];
Fullscreen.parameters = {};
Fullscreen.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	layout: "fullscreen",
	content: [
		() => ExampleContent
	],
};

/**
 * A fullscreen takeover dialog will fill all of the available screen space.
 */
export const FullscreenTakeover = Template.bind({});
FullscreenTakeover.tags = ["autodocs", "!dev"];
FullscreenTakeover.parameters = {};
FullscreenTakeover.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	layout: "fullscreenTakeover",
	content: [
		() => ExampleContent
	],
};
