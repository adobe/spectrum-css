import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	isOpen = false,
	position = "top",
	id = getRandomId("popover"),
	triggerId = getRandomId("popover-trigger"),
	popoverWrapperStyles = {},
	trigger,
	...args
} = {}, context = {}) => {
	// If the popover is open, create a min-container size for VRTs
	if (isOpen) {
		if (["top", "bottom"].some((e) => position.startsWith(e))) {
			popoverWrapperStyles["min-inline-size"] = "var(--spectrum-popover-width)";
			popoverWrapperStyles["min-block-size"] = "calc(var(--spectrum-popover-height) + var(--spectrum-popover-trigger-height, 0px) + 16px)";
		}
		else {
			popoverWrapperStyles["min-inline-size"] = "calc(var(--spectrum-popover-width) + var(--spectrum-popover-trigger-width, 0px))";
			popoverWrapperStyles["min-block-size"] = "max(var(--spectrum-popover-trigger-height), var(--spectrum-popover-height))";
		}
	}

	if (trigger) {
		popoverWrapperStyles["position"] = "relative";

		// Position the trigger in the container to replicate the positioning of the popover.
		if (position.startsWith("top") || position.endsWith("-bottom")) {
			popoverWrapperStyles["align-items"] = "end";
		}
		else if (position.startsWith("bottom") || position.endsWith("-top")) {
			popoverWrapperStyles["align-items"] = "start";
		}

		if (position.endsWith("-right") || position.startsWith("left")) {
			popoverWrapperStyles["justify-content"] = "right";
		}
		else if (position.endsWith("-start") || position.startsWith("end")) {
			popoverWrapperStyles["justify-content"] = "start";
		}
		else if (position.endsWith("-left") || position.startsWith("right")) {
			popoverWrapperStyles["justify-content"] = "left";
		}
		else if (position.endsWith("-end") || position.startsWith("start")) {
			popoverWrapperStyles["justify-content"] = "end";
		}
	}

	return html`
		<div style=${styleMap({
			"display": "inline-flex",
			"align-items": "center",
			"justify-content": "center",
			...popoverWrapperStyles,
		})}>
			${Popover({
				...args,
				isOpen,
				position,
				id,
				triggerId,
				trigger,
			}, context)}
		</div>
	`;
};


export const Popover = ({
	rootClass = "spectrum-Popover",
	isOpen = false,
	withTip = false,
	position = "top",
	customClasses = [],
	id = getRandomId("popover"),
	testId,
	triggerId = getRandomId("popover-trigger"),
	customStyles = {},
	popoverAlignment = {},
	trigger,
	content = [],
} = {}, context = {}) => {
	const { updateArgs } = context;

	if (trigger) {
		// Translate the popover to the correct position, keeping the default spacing between the trigger and the popover in mind.
		if (position.startsWith("top")) {
			popoverAlignment["transform"] = "translateY(calc(var(--spectrum-popover-trigger-height, 0px) * -1 - var(--spectrum-spacing-100)))";
		}
		else if (position.startsWith("bottom")) {
			popoverAlignment["transform"] = "translateY(calc(var(--spectrum-popover-trigger-height, 0px) + var(--spectrum-spacing-100)))";
		}

		// Position the popover to the correct position at the correct side of the trigger.
		if (position.startsWith("right")) {
			popoverAlignment["left"] = "var(--spectrum-popover-trigger-width)";
		}
		else if (position.startsWith("left")) {
			popoverAlignment["right"] = "var(--spectrum-popover-trigger-width)";
		}
		else if (position.startsWith("start")) {
			popoverAlignment["inset-inline-end"] = "var(--spectrum-popover-trigger-width)";
		}
		else if (position.startsWith("end")) {
			popoverAlignment["inset-inline-start"] = "var(--spectrum-popover-trigger-width)";
		}
	}

	if (!trigger && isOpen) {
		// Without a trigger, no other positioning is necessary.
		popoverAlignment["position"] = "relative";
	}

	// We need to wait for the popover to render before we can get the actual height and width
	// of the popover to set the custom properties.
	document.addEventListener("DOMContentLoaded", function() {
		if (!isOpen || !id) return;

		// Wait until the popover element is rendered to the DOM
		const popoverEl = document.getElementById(id);
		if (!popoverEl) return;

		const triggerEl = triggerId ? document.getElementById(triggerId) : popoverEl.previousElementSibling;

		function resizeObserverCallback(entries) {
			for (const entry of entries) {
				const isPopover = entry.target === popoverEl;
				const size = entry.contentRect;
				// Update dimensions when size stabilizes

				// Get the actual height and width of the popover
				if (!size) return;

				// Write the actual height and width of the popover to the CSS custom properties
				if (isPopover) {
					if (size.width) entry.target.parentElement.style.setProperty("--spectrum-popover-width", `var(--mod-popover-width, ${parseInt(size.width, 10)}px)`);
					if (size.height) entry.target.parentElement.style.setProperty("--spectrum-popover-height", `var(--mod-popover-height, ${parseInt(size.height, 10)}px)`);
				}
				else {
					if (size.width) entry.target.parentElement.style.setProperty("--spectrum-popover-trigger-width", `${parseInt(size.width, 10)}px`);
					if (size.height) entry.target.parentElement.style.setProperty("--spectrum-popover-trigger-height", `${parseInt(size.height, 10)}px`);
				}
			}
		}

		const resizeObserver = new ResizeObserver(resizeObserverCallback);

		if (triggerEl) resizeObserver.observe(triggerEl);
		resizeObserver.observe(popoverEl);

		// Run the resize observer callback immediately to get the initial size
		setTimeout(() => {
			resizeObserverCallback([{
				target: popoverEl,
				contentRect: popoverEl.getBoundingClientRect(),
			}, {
				target: triggerEl,
				contentRect: triggerEl.getBoundingClientRect(),
			}]);
		}, 100);
	});

	return html`
		${when(typeof trigger === "function", (passthroughs) => trigger({
			...passthroughs,
			isOpen,
			id: triggerId,
			popupId: id,
			onclick: function() {
				updateArgs({ isOpen: !isOpen });
			},
		}, context))}

		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--withTip`]: withTip,
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				...popoverAlignment,
				...customStyles
			})}
			role="presentation"
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
		>
			${renderContent(content)}
			${withTip
				? position && ["top", "bottom"].some((e) => position.startsWith(e))
					? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
					: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
				: ""}
		</div>
	`;
};

/**
 * Contains a source button with a fixed width, and an always open Popover.
 */
export const FixedWidthSourceTemplate = (args, context) => html`
	<div style="min-width: 300px;">
		${ActionButton({
			label: "Source",
			customStyles: {
				width: "100px",
				display: "block",
			},
		}, context)}
		${Template({
			...args,
			position: "bottom-start",
			isOpen: true,
			trigger: undefined,
		}, context)}
	</div>
`;
