import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ColorWheelGroup } from "./colorwheel.test.js";
import { Template } from "./template.js";

/**
 * The color wheel component lets users visually change an individual channel of a color on a circular track.
 *
 * ## Usage notes
 * - For a given rotation on the wheel, X, the `.spectrum-ColorHandle` should be moved by applying the style property `transform: translate(${Y * Math.cos(X)}px, ${Y * Math.sin(X)}px)`, where Y is `((radius - .spectrum-colorwheel-track-width) / 2))`.
 * - Set the value attribute of `.spectrum-ColorWheel-value` to the currently selected color (i.e. `hsl(326, 100%, 50%)`).
 * - Add `.is-dragged` when the handle is being dragged.
 */
export default {
	title: "Color wheel",
	component: "ColorWheel",
	argTypes: {
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
		isWithColorArea: {
			name: "With color area",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isWithColorLoupe: {
			name: "With color loupe",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		selectedColor: {
			name: "Selected color",
			description: "The color of the handle.",
			type: { name: "string" },
			accept: "hex, rgb, rgba",
			control: "color",
		},
	},
	args: {
		rootClass: "spectrum-ColorWheel",
		isDisabled: false,
		isFocused: false,
		isWithColorArea: false,
		isWithColorLoupe: true,
		selectedColor: "rgba(255, 0, 0, 50%)",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=20606-73",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
};

export const Default = ColorWheelGroup.bind({});
Default.args = {};

/**
 * By default, the color wheel has both a fixed size and a minimum size. The color wheel may be displayed at custom sizes by setting some of its modifiable custom properties. Below, the wheel is displayed at `300px` with the following mod values:
 * ```
 * "--mod-colorwheel-inline-size": "300px",
 * "--mod-colorwheel-block-size": "300px",
 * "--mod-colorwheel-track-width": "30px",
 * "--mod-colorwheel-path": '"M 149 149 m -149 0 a 149 149 0 1 0 298 0 a 149 149 0 1 0 -298 0 M 149 149 m -121 0 a 121 121 0 1 0 242 0 a 121 121 0 1 0 -242 0"',
 * ```
 */
export const CustomSizing = Template.bind({});
CustomSizing.tags = ["!dev"];
CustomSizing.args = {
	customStyles: {
		"--mod-colorwheel-inline-size": "300px",
		"--mod-colorwheel-block-size": "300px",
		"--mod-colorwheel-track-width": "30px",
		"--mod-colorwheel-path": "\"M 149 149 m -149 0 a 149 149 0 1 0 298 0 a 149 149 0 1 0 -298 0 M 149 149 m -121 0 a 121 121 0 1 0 242 0 a 121 121 0 1 0 -242 0\"",
	}
};
CustomSizing.parameters = {
	chromatic: { disableSnapshot: true },
};


// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The color wheel is often used together with the [color area component](/docs/components-color-area--docs) for color selection. When placing the color area inside the color wheel, make sure to leave enough of a margin between the two components to ensure there’s enough space for the both handles.
 *
 * To display a color area inside of the color wheel, add a color area component to `.spectrum-ColorWheel-colorarea-container` element and define the custom width and height styles with `--mod-colorarea-width` and `--mod-colorarea-height` variables.
 *
 * The `.spectrum-colorwheel-colorarea-container-size` is hard coded to position the color area within the color wheel using `.spectrum-color-wheel-color-area-margin`. Implementations using JS can calculate the container size with `Math.sqrt(2 * R * R)`, where `R` is the inner radius as calculated for the clip paths.
 *
* Implementations should factor in the value of `--spectrum-color-wheel-color-area-margin`, as illustrated in the token specs, when calculating the size of the color area relative to the color wheel that contains it.
 *
 * `--spectrum-colorwheel-path` and `--spectrum-colorwheel-colorarea-container-size` are hard coded in CSS, and include token values as custom CSS variables so they can be accessed with JS. To use and calculate these values, implementations should consider:
 * ```
 * const wheel = document.querySelector(".spectrum-ColorWheel-wheel")
 * getComputedStyle(wheel).getPropertyValue('--track-width')
 * ```
 * */
export const WithColorArea = Template.bind({});
WithColorArea.tags = ["!dev"];
WithColorArea.args = {
	isWithColorArea: true,
};
WithColorArea.parameters = {
	chromatic: { disableSnapshot: true },
};
WithColorArea.storyName = "With color area";

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorWheelGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
