import { html } from "lit";
import { Template } from "./template";

export default {
	title: "components/Coach indicator",
	description:
		"The coach indicator component can be used to bring added attention to specific parts of a page.",
	component: "CoachIndicator",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		// @todo: remove the disabling of reducedMotion once this global control is enabled, coach indicator does have reduced motion styling.
		reducedMotion: { table: { disable: true } },
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		variant: { table: { disable: true } },
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
			type: process.env.MIGRATED_PACKAGES.includes("coachindicator")
				? "migrated"
				: "legacy",
		},
	},
};

const CustomCoachIndicator = (args) => {
	return html`
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
		})}`;
};


export const Default = CustomCoachIndicator.bind({});
Default.args = {};

export const Quiet = CustomCoachIndicator.bind({});
Quiet.args = {
	isQuiet: true
};
