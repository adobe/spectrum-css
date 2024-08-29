import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isQuiet, size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { SearchGroup } from "./search.test.js";

/**
 * This component contains a single input field with both a magnifying glass icon and a "reset" button displayed within it.
 */
export default {
	title: "Search",
	component: "Search",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Search",
		isQuiet: false,
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: [
				"change .spectrum-Search-input",
				"click .spectrum-Search-clearButton",
				"click .spectrum-Search-icon",
			],
		},
		componentVersion: version
	},
};

export const Default = SearchGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = SearchGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
