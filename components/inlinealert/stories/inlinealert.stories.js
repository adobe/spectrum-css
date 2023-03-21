import { html } from "lit";
import { Template } from "./template";

export default {
	title: "Components/In-line alert",
	description:
		"In-line alerts display a non-modal message associated with objects in a view. These are often used in form validation, providing a place to aggregate feedback related to multiple fields.",
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
			type: process.env.MIGRATED_PACKAGES.includes("inlinealert")
				? "migrated"
				: undefined,
		},
    // Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
    // design: {
    //   type: "figma",
    //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    // },
	},
};

export const Default = ({
	...args
}) => {
	return html`
		<div>
			${Template({
				...args
			})}

			${
				window.isChromatic() ?
					Template({
						...args,
						headerText: 'in-line alert header announcing something very long and in-line',
						text: 'this is a very urgent alert with a lot of context, so the text has to wrap',
						customStyles: {"max-width": "400px"}
					})
					&&
					Template({
						...args,
						headerText: 'in-line alert header announcing something very long and in-line',
						text: 'this is a very urgent alert with a lot of context, so the text has to wrap',
						customStyles: {"max-width": "400px"},
						variant: 'notice',
						isClosable: true,
					})
				: null
			}
		</div>
	`;
};
