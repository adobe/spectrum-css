import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { StatusLightGroup } from "./statuslight.test.js";

export default {
	title: "Status light",
	component: "Statuslight",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
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
		packageJson: pkgJson,
	},
};

export const Default = StatusLightGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = StatusLightGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
