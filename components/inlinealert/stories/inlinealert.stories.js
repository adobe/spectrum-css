import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { InlineAlertGroup } from "./inlinealert.test.js";
import { AlertsWithStyleOptions } from "./template.js";

/**
 * In-line alerts display a non-modal message associated with objects in a view. These are often used in form validation, providing a place to aggregate feedback related to multiple fields.
 *
 * In-line alerts have five different variants: neutral (default), informative, positive, notice, and negative. Each variant is available with three fill styles (treatment): border (default), subtle, and bold.
 */
export default {
	title: "In-line alert",
	component: "InLineAlert",
	argTypes: {
		headerText: {
			name: "Header Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
			if: { arg: "withoutHeader", truthy: false },
		},
		text: {
			name: "Body text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		withoutHeader: {
			name: "Without header",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "info", "positive", "notice", "negative"],
			control: "select",
		},
		treatment: {
			name: "Treatment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["border", "subtle", "bold"],
			control: "select",
		},
		isClosable: {
			name: "Closable",
			description: "An optional close button rendered below the alert text and link (if enabled).",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		hasLink: {
			name: "Link",
			description: "An optional link rendered below the alert text.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-InLineAlert",
		headerText: "In-line alert header",
		text: "This is an alert.",
		withoutHeader: false,
		variant: "neutral",
		treatment: "border",
		isClosable: false,
		hasLink: false,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=2659-4482",
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
 * The neutral variant is the default for in-line alerts.
 */
export const Default = InlineAlertGroup.bind({});
Default.args = {};

/**
 * In-line alerts may be rendered without a header. Combine this strategy with any variant.
 */
export const WithoutHeader = InlineAlertGroup.bind({});
WithoutHeader.args = {
	withoutHeader: true,
};
WithoutHeader.parameters = {
	chromatic: { disableSnapshot: true },
};
WithoutHeader.tags = ["!dev"];

// ********* DOCS ONLY ********* //
/**
 * The informative variant uses the informative semantic color (blue) and has an "information" icon to help those with color vision deficiency discern the message tone. This should be used when the message needs to call extra attention, as compared to the neutral variant.
 */
export const Informative = AlertsWithStyleOptions.bind({});
Informative.args = {
	variant: "info",
	headerText: "Info in-line alert header",
};
Informative.parameters = {
	chromatic: { disableSnapshot: true },
};
Informative.tags = ["!dev"];

/**
 * A negative variant uses the negative semantic color (red) and has an "alert" icon to help those with color vision deficiency to discern the message tone. Negative variants are used to show an error or failure, or to convey something that needs to be immediately acknowledged or addressed.
 */
export const Negative = AlertsWithStyleOptions.bind({});
Negative.args = {
	variant: "negative",
	headerText: "Negative in-line alert header",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};
Negative.tags = ["!dev"];

/**
 * Neutral (default) variant alerts may also use the subtle and bold treatments available to other variants.
 */
export const Neutral = AlertsWithStyleOptions.bind({});
Neutral.args = {
	variant: "neutral",
	headerText: "Neutral in-line alert header",
};
Neutral.parameters = {
	chromatic: { disableSnapshot: true },
};
Neutral.tags = ["!dev"];

/**
 * The positive variant uses the positive semantic color (green) and has a "checkmark" icon to help those with color vision deficiency discern the message tone. This variant should be used to inform someone of a successful function or result of an action they took.
 */
export const Positive = AlertsWithStyleOptions.bind({});
Positive.args = {
	variant: "positive",
	headerText: "Positive in-line alert header",
};
Positive.parameters = {
	chromatic: { disableSnapshot: true },
};
Positive.tags = ["!dev"];

/**
 * To warn about a situation that may need to be addressed soon, use the notice variant. It utilizes the notice semantic color (orange) and has an "alert" icon to help those with color vision deficiency to discern the message tone.
 */
export const Notice = AlertsWithStyleOptions.bind({});
Notice.args = {
	variant: "notice",
	headerText: "Notice in-line alert header",
};
Notice.parameters = {
	chromatic: { disableSnapshot: true },
};
Notice.tags = ["!dev"];

/**
 * An in-line alert with a close button in the footer. Combine this strategy with any variant.
 */
export const WithFooterClosable = AlertsWithStyleOptions.bind({});
WithFooterClosable.args = {
	variant: "negative",
	isClosable: true,
	text: "Incorrect payment information - error",
};
WithFooterClosable.parameters = {
	chromatic: { disableSnapshot: true },
};
WithFooterClosable.tags = ["!dev"];

/**
 * An in-line alert with a link in the footer. Combine this strategy with any variant.
 */
export const WithFooterLink = AlertsWithStyleOptions.bind({});
WithFooterLink.args = {
	hasLink: true,
	text: "Click the link",
};
WithFooterLink.parameters = {
	chromatic: { disableSnapshot: true },
};
WithFooterLink.tags = ["!dev"];

/**
 * An in-line alert with a link and close button in the footer. Combine this strategy with any variant.
 */
export const WithFooterLinkAndClosable = AlertsWithStyleOptions.bind({});
WithFooterLinkAndClosable.args = {
	hasLink: true,
	isClosable: true,
	text: "Click the link or close the alert",
};
WithFooterLinkAndClosable.parameters = {
	chromatic: { disableSnapshot: true },
};
WithFooterLinkAndClosable.tags = ["!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = InlineAlertGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
