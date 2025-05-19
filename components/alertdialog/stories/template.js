import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

const iconMap = {
	warning: "AlertDiamond",
	error: "AlertTriangle"
};

const buttonMap = {
	confirmation: [{
		variant: "secondary",
		treatment: "outline",
		label: "Remind me later"
	}, {
		variant: "accent",
		treatment: "fill",
		label: "Enable"
	}],
	information: [{
		variant: "secondary",
		treatment: "outline",
		label: "No, thanks"
	},{
		variant: "secondary",
		treatment: "outline",
		label: "Remind me later"
	}, {
		variant: "primary",
		treatment: "fill",
		label: "Rate now"
	}],
	destructive: [{
		variant: "secondary",
		treatment: "outline",
		label: "Cancel"
	}, {
		variant: "negative",
		treatment: "fill",
		label: "Delete"
	}],
	warning: [{
		variant: "secondary",
		treatment: "outline",
		label: "Cancel"
	}, {
		variant: "primary",
		treatment: "fill",
		label: "Continue"
	}],
	error: [{
		variant: "secondary",
		treatment: "outline",
		label: "Cancel"
	}, {
		variant: "primary",
		treatment: "fill",
		label: "Continue"
	}],
};

export const Dialog = ({
	rootClass = "spectrum-AlertDialog",
	heading,
	content,
	customClasses = [],
	variant,
	hasVerticalButtons,
	id = getRandomId("alertdialog"),
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
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
					${when(iconMap[variant], () => Icon({
						size: "m",
						iconName: iconMap[variant],
						setName: "workflow",
						customClasses: [`${rootClass}-icon`],
					}, context))}
					<h1 class="${rootClass}-heading" id="dialog_label">${heading}</h1>
				</div>
				<section class="${rootClass}-content">${content}</section>
				<section class="${rootClass}-buttongroup">
					${ButtonGroup({ items: buttonMap[variant], vertical: hasVerticalButtons }, context)}
				</section>
			</div>
		</div>
	`;
};

export const Template = ({
	isOpen = true,
	skipWrapper = false,
	...args
} = {}, context = {}) => {
	return Modal({
		isOpen,
		content: [
			Dialog(args, context)
		],
		skipWrapper,
	}, context);
};
