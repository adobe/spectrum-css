import { html } from "lit";

import { Template } from "./template";

/**
 * The coach indicator component can be used to bring added attention to specific parts of a page.
 */
export default {
	title: "Coach indicator",
	component: "CoachIndicator",
	argTypes: {
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["default", "dark", "light"],
			control: "select"
		},
	},
	args: {
		rootClass: "spectrum-CoachIndicator",
		isQuiet: false,
		variant: "default",
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

const chromaticGroup = (args) => html`
	<div>
		${Template({
			...args,
			variant: "default"
		})}
		${Template({
			...args,
			variant: "dark"
		})}
		${Template({
			...args,
			variant: "light"
			})}
		${Template({
			...args,
			variant: "default",
			isQuiet: true
		})}
		${Template({
			...args,
			variant: "dark",
			isQuiet: true
		})}
		${Template({
			...args,
			variant: "light",
			isQuiet: true
			})}
	</div>
`;

export const Default = (args) => html`
	${chromaticGroup({
		...args,
		customStyles: {
			...(args.customStyles ?? {}),
			"display": !window.isTestEnv() ? "none" : args?.customStyles?.display,
		},
	})}
	${Template({
		...args,
		customStyles: {
			...(args.customStyles ?? {}),
			"display": window.isTestEnv() ? "none" : args?.customStyles?.display,
		},
	})}
`;
Default.args = {
	variant: "default"
};
