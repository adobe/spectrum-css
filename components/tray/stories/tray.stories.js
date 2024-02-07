import { html } from "lit";
import { Template } from "./template";

import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";

export default {
	title: "Components/Tray",
	description:
		"Tray dialogs are typically used to portray information on mobile device or smaller screens.",
	component: "Tray",
	argTypes: {
		content: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: { disable: true },
		},
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-Tray",
		customClasses: ["spectrum-Modal"],
		isOpen: true,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("tray")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = ({
	...args
}) => {
	return html`
		<div>
			${Template({
				heading: "Tray Dialog",
				content: [
					() => Dialog({
							heading: "New Messages",
							content: ["You have 5 new messages!"],
							isDismissable: false,
						})
				],
			})}

			${
				window.isChromatic() ?
				Template({
					...args,
					heading: "Tray Dialog",
					content: [
						() => Dialog({
								heading: "You have new messages waiting in your inbox",
								content: ["You have 5 new messages! This notification is extra long so it wraps to the next line"],
								isDismissable: false,
							})
					],
					customStyles: {
						"justify-content": "flex-end"
					},
				})
			: null
		}
		</div>
	`;
};
Default.args = {};
