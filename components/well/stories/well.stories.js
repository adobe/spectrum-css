import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { WellGroup } from "./well.test.js";

/**
 * A well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page. The well may also be labeled by an optional heading outside of the component.
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
		packageJson,
		metadata,
	},
};

export const Default = WellGroup.bind({});
Default.args = {
	content: [
		(passthroughs, context) => Typography({
			content: [
				{
					semantics: "heading",
					content: ["Aliquet Mauris Eu"],
				},
				{
					content: [
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
					],
				},
				{
					content: [
						"Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					],
				},
			],
			...passthroughs,
		}, context),
		(passthroughs, context) => Link({
			url: "https://www.adobe.com",
			text: "Learn more about Adobe",
			...passthroughs,
		}, context),
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
