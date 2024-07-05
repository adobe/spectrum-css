import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template } from "./template";

const semanticOptions = ["neutral", "accent", "informative", "positive", "negative"];
const nonSemanticOptions = ["gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"];
const fixedOptions = ["none", "fixed-inline-start", "fixed-inline-end", "fixed-block-start", "fixed-block-end"];
/**
 * A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention. Some notes about badge:
 * - Badge t-shirt sizes correspond to icon sizes
 * - Label and icon elements must be nested inside a parent container of class .spectrum-Badge in order to achieve the correct layout and wrapping behavior.
 * - Layout of Badge is applied with a display of `inline-flex`, allowing badge to display as inline while the child elements for the label and icon utilize flexbox for layout.
 * - Fixed positioning impacts the border radius of the badge component
 */
export default {
	title: "Badge",
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
			options: fixedOptions,
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
		componentVersion: version,
	},
	decorators: [
		(Story, context) => html`<div style="padding: 16px">${Story(context)}</div>`
	],
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
	${Template({
		...args,
		label: "24 days left in trial",
		customStyles: { "max-inline-size": "120px" },
	})}
`;

export const Default = BadgeGroup.bind({});
Default.args = {};



const Variants = (args, variants) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"gap": "16px",
			"flex-wrap": "wrap"
		})}
	>
		${variants.map((variant) => {
			const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
			const label = capitalizeFirstLetter(variant);
			return ( html`
				<div
					style=${styleMap({
						"display": "flex",
						"gap": "16px",
						"flex-direction": "column",
						"align-items": "center",
					})}
				>
					${Template({...args, variant, label})}
				</div>
			`);
	})}
	</div>
`;

export const SemanticVariants = (args) => Variants(args, semanticOptions);
SemanticVariants.tags = ["docs-only"];
SemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

export const NonSemanticVariants = (args) => Variants(args, nonSemanticOptions);
NonSemanticVariants.tags = ["docs-only"];
NonSemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

export const FixedVariants = (args) => Variants(args, fixedOptions);
FixedVariants.tags = ["docs-only"];
FixedVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
