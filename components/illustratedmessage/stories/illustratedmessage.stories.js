import { html } from "lit";

import { Template as Link } from "@spectrum-css/link/stories/template.js";

import { Template } from "./template";

/**
 * The illustrated message component is used for status and errors. It is also used for calls-to-action, such as within the drop zone component.
 */
export default {
	title: "Components/Illustrated message",
	component: "IllustratedMessage",
	argTypes: {
		useAccentColor: {
			name: "Illustration accent color",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		description: {
			name: "Description",
			table: {
				category: "Content",
				disable: true,
			},
		},
	},
	args: {
		rootClass: "spectrum-IllustratedMessage",
	},
	parameters: {
		actions: {
			handles: [],
		},
	},
};

export const Default = (args) => html`
	<div>
		${Template({
			...args,
			heading: "Error 404: Page not found",
			description: [
				"This page isn't available. Try checking the URL or visit a different page.",
			],
			useAccentColor: false,
		})}
		${window.isChromatic() ?
			Template({
				...args,
				heading: "Error 404: This is not the page you're looking for",
				description: [
					"This page isn't available.",
				],
				useAccentColor: false,
			})
			: null
		}
	</div>
`;

/**
 * An accent color class can be used on elements of the illustration SVG.
 */
export const AccentColor = Template.bind({});
AccentColor.args = {
	heading: "Drag and drop your file",
	description: [
		() => {
			return html`${Link({ url: "#", text: "Select a file" })} from your computer.`;
		},
	],
	useAccentColor: true,
};
