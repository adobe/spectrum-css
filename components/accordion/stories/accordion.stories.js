import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { AccordionGroup, testsContent as accordionContent } from "./accordion.test.js";
import { Template } from "./template.js";

/**
 * The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements.
 *
 * Accordion has three density options: regular (default), compact, or spacious. Each of the different densities have the same font size, but have tighter or looser vertical spacing between the rows.
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
			name: "No Inline Padding Styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
		},
		isQuiet
	},
	args: {
		rootClass: "spectrum-Accordion",
		size: "m",
		density: "regular",
		collapseAll: false,
		disableAll: false,
		isQuiet: false,
		hasNoInlinePadding: false,
	},
	parameters: {
		// Prevent an inacurate depiction of width due to "centered" layout's use of flex on the body.
		layout: "padded",
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
	},
};

/* Content sourced from: https://www.adobe.com/products/catalog.html#:~:text=Frequently%20asked%20questions. */

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

/**
 * Accordion items have a default width, but a custom width can also be set, as long as it is not
 * smaller than the minimum width.
 */
export const CustomWidth = AccordionGroup.bind({});
CustomWidth.tags = ["!dev"];
CustomWidth.storyName = "Custom width";
CustomWidth.args = {
	items: accordionContent,
	customStyles: {
		"--mod-accordion-item-width": "500px",
	},
};
CustomWidth.parameters = {
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
 * The compact density has less spacing between rows.
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
 * The spacious density has more spacing between rows.
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
 * Individual accordion items (of class `.spectrum-Accordion-item`) can be styled as disabled by applying the `is-disabled` class.
 * This example markup also applies the `disabled` attribute on the heading button.
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
 * The optional quiet style for accordion has no dividers between sections. This style works best when a clear layout
 * (vertical stack, table, grid) makes it easy see and understand. Too many quiet components in a small space can be
 * hard to differentiate. This can be applied by adding the `spectrum-Accordion--quiet` class alongside the
 * parent `spectrum-Accordion` class.
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
 * The optional no inline padding style for accordion. This sets no overall horizontal padding on either side of the component
 * (but the body text content always keeps its own padding from the edge). This can be applied by adding the `spectrum-Accordion--noInlinePadding` class alongside the
 * parent `spectrum-Accordion` class.
 */
export const NoInlinePadding = Template.bind({});
NoInlinePadding.tags = ["!dev"];
NoInlinePadding.args = {
	items: accordionContent,
	hasNoInlinePadding: true,
};
NoInlinePadding.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Each of the different sizes have varying font sizes, and tighter or looser vertical spacing between the rows. Medium is the default size.
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
