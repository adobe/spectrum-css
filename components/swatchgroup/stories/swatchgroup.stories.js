// Import the component markup template
import { Template } from "./template";

/**
 * The Swatch group component is...
 */
export default {
	title: "Components/Swatch group",
	component: "Swatchgroup",
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
		rounding: {
			name: "Rounding",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["none", "regular", "full"],
			control: "select",
		},
		swatches: {
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
		swatches: [
			{
				r: "22",
				g: "135",
				b: "140",
			},
			{
				r: "33",
				g: "132",
				b: "113",
			},
			{
				r: "254",
				g: "132",
				b: "152",
			},
			{
				r: "255",
				g: "127",
				b: "96",
			},
			{
				r: "255",
				g: "209",
				b: "24",
			},
			{
				r: "120",
				g: "91",
				b: "199",
			},
			{
				r: "225",
				g: "234",
				b: "119",
			},
			{
				r: "0",
				g: "225",
				b: "171",
			},
			{
				r: "248",
				g: "239",
				b: "187",
			},
			{
				r: "254",
				g: "205",
				b: "215",
			},
			{
				r: "212",
				g: "182",
				b: "237",
			},
			{
				r: "153",
				g: "219",
				b: "244",
			},
			{
				r: "171",
				g: "238",
				b: "221",
			},
			{
				r: "187",
				g: "182",
				b: "175",
			},
			{
				r: "238",
				g: "211",
				b: "190",
			},
			{
				r: "0",
				g: "143",
				b: "242",
			},
			{
				r: "60",
				g: "49",
				b: "199",
			},
			{
				r: "254",
				g: "71",
				b: "144",
			},
		],
		containerWidth: "250px",
	},
	parameters: {
		actions: {
			handles: [],
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
