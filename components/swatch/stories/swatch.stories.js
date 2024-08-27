import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isSelected, size } from "@spectrum-css/preview/types";
import { Sizes } from "@spectrum-css/preview/decorators";
import pkgJson from "../package.json";
import { SwatchGroup } from "./swatch.test.js";
import { Template, DisabledGroup, NothingGroup, RoundingGroup, BorderGroup } from "./template"; //SwatchGroup,

/**
 * A swatch shows a small sample of a fill--such as a color, gradient, texture, or material--that is intended to be applied to an object.
 * 
 * ## Usage notes
 * 
 * Set `--spectrum-picked-color` to customize the swatch fill background color.
 */
export default {
	title: "Swatch",
	component: "Swatch",
	argTypes: {
		size: size(["xs", "s", "m", "l"]),
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
		isDisabled,
		isSelected,
		withBorder: {
			name: "Border",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["default", "noBorder", "lightBorder"],
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
		imageUrl: {
			name: "Image url",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
		gradient: {
			name: "Gradient values",
			description: "Input an example gradient.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
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
		packageJson: pkgJson,
	},
};

/**
 * The medium size is the default and most frequently used option. By default, a swatch has a square shape.
 */
export const Default = SwatchGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A swatch in a disabled state shows that the swatch exists, but is not available in that circumstance. Even though swatches can have a disabled state, hide unavailable swatches when possible to reduce visual clutter and ease cognitive load. Only show disabled swatches if hiding them would cause confusion to your users.
 */
export const Disabled = (args, context) => Sizes({
	Template: DisabledGroup,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Default rounding and full rounding are usually used when a swatch is presented by itself near other components. A rounding of “none” is used in a swatch group to help minimize the Hermann grid illusion that happens at the intersections of white space in the group.
 */
export const Rounding = RoundingGroup.bind({});
Rounding.tags = ["!dev"];
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
Selected.tags = ["!dev"];
Selected.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * By default, swatches have a border. However, when swatches are used within a swatch group, there are additional border considerations. 
 * - When color swatches are used in a [swatch group](?path=/docs/components-swatch-group--docs), they typically have the `.spectrum-Swatch--noBorder` class.
 * - When and only when color swatches used in a swatch group have low contrast (below 3:1 contrast with the background), those swatches will have a less prominent border compared to the swatch component when used by itself. They individually use the `.spectrum-Swatch--lightBorder` class.
 */
export const Border = BorderGroup.bind({});
Border.tags = ["!dev"];
Border.parameters = {
	chromatic: { disableSnapshot: true },
};

/** 
 * Swatches can also have a rectangle shape with an aspect ratio of 2:1. The square shape is the default and is used in swatch groups (e.g., a palette of colors).
 */
export const Rectangle = Template.bind({});
Rectangle.args = {
	isRectangle: true,
};
Rectangle.tags = ["!dev"];
Rectangle.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Nothing = (args, context) => Sizes({
	Template: NothingGroup,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Nothing.args = {
	swatchColor: "transparent",
};
Nothing.tags = ["!dev"];
Nothing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a swatch represents multiple values that are not identical, the preview shows a `gray-50` fill and a dash UI icon.
 */
export const MixedValue = Template.bind({});
MixedValue.args = {
	isMixedValue: true,
};
MixedValue.tags = ["!dev"];
MixedValue.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Gradient = Template.bind({});
Gradient.args = {
	gradient: "linear-gradient(to right, rgba(0, 0, 0, 88%), rgb(174, 216, 230))",
};
Gradient.tags = ["!dev"];
Gradient.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Image = Template.bind({});
Image.args = {
	imageUrl: "example-ava@2x.png",
};
Image.tags = ["!dev"];
Image.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = SwatchGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
