// Import the component markup template
import { Template } from "./template";
import isChromatic from "chromatic/isChromatic";
import { html } from "lit";

export default {
	title: "Components/Button group",
	description: "The Button group component is...",
	component: "Buttongroup",
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
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-ButtonGroup",
		size: "m",
		iconName: undefined,
		vertical: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("buttongroup")
				? "migrated"
				: undefined,
		},
	},
};

const chromaticKitchenSink = (args) => html`
	<div style="display: grid; justify-content: start; gap: 2rem;">
		${Template(args)}
		${Template({
				...args,
				size: "s"
		})}
	</div>
`;

export const Default = (args) => isChromatic() ? chromaticKitchenSink(args) : Template(args);
Default.args = {
	items: [
		{
			variant: "secondary",
			treatment: "outline",
			label: "No, thanks",
		},
		{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later",

		},
		{
			variant: "primary",
			treatment: "fill",
			label: "Rate now",
		},
	],
};

export const Vertical = (args) => isChromatic() ? chromaticKitchenSink(args) : Template(args);
Vertical.args = {
	vertical: true,
	items: [
		{
			variant: "secondary",
			treatment: "outline",
			label: "No, thanks",
		},
		{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later",
		},
		{
			variant: "primary",
			treatment: "fill",
			label: "Rate now",
		},
	],
};
