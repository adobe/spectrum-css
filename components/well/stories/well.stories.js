import { html } from "lit";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * A well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */
export default {
	title: "Well",
	component: "Well",
	argTypes: {
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Well",
	},
	parameters: {
		actions: {
			handles: [],
		},
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {
	content: [
		() => html`
			<em>Well done is better than well said.</em><br />
			<strong>Benjamin Franklin</strong>
			<br /><br />Well said Ben!
		`
	],
};
