// Import the component markup template
import { html } from "lit";
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
	title: "Components/Badge",
	description:
		"A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention.",
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
		fixed: "none"
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

const BadgeGroup = ({
	// customStyles = {},
	...args
}) => {
	return html`
		<div style="padding: 1rem">
			${Template({
				...args,
				iconName: undefined,
			})}
			${Template({
				...args,
			})}
			${Template({
				...args,
				label: undefined,
			})}
			${Template({
				...args,
				label: "24 days left in trial",
				customStyles: { "max-inline-size": "100px" },
			})}
		</div>
	`;
};

export const Default = BadgeGroup.bind({});
Default.args = {
};
