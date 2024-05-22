import { Template } from "./template";

import { html } from "lit";
import { when } from "lit/directives/when.js";

/**
 * Spectrum typography is broken out into several separate components.
 */
export default {
	title: "Typography",
	component: "Typography",
	argTypes: {
		reduceMotion: { table: { disable: true } },
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
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

const Sizes = (args) => {
	let supportedSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"];
	if (args.semantics === "body") supportedSizes = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];
	else if (args.semantics === "detail") supportedSizes = ["s", "m", "l", "xl"];
	else if (args.semantics === "code") supportedSizes = ["xs", "s", "m", "l", "xl"];

	return html`${window.isTestEnv() ? html`
		<div class="spectrum-Typography">
			${supportedSizes.reverse().map((size) => {
			return html`${Template({
				...args,
				content: [`${size} - ${args.content.join("")}`],
				size,
			})}${when(["detail", "code"].includes(args.semantics), () => html`<br/>`)}`;
			})}
		</div>` : Template(args)}`;
};

export const Default = Template.bind({});
Default.args = {
	content: [
		{
			semantics: "heading",
			content: ["Aliquet Mauris Eu"],
		},
		{
			content: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
			],
		},
		{
			content: [
				"Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			],
		},
	],
};

export const Heading = Sizes.bind({});
Heading.args = {
	semantics: "heading",
	content: ["Aliquet Mauris Eu"],
};

export const Body = Sizes.bind({});
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

export const Detail = Sizes.bind({});
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

export const Code = Sizes.bind({});
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
