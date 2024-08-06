import { withUnderlayWrapper } from "@spectrum-css/preview/decorators";
import modes, { disableDefaultModes, mobile } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { version } from "../package.json";
import {
	Template,
	DialogGroup,
} from "./template";

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
		isOpen,
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
		isOpen: true,
		showModal: true,
		size: "medium",
		hasHeroImage: false,
	},
	parameters: {
		docs: {
			story: {
				inline: false,
				height: "500px",
			},
		},
		componentVersion: version,
	},
	decorators: [
		withUnderlayWrapper,
	],
};

// the "TallerViewport" modes are accommodating the underlay, which is position: fixed,
// and Chromatic's treatment of position:fixed elements. By increasing the viewport height,
// it doesn't look like the background color just stops without wrapping the
// entire container of templates.
const defaultModesWithTallerViewport = Object.keys(modes).reduce((acc, key) => {
	acc[key] = { 
		...modes[key],
		viewport: {
			height: "4000px",
		}
	};
	return acc;
}, {});

const mobileModeWithTallerViewport = Object.keys(mobile).reduce((acc, key) => {
	acc[key] = { 
		...mobile[key],
		viewport: {
			height: "1000px",
		}
	};
	return acc;
}, {});

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
export const Default = DialogGroup.bind({});
Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	content: [
		(passthroughs, context) => Typography({
			semantics: "body",
			size: "m",
			content: ExampleContent,
			...passthroughs,
		}, context),
	],
};
Default.parameters = {
	chromatic: {
		modes: {
			...defaultModesWithTallerViewport,
			...mobileModeWithTallerViewport }
	},
};

// ********* DOCS ONLY ********* //
export const DefaultSmall = Template.bind({});
DefaultSmall.tags = ["autodocs", "!dev"];
DefaultSmall.storyName = "Dialog - small",
DefaultSmall.parameters = {
	chromatic: { disableSnapshot: true },
};
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
DefaultLarge.parameters = {
	chromatic: { disableSnapshot: true },
};
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
Dismissible.parameters = {
	chromatic: { disableSnapshot: true },
};
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
NoDivider.parameters = {
	chromatic: { disableSnapshot: true },
};
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
	chromatic: { disableSnapshot: true },
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
Fullscreen.parameters = {
	chromatic: { disableSnapshot: true },
};
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
FullscreenTakeover.parameters = {
	chromatic: { disableSnapshot: true },
};
FullscreenTakeover.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	showModal: true,
	layout: "fullscreenTakeover",
	content: [
		() => ExampleContent
	],
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
