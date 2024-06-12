import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { AssetCardGroup, Template } from "./template";

/**
 * The asset card component allows users to select and manage assets and their metadata in a grid.
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
		isSelected: {
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		componentVersion: version,
	},
};

export const Default = AssetCardGroup.bind({});
Default.args = {
	title: "Portrait asset",
	exampleImage: "portrait",
	content: ["Image"],
};

// ********* DOCS ONLY ********* //
export const Portrait = Template.bind({});
Portrait.args = {
	title: "Portrait asset",
	exampleImage: "portrait",
	content: ["Image"],
};
Portrait.tags = ["docs-only"];
Portrait.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Landscape = Template.bind({});
Landscape.args = {
	title: "Landscape asset",
	exampleImage: "landscape",
};
Landscape.tags = ["docs-only"];
Landscape.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Square = Template.bind({});
Square.args = {
	title: "Square asset",
	exampleImage: "square",
};
Square.tags = ["docs-only"];
Square.parameters = {
	chromatic: { disableSnapshot: true },
};

export const OptionalContent = Template.bind({});
OptionalContent.args = {
	title: "MVI_0123.mp4",
	headerContent: "39:02",
	exampleImage: "square",
};
OptionalContent.tags = ["docs-only"];
OptionalContent.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HighlightSelection = Template.bind({});
HighlightSelection.args = {
	title: "Highlight selection",
	selection: "highlight",
	exampleImage: "portrait",
	isSelected: true,
};
HighlightSelection.tags = ["docs-only"];
HighlightSelection.parameters = {
	chromatic: { disableSnapshot: true },
};

export const CheckboxSelection = Template.bind({});
CheckboxSelection.args = {
	title: "Checkbox selection",
	selection: "checkbox",
	exampleImage: "portrait",
	isSelected: true,
};
CheckboxSelection.tags = ["docs-only"];
CheckboxSelection.parameters = {
	chromatic: { disableSnapshot: true },
};

export const OrderedSelection = Template.bind({});
OrderedSelection.args = {
	title: "Ordered selection",
	selection: "ordered",
	isSelected: true,
	exampleImage: "landscape",
};
OrderedSelection.tags = ["docs-only"];
OrderedSelection.parameters = {
	chromatic: { disableSnapshot: true },
};

export const DropTarget = Template.bind({});
DropTarget.args = {
	title: "Drop target",
	selection: "highlight",
	isDropTarget: true,
	exampleImage: "portrait",
	isSelected: true,
};
DropTarget.tags = ["docs-only"];
DropTarget.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
