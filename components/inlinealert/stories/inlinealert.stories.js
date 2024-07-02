import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template";

/**
 * In-line alerts display a non-modal message associated with objects in a view. These are often used in form validation, providing a place to aggregate feedback related to multiple fields.
 */
export default {
	title: "In-line alert",
	component: "InLineAlert",
	argTypes: {
		headerText: {
			name: "Header Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Component",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "info", "positive", "notice", "negative"],
			control: "select",
		},
		isClosable: {
			name: "Closable",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-InLineAlert",
		headerText: "in-line alert header",
		text: "This is an alert.",
		variant: "neutral",
		isClosable: false,
	},
};

export const Default = (args, context) => html`
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
						flexDirection: "column",
						gap: "1rem",
						"--mod-detail-margin-end": ".3rem",
					})}>
						${Template({
							...args,
							headerText: "in-line alert header announcing something very long and in-line",
							text: "this is a very urgent alert with a lot of context, so the text has to wrap",
							customStyles: {"max-width": "400px"}
						}, context)}
						${Template({
							...args,
							headerText: "in-line alert header announcing something very long and in-line",
							text: "this is a very urgent alert with a lot of context, so the text has to wrap",
							variant: "info",
							customStyles: {"max-width": "400px"},
						}, context)}
						${Template({
							...args,
							headerText: "in-line alert header announcing something very long and in-line",
							text: "this is a very urgent alert with a lot of context, so the text has to wrap",
							variant: "negative",
							customStyles: {"max-width": "400px"},
						}, context)}
						${Template({
							...args,
							headerText: "in-line alert header announcing something very long and in-line",
							text: "this is a very urgent alert with a lot of context, so the text has to wrap",
							variant: "positive",
							customStyles: {"max-width": "400px"},
						}, context)}
						${Template({
							...args,
							headerText: "in-line alert header announcing something very long and in-line",
							text: "this is a very urgent alert with a lot of context, so the text has to wrap",
							variant: "notice",
							customStyles: {"max-width": "400px"},
						}, context)}
						${Template({
							...args,
							headerText: "closable alert header announcing something very long and in-line",
							text: "this is a very urgent alert with a lot of context, so the text has to wrap",
							customStyles: {"max-width": "400px"},
							variant: "positive",
							isClosable: true,
						}, context)}
					</div>
				`
			: null
		}
	</div>
`;
Default.storyName = "Default (neutral)";
Default.args = {};

/**
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Info_18_S.svg icon in the Express workflow icon set._
 */
export const Informative = Template.bind({});
Informative.args = {
	variant: "info",
	headerText: "Informative in-line alert header",
};
Informative.parameters = {
	chromatic: { disableSnapshot: true },
};
Informative.tags = ["autodocs", "!dev"];

/**
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Alert_18_S.svg icon in the Express workflow icon set._
 */
export const Negative = Template.bind({});
Negative.args = {
	variant: "negative",
	headerText: "Negative in-line alert header",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};
Negative.tags = ["autodocs", "!dev"];

/**
 * _Spectrum for Adobe Express uses a different icon. Use the SX_CheckmarkCircle_18_S.svg icon in the Express workflow icon set._
 */
export const Positive = Template.bind({});
Positive.args = {
	variant: "positive",
	headerText: "Positive in-line alert header",
};
Positive.parameters = {
	chromatic: { disableSnapshot: true },
};
Positive.tags = ["autodocs", "!dev"];

/**
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Alert_18_S.svg icon in the Express workflow icon set._
 */
export const Notice = Template.bind({});
Notice.args = {
	variant: "notice",
	headerText: "Notice in-line alert header",
};
Notice.parameters = {
	chromatic: { disableSnapshot: true },
};
Notice.tags = ["autodocs", "!dev"];

/**
 * An in-line alert with a close button in the footer. Combine this strategy with any variant.
 * 
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Alert_18_S.svg icon in the Express workflow icon set._
 */
export const Closable = Template.bind({});
Closable.args = {
	variant: "negative",
	isClosable: true,
	headerText: "Incorrect payment information - error",
};
Closable.parameters = {
	chromatic: { disableSnapshot: true },
};
Closable.tags = ["autodocs", "!dev"];

