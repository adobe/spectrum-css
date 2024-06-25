import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Popover",
	size = "m",
	isOpen = false,
	withTip = false,
	position = "top",
	id = "popover-1",
	testId,
	customClasses = [],
	customStyles = {},
	triggerId = "trigger",
	trigger,
	content = [],
}, context) => {
	const { globals = {} } = context;
	const textDir = globals.textDirection ?? "ltr";

	if (content.length === 0) {
		console.warn("Popover: Content is required.");
	}

	const nestedPopover = id === "popover-nested" || id === "popover-nested-2";

	function alignPopover ({
		count = 0,
		triggerElement,
		shouldBeOpen = false,
		...e
	}) {
		if (!triggerElement) triggerElement = document.getElementById(triggerId);

		// Check if the element is able to be measured, if not, try again in 500ms
		if (!triggerElement) {
			if (count < 10) {
				setTimeout(() => alignPopover({
					count: count++,
					triggerElement,
					shouldBeOpen,
					...e
				}), 500);

				// If there is not a trigger, there's nothing to align the popover to
				return;
			}
			else {
				console.warn("Popover: could not find trigger element.");
				return;
			}
		}

		const controlsId = triggerElement.getAttribute("aria-controls");
		const popoverElement = controlsId ? document.getElementById(controlsId) : undefined ?? document.getElementById(id);
		// If there is no popover, there's nothing to align
		if (!popoverElement) return;

		// Get current state
		let isPopoverOpen = popoverElement.classList.contains("is-open") || shouldBeOpen;
		if (e?.type === "click") {
			triggerElement.classList.toggle("is-selected", !isPopoverOpen);
			popoverElement.classList.toggle("is-open", !isPopoverOpen);
		}
		else if (e?.type !== "resize") {
			// Initial setup: make sure the elements are in the correct state
			triggerElement.classList.toggle("is-selected", isPopoverOpen);
			popoverElement.classList.toggle("is-open", isPopoverOpen);
			popoverElement.parentElement?.style.setProperty("position", "relative");
		}

		// Update the state of the isOpen variable
		isPopoverOpen = popoverElement.classList.contains("is-open");

		// If the popover is not open, don't do anything
		if (!isPopoverOpen) return;

		const styleContainer = document.getElementById("popover-positioning");
		const popoverStyles = {};
		const transforms = [];

		const rect = triggerElement.getBoundingClientRect();

		const triggerXCenter = (rect.left + rect.right) / 2;
		const triggerYCenter = (rect.top + rect.bottom) / 2;

		const popWidth = popoverElement.offsetWidth ?? 0;
		const popHeight = popoverElement.offsetHeight ?? 0;

		let x, y, xOffset, yOffset;

		// Determine the horizontal placement for the popover, relative to the trigger
		if (position.startsWith("top") || position.startsWith("bottom")) {
			x = triggerXCenter - (popWidth > 0 ? popWidth / 2 : popWidth);
		}
		else if (
			(position.includes("end")) ||
			(position.includes("right") && textDir === "ltr") ||
			(position.includes("left") && textDir === "rtl")
		) {
			x = rect.right;
			if (!withTip) xOffset = " + var(--spectrum-popover-animation-distance)";
		}
		else if (
			(position.includes("start")) ||
			(position.includes("right") && textDir == "rtl") ||
			(position.includes("left") && textDir == "ltr")
		) {
			x = rect.left - popWidth;

			if (withTip) xOffset = " - ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)";
			else xOffset = " - var(--spectrum-popover-animation-distance)";
		}

		// Determine the vertical placement for the popover, relative to the trigger
		if (position.startsWith("top")) {
			y = rect.top - popHeight;

			if (withTip) yOffset = " - var(--spectrum-popover-pointer-height + var(--spectrum-popover-animation-distance) - 1px)";
			else yOffset = " - var(--spectrum-popover-animation-distance)";
		}
		else if (position.startsWith("bottom")) {
			y = rect.bottom - rect.top;
			// if (withTip) yOffset = " - var(--spectrum-popover-pointer-height)"; //  - var(--spectrum-popover-animation-distance)
			if (!withTip) yOffset = " - var(--spectrum-popover-pointer-height)"; //  - var(--spectrum-popover-animation-distance)
		}
		else {
			y = triggerYCenter - (popHeight > 0 ? popHeight / 2 : popHeight);
		}

		// Add start and end styles
		if (position === "top-start" || position === "bottom-start") {
			popoverStyles["inset-inline-start"] = "calc(" + parseInt(popWidth / 2, 10) + "px - var(--spectrum-popover-pointer-edge-offset))";
		}
		else if (position === "top-end" || position === "bottom-end") {
			popoverStyles["inset-inline-start"] = "calc(-1 *" + parseInt(popWidth / 2, 10) + "px + var(--spectrum-popover-pointer-edge-offset))";
		}
		else {
			popoverStyles["inset-inline-start"] = parseInt(rect.width / 2 - popWidth, 10) + "px";
		}

		if (position === "left-top" || position === "right-top" || position === "start-top" || position === "end-top") {
			popoverStyles["inset-block-start"] = "calc(" + (popHeight / 2) + "px - var(--spectrum-popover-pointer-edge-offset))";
		}
		else if (position === "left-bottom" || position === "right-bottom" || position === "start-bottom" || position === "end-bottom") {
			popoverStyles["inset-block-start"] = "calc(-1 *" + (popHeight / 2) + "px + var(--spectrum-popover-pointer-edge-offset))";
		}
		else {
			popoverStyles["inset-block-start"] = "0px";
		}

		x = parseInt(x, 10);
		y = parseInt(y, 10);

		if (x) transforms.push(`translateX(calc(var(--flow-direction) * ${xOffset ? `calc(${x}px${xOffset})` : `${x}px`}))`);
		if (y) transforms.push(`translateY(calc(${y}px${yOffset ?? ""}))`);
		if (transforms) {
			popoverStyles["transform"] = transforms.join(" ");
		}

		// Print the popover inline styles to the console
		if (styleContainer) {
			styleContainer.innerHTML = `#${popoverElement.id} { ${Object.entries(popoverStyles).map(([key, value]) => `${key}: ${value};`).join(" ")} }`;
		}
	}

	document.addEventListener("DOMContentLoaded", () => {
		if (!triggerId || !id) {
			console.warn("Popover: requires an id and triggerId to properly align.");
			return;
		}

		// Attempt to align the popover when the page loads if it is open
		if (isOpen) alignPopover({
			triggerElement: document.getElementById(triggerId),
			shouldBeOpen: isOpen,
		});
	});

	// add a listener for resize events
	window.addEventListener("resize", (e) => {
		alignPopover({
			triggerElement: document.getElementById(triggerId),
			...e
		});
	});

	return html`
		<style id="popover-positioning"></style>
		${when(typeof trigger === "function", () => trigger({
			isSelected: nestedPopover ?? isOpen,
			id: triggerId,
			popupId: id,
			onclick: (e) => {
				alignPopover({
					type: "click",
					triggerElement: e.target,
					...e
				});
			},
		}))}
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--withTip`]: withTip,
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
			role="presentation"
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
		>
			${content.map((c) => (typeof c === "function" ? c({}, context) : c))}
			${withTip
				? position && ["top", "bottom"].some((e) => position.startsWith(e))
					? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
					: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
				: ""}
		</div>
	`;
};

export const Variants = (args, context) => {
	const placementOptions = context?.argTypes?.position?.options ?? [];
	return html`
		<div style=${styleMap({
			"display": window.isChromatic() ? "none" : "contents",
		})}>
			${Template(args, context)}
		</div>
		<div style=${styleMap({
			"display": window.isChromatic() ? "flex" : "none",
			"flex-direction": "column",
			"align-items": "flex-start",
		})} class="spectrum-Typography">
			${placementOptions.map(option => {
				let optionDescription;
				if (option.startsWith("start") || option.startsWith("end"))
					optionDescription = "Changes side with text direction (like a logical property)";
				if (option.startsWith("left") || option.startsWith("right"))
					optionDescription = "Text direction does not affect the position";

				return html`
					<div>
						${Typography({
							semantics: "heading",
							size: "s",
							content: [option],
							customClasses: ["chromatic-ignore"],
						}, context)}
						<div style=${styleMap({
							"padding": "1rem",
							"block-size": "200px",
							"inline-size": "200px",
							"border": "1px solid var(--spectrum-gray-200)",
							"border-radius": "4px",
						})}>
							${Template({
								...args,
								position: option,
								isOpen: true,
								trigger: () => null,
							}, context)}
						</div>
						${when(optionDescription, () => html`
							${Typography({
								semantics: "body",
								size: "s",
								content: [html`<sup>*</sup> ${optionDescription}`],
								customClasses: ["chromatic-ignore"],
							}, context)}
						`)}
					</div>
				`;
			})}
		</div>
	`;
};
