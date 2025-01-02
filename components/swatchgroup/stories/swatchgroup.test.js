import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchgroupGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Compact",
			density: "compact",
		},
		{
			testHeading: "Spacious",
			density: "spacious",
		},
		{
			testHeading: "Full rounding",
			rounding: "full",
		},
		{
			testHeading: "Regular rounding",
			rounding: "regular",
		},
		{
			testHeading: "With light borders",
			borderStyle: "lightBorder",
			items: [
				{swatchColor: "rgb(237, 196, 172)"},
				{swatchColor: "rgb(255, 188, 180)"},
				{swatchColor: "rgb(255, 193, 94)"},
				{swatchColor: "rgb(245, 199, 0)"},
				{swatchColor: "rgb(229, 200, 157)"},
				{swatchColor: "rgb(182, 219, 0)"},
				{swatchColor: "rgb(129, 228, 58)"},
				{swatchColor: "rgb(107, 227, 162)"},
				{swatchColor: "rgb(92, 225, 194)"},
				{swatchColor: "rgb(111, 221, 228)"},
				{swatchColor: "rgb(138, 213, 255)"},
				{swatchColor: "rgb(172, 207, 253)"},
				{swatchColor: "rgb(192, 201, 255)"},
				{swatchColor: "rgb(221, 193, 246)"},
				{swatchColor: "rgb(247, 181, 255)"},
				{swatchColor: "rgb(255, 181, 230)"},
				{swatchColor: "rgb(255, 185, 208)"},
			],
		},
	],
});
