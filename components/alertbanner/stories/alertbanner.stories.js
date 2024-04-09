import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

/**
 * The alert banner show pressing and high-signal messages, such as system alerts. They're meant to be noticed and prompt users to take action.
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
					alignItems: "flex-start",
					gap: "1.0rem",
					"--mod-detail-margin-end": ".3rem",
				})}
			>
				${Story(context)}
			</div>
		`,
	],
};

const AlertBannerGroup = (args) => {
	return !window.isChromatic() ? Template(args) : html`
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["All variants with button, including wrapping"],
			})}
			<div
				style=${styleMap({
					display: "flex",
					flexDirection: "column",
					gap: "12px",
				})}
			>
				${Template(args)}
				${Template({
					...args,
					variant: "info",
					text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
				})}
				${Template({
					...args,
					variant: "negative",
					text: "Connection interupted. Check your network to continue.",
				})}
				${Template({
					...args,
					isOpen: false,
					text: "This alert banner should never be displayed in VRTs. This is to test that it is not displayed when there is no is-open class applied.",
				})}
			</div>
		</div>
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["All variants without button"],
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
					actionButtonText: "",
				})}
				${Template({
					...args,
					variant: "info",
					text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
					actionButtonText: "",
				})}
				${Template({
					...args,
					variant: "negative",
					text: "Connection interupted. Check your network to continue.",
					actionButtonText: "",
				})}
			</div>
		</div>
	`;
};

export const Default = AlertBannerGroup.bind({});
Default.args = {};
