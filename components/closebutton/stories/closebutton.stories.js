import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

/**
 * A button used to close or dismiss components.
 */
export default {
	title: "Close button",
	component: "CloseButton",
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
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-CloseButton",
		size: "m",
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-CloseButton"],
		},
		status: {
			type: "migrated",
		},
	},
};

const CloseButton = (args) => {
	return html`
		<div
			style=${ifDefined(styleMap({
				padding: "1rem",
			}))}
		>
			${Template(args)}
			${when(window.isChromatic(), () =>
				html`
					${Template({
						...args,
						isDisabled: true,
					})}
					${html`
						<div
							style=${ifDefined(styleMap({
								padding: "1rem",
								background: "var(--spectrum-examples-gradient-static-white)"
							}))}
						>
							${Template({
								...args,
								staticColor: "white",
							})}
							${Template({
								...args,
								staticColor: "white",
								isDisabled: true,
							})}
						</div>
					`}
					${html`
						<div
							style=${ifDefined(styleMap({
								padding: "1rem",
								background: "var(--spectrum-examples-gradient-static-black)"
							}))}
						>
							${Template({
								...args,
								staticColor: "black",
							})}
							${Template({
								...args,
								staticColor: "black",
								isDisabled: true,
							})}
						</div>
					`}
				`
			)}
		</div>
	`;
};

export const Default = CloseButton.bind({});
Default.args = {};
