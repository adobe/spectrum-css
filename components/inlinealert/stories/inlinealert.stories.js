import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { InlineAlertGroup } from "./inlinealert.test.js";
import { Template } from "./template.js";

/**
 * In-line alerts display a non-modal message associated with objects in a view. These are often used in form validation, providing a place to aggregate feedback related to multiple fields.
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
		},
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Component",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "info", "positive", "notice", "negative"],
			control: "select",
		},
		isClosable: {
			name: "Closable",
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
		headerText: "Neutral in-line alert header",
		text: "This is an alert.",
		variant: "neutral",
		isClosable: false,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=2659-4482",
		},
		packageJson,
		metadata,
	},
};

/**
 * The neutral variant is the default for in-line alerts.
 */
export const Default = InlineAlertGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * The informative variant uses the informative semantic color (blue) and has an "information" icon to help those with color vision deficiency discern the message tone. This should be used when the message needs to call extra attention, as compared to the neutral variant.
 *
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Info_18_S.svg icon in the Express workflow icon set._
 */
export const Informative = Template.bind({});
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
 *
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Alert_18_S.svg icon in the Express workflow icon set._
 */
export const Negative = Template.bind({});
Negative.args = {
	variant: "negative",
	headerText: "Negative in-line alert header",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};
Negative.tags = ["!dev"];

/**
 * The positive variant uses the positive semantic color (green) and has a "checkmark" icon to help those with color vision deficiency discern the message tone. This variant should be used to inform someone of a successful function or result of an action they took.
 *
 * _Spectrum for Adobe Express uses a different icon. Use the SX_CheckmarkCircle_18_S.svg icon in the Express workflow icon set._
 */
export const Positive = Template.bind({});
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
 *
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Alert_18_S.svg icon in the Express workflow icon set._
 */
export const Notice = Template.bind({});
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
 *
 * _Spectrum for Adobe Express uses a different icon. Use the SX_Alert_18_S.svg icon in the Express workflow icon set._
 */
export const Closable = Template.bind({});
Closable.args = {
	variant: "negative",
	isClosable: true,
	headerText: "Incorrect payment information - error",
};
Closable.parameters = {
	chromatic: { disableSnapshot: true },
};
Closable.tags = ["!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = InlineAlertGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
