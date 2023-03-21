// Import the component markup template
import { html } from "lit";
import { Template } from "./template";

export default {
	title: "Components/Well",
	description:
		"A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",
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
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("well")
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

export const Default = Template.bind({});
Default.args = {
	content: [
		() => {
			return html` <em>Well done is better than well said.</em><br />
			<strong>Benjamin Franklin</strong>
			<br /><br />Well said Ben!`;
		}
	],
};
