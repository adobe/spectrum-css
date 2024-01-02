import isChromatic from "chromatic/isChromatic";

import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Template } from "./template";

export default {
	title: "Components/Illustrated message",
	description:
		"The Illustrated Message component is used for status and errors. It is also used for call to actions, such as within the Drop Zone component.",
	component: "IllustratedMessage",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		useAccentColor: {
			name: "Accent color",
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
		heading: "Error 404: Page not found",
		description: "This page isn't available. Try checking the URL or visit a different page.",
		useAccentColor: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("illustratedmessage")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = (args) => html`
	${Template(args)}
	${when(isChromatic(), () => Template({
		...args,
		heading: "Error 404: This is not the page you're looking for.",
		description: "This page isn't available.",
		useAccentColor: false,
	}))}

`;

/** An accent color class can be used on elements of the illustration SVG. */
export const AccentColor = Template.bind({});
AccentColor.args = {
	heading: "Drag and drop your file",
	description: () => html`${Link({ url: "#", content: "Select a file" })} from your computer.`,
	useAccentColor: true,
};
