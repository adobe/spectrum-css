import { withUnderlayWrapper } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen, size } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { DialogFullscreen, DialogFullscreenTakeover, DialogGroup } from "./dialog.test.js";
import { Template } from "./template.js";

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
		hasFooter: {
			name: "Has footer",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
		},
		footer: { table: { disable: true } },
		size: size(["s", "m", "l"]),
		layout: {
			name: "Layout",
			type: { name: "string" },
			defaultValue: "Default",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "Default" },
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
		isOpen,
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
		isDismissible: false,
		hasDivider: true,
		isOpen: true,
		showModal: true,
		size: "m",
		layout: "default",
	},
	parameters: {
		layout: "fullscreen",
		actions: {
			handles: ["click .spectrum-Dialog button"],
		},
		docs: {
			story: {
				// TODO: restore `inline: false,`
				height: "500px",
			},
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=839-1128",
		},
		packageJson,
		metadata,
	},
	decorators: [
		withUnderlayWrapper,
	],
};

const ExampleContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis.";

/**
 * The default size for dialog is medium.
 */
export const Default = DialogGroup.bind({});
Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	content: [
		(passthroughs, context) => Typography({
			semantics: "body",
			size: "m",
			content: [ ExampleContent ],
			...passthroughs,
		}, context),
	],
};

// ********* DOCS ONLY ********* //
export const DefaultSmall = Template.bind({});
DefaultSmall.tags = ["!dev"];
DefaultSmall.storyName = "Dialog - small",
DefaultSmall.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultSmall.args = {
	...Default.args,
	size: "s",
};

export const DefaultLarge = Template.bind({});
DefaultLarge.tags = ["!dev"];
DefaultLarge.storyName = "Dialog - large",
DefaultLarge.parameters = {
	chromatic: { disableSnapshot: true },
};
DefaultLarge.args = {
	...Default.args,
	size: "l",
};

/**
 * A dialog that can be dismissed without taking an action. Dismissible dialogs should never have buttons.
 */
export const Dismissible = Template.bind({});
Dismissible.tags = ["!dev"];
Dismissible.parameters = {
	chromatic: { disableSnapshot: true },
};
Dismissible.args = {
	...Default.args,
	isDismissible: true,
};

/**
 * Dialogs can forgo the divider if they have content that spans the entire width of the dialog.
 */
export const NoDivider = Template.bind({});
NoDivider.tags = ["!dev"];
NoDivider.parameters = {
	chromatic: { disableSnapshot: true },
};
NoDivider.args = {
	...Default.args,
	isDismissible: true,
	hasDivider: false,
};

/**
 * Dialogs can have a hero or cover image header.
 */
export const WithHero = Template.bind({});
WithHero.tags = ["!dev"];
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
	isDismissible: true,
	hasHeroImage: true,
	heroImageUrl: "example-card-portrait.png",
};

/**
 * The content inside the body area can scroll when necessary.
 */
export const WithScroll = Template.bind({});
WithScroll.args = {
	...Default.args,
	customStyles: {
		"max-block-size": "400px",
	}
};
WithScroll.tags = ["!dev"];
WithScroll.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A fullscreen dialog will automatically fill almost all of the available screen space. A margin is included around the outside of the dialog.
 */
export const Fullscreen = DialogFullscreen.bind({});
Fullscreen.parameters = {
	chromatic: { disableSnapshot: true },
	design: {
		type: "figma",
		url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=61935-5399",
	},
};
Fullscreen.args = {
	...Default.args,
	layout: "fullscreen",
};

/**
 * A fullscreen takeover dialog will fill all of the available screen space.
 */
export const FullscreenTakeover = DialogFullscreenTakeover.bind({});
FullscreenTakeover.parameters = {
	chromatic: { disableSnapshot: true },
	design: {
		type: "figma",
		url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=61935-5399",
	},
};
FullscreenTakeover.args = {
	...Default.args,
	layout: "fullscreenTakeover",
	content: [ () => Typography({
		semantics: "body",
		size: "m",
		content: [ ExampleContent, ExampleContent, ExampleContent, ExampleContent ],
	})],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = DialogGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
