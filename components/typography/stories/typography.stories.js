import { Template } from "./template";

const size = {
	name: "Size",
	type: { name: "string" },
	table: {
		type: { summary: "string" },
		category: "Component",
	},
	options: ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"],
	control: "select",
};

const weight = {
	name: "Weight",
	type: { name: "string" },
	table: {
		type: { summary: "string" },
		category: "Variant",
	},
	options: ["heavy", "light"],
	control: "inline-radio",
	if: { arg: "semantics", eq: "heading"}
};

/**
 * Spectrum typography is broken out into several separate components.
 */
export default {
	title: "Components/Typography",
	component: "Typography",
	argTypes: {
		semantics: {
			name: "Semantic type",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "body" },
				disable: true,
			},
			options: ["heading", "body", "detail", "code"],
			control: "inline-radio",
		},
		size,
		weight,
		variant: {
			name: "Emphasis",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
			},
			options: ["strong", "emphasized"],
			control: "inline-check",
		},
		glyph: {
			name: "Glyph style",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
				defaultValue: { summary: "sans-serif" },
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
		content: [
			{
				semantics: "heading",
				content: ["Aliquet Mauris Eu"],
			},
			{
				content: [
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
					"Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				],
			},
		],
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Heading = Template.bind({});
Heading.args = {
	semantics: "heading",
	content: ["Aliquet Mauris Eu"],
};

export const Body = Template.bind({});
Body.argTypes = {
	size: {
		...size,
		options: ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
	},
};
Body.args = {
	semantics: "body",
	content: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
	],
};

export const Detail = Template.bind({});
Detail.argTypes = {
	size: {
		...size,
		options: ["s", "m", "l", "xl"],
	},
	weight: {
		...weight,
		options: ["light"],
		if: { arg: "semantics", eq: "detail"},
	},
};
Detail.args = {
	semantics: "detail",
	content: ["Aliquet Mauris Eu"],
};

export const Code = Template.bind({});
Code.argTypes = {
	size: {
		...size,
		options: ["xs", "s", "m", "l", "xl"],
	},
};
Code.args = {
	semantics: "code",
	content: ["console.log('Hello World!');"],
};
