import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Sizes } from "@spectrum-css/preview/decorators";
import { default as Swatch } from "@spectrum-css/swatch/stories/swatch.stories.js";
import pkgJson from "../package.json";
import { SwatchgroupGroup } from "./swatchgroup.test.js";
import { Template, RoundingTemplate } from "./template";

/**
 * The swatch group component is a collection of [swatches](?path=/docs/components-swatch--docs).
 * 
 * ## Usage notes
 * 
 * ### Corner rounding in swatch groups
 * 
 * A corner rounding of “none” (`.spectrum-Swatch--roundingNone` class) should be used in a swatch group in order to help minimize the Hermann grid illusion that happens at the intersections of the white space within the group.
 * 
 * The only exception is when a swatch group only takes up a single row. In that case, use any of the rounding options.
 * 
 * ### Border only for low-contrast swatches
 * 
 * When swatches within a swatch group have low contrast (below 3:1 contrast with the background), they have a less prominent border compared to the swatch component when used by itself, and should have the `.spectrum-Swatch--lightBorder` class. Low contrast color swatches have a border of `gray-900` at 20% opacity. This reduces the likelihood of the UI interfering with color perception and comparisons.
 * 
 * Otherwise, swatches within a swatch group should have the `.spectrum-Swatch--noBorder` class. 
 * 
 * ### Density
 * 
 * Swatch groups come in 3 densities: regular (default), compact, and spacious. Compact and spacious densities retain the same swatch size as regular density, but have less or more padding between each swatch, respectively.
 */
export default {
	title: "Swatch group",
	component: "SwatchGroup",
	argTypes: {
		...Swatch.argTypes,
		swatchColor: { table: { disable: true } },
		isRectangle: { table: { disable: true } },
		imageUrl: { table: { disable: true } },
		isMixedValue: { table: { disable: true } },
		gradient: { table: { disable: true } },
		density: {
			name: "Density",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["regular", "compact", "spacious"],
			control: "select",
		},
		items: {
			name: "Swatches",
			table: { disable: true },
		},
		containerWidth: {
			name: "Container width",
			table: { disable: true },
		},
		rounding: {
			...Swatch.argTypes.rounding,
			description: "Only use rounded swatches if there is a single row.",
			defaultValue: "none",
			table: {
				type: { summary: "string", required: true },
				category: "Component",
				defaultValue: { summary: "None", },
			},
		},
		borderStyle: {
			...Swatch.argTypes.borderStyle,
			defaultValue: "noBorder",
			description: "Apply the `spectrum-Swatch--lightBorder` class to a swatch in the swatch group when it has a color contrast ratio of less than 3:1.",
			table: {
				type: { summary: "string", required: true },
				category: "Component",
				defaultValue: { summary: "No Border" },
			},
			options: ["noBorder", "lightBorder"],
		},
	},
	args: {
		rootClass: "spectrum-SwatchGroup",
		size: "m",
		density: "regular",
		rounding: "none",
		containerWidth: "200px",
		isDisabled: false,
		isSelected: false,
		items: [
			{swatchColor: "rgb(22, 135, 140)",},
			{swatchColor: "rgb(33, 132, 113)",},
			{swatchColor: "rgb(254, 132, 152)",},
			{swatchColor: "rgb(255, 127, 96)",},
			{swatchColor: "rgb(255, 209, 24)",},
			{swatchColor: "rgb(120, 91, 199)",},
			{swatchColor: "rgb(225, 234, 119)",},
			{swatchColor: "rgb(0, 225, 171)",},
			{swatchColor: "rgb(248, 239, 187)",},
			{swatchColor: "rgb(254, 205, 215)",},
			{swatchColor: "rgb(212, 182, 237)",},
			{swatchColor: "rgb(153, 219, 244)",},
			{swatchColor: "rgb(171, 238, 221)",},
			{swatchColor: "rgb(187, 182, 175)",},
			{swatchColor: "rgb(238, 211, 190)",},
			{swatchColor: "rgb(0, 143, 242)",},
			{swatchColor: "rgb(60, 49, 199)",},
			{swatchColor: "rgb(254, 71, 144)",},
		],
	},
	parameters: {
		actions: {
			handles: [
				...(Swatch.parameters?.actions?.handles ?? []),
			],
		},
		packageJson: pkgJson,
	},
};

/**
 * The default swatch group has regular density.
 */
export const Default = SwatchgroupGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Compact = Template.bind({});
Compact.args = {
	density: "compact",
};
Compact.tags = ["!dev"];
Compact.parameters = {
	chromatic: { disableSnapshot: true },
};
Compact.storyName = "Density - Compact";

export const Spacious = Template.bind({});
Spacious.args = {
	density: "spacious",
};
Spacious.tags = ["!dev"];
Spacious.parameters = {
	chromatic: { disableSnapshot: true },
};
Spacious.storyName = "Density - Spacious";

/**
 * Only use rounded swatches if there is a single row.
 */
export const Rounding = RoundingTemplate.bind({});
Rounding.args = {};
Rounding.tags = ["!dev"];
Rounding.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Use any size swatches as necessary. The medium size is the default option. This only affects the size of each individual swatch, not the spacing between them.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false, 
	...args,
}, context);
Sizing.args = Default.args;
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * In this example, the lower contrast swatches utilize the `.spectrum-Swatch--lightBorder` class.
 */
export const WithLightBorder = Template.bind({});
WithLightBorder.args = {
	items: [
		{swatchColor: "rgb(22, 135, 140)",},
		{swatchColor: "rgb(33, 132, 113)",},
		{swatchColor: "rgb(254, 132, 152)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(255, 127, 96)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(255, 209, 24)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(120, 91, 199)",},
		{swatchColor: "rgb(225, 234, 119)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(0, 225, 171)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(248, 239, 187)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(254, 205, 215)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(212, 182, 237)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(153, 219, 244)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(171, 238, 221)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(187, 182, 175)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(238, 211, 190)", borderStyle: "lightBorder",},
		{swatchColor: "rgb(0, 143, 242)",},
		{swatchColor: "rgb(60, 49, 199)",},
		{swatchColor: "rgb(254, 71, 144)",},
	],
};
WithLightBorder.tags = ["!dev"];
WithLightBorder.storyName = "With light border";
WithLightBorder.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = SwatchgroupGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
