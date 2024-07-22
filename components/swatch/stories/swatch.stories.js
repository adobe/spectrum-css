import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isSelected } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { 
	Template,
	States,
	SwatchGroup,
	SizingGroup,
	DisabledGroup,
	NothingGroup,
	RoundingGroup,
	BorderGroup,
} from "./template";

/**
 * A swatch shows a small sample of a fill — such as a color, gradient, texture, or material — that is intended to be applied to an object.
 * 
 * ## Usage notes
 * 
 * Set `--spectrum-picked-color` to customize the swatch fill background color.
 */
export default {
	title: "Swatch",
	component: "Swatch",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l",],
			control: "select",
		},
		swatchColor: {
			name: "Color",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
		},
		rounding: {
			name: "Rounding",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["none", "default", "full"],
			control: "select",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isSelected,
		withBorder: {
			name: "Border",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["default", "noBorder"],
			control: "select",
		},
		isRectangle: {
			name: "Rectangle",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isImage: {
			name: "Image swatch",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
		},
		imageUrl: {
			name: "Image url",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "isImage", truthy: true },
		},
		isGradient: {
			name: "Gradient",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		gradient: {
			name: "Gradient values",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
			if: { arg: "isGradient", truthy: true },
		},
		isMixedValue: {
			name: "Mixed value",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Swatch",
		size: "m",
		isSelected: false,
		isDisabled: false,
		rounding: "regular",
		swatchColor: "rgb(174, 216, 230)",
		withBorder: "default",
		isRectangle: false,
		isMixedValue: false,
	},
	parameters: {
		componentVersion: version,
		docs: {
			story: {
				height: "50px",
			},
		},
	},
};

export const Default = SwatchGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 */
export const Sizing = SizingGroup.bind({});
Sizing.tags = ["autodocs", "!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A swatch in a disabled state shows that the swatch exists, but is not available in that circumstance. Even though swatches can have a disabled state, hide unavailable swatches when possible to reduce visual clutter and ease cognitive load. Only show disabled swatches if hiding them would cause confusion to your users.
 */
export const Disabled = DisabledGroup.bind({});
Disabled.tags = ["autodocs", "!dev"];

/**
 * Default rounding and full rounding are usually used when a swatch is presented by itself near other components. A rounding of “none” is used in a swatch group to help minimize the Hermann grid illusion that happens at the intersections of white space in the group.
 */
export const Rounding = RoundingGroup.bind({});
Rounding.tags = ["autodocs", "!dev"];
Rounding.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A swatch can have a selected state to allow for selection. This is often used in a [swatch group](?path=/docs/components-swatch-group--docs).
 */
export const Selected = Template.bind({});
Selected.args = {
	isSelected: true,
};
Selected.tags = ["autodocs", "!dev"];

export const Border = BorderGroup.bind({});
Border.tags = ["autodocs", "!dev"];

/** 
 * Swatches can have a square or a rectangle shape with an aspect ratio of 2:1. The square shape is the default and is used in swatch groups (e.g., a palette of colors).
 */
export const Rectangle = Template.bind({});
Rectangle.args = {
	isRectangle: true,
};
Rectangle.tags = ["autodocs", "!dev"];

export const Nothing = NothingGroup.bind({});
Nothing.args = {};
Nothing.tags = ["autodocs", "!dev"];

/**
 * When a swatch represents multiple values that are not identical, the preview shows a gray-50 fill and a dash UI icon.
 */
export const MixedValue = Template.bind({});
MixedValue.args = {
	isMixedValue: true,
	swatchColor: "var(--spectrum-gray-50)",
};
MixedValue.tags = ["autodocs", "!dev"];

export const Gradient = Template.bind({});
Gradient.args = {
	isGradient: true,
	gradient: "linear-gradient(to right, rgba(0, 0, 0, 88%), rgb(174, 216, 230))",
};
Gradient.tags = ["autodocs", "!dev"];

export const Image = Template.bind({});
Image.args = {
	isImage: true,
	imageUrl: "example-ava@2x.png",
};
Image.tags = ["autodocs", "!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = States.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
