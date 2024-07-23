import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Variants, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

const Dialog = ({
	rootClass = "spectrum-AlertDialog",
	heading,
	content,
	customClasses = [],
	buttons,
	variant,
	icon = false,
	id = getRandomId("alertdialog"),
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			aria-labelledby="dialog_label"
			style=${styleMap(customStyles)}
		>
			<div class="${rootClass}-grid">
				<div class="spectrum-AlertDialog-header">
					<h1 class="${rootClass}-heading" id="dialog_label">${heading}</h1>
					${when(icon, () => Icon({
						size: "m",
						iconName: "Alert",
						customClasses: [`${rootClass}-icon`],
					}, context))}
				</div>
				${Divider({
					horizontal: true,
					customClasses: [`${rootClass}-divider`],
					}, context)}
				<section class="${rootClass}-content">${content}</section>
				${ButtonGroup({ items: buttons }, context)}
			</div>
		</div>
	`;
};

export const Template = ({
	isOpen = true,
	customModalStyles = {},
	skipWrapper = false,
	...args
} = {}, context = {}) => {
	return Modal({
		isOpen,
		content: [
			Dialog(args, context)
		],
		customStyles: customModalStyles,
		skipWrapper,
	}, context);
};

export const AlertDialogGroup = Variants({
	// Test this without Modal to focus on the dialog solo
	Template,
	TestTemplate: Dialog,
	wrapperStyles: {
		"z-index": "1",
		"inline-size": "fit-content",
		"background-color": "var(--spectrum-gray-50, white)"
	},
	testData: [{}, {
		variant: "warning",
		heading: "Unverified format",
		icon: true,
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel"
		}, {
			treatment: "outline",
			label: "Continue",
			variant: "primary"
		}],
		content: "This format has not been verified and may not be viewable for some users. Do you want to continue publishing?",
	}, {
		variant: "error",
		heading: "Unable to share",
		icon: true,
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel"
		}, {
			treatment: "outline",
			label: "Continue",
			variant: "primary"
		}],
		content: "An error occured while sharing your project. Please verify the email address and try again.",
	}, {
		variant: "destructive",
		heading: "Delete 3 documents?",
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel"
		}, {
			treatment: "fill",
			label: "Delete",
			variant: "negative"
		}],
		content: "Are you sure you want to delete the 3 selected documents?",
	}, {
		variant: "information",
		heading: "Informative Dialog with a wrapping title text because the text is longer than the width of the alert dialog",
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "No, thanks"
		},{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later"
		}, {
			variant: "primary",
			treatment: "outline",
			label: "Rate now",
		}],
		content: "If you enjoy our app, would you mind taking a moment to rate it?",
	}],
});
