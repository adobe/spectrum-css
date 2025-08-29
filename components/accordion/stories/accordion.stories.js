import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { AccordionGroup, testsContent as accordionContent, directActionsContent, longerContent } from "./accordion.test.js";
import { Template } from "./template.js";

/**
 * The accordion element contains a list of items that can be expanded or collapsed to reveal
 * additional content or information associated with each item. There can be zero expanded items,
 * exactly one expanded item, or more than one item expanded at a time, depending on the
 * configuration. This list of items is defined by child accordion item elements.
 *
 * Accordion has three density options: regular (default), compact, or spacious. While all the
 * densities maintain the same font size, compact density reduces vertical spacing between rows,
 * while spacious density increases it.
 */
export default {
	title: "Accordion",
	component: "Accordion",
	argTypes: {
		items: { table: { disable: true } },
		size: size(["s", "m", "l", "xl"]),
		disableAll: {
			name: "Disable all items",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		collapseAll: {
			name: "Collapse all items",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
			},
			control: "boolean",
		},
		density: {
			name: "Density",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "regular", "spacious"],
			control: "select",
		},
		hasNoInlinePadding: {
			name: "No inline padding styling",
			description: "Displays accordion item headers without default inline padding.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
		},
		isQuiet,
		hasActionButtons: {
			name: "Has action buttons",
			description: "Adds an action button to each accordion item header, in the direct actions section.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Direct actions",
			},
			control: { type: "boolean" },
		},
		actionButtonIconName: {
			name: "Action button icon",
			...(IconStories?.argTypes?.iconName ?? {}),
			if: { arg: "hasActionButtons", truthy: true },
			table: {
				type: { summary: "string" },
				category: "Direct actions",
			},
		},
		hasSwitches: {
			name: "Has switches",
			description: "Adds a switch to each accordion item header, in the direct actions section.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Direct actions",
			},
			control: { type: "boolean" },
		},
	},
	args: {
		rootClass: "spectrum-Accordion",
		size: "m",
		density: "regular",
		collapseAll: false,
		disableAll: false,
		isQuiet: false,
		hasNoInlinePadding: false,
		hasActionButtons: false,
		actionButtonIconName: "Circle",
		hasSwitches: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Accordion-item"],
		},
		chromatic: { disableSnapshot: true },
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=39469-5419",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

/**
 * The default accordion displays at medium size with a regular density.
 */
export const Default = AccordionGroup.bind({});
Default.args = {
	items: accordionContent,
};
Default.parameters = {
	chromatic: { disableSnapshot: false },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = AccordionGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
 * Accordion items have a default width for each size, but a custom width can also be set to any
 * width that meets or exceeds the minimum width.
 *
 * This example also uses the body typography element with class `.spectrum-Body` for the
 * accordion item's content. If using typography, the t-shirt size of the typography element
 * may need to be adjusted to match the accordion item's font size. The body typography component
 * shown here is a size "S," in contrast with the the accordion's "M" size.
 */
export const CustomWidth = AccordionGroup.bind({});
CustomWidth.tags = ["!dev"];
CustomWidth.storyName = "Custom width";
CustomWidth.args = {
	items: longerContent,
	customStyles: {
		"--mod-accordion-item-width": "auto",
	},
};
CustomWidth.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The compact density has less vertical spacing between rows.
 */
export const Compact = Template.bind({});
Compact.tags = ["!dev"];
Compact.args = {
	items: accordionContent,
	density: "compact",
};
Compact.parameters = {
	chromatic: { disableSnapshot: true },
};
Compact.storyName = "Density: Compact";

/**
 * The spacious density has more vertical spacing between rows.
 */
export const Spacious = Template.bind({});
Spacious.tags = ["!dev"];
Spacious.args = {
	items: accordionContent,
	density: "spacious",
};
Spacious.parameters = {
	chromatic: { disableSnapshot: true },
};
Spacious.storyName = "Density: Spacious";

/**
 * Direct actions within accordion items are supported. A quiet
 * [action button](/?path=/docs/actionbutton--default), a
 * [switch](/?path=/docs/switch--default), or both can be added to
 * each accordion item header.
 */
export const DirectActions = Template.bind({});
DirectActions.tags = ["!dev"];
DirectActions.args = {
	items: directActionsContent
};
DirectActions.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Individual accordion items can be disabled by applying the `.is-disabled` class to the
 * `.spectrum-Accordion-item` element. This example also demonstrates the use of the disabled
 * attribute on the heading button.
 */
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	items: accordionContent,
	disableAll: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The optional quiet style for accordion has no dividers between sections. This style works best
 * when a clear layout (vertical stack, table, grid) makes it easy to see and understand because
 * too many quiet components in a small space can be hard to differentiate. This can be applied by
 * adding the `.spectrum-Accordion--quiet` class alongside the parent `.spectrum-Accordion` class.
 */
export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	items: accordionContent,
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Implementations may choose to remove inline padding from the accordion item headers by adding
 * the `.spectrum-Accordion--noInlinePadding` class alongside the parent `.spectrum-Accordion`
 * class. Accordion item header padding will be removed, but the body text content will keep its
 * own padding from the edge.
 */
export const NoInlinePadding = Template.bind({});
NoInlinePadding.storyName = "No inline padding";
NoInlinePadding.tags = ["!dev"];
NoInlinePadding.args = {
	items: accordionContent,
	hasNoInlinePadding: true,
};
NoInlinePadding.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Each of the different sizes has varying font sizes, and varying vertical spacing between the
 * rows. Medium is the default size.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	items: accordionContent,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};
