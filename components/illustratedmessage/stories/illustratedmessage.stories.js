import { html } from "lit";

// Import the component markup template
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Template } from "./template";

export default {
	title: "Components/Illustrated message",
	description:
		"The Illustrated Message component is used for status and errors. It is also used for call to actions, such as within the Drop Zone component.",
	component: "IllustratedMessage",
	argTypes: {
		useAccentColor: {
			name: "Illustration Accent Color",
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
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("illustratedmessage")
				? "migrated"
				: undefined,
		},
    // Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
    // design: {
    //   type: "figma",
    //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    // },
	},
};

export const Default = ({
	heading,
	description,
	...args
}) => {
	return html`
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
};

export const AccentColor = Template.bind({});
AccentColor.description =
	"An accent color class can be used on elements of the illustration SVG.";
AccentColor.args = {
	...Default.args,
	heading: "Drag and drop your file",
	description: [
		() => {
			return html`${Link({ url: "#", text: "Select a file" })} from your
		computer.`
		},
	],
	useAccentColor: true,
};
