import { html } from "lit";
import { version } from "../package.json";

import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Template } from "./template";

/**
 * The Illustrated Message displays an illustration along with a heading and description. Optionally, part of the illustration can use an accent color. It can be used for status and errors, or as a call to action. For example, the Drop Zone component makes use of Illustrated Message as an area to drag and drop files.
 */
export default {
	title: "Illustrated message",
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
		reducedMotion: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-IllustratedMessage",
	},
	parameters: {
		componentVersion: version,
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
 * To use the accent color, the class `.spectrum-IllustratedMessage-accent` can be added to element(s) within the illustration SVG.
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
