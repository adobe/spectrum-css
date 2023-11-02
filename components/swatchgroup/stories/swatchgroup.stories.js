// Import the component markup template
import { Template } from "./template";

import { default as Swatch } from "@spectrum-css/swatch/stories/swatch.stories.js";

export default {
	title: "Components/Swatch group",
	description: "The Swatch group component is a collection of swatches.",
	component: "Swatchgroup",
	argTypes: {
		...Swatch.argTypes,
		density: {
			name: "Density",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["regular", "compact", "spacious"],
			control: "select",
		},
		color: { table: { disable: true } },
		items: {
			name: "Swatches",
			table: { disable: true },
		},
		containerWidth: {
			name: "Container width",
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-SwatchGroup",
		size: "m",
		density: "regular",
		rounding: "none",
		items: [
			{color: "rgb(22, 135, 140)",},
			{color: "rgb(33, 132, 113)",},
			{color: "rgb(33, 132, 113)",},
			{color: "rgb(254, 132, 152)",},
			{color: "rgb(255, 127, 96)",},
			{color: "rgb(255, 209, 24)",},
			{color: "rgb(120, 91, 199)",},
			{color: "rgb(225, 234, 119)",},
			{color: "rgb(0, 225, 171)",},
			{color: "rgb(248, 239, 187)",},
			{color: "rgb(254, 205, 215)",},
			{color: "rgb(212, 182, 237)",},
			{color: "rgb(153, 219, 244)",},
			{color: "rgb(171, 238, 221)",},
			{color: "rgb(187, 182, 175)",},
			{color: "rgb(238, 211, 190)",},
			{color: "rgb(0, 143, 242)",},
			{color: "rgb(60, 49, 199)",},
			{color: "rgb(254, 71, 144)",},
		],
	},
	parameters: {
		actions: {
			handles: [
				...Swatch.parameters?.actions?.handles ?? [],
			],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("swatchgroup")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
