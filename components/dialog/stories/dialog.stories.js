import { withUnderlayWrapper } from "@spectrum-css/preview/decorators";
import modes, { disableDefaultModes, mobile } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { version } from "../package.json";
import { DialogFullscreen, DialogFullscreenTakeover, DialogGroup } from "./template";

/**
 * A dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions.
 */
export default {
	title: "Dialog",
	component: "Dialog",
	argTypes: {
		heading: { table: { disable: true } },
		content: { table: { disable: true } },
		footer: { table: { disable: true } },
		hasFooter: {
			name: "Has footer",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDismissable: {
			name: "Dismissable",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isFullScreen: {
			name: "Fullscreen",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isFullScreenTakeover: {
			name: "Fullscreen takeover",
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
	},
	args: {
		rootClass: "spectrum-Dialog",
		hasFooter: true,
		isDismissable: true,
		isFullScreen: false,
		isFullScreenTakeover: false,
		isOpen: true,
		showModal: true,
	},
	parameters: {
		layout: "fullscreen",
		actions: {
			handles: ["click .spectrum-Dialog button"],
		},
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
			height: "1200px",
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

export const Default = DialogGroup.bind({});
Default.tags = ["autodocs", "dev", "test"];
Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	content: [
		(passthroughs, context) => Typography({
			semantics: "body",
			size: "m",
			content: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis."
			],
			...passthroughs,
		}, context),
	],
};
Default.parameters = {
	chromatic: {
		modes: {
			...defaultModesWithTallerViewport,
			...mobileModeWithTallerViewport
		}
	},
};

export const Fullscreen = DialogFullscreen.bind({});
Fullscreen.tags = ["!autodocs", "dev", "test"];
Fullscreen.args = {
	...Default.args,
};

export const FullscreenTakeover = DialogFullscreenTakeover.bind({});
FullscreenTakeover.tags = ["!autodocs", "dev", "test"];
FullscreenTakeover.args = {
	...Default.args,
};


// ********* VRT ONLY ********* //
export const WithForcedColors = DialogGroup.bind({});
WithForcedColors.args = {
	...Default.args,
};
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
