import { html } from "lit";
import { Template } from "./template";

export default {
	title: "Components/Status light",
	description: "The Status light component is...",
	component: "Statuslight",
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
			type: process.env.MIGRATED_PACKAGES.includes("statuslight") ? "migrated" : "legacy",
			version: process.env.VERSIONS?.["statuslight"],
		},
	},
};

export const Default = ({
	...args
}) => {
	return html`
		<div>
			${Template({
				...args
			})}

			${
				window.isChromatic() ?
				Template({
					...args,
					label: "Status light label that is long and wraps to the next line",
					customStyles: {"max-width": "150px"}
				})
			: null
		}
		</div>
	`;
};
