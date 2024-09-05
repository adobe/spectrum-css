import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isKeyboardFocused, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { CloseButtonGroup } from "./closebutton.test.js";
import { CloseButtonExample, Template } from "./template.js";

/**
 * Close button is used to close or dismiss its parent component. It is used inside of other components such
 * as [toast](?path=/docs/components-toast--docs) and [action bar](?path=/docs/components-action-bar--docs).
 */
export default {
	title: "Close button",
	component: "CloseButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		staticColor,
		isDisabled,
		isHovered,
		isFocused,
		isKeyboardFocused,
		iconSize: {
			name: "Icon size",
			description: "Adjusts which cross icon size is displayed per component size.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "regular" },
			},
			options: ["regular", "large"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-CloseButton",
		size: "m",
		isDisabled: false,
		iconSize: "regular",
		isHovered: false,
		isFocused: false,
		isKeyboardFocused: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-CloseButton"],
		},
		packageJson: pkgJson,
	},
};

export const Default = CloseButtonGroup.bind({});
Default.args = {};

/**
 * Close button provides a "large" icon size option, for displaying a larger cross icon for each component size.
 * When using this option, the following UI icons should be used:
 * 
 * | Close button class name         | UI icon class name          |
 * | ------------------------------- | --------------------------- |
 * | `.spectrum-CloseButton--sizeS`  | `.spectrum-UIIcon-Cross200` |
 * | `.spectrum-CloseButton--sizeM`  | `.spectrum-UIIcon-Cross300` |
 * | `.spectrum-CloseButton--sizeL`  | `.spectrum-UIIcon-Cross400` |
 * | `.spectrum-CloseButton--sizeXL` | `.spectrum-UIIcon-Cross500` |
 */
export const SizingLargeIcons = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
SizingLargeIcons.storyName = "Sizing, large icon size";
SizingLargeIcons.args = {
	iconSize: "large",
};
SizingLargeIcons.tags = ["!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = CloseButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
* Close buttons come in four different sizes: small, medium, large, and extra-large. By default ("regular" icon size), the cross icon
* within the close button should use the following UI icons for each component size:
* 
* | Close button class name         | UI icon class name          |
* | ------------------------------- | --------------------------- |
* | `.spectrum-CloseButton--sizeS`  | `.spectrum-UIIcon-Cross75`  |
* | `.spectrum-CloseButton--sizeM`  | `.spectrum-UIIcon-Cross100` |
* | `.spectrum-CloseButton--sizeL`  | `.spectrum-UIIcon-Cross200` |
* | `.spectrum-CloseButton--sizeXL` | `.spectrum-UIIcon-Cross300` |
 */
export const Sizing = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhite = CloseButtonExample.bind({});
StaticWhite.args = {
	staticColor: "white",
};
StaticWhite.tags = ["!dev"];
StaticWhite.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlack = CloseButtonExample.bind({});
StaticBlack.args = {
	staticColor: "black",
};
StaticBlack.tags = ["!dev"];
StaticBlack.parameters = {
	chromatic: { disableSnapshot: true },
};

