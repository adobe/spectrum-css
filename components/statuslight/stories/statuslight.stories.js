import isChromatic from "chromatic/isChromatic";

import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

export default {
	title: "Components/Status light",
	component: "StatusLight",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
			control: { type: "text" },
		},
		variant: {
			name: "Variant",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [
				"accent",
				"info",
				"neutral",
				"positive",
				"notice",
				"negative",
				"gray",
				"red",
				"orange",
				"yellow",
				"chartreuse",
				"celery",
				"green",
				"seafoam",
				"cyan",
				"blue",
				"indigo",
				"purple",
				"fuchsia",
				"magenta",
			],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-StatusLight",
		size: "m",
		label: "Status",
		variant: "info",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("statuslight")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = (args) => html`
	${Template(args)}

	${when(isChromatic(), () => Template({
		...args,
		label: "Status light label that is long and wraps to the next line",
		customStyles: {"max-width": "150px"}
	}))}`;
