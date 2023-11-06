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
		swatchColor: { table: { disable: true } },
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
			{swatchColor: "rgb(22, 135, 140)",},
			{swatchColor: "rgb(33, 132, 113)",},
			{swatchColor: "rgb(33, 132, 113)",},
			{swatchColor: "rgb(254, 132, 152)",},
			{swatchColor: "rgb(255, 127, 96)",},
			{swatchColor: "rgb(255, 209, 24)",},
			{swatchColor: "rgb(120, 91, 199)",},
			{swatchColor: "rgb(225, 234, 119)",},
			{swatchColor: "rgb(0, 225, 171)",},
			{swatchColor: "rgb(248, 239, 187)",},
			{swatchColor: "rgb(254, 205, 215)",},
			{swatchColor: "rgb(212, 182, 237)",},
			{swatchColor: "rgb(153, 219, 244)",},
			{swatchColor: "rgb(171, 238, 221)",},
			{swatchColor: "rgb(187, 182, 175)",},
			{swatchColor: "rgb(238, 211, 190)",},
			{swatchColor: "rgb(0, 143, 242)",},
			{swatchColor: "rgb(60, 49, 199)",},
			{swatchColor: "rgb(254, 71, 144)",},
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
