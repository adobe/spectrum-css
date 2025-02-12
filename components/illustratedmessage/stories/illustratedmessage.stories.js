import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { html } from "lit";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { IllustratedMessageGroup } from "./illustratedmessage.test.js";
import { Template } from "./template.js";

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
	},
	args: {
		rootClass: "spectrum-IllustratedMessage",
		useAccentColor: false,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=20032-601",
		},
		packageJson,
		metadata,
	},
};

export const Default = IllustratedMessageGroup.bind({});
Default.args = {
	heading: "Error 404: Page not found",
	description: [
		"This page isn't available. Try checking the URL or visit a different page.",
	],
};

/**
 * To use the accent color, the class `.spectrum-IllustratedMessage-accent` can be added to element(s) within the illustration SVG.
 */
export const AccentColor = Template.bind({});
AccentColor.tags = ["!dev"];
AccentColor.args = {
	heading: "Drag and drop your file",
	description: [
		() => {
			return html`${Link({ url: "#", text: "Select a file" })} from your computer.`;
		},
	],
	useAccentColor: true,
};
AccentColor.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = IllustratedMessageGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
