import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isFocused, isHovered, isQuiet, staticColor } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { LinkGroup } from "./link.test.js";
import { LinkGroupText, MultilineText, TemplateWithFillerText } from "./template.js";

/**
 * A link allows users to navigate to a different location. They can be presented in-line inside a paragraph or as standalone text.
 */
export default {
	title: "Link",
	component: "Link",
	argTypes: {
		url: {
			name: "URL",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		variant: {
			name: "Variant",
			defaultValue: "primary",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "Primary" },
			},
			options: ["primary", "secondary"],
			control: "select",
		},
		isHovered,
		isActive,
		isFocused,
		isVisited: {
			name: "Visited",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isInline: {
			name: "Inline",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		staticColor,
		isQuiet: {
			...isQuiet,
			if: { arg: "isInline", neq: true },
		},
	},
	args: {
		rootClass: "spectrum-Link",
		isQuiet: false,
		variant: "primary",
		isHovered: false,
		isActive: false,
		isFocused: false,
		isVisited: false,
		isInline: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=18850-110",
		},
		packageJson,
		metadata,
	}
};

export const Default = LinkGroup.bind({});
Default.args = {
	url: "https://www.adobe.com",
	text: "Learn more about Adobe",
};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * The standalone link is the default variant with the primary style which appears blue. This should be used to call attention to the link and for when the blue color won’t feel too overwhelming in the experience.
 * All links can have a quiet style, without an underline. This style should only be used when the placement and context of the link is explicit enough that a visible underline isn’t necessary.
 */
export const Primary = LinkGroupText.bind({});
Primary.args = {};
Primary.tags = ["!dev"];
Primary.parameters = {
	chromatic: { disableSnapshot: true },
};
Primary.storyName = "Standalone, primary";

/**
 * The secondary variant is the same gray color as the paragraph text. Its subdued appearance is optimal for when the primary variant is too overwhelming, such as in blocks of text with several references linked throughout.
 * Link is using the class `spectrum-Link--secondary`.
 */
export const Secondary = LinkGroupText.bind({});
Secondary.args = {
	variant: "secondary",
};
Secondary.parameters = {
	chromatic: { disableSnapshot: true },
};
Secondary.tags = ["!dev"];
Secondary.storyName = "Standalone, secondary";

/**
 * Use static white on dark color or image backgrounds, regardless of color theme. Make sure that the background and the link color meet the minimum color contrast ratio.
 * Link is using the class `spectrum-Link--staticWhite`.
 */
export const StaticWhite = LinkGroupText.bind({});
StaticWhite.storyName = "Static white";
StaticWhite.args = {
	staticColor: "white",
};
StaticWhite.tags = ["!dev"];
StaticWhite.parameters = {
	chromatic: { disableSnapshot: true },
};
StaticWhite.storyName = "Standalone, static white";

/**
 * Use static black on light color or image backgrounds, regardless of color theme. Make sure that the background and the link color meet the minimum color contrast ratio.
 * Link using is the class `spectrum-Link--staticBlack`.
 */
export const StaticBlack = LinkGroupText.bind({});
StaticBlack.storyName = "Static black";
StaticBlack.args = {
	staticColor: "black",
};
StaticBlack.tags = ["!dev"];
StaticBlack.parameters = {
	chromatic: { disableSnapshot: true },
};
StaticBlack.storyName = "Standalone, static black";

/**
 * The focus ring wraps when the link component breaks on multiple rows.
 */
export const Multiline = MultilineText.bind({});
Multiline.args = {};
Multiline.tags = ["!dev"];
Multiline.parameters = {
	chromatic: { disableSnapshot: true },
};
Multiline.storyName = "Multiline, focused";

/**
 * Inline links are used within a paragraph of text. They are styled differently from standalone links in which the font weight is lighter and can be adjusted to match the paragraph text.
 * Inline links do not have a quiet variant style so that it is distinguishable from the surrounding text and the underline indicator is clear.
 */
export const Inline = TemplateWithFillerText.bind({});
Inline.args = {
	isInline: true,
	text: "Inline link",
};
Inline.tags = ["!dev"];
Inline.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = LinkGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
