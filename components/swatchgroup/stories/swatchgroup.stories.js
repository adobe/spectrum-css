import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { default as Swatch } from "@spectrum-css/swatch/stories/swatch.stories.js";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { SwatchgroupGroup } from "./swatchgroup.test.js";
import { RoundingTemplate, Template } from "./template.js";

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
 * ### Apply border to low-contrast swatches only
 *
 * When swatches within a swatch group have low contrast (below 3:1 contrast with the background), they have a less prominent border compared to a single swatch component used by itself, and should have the `.spectrum-Swatch--lightBorder` class. This reduces the likelihood of the UI interfering with color perception and comparisons. Otherwise, swatches within a swatch group that meet contrast should have the `.spectrum-Swatch--noBorder` class.
 *
 * Implementations should apply the `.spectrum-Swatch--lightBorder` to the individual swatches of a swatch group that do not meet 3:1 contrast.
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
		shape: { table: { disable: true } },
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
				defaultValue: { summary: "none", },
			},
		},
		borderStyle: {
			...Swatch.argTypes.borderStyle,
			defaultValue: "noBorder",
			description: "Apply the `spectrum-Swatch--lightBorder` class to a swatch in the swatch group when it has a color contrast ratio of less than 3:1.",
			table: {
				type: { summary: "string", required: true },
				category: "Component",
				defaultValue: { summary: "noBorder" },
			},
			options: ["noBorder", "lightBorder"],
		},
	},
	args: {
		rootClass: "spectrum-SwatchGroup",
		size: "m",
		density: "regular",
		rounding: "none",
		borderStyle: "noBorder",
		containerWidth: "200px",
		isDisabled: false,
		isSelected: false,
		items: [
			{swatchColor: "rgb(184, 109, 70)",},
			{swatchColor: "rgb(240, 56, 35)",},
			{swatchColor: "rgb(212, 91, 0)",},
			{swatchColor: "rgb(175, 116, 0)",},
			{swatchColor: "rgb(154, 123, 77)",},
			{swatchColor: "rgb(114, 137, 0)"},
			{swatchColor: "rgb(72, 144, 20)"},
			{swatchColor: "rgb(7, 147, 85)"},
			{swatchColor: "rgb(9, 144, 120)"},
			{swatchColor: "rgb(10, 141, 153)"},
			{swatchColor: "rgb(18, 134, 205)"},
			{swatchColor: "rgb(75, 117, 255)"},
			{swatchColor: "rgb(122, 106, 253)"},
			{swatchColor: "rgb(166, 92, 231)"},
			{swatchColor: "rgb(200, 68, 220)"},
			{swatchColor: "rgb(228, 52, 163)"},
			{swatchColor: "rgb(240, 45, 110)"},
		],
	},
	parameters: {
		actions: {
			handles: [
				...(Swatch.parameters?.actions?.handles ?? []),
			],
		},
		packageJson,
		metadata,
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
Rounding.args = {
	items: [
		{swatchColor: "rgb(9, 144, 120)"},
		{swatchColor: "rgb(10, 141, 153)"},
		{swatchColor: "rgb(228, 52, 163)"},
		{swatchColor: "rgb(240, 45, 110)"},
	]
};
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
 * When swatches within a swatch group have low contrast (below 3:1 contrast with the background), the `.spectrum-Swatch--lightBorder` class should be applied to those swatches only.
 *
 * The swatch group example below contains all swatches with low contrast in light mode, therefore each has the `.spectrum-Swatch--lightBorder` class applied.
 */
export const WithLightBorder = Template.bind({});
WithLightBorder.args = {
	borderStyle: "lightBorder",
	items: [
		{swatchColor: "rgb(237, 196, 172)"},
		{swatchColor: "rgb(255, 188, 180)"},
		{swatchColor: "rgb(255, 193, 94)"},
		{swatchColor: "rgb(245, 199, 0)"},
		{swatchColor: "rgb(229, 200, 157)"},
		{swatchColor: "rgb(182, 219, 0)"},
		{swatchColor: "rgb(129, 228, 58)"},
		{swatchColor: "rgb(107, 227, 162)"},
		{swatchColor: "rgb(92, 225, 194)"},
		{swatchColor: "rgb(111, 221, 228)"},
		{swatchColor: "rgb(138, 213, 255)"},
		{swatchColor: "rgb(172, 207, 253)"},
		{swatchColor: "rgb(192, 201, 255)"},
		{swatchColor: "rgb(221, 193, 246)"},
		{swatchColor: "rgb(247, 181, 255)"},
		{swatchColor: "rgb(255, 181, 230)"},
		{swatchColor: "rgb(255, 185, 208)"},
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
