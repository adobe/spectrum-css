import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

/**
 * The alert banner shows pressing and high-signal messages, such as system alerts. It is meant to be noticed and prompt users to take action.
 */
export default {
	title: "Alert banner",
	component: "AlertBanner",
	subtitle: "Testing",
	argTypes: {
		isOpen: {
			name: "Open",
			description: "Determines whether the banner is visible or hidden.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		text: {
			name: "Text",
			description: "Text of the message displayed within the alert banner.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Semantic variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "neutral" },
			},
			options: ["neutral", "info", "negative"],
			control: "radio",
		},
		actionButtonText: {
			name: "Action button text",
			description: "Label text for the optional action button. When empty, the action button does not display.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-AlertBanner",
		isOpen: true,
		variant: "neutral",
		actionButtonText: "Action",
		text: "Your trial has expired",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-AlertBanner button"],
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail { display: inline-block; }
				.spectrum-Typography > div {
					border: 1px solid var(--spectrum-gray-200);
					border-radius: 4px;
					padding: 1em;
				}
			</style>
			<div
				style=${styleMap({
					display: "flex",
					flexDirection: "column",
					gap: "1.0rem",
					"--mod-detail-margin-end": "5px",
				})}
			>
				${Story(context)}
			</div>
		`,
	],
};

const AlertBannerGroup = (args) => {
	// Wrapper styles for testing that it resizes to fit its container width, up until its max width. 
	const largerThanMaxWidth = { inlineSize: "calc(var(--spectrum-alert-banner-width) + 100px)" };
	const smallerThanMaxWidth = { inlineSize: "calc(var(--spectrum-alert-banner-width) - 200px)" };

	return !window.isChromatic() ? Template(args) : html`
		${["neutral", "info", "negative"].map((variant) => html`
			<div 
				class="spectrum-Typography"
				style=${styleMap(largerThanMaxWidth)}
			>
				${Typography({
					semantics: "detail",
					size: "l",
					content: [`Variant: ${variant}`],
				})}
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						gap: "12px",
					})}
				>
					${Template({
						...args,
						variant,
						text: "Example with short text and both buttons.",
					})}
					${Template({
						...args,
						variant,
						text: "Example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					})}
					${Template({
						...args,
						variant,
						actionButtonText: "",
						text: "Example without the contextual action button.",
					})}
					${Template({
						...args,
						variant,
						actionButtonText: "",
						text: "Example without the contextual action button, and with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					})}
					${Template({
						...args,
						isOpen: false,
						variant,
						text: "This alert banner should never be displayed in VRTs. This is to test that it is not displayed when there is no is-open class applied.",
					})}
				</div>
			</div>
		`)}

		<div 
			class="spectrum-Typography"
			style=${styleMap(smallerThanMaxWidth)}
		>
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Container smaller than max-width"],
			})}
			<div
				style=${styleMap({
					display: "flex",
					flexDirection: "column",
					gap: "12px",
				})}
			>
				${Template({
					...args,
					variant: "info",
					text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
				})}
			</div>
		</div>
	`;
};

/**
 * Examples of all text overflow (wrapping) scenarios.
 */
const TextOverflowTemplate = (args) => html`
	<div
		style=${styleMap({
			display: "flex",
			flexDirection: "column",
			gap: "12px",
		})}
	>
		${Template({
			...args,
			variant: "info",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
		})}
		${Template({
			...args,
			variant: "neutral",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			actionButtonText: "",
		})}
	</div>
`;

/**
 * Examples of options for contextual action button and close button.
 */
const ActionableOptionsTemplate = (args) => html`
	<div
		style=${styleMap({
			display: "flex",
			flexDirection: "column",
			gap: "12px",
		})}
	>
		${Template({
			...args,
			variant: "neutral",
			text: "Your trial has expired.",
			actionButtonText: "Buy now",
		})}
		${Template({
			...args,
			variant: "neutral",
			text: "Your trial has expired",
			actionButtonText: "",
		})}
	</div>
`;

/**
 * Stories
 */
export const Default = AlertBannerGroup.bind({});
Default.args = {};

/**
 * Stories for the MDX "Docs" only.
 * Based off of the base `Template` which does not have conditional Chromatic-only markup.
 */
export const Neutral = Template.bind({});
Neutral.tags = ["is-hidden-story"];
Neutral.args = {
	variant: "neutral",
};
Neutral.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Informative = Template.bind({});
Informative.tags = ["is-hidden-story"];
Informative.args = {
	variant: "info",
};
Informative.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Negative = Template.bind({});
Negative.tags = ["is-hidden-story"];
Negative.args = {
	variant: "negative",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};

export const ActionableOptions = ActionableOptionsTemplate.bind({});
ActionableOptions.tags = ["is-hidden-story"];
ActionableOptions.args = {
	variant: "negative",
};
ActionableOptions.parameters = {
	chromatic: { disableSnapshot: true },
};

export const TextOverflow = TextOverflowTemplate.bind({});
TextOverflow.tags = ["is-hidden-story"];
TextOverflow.args = {
	variant: "negative",
};
TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};