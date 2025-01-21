import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { PageGroup } from "./page.test.js";

/**
 * A page component is...
 */
export default {
	title: "Page",
	component: "Page",
	argTypes: {
		content: { table: { disable: true } },
	},
	args: {
		content: []
	},
	parameters: {
		layout: "fullscreen",
		docs: {
			story: {
				inline: false,
				height: "400px",
				width: "800px"
			},
		},
		packageJson,
		metadata,
	},
};

export const Default = PageGroup.bind({});
Default.args = {
	content: [],
};
