import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isSelected } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { AssetCardGroup } from "./assetcard.test.js";
import { Template } from "./template.js";

/**
 * The asset card component allows users to select and manage assets and their metadata in a grid.
 *
 * ## Usage notes
 * Set the `--spectrum-assetcard-asset-size` custom property to the size at which you want to display the asset.
 *
 */
export default {
	title: "Asset card",
	component: "AssetCard",
	argTypes: {
		image: {
			name: "Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
		exampleImage: {
			name: "Example images",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["landscape", "portrait", "square"],
			control: "select",
			if: { arg: "image", truthy: false },
		},
		title: {
			name: "Title",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		headerContent: {
			name: "Additional header content",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		content: { table: { disable: true } },
		selection: {
			name: "Selection styles",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				disable: true,
			},
			options: ["checkbox", "highlight", "ordered"],
			control: "select",
		},
		isSelected,
		isFocused,
		isDropTarget: {
			name: "Drop target",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-AssetCard",
		selection: "checkbox",
		isSelected: false,
		isFocused: false,
		isDropTarget: false,
	},
	parameters: {
		actions: {
			handles: [...(Checkbox.parameters?.actions?.handles ?? [])],
		},
		packageJson,
		metadata,
	},
};

export const Default = AssetCardGroup.bind({});
Default.args = {
	title: "Portrait asset",
	exampleImage: "portrait",
	content: ["Image"],
};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * Inside the tile, an asset card displays the preview of the item it represents. The preview has different styles, depending on the type of item.
 *
 * The default asset card is also referred to as "portrait." */
export const Portrait = Template.bind({});
Portrait.args = {
	title: "Portrait asset",
	exampleImage: "portrait",
	content: ["Image"],
};
Portrait.tags = ["!dev"];
Portrait.parameters = {
	chromatic: { disableSnapshot: true },
};
Portrait.storyName = "Default";

export const Landscape = Template.bind({});
Landscape.args = {
	title: "Landscape asset",
	exampleImage: "landscape",
};
Landscape.tags = ["!dev"];
Landscape.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Square = Template.bind({});
Square.args = {
	title: "Square asset",
	exampleImage: "square",
};
Square.tags = ["!dev"];
Square.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Asset cards have two optional content areas for extra information: `.spectrum-AssetCard-content` and `.spectrum-AssetCard-headerContent`. These content areas can include time stamps, non-interactive rating indicators, colored labels, badges, and more.
 */
export const OptionalContent = Template.bind({});
OptionalContent.args = {
	title: "MVI_0123.mp4",
	headerContent: "39:02",
	exampleImage: "square",
};
OptionalContent.tags = ["!dev"];
OptionalContent.parameters = {
	chromatic: { disableSnapshot: true },
};
OptionalContent.storyName = "Optional content";

/**
 * Sometimes it may not make sense to use checkboxes to indicate selection. In those rare cases, show a highlighted state when a user is inspecting one or more cards.
 */
export const HighlightSelection = Template.bind({});
HighlightSelection.args = {
	title: "Highlight selection",
	selection: "highlight",
	exampleImage: "portrait",
	isSelected: true,
};
HighlightSelection.tags = ["!dev"];
HighlightSelection.parameters = {
	chromatic: { disableSnapshot: true },
};
HighlightSelection.storyName = "Selection - highlight";

/**
 * Some cards allow selection, on which the user can take an action. Both single-select and multi-select cards have checkboxes on the top left of the card (or in the top right for RTL languages).
 */
export const CheckboxSelection = Template.bind({});
CheckboxSelection.args = {
	title: "Checkbox selection",
	selection: "checkbox",
	exampleImage: "portrait",
	isSelected: true,
};
CheckboxSelection.tags = ["!dev"];
CheckboxSelection.parameters = {
	chromatic: { disableSnapshot: true },
};
CheckboxSelection.storyName = "Selection - checkbox";

/**
 * In cases where it’s important for users to know the order in which they have selected multiple cards — for example, to add video clips to a sequence — use ordered selection. Ordered selection must be multi-selectable.
 */
export const OrderedSelection = Template.bind({});
OrderedSelection.args = {
	title: "Ordered selection",
	selection: "ordered",
	isSelected: true,
	exampleImage: "landscape",
};
OrderedSelection.tags = ["!dev"];
OrderedSelection.parameters = {
	chromatic: { disableSnapshot: true },
};
OrderedSelection.storyName = "Selection - ordered";

export const DropTarget = Template.bind({});
DropTarget.args = {
	title: "Drop target",
	selection: "highlight",
	isDropTarget: true,
	exampleImage: "portrait",
	isSelected: true,
};
DropTarget.tags = ["!dev"];
DropTarget.parameters = {
	chromatic: { disableSnapshot: true },
};
DropTarget.storyName = "Drop target";

// ********* VRT ONLY ********* //
export const WithForcedColors = AssetCardGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
