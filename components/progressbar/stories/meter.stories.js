import { html } from "lit";
import { when } from "lit/directives/when.js";

import isChromatic from "chromatic/isChromatic";

import { Template } from "./meter.template";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

export default {
	title: "Components/Meter",
	description:
		"The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",
	component: "ProgressBar",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		value: {
			name: "Percent value for fill",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
		},
		fill: {
			name: "Meter fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["notice", "positive", "negative", "default"],
			control: "select",
		},
		size: {
			name: "Meter size",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "l"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		label: "Storage Space",
		size: "s",
		value: 50,
		fill: "default",
		customStorybookStyles: {
			flexDirection: "column",
			alignItems: "flex-start",
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("progressbar")
				? "migrated"
				: "legacy",
		},
	},
};

/** @todo This approach below with the array of overrides could be converted into a decorator and used to automatically generate Chromatic groupings */
const Meters = (args) => {
	// Extract globals to pass to Typography
	const { rootClass, customClasses, customStyles, id, label, value, fill, size, ...globals } = args;
	return html`
	${isChromatic() ? html`
		<div>
			${Typography({
				...globals,
				semantics: "heading",
				content: ["Default"],
			})}
			${Template(args)}
		</div>` : Template(args)}
	${when(isChromatic(), () => html`${[{
		heading: "Large",
		fill: "default",
		size: "l",
	}, {
		heading: "Positive",
		fill: "positive",
	}, {
		heading: "Negative",
		fill: "negative",
	}, {
		heading: "Notice",
		fill: "notice",
	}, {
		heading: "Text overflow",
		fill: "notice",
		label: "Storage space remaining for XYZ user"
	}].map((customArgs) => html`
		<div>
			${Typography({
				...globals,
				semantics: "heading",
				content: [customArgs.heading],
			})}
			${Template({
				...args,
				...customArgs,
			})}
		</div>`
	)}`)}
`;
};

export const Default = Meters.bind({});
Default.args = {};
