import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";


import { Template } from "./template";

export default {
	title: "Components/Opacity checkerboard",
	description:
		"Opacity checkerboard is used with other components to highlight opacity.",
	component: "OpacityCheckerboard",
	argTypes: {
		backgroundPosition: {
			name: "Position",
			type: { name: "string" },
			table: {
				category: "Component",
			},
			control: "text",
			description: "Value for <code>--mod-opacity-checkerboard-position</code>. Accepts any valid CSS background-position property value.",
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
		backgroundPosition: "left top"
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		(Story, context) => html`<div style=${styleMap({ inlineSize: "100px", blockSize: "100px" })}>${Story(context)}</div>`
	],
};
export const Default = Template.bind({});
Default.args = {
	customStyles: {
		"inline-size": "100%",
		"block-size": "100%"
	}
};

export const CheckerboardPosition = Template.bind({});
CheckerboardPosition.args = {
	backgroundPosition: "center center",
	customStyles: {
		"inline-size": "100%",
		"block-size": "100%"
	}
};
CheckerboardPosition.parameters = {
	docs: {
		description: {
			story:
				"An example of using the <code>--mod-opacity-checkerboard-position</code> custom property to adjust the position of the checkerboard pattern.",
		},
	},
};
