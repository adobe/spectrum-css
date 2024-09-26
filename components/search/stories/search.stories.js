import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isQuiet, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { SearchGroup } from "./search.test.js";

/**
 * A search field is used for searching and filtering items.
 * 
 * ## Usage Notes
 * This component contains a single input field with both a magnifying glass icon and a clear (“reset”) button displayed within it. When making use of this component, the clear button should only be displayed when the input has a value.
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
		size: "m",
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
		packageJson: pkgJson,
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
