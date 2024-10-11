import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import {
	DocsBodyVariants,
	DocsCodeVariants,
	DocsDetailVariants,
	DocsHeadingBodyPairing,
	DocsHeadingVariants,
	DocsInternationalizedBodyVariants,
	DocsInternationalizedCodeVariants,
	DocsInternationalizedDetailVariants,
	DocsInternationalizedHeadingBodyPairing,
	DocsInternationalizedHeadingVariants, Template
} from "./template.js";
import { TypographyGroup } from "./typography.test.js";

/**
 * Spectrum typography is broken out into several separate components: heading, body, detail, and code. Internationalized typography examples are also shown.
 */
export default {
	title: "Typography",
	component: "Typography",
	argTypes: {
		semantics: {
			name: "Semantic type",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				disable: true,
			},
			options: ["heading", "body", "detail", "code"],
			control: "inline-radio",
		},
		size: size(["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"]),
		weight: {
			name: "Weight",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["heavy", "light"],
			control: "inline-radio",
			if: { arg: "semantics", eq: "heading"}
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["strong", "emphasized"],
			control: "inline-check",
		},
		glyph: {
			name: "Glyph style",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["serif", "sans-serif"],
			control: "inline-radio",
			if: { arg: "semantics", neq: "code" },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Typography",
		size: "m",
		glyph: "sans-serif",
		semantics: "body",
	},
	parameters: {
		packageJson,
		metadata,
	},
};

/**
 * By default, Typography components do not include outer margins. If you would like to add margins, simply add the `.spectrum-Typography` class to your container, and every typography component inside of your container will have the correct margins.
 */
export const Default = TypographyGroup.bind({});
Default.args = {
	content: [
		{
			semantics: "heading",
			content: ["Aliquet mauris eu"],
		},
		{
			content: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
			],
		},
		{
			variant: ["emphasized"],
			content: [
				"Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			],
		},
		{
			semantics: "code",
			content: ["console.log('Hello World!');"],
		},
		{
			semantics: "detail",
			content: ["", "Aliquet mauris eu"],
		},
		{
			content: [
				"Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			],
		},
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TypographyGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

// ====== Docs: Sizing ====== //
export const HeadingSizes = (args, context) => Sizes({
	Template,
	direction: "column",
	...args,
}, context);
HeadingSizes.tags = ["!dev"];
HeadingSizes.args = {
	semantics: "heading",
	content: ["Aliquet mauris eu"],
};
HeadingSizes.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Body is primarily used for Spectrum components and for blocks of text.
 */
export const BodySizes = (args, context) => Sizes({
	Template,
	direction: "column",
	...args,
}, context);
BodySizes.argTypes = {
	size: size(["xs", "s", "m", "l", "xl", "xxl", "xxxl"]),
};
BodySizes.tags = ["!dev"];
BodySizes.args = {
	semantics: "body",
	content: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
	],
};
BodySizes.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When typography elements are paired, such as with heading and body below, clear content hierarchies are shown.
 *
 * Note that the body component is not available in XXS, but the XXS heading can be paired with the XS body as seen here.
 */
export const HeadingBodyHierarchy = (args, context) => Sizes({
	Template: DocsHeadingBodyPairing,
	direction: "column",
	withBorder: false,
	...args,
}, context);
HeadingBodyHierarchy.argTypes = {
	size: size(["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"]),
};
HeadingBodyHierarchy.tags = ["!dev"];
HeadingBodyHierarchy.parameters = {
	chromatic: { disableSnapshot: true },
};

export const DetailSizes = (args, context) => Sizes({
	Template,
	direction: "column",
	...args,
}, context);
DetailSizes.argTypes = {
	size: size(["s", "m", "l", "xl"]),
	weight: {
		options: ["light"],
		if: { arg: "semantics", eq: "detail"},
	},
};
DetailSizes.args = {
	semantics: "detail",
	content: ["Aliquet Mauris Eu"],
};
DetailSizes.tags = ["!dev"];
DetailSizes.parameters = {
	chromatic: { disableSnapshot: true },
};

export const CodeSizes = (args, context) => Sizes({
	Template,
	direction: "column",
	...args,
}, context);
CodeSizes.tags = ["!dev"];
CodeSizes.argTypes = {
	size: size(["xs", "s", "m", "l", "xl"]),
};
CodeSizes.args = {
	semantics: "code",
	content: ["console.log('Hello World!');"],
};
CodeSizes.parameters = {
	chromatic: { disableSnapshot: true },
};

// ====== Docs: Glyphs and Variants ====== //
/**
 * Heading is a typography component used to create various levels of hierarchies between text.
 */
export const HeadingVariants = DocsHeadingVariants.bind({});
HeadingVariants.tags = ["!dev"];
HeadingVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Body is a typography component primarily used within Spectrum components and for blocks of text.
 */
export const BodyVariants = DocsBodyVariants.bind({});
BodyVariants.tags = ["!dev"];
BodyVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 *  Detail is used for disclosing extra information or smaller items in hierarchical relationships of text.
 */
export const DetailVariants = DocsDetailVariants.bind({});
DetailVariants.tags = ["!dev"];
DetailVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Code is used for text that represents code.
 *
 * Multi-line blocks of code may be wrapped with `<pre>` tags to allow block formatting.
 */
export const CodeVariants = DocsCodeVariants.bind({});
CodeVariants.tags = ["!dev"];
CodeVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

// ====== Docs: Internationalization ====== //
/**
 * We should note that Hebrew and Arabic are rtl languages somewhere over here.
 */
export const InternationalizedHeading = DocsInternationalizedHeadingVariants.bind({});
InternationalizedHeading.storyName = "Internationalized Heading";
InternationalizedHeading.tags = ["!dev"];
InternationalizedHeading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InternationalizedBody = DocsInternationalizedBodyVariants.bind({});
InternationalizedBody.storyName = "Internationalized Body";
InternationalizedBody.tags = ["!dev"];
InternationalizedBody.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Typographic pairings of heading and body using the Adobe Clean Han font.
 *
 * Note that the body component is not available in XXS, but the XXS heading can be paired with the XS body as seen here.
 */
export const InternationalizedHeadingBodyHierarchy = (args, context) => Sizes({
	Template: DocsInternationalizedHeadingBodyPairing,
	direction: "column",
	withBorder: false,
	...args,
}, context);
InternationalizedHeadingBodyHierarchy.argTypes = {
	size: size(["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"]),
};
InternationalizedHeadingBodyHierarchy.tags = ["!dev"];
InternationalizedHeadingBodyHierarchy.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InternationalizedDetail = DocsInternationalizedDetailVariants.bind({});
InternationalizedDetail.storyName = "Internationalized Detail";
InternationalizedDetail.tags = ["!dev"];
InternationalizedDetail.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InternationalizedCode = DocsInternationalizedCodeVariants.bind({});
InternationalizedCode.storyName = "Internationalized Code";
InternationalizedCode.tags = ["!dev"];
InternationalizedCode.parameters = {
	chromatic: { disableSnapshot: true },
};
