import { Default as Link } from "@spectrum-css/link/stories/link.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Default as Typography } from "@spectrum-css/typography/stories/typography.stories.js";
import { version } from "../package.json";
import { WellGroup } from "./template";

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
		componentVersion: version,
	},
};

export const Default = WellGroup.bind({});
Default.args = {
	content: [
		() => Typography(Typography.args),
		() => Link(Link.args),
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
