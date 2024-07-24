import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * Opacity checkerboard is used with other components to highlight opacity.
 */
export default {
	title: "Opacity checkerboard",
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
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
		backgroundPosition: "left top",
		customStyles: {
			"inline-size": "100%",
			"block-size": "100%"
		}
	},
	parameters: {
		componentVersion: version,
	},
	decorators: [
		(Story, context) => html`<div style=${styleMap({ inlineSize: "100px", blockSize: "100px" })}>${Story(context)}</div>`
	],
};

export const Default = Template.bind({});
Default.args = {};

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

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
