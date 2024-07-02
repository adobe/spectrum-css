import { Template } from "./template";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

/**
 * A logic button displays an operator within a boolean logic sequence.
 */
export default {
	title: "Logic button",
	component: "LogicButton",
	argTypes: {
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["and", "or"],
			control: "inline-radio",
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
		rootClass: "spectrum-LogicButton",
		variant: "and",
		isDisabled: false,
	},
	parameters: {
		docs: {
			story: {
				height: "auto",
			},
		},
	},
};

export const Default = (args) => html`
	<div style=${styleMap({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: "1rem",
		"--mod-detail-margin-end": ".3rem",
	})}>
		${Template({
			...args
		})}

		${
			window.isChromatic() ?
				html`
					<div style=${styleMap({
						display: "flex",
						alignItems: "flex-start",
						gap: "1rem",
						"--mod-detail-margin-end": ".3rem",
					})}>
						${Template({
							...args,
						})}
						${Template({
							...args,
							variant: "or",
						})}
						${Template({
							...args,
							isDisabled: true,
						})}					
					</div>
				`
			: null
		}
	</div>
`;
Default.args = {};

export const Or = Template.bind({});
Or.args = {
	variant: "or"
};
Or.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
