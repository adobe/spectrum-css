import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { html } from "lit";
import { version } from "../package.json";
import { Template } from "./template.js";
import { TypographyGroup } from "./typography.test.js";

/**
 * Spectrum typography is broken out into several separate components.
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
		size: {
			name: "Size",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"],
			control: "select",
		},
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
		componentVersion: version,
	},
};

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
			content: [html`<br/>`, "Aliquet mauris eu"],
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
export const Heading = Template.bind({});
Heading.tags = ["!dev"];
Heading.args = {
	semantics: "heading",
	content: ["Aliquet mauris eu"],
};
Heading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Body = Template.bind({});
Body.tags = ["!dev"];
Body.argTypes = {
	size: {
		name: "Size",
		options: ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
		table: { disable: true },
	},
};
Body.args = {
	semantics: "body",
	content: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
	],
};
Body.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Detail = Template.bind({});
Detail.argTypes = {
	size: {
		name: "Size",
		options: ["s", "m", "l", "xl"],
		table: { disable: true },
	},
	weight: {
		options: ["light"],
		if: { arg: "semantics", eq: "detail"},
	},
};
Detail.args = {
	semantics: "detail",
	content: ["Aliquet Mauris Eu"],
};
Detail.tags = ["!dev"];
Detail.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Code = Template.bind({});
Code.tags = ["!dev"];
Code.argTypes = {
	size: {
		name: "Size",
		options: ["xs", "s", "m", "l", "xl"],
		table: { disable: true },
	},
};
Code.args = {
	semantics: "code",
	content: ["console.log('Hello World!');"],
};
Code.parameters = {
	chromatic: { disableSnapshot: true },
};
