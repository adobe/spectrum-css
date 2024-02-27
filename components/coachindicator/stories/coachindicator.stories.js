import { html } from "lit";

import { Template } from "./template";


export default {
	title: "components/Coach indicator",
	description:
		"The coach indicator component can be used to bring added attention to specific parts of a page.",
	component: "CoachIndicator",
	argTypes: {
		// @todo: remove the disabling of reducedMotion once this global control is enabled, coach indicator does have reduced motion styling.
		reducedMotion: { table: { disable: true } },
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		variant: {
			name: "Variant",
			type: { name: 'string' },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["default", "dark", "light"],
			control: "select"
		 },
	},
	args: {
		rootClass: "spectrum-CoachIndicator",
		isQuiet: false,
		variant: "default",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("coachindicator") ? "migrated" : "legacy",
			version: process.env.VERSIONS?.["coachindicator"],
		},
	},
};

const chromaticGroup = (args) => {
	return html`
		<div>
			${Template({
				...args,
				variant: "default"
			})}
			${Template({
				...args,
				variant: "dark"
			})}
			${Template({
				...args,
				variant: "light"
				})}
			${Template({
				...args,
				variant: "default",
				isQuiet: true
			})}
			${Template({
				...args,
				variant: "dark",
				isQuiet: true
			})}
			${Template({
				...args,
				variant: "light",
				isQuiet: true
				})}
		</div>
	`;
};


export const Default = (args) => html`${window.isChromatic() ? chromaticGroup(args) : Template(args)}`;
Default.args = {
	variant: "default"
};
