import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { html } from "lit";
import { version } from "../package.json";
import { Template } from "./template";

export default {
	title: "Status light",
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
		componentVersion: version,
	},
};

// @todo needs optimizations
const Variants = (args, context) => {
	return html`
		<div>
			${Template(args, context)}
			${
				window.isChromatic() ?
				Template({
					...args,
					label: "Status light label that is long and wraps to the next line",
					customStyles: {"max-width": "150px"}
				}, context)
			: null
		}
		</div>
	`;
};

export const Default = Variants.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Variants.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
