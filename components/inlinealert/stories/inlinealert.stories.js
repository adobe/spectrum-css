import { html } from "lit";

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
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = (args) => html`
	<div>
		${Template({
			...args
		})}

		${
			window.isChromatic() ?
				Template({
					...args,
					headerText: "in-line alert header announcing something very long and in-line",
					text: "this is a very urgent alert with a lot of context, so the text has to wrap",
					customStyles: {"max-width": "400px"}
				})
				&&
				Template({
					...args,
					headerText: "in-line alert header announcing something very long and in-line",
					text: "this is a very urgent alert with a lot of context, so the text has to wrap",
					customStyles: {"max-width": "400px"},
					variant: "notice",
					isClosable: true,
				})
			: null
		}
	</div>
`;
