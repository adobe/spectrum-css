import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { default as Swatch } from "@spectrum-css/swatch/stories/swatch.stories.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { SwatchgroupGroup } from "./swatchgroup.test.js";
import { RoundingTemplate, Template } from "./template.js";

/**
 * The swatch group component is a collection of [swatches](?path=/docs/components-swatch--docs).
 *
 * ## Usage notes
 *
 * The border opacity of swatches in a swatch group is 20%.
 *
 * ### Density
 *
 * Swatch groups come in several densities: medium (default), extra small, small and large. Each density retains the same swatch size, but have less or more padding between each swatch, respectively.
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
		isKeyboardFocused: { table: { disable: true } },
		isDisabled: { table: { disable: true } },
		isSelected: { table: { disable: true } },
		isAddSwatch: { table: { disable: true } },
		density: {
			name: "Density",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["sizeXS", "sizeS", "sizeM", "sizeL"],
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
		tags: ["migrated"],
	},
	args: {
		rootClass: "spectrum-SwatchGroup",
		density: "sizeM",
		borderStyle: "noBorder",
		containerWidth: "200px",
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=57008-1093",
		},
		packageJson,
		metadata,
	},
};

/**
 * The default swatch group has medium density.
 */
export const Default = SwatchgroupGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
	density: "sizeXS",
};
ExtraSmall.tags = ["!dev"];
ExtraSmall.parameters = {
	chromatic: { disableSnapshot: true },
};
ExtraSmall.storyName = "Density - extra small";

export const Small = Template.bind({});
Small.args = {
	density: "sizeS",
};
Small.tags = ["!dev"];
Small.parameters = {
	chromatic: { disableSnapshot: true },
};
Small.storyName = "Density - small";

export const Large = Template.bind({});
Large.args = {
	density: "sizeL",
};
Large.tags = ["!dev"];
Large.parameters = {
	chromatic: { disableSnapshot: true },
};
Large.storyName = "Density - large";

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

// ********* VRT ONLY ********* //
export const WithForcedColors = SwatchgroupGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
