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
	customWrapperStyles = {},
	customWrapperClasses = [],
	trigger,
	...args
} = {}, context = {}) => {
	const showTestingGrid = context?.parameters?.showTestingGrid || false;

	const positioningStyles = {
		"display": "inline-flex",
		"align-items": "center",
		"justify-content": "center",
	};

	// If the popover is open, create a min-container size for VRTs
	if (isOpen || !showTestingGrid) {
		if (["top", "bottom"].some((e) => position.startsWith(e))) {
			customWrapperStyles["min-inline-size"] = "var(--spectrum-popover-width)";
			positioningStyles["min-block-size"] = "calc(var(--spectrum-popover-height) + var(--spectrum-popover-trigger-height, 0px) + var(--spectrum-popover-animation-distance, var(--spectrum-spacing-100)) * 2)";
		}
		else {
			positioningStyles["min-inline-size"] = "calc(var(--spectrum-popover-width) + var(--spectrum-popover-trigger-width, 0px))";
			positioningStyles["min-block-size"] = "max(var(--spectrum-popover-trigger-height), var(--spectrum-popover-height))";
		}
	}

	if (trigger) {
		positioningStyles["position"] = "relative";

		// Position the trigger in the container to replicate the positioning of the popover.
		if (position.startsWith("top") || position.endsWith("-bottom")) {
			positioningStyles["align-items"] = "end";
		}
		else if (position.startsWith("bottom") || position.endsWith("-top")) {
			positioningStyles["align-items"] = "start";
		}

		if (position.endsWith("-right") || position.startsWith("left")) {
			positioningStyles["justify-content"] = "right";
		}
		else if (position.endsWith("-start") || position.startsWith("end")) {
			positioningStyles["justify-content"] = "start";
		}
		else if (position.endsWith("-left") || position.startsWith("right")) {
			positioningStyles["justify-content"] = "left";
		}
		else if (position.endsWith("-end") || position.startsWith("start")) {
			positioningStyles["justify-content"] = "end";
		}
	}

	return html`
		<div class=${classMap({
			...customWrapperClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})} style=${styleMap({
			...positioningStyles,
			...customWrapperStyles,
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
	const showTestingGrid = context?.parameters?.showTestingGrid ?? false;

	const positioningStyles = {};

	if (trigger) {
		// Translate the popover to the correct position, keeping the default spacing between the trigger and the popover in mind.
		if (position.startsWith("top")) {
			positioningStyles["transform"] = "translateY(calc(var(--spectrum-popover-trigger-height, 0px) * -1 - var(--spectrum-popover-animation-distance, var(--spectrum-spacing-100))))";
		}
		else if (position.startsWith("bottom")) {
			positioningStyles["transform"] = "translateY(calc(var(--spectrum-popover-trigger-height, 0px) + var(--spectrum-popover-animation-distance, var(--spectrum-spacing-100))))";
		}

		// Position the popover to the correct position at the correct side of the trigger.
		if (position.startsWith("right")) {
			positioningStyles["left"] = "var(--spectrum-popover-trigger-width)";
		}
		else if (position.startsWith("left")) {
			positioningStyles["right"] = "var(--spectrum-popover-trigger-width)";
		}
		else if (position.startsWith("start")) {
			positioningStyles["inset-inline-end"] = "var(--spectrum-popover-trigger-width)";
		}
		else if (position.startsWith("end")) {
			positioningStyles["inset-inline-start"] = "var(--spectrum-popover-trigger-width)";
		}
	}

	if (!trigger && (isOpen || !showTestingGrid)) {
		// Without a trigger, no other positioning is necessary.
		positioningStyles["position"] = "relative";
	}
	else {
		positioningStyles["position"] = "absolute";
	}

	// We need to wait for the popover to render before we can get the actual height and width
	// of the popover to set the custom properties. Avoid ResizeObserver feedback loops in Chrome
	// by measuring once on frame and updating on window resize only when values change.
	function initializePopoverPositioningMeasurements() {
		if (!isOpen || !id) return;

		// Obtain a reference to the popover element we will measure.
		const popoverElement = document.getElementById(id);
		if (!popoverElement) return;

		// Prevent duplicate bindings when stories re-render.
		if (popoverElement.dataset.positioningInitialized === "true") return;
		popoverElement.dataset.positioningInitialized = "true";

		// Identify the trigger element (button) and the wrapper whose CSS variables we will set.
		const triggerElement = trigger && triggerId ? document.getElementById(triggerId) : popoverElement.previousElementSibling;
		const wrapperElement = popoverElement.parentElement;

		// Track previously applied sizes to avoid redundant writes that can trigger reflow.
		let previousMeasuredSizes = {
			triggerWidth: -1,
			triggerHeight: -1,
			popoverWidth: -1,
			popoverHeight: -1,
		};

		// Measure the trigger and popover elements and write CSS custom properties when they change.
		function applyMeasuredSizeCustomProperties() {
			if (!wrapperElement) return;
			// Measure trigger element size, if present. Use offset* to include borders.
			if (triggerElement) {
				const triggerWidthPx = triggerElement.offsetWidth;
				const triggerHeightPx = triggerElement.offsetHeight;
				if (triggerWidthPx !== previousMeasuredSizes.triggerWidth) {
					wrapperElement.style.setProperty("--spectrum-popover-trigger-width", `${triggerWidthPx}px`);
					previousMeasuredSizes.triggerWidth = triggerWidthPx;
				}
				if (triggerHeightPx !== previousMeasuredSizes.triggerHeight) {
					wrapperElement.style.setProperty("--spectrum-popover-trigger-height", `${triggerHeightPx}px`);
					previousMeasuredSizes.triggerHeight = triggerHeightPx;
				}
			}

			// Measure popover element size. Use offset* to include borders.
			const popoverWidthPx = popoverElement.offsetWidth;
			const popoverHeightPx = popoverElement.offsetHeight;
			if (popoverWidthPx !== previousMeasuredSizes.popoverWidth) {
				wrapperElement?.style.setProperty("--spectrum-popover-width", `var(--mod-popover-width, ${popoverWidthPx}px)`);
				previousMeasuredSizes.popoverWidth = popoverWidthPx;
			}
			if (popoverHeightPx !== previousMeasuredSizes.popoverHeight) {
				wrapperElement?.style.setProperty("--spectrum-popover-height", `var(--mod-popover-height, ${popoverHeightPx}px)`);
				previousMeasuredSizes.popoverHeight = popoverHeightPx;
			}
		}

		// Perform the initial measurement on the next animation frame.
		requestAnimationFrame(applyMeasuredSizeCustomProperties);

		// Re-measure on window resize/orientation change, throttled via rAF.
		let scheduledResizeRafId = 0;
		function handleWindowResize() {
			if (scheduledResizeRafId) cancelAnimationFrame(scheduledResizeRafId);
			scheduledResizeRafId = requestAnimationFrame(applyMeasuredSizeCustomProperties);
		}
		window.addEventListener("resize", handleWindowResize, { passive: true });
		window.addEventListener("orientationchange", handleWindowResize, { passive: true });

		// Passive event listener to close the popover when clicking outside of the button
		document.body.addEventListener("click", function (evt) {
			// Don't close the popover if the click is on the trigger or the popover
			if (!isOpen || evt.target.closest(`#${triggerId}`) || evt.target.closest(`#${id}`)) {
				return;
			}

			if (typeof updateArgs === "function") updateArgs({ isOpen: false });
		}, {
			capture: true,
			passive: true,
		});
	}

	document.addEventListener("DOMContentLoaded", initializePopoverPositioningMeasurements, { once: true });

	return html`
		${when(typeof trigger === "function", (passthroughs) => trigger({
			...passthroughs,
			isOpen,
			id: triggerId,
			popupId: id,
			onclick: function() {
				if (typeof updateArgs === "function") updateArgs({ isOpen: !isOpen });
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
				...positioningStyles,
				...popoverAlignment,
				...customStyles
			})}
			role="presentation"
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
		>
			${renderContent(content, { context })}
			${withTip
				? position && ["top", "bottom"].some((e) => position.startsWith(e))
					? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
					: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
				: ""}
		</div>
	`;
};
