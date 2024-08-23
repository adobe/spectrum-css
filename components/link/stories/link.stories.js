import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isFocused, isHovered } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { LinkGroup } from "./link.test.js";
import { TemplateWithFillerText } from "./template";

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
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
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
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
		componentVersion: version,
	},
};

export const Default = LinkGroup.bind({});
Default.args = {
	url: "https://www.adobe.com",
	text: "Learn more about Adobe",
};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * The primary link is the default variant and is blue. This should be used to call attention to the link and for when the blue color won’t feel too overwhelming in the experience.
 */
export const Primary = TemplateWithFillerText.bind({});
Primary.args = {
	...Default.args,
	text: "link using spectrum-Link"
};
Primary.tags = ["!dev"];
Primary.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The secondary variant is the same gray color as the paragraph text. Its subdued appearance is optimal for when the primary variant is too overwhelming, such as in blocks of text with several references linked throughout.
 */
export const Secondary = TemplateWithFillerText.bind({});
Secondary.args = {
	variant: "secondary",
	text: "link using spectrum-Link--secondary",
};
Secondary.parameters = {
	chromatic: { disableSnapshot: true },
};
Secondary.tags = ["!dev"];

/**
 * All links can have a quiet style, without an underline. This style should only be used when the placement and context of the link is explicit enough that a visible underline isn’t necessary.
 */
export const QuietPrimary = TemplateWithFillerText.bind({});
QuietPrimary.storyName = "Primary (quiet)";
QuietPrimary.args = {
	isQuiet: true,
	text: "link using spectrum-Link--quiet",
};
QuietPrimary.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietPrimary.tags = ["!dev"];

export const QuietSecondary = TemplateWithFillerText.bind({});
QuietSecondary.storyName = "Secondary (quiet)";
QuietSecondary.args = {
	isQuiet: true,
	variant: "secondary",
	text: "link using spectrum-Link--quiet and spectrum-Link--secondary",
};
QuietSecondary.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietSecondary.tags = ["!dev"];

/**
 * Use static white on dark color or image backgrounds, regardless of color theme. Make sure that the background and the link color meet the minimum color contrast ratio.
 */
export const StaticWhite = Default.bind({});
StaticWhite.storyName = "Static white";
StaticWhite.args = {
	staticColor: "white",
	text: "Link using spectrum-Link--staticWhite",
};
StaticWhite.tags = ["!dev"];
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
};

/**
 * Use static black on light color or image backgrounds, regardless of color theme. Make sure that the background and the link color meet the minimum color contrast ratio.
 */
export const StaticBlack = Default.bind({});
StaticBlack.storyName = "Static black";
StaticBlack.args = {
	staticColor: "black",
	text: "Link using spectrum-Link--staticBlack",
};
StaticBlack.tags = ["!dev"];
StaticBlack.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
};

export const QuietStaticWhite = Default.bind({});
QuietStaticWhite.storyName = "Static white (quiet)";
QuietStaticWhite.args = {
	isQuiet: true,
	staticColor: "white",
	text: "Link using spectrum-Link--staticWhite and spectrum-Link--quiet",
};
QuietStaticWhite.tags = ["!dev"];
QuietStaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
};

export const QuietStaticBlack = Default.bind({});
QuietStaticBlack.storyName = "Static black (quiet)";
QuietStaticBlack.args = {
	isQuiet: true,
	staticColor: "black",
	text: "Link using spectrum-Link--staticBlack and spectrum-Link--quiet",
};
QuietStaticBlack.tags = ["!dev"];
QuietStaticBlack.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
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
