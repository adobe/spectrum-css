import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size } from "@spectrum-css/preview/types";
import { Sizes } from "@spectrum-css/preview/decorators";
import pkgJson from "../package.json";
import { StatusLightGroup } from "./statuslight.test.js";
import { Template, SemanticGroup, NonsemanticGroup } from "./template.js";

/**
 * Status lights describe the condition of an entity. They can be used to convey semantic meaning, such as statuses and categories.
 */
export default {
	title: "Status light",
	component: "Statuslight",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isDisabled,
		variant: {
			name: "Variant",
			description: "Changes the color of the status dot. The variant list includes both semantic and non-semantic options.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [
				"accent",
				"info",
				"neutral",
				"positive",
				"notice",
				"negative",
				"gray",
				"red",
				"orange",
				"yellow",
				"chartreuse",
				"celery",
				"green",
				"seafoam",
				"cyan",
				"blue",
				"indigo",
				"purple",
				"fuchsia",
				"magenta",
			],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-StatusLight",
		size: "m",
		label: "Status",
		variant: "info",
		isDisabled: false,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=36797-954",
		},
		packageJson: pkgJson,
	},
};

/**
 * Status lights should always include a label with text that clearly communicates the kind of status being shown. Color alone is not enough to communicate the status. Do not change the text color to match the dot.
 * 
 * When the text is too long for the horizontal space available, it wraps to form another line.
 */
export const Default = StatusLightGroup.bind({});
Default.args = {};

/**
 * Status lights come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When status lights have a semantic meaning, they use semantic colors. Use these variants for the following statuses:
 * - Informative (active, in use, live, published)
 * - Neutral (archived, deleted, paused, draft, not started, ended)
 * - Positive (approved, complete, success, new, purchased, licensed)
 * - Notice (needs approval, pending, scheduled, syncing, indexing, processing)
 * - Negative (error, alert, rejected, failed)
 * 
 * Semantic status lights should never be used for color coding categories or labels, and vice versa.
 */
export const SemanticColors = SemanticGroup.bind({});
SemanticColors.tags = ["!dev"];
SemanticColors.parameters = {
	chromatic: { disableSnapshot: true },
};
SemanticColors.storyName = "Semantic colors";

/**
 * When status lights are used to color code categories and labels that are commonly found in data visualization, they use label colors. The ideal usage for these is when there are 8 or fewer categories or labels being color coded.
 */
export const NonSemanticColors = NonsemanticGroup.bind({});
NonSemanticColors.tags = ["!dev"];
NonSemanticColors.parameters = {
	chromatic: { disableSnapshot: true },
};
NonSemanticColors.storyName = "Non-semantic colors";

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = StatusLightGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
