import { html } from "lit";
import { Template } from "./template";

export default {
	title: "Components/Well",
	description:
		"A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",
	component: "Well",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Well",
		content: [
			() => {
				return html` <em>Well done is better than well said.</em><br />
				<strong>Benjamin Franklin</strong>
				<br /><br />Well said Ben!`;
			}
		],
		customStorybookStyles: {
			display: undefined,
		}
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("well")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
