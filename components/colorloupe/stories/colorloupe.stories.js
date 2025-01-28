import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isOpen } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ColorLoupeGroup } from "./colorloupe.test.js";

/**
 * The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.
 *
 * ## Usage notes
 *
 * - Set the `--spectrum-picked-color` custom property to the CSS color value you want to show.
 * - Implementations must apply the `.is-open` class to display the loupe.
 * - Color loupe does not have a disabled style. Do not show it when the handle it's attached to is disabled.
 */
export default {
	title: "Color loupe",
	component: "ColorLoupe",
	argTypes: {
		isOpen,
		isDisabled,
		selectedColor: {
			name: "Selected color",
			type: { name: "string" },
			accept: "hex, rgb, rgba",
			control: "color",
		},
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
		isOpen: true,
		isDisabled: false,
		selectedColor: "rgba(255, 0, 0, 0.5)",
		customStyles: {
			"position": "relative",
			"inset-block-end": "0",
			"inset-inline-end": "0",
		}
	},
	parameters: {
		docs: {
			story: {
				height: "100px"
			}
		},
		packageJson,
		metadata,
	},
};

export const Default = ColorLoupeGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorLoupeGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
