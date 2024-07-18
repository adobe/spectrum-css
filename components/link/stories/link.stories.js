import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template";

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
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["primary", "secondary"],
			control: "select",
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
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {
	url: "https://www.adobe.com",
	text: "Learn more about Adobe",
};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * The default link style is called "Primary."
 */
export const Primary = Default.bind({});
Primary.args = {
	...Default.args,
};
Primary.tags = ["autodocs", "!dev"];

export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
	text: "Link using spectrum-Link--secondary"
};
Secondary.parameters = {
	chromatic: { disableSnapshot: true },
};
Secondary.tags = ["autodocs", "!dev"];

export const QuietPrimary = Template.bind({});
QuietPrimary.storyName = "Quiet (Primary)";
QuietPrimary.args = {
	isQuiet: true,
	text: "Link using spectrum-Link--quiet"
};
QuietPrimary.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietPrimary.tags = ["autodocs", "!dev"];

export const QuietSecondary = Template.bind({});
QuietSecondary.storyName = "Quiet (Secondary)";
QuietSecondary.args = {
	isQuiet: true,
	variant: "secondary",
	text: "Link using spectrum-Link--quiet and spectrum-Link--secondary"
};
QuietSecondary.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietSecondary.tags = ["autodocs", "!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const StaticWhite = Default.bind({});
StaticWhite.args = {
	staticColor: "white",
	text: "Link using spectrum-Link--staticWhite"
};
StaticWhite.tags = ["!autodocs", "!dev", "test"];

export const StaticBlack = Default.bind({});
StaticBlack.args = {
	staticColor: "black",
	text: "Link using spectrum-Link--staticBlack"
};
StaticBlack.tags = ["!autodocs", "!dev", "test"];

export const QuietStaticWhite = Default.bind({});
QuietStaticWhite.storyName = "Quiet (static white)";
QuietStaticWhite.args = {
	isQuiet: true,
	staticColor: "white",
	text: "Link using spectrum-Link--staticWhite and spectrum-Link--quiet"
};
QuietStaticWhite.tags = ["!autodocs", "!dev", "test"];

export const QuietStaticBlack = Default.bind({});
QuietStaticBlack.storyName = "Quiet (static black)";
QuietStaticBlack.args = {
	isQuiet: true,
	staticColor: "black",
	text: "Link using spectrum-Link--staticBlack and spectrum-Link--quiet"
};
QuietStaticBlack.tags = ["!autodocs", "!dev", "test"];

