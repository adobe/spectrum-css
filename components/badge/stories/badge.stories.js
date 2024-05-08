import { html } from "lit";
import { when } from "lit/directives/when.js";


import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

/**
 * A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention.
 */
export default {
	title: "Components/Badge",
	component: "Badge",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		variant: {
			name: "Background color variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "accent", "informative", "positive", "negative", "gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"],
			control: "select",
		},
		fixed: {
			name: "Fixed layout",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: [
				"none",
				"fixed-inline-start",
				"fixed-inline-end",
				"fixed-block-start",
				"fixed-block-end",
			],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Badge",
		size: "m",
		variant: "neutral",
		iconName: "Info",
		label: "Badge",
		fixed: "none",
		customStorybookStyles: {
			"display": "flex",
			"align-items": "center",
			"gap": "4px",
			"flex-wrap": "wrap",
		},
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

const BadgeGroup = (args) => html`
	${Template({
		...args,
		iconName: undefined,
	})}
	${Template(args)}
	${Template({
		...args,
		label: undefined,
	})}
	${when(window.isChromatic(), () => Template({
		...args,
		label: "24 days left in trial",
		customStyles: { "max-inline-size": "100px" },
	}))}
`;

export const Default = BadgeGroup.bind({});
Default.args = {};
