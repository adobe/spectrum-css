import { getRandomId, renderContent } from "@spectrum-css/preview/decorators/utilities.js";
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
	customClasses = [],
	id = getRandomId("popover"),
	testId,
	triggerId = getRandomId("popover-trigger"),
	customStyles = {},
	trigger,
	content = [],
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;
	const textDir = globals.textDir ?? "ltr";
	const isNestedPopover = id === "popover-nested" || id === "popover-nested-2";

	/**
	 * Adjust popover's position in relation to the source/trigger element.
	 * Changes both the transform and the absolute positioning.
	 */
	const positionPopover = () => {
		// Nested popover is static and open, so we don't need to reposition it.
		if (isNestedPopover || !isOpen || !position) return;

		// Get trigger (source) and popover elements
		const element = document.querySelector(`#${triggerId}`);
		const popover = document.querySelector(`#${id}`);

		if (!element || !popover) return;

		const rect = element.getBoundingClientRect();

		const transforms = [];
		const triggerXCenter = (rect.left + rect.right) / 2;
		const triggerYCenter = (rect.top + rect.bottom) / 2;
		const popWidth = popover.offsetWidth ?? 0;
		const popHeight = popover.offsetHeight ?? 0;

		let x, y;
		let xOffset = "+ 0px";
		let yOffset = "+ 0px";

		if (position.startsWith("top") || position.startsWith("bottom")) {
			x = triggerXCenter - (popWidth > 0 ? popWidth / 2 : popWidth);
		}
		if (position.includes("left") || position.includes("right") || position.startsWith("start") || position.startsWith("end")) {
			y = triggerYCenter - (popHeight > 0 ? popHeight / 2 : popHeight);
		}
		if (position.startsWith("top")) {
			y = rect.top - popHeight;
			yOffset = withTip
				? "- (var(--spectrum-popover-pointer-height) + var(--spectrum-popover-animation-distance) - 1px)"
				: "- var(--spectrum-popover-animation-distance)";
		}
		else if (position.startsWith("bottom")) {
			y = rect.bottom;
			yOffset = "+ (var(--spectrum-popover-animation-distance))";
		}
		else if (position.includes("left")) {
			if (textDir == "rtl") {
				x = rect.right;
				xOffset = withTip ? "+ 0px" : "+ var(--spectrum-popover-animation-distance)";
			}
			else {
				x = rect.left - popWidth;
				xOffset = withTip
					? "- ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)"
					: "- var(--spectrum-popover-animation-distance)";
			}
		}
		else if (position.includes("right")) {
			if (textDir == "rtl") {
				x = rect.left - popWidth;
				xOffset = withTip
					? "- ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)"
					: "- var(--spectrum-popover-animation-distance)";
			}
			else {
				x = rect.right;
				xOffset = withTip ? "+ 0px" : "+ var(--spectrum-popover-animation-distance)";
			}
		}
		else if (position.includes("start")) {
			x = rect.left - popWidth;
			xOffset = withTip
				? "- ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)"
				: "- var(--spectrum-popover-animation-distance)";
		}
		else if (position.includes("end")) {
			x = rect.right;
			xOffset = withTip ? "+ 0px" : "+ var(--spectrum-popover-animation-distance)";
		}

		// Offset popover with translateX and/or translateY.
		if (x) transforms.push(`translateX(calc(var(--flow-direction) * calc(${parseInt(x, 10)}px ${xOffset})))`);
		if (y) transforms.push(`translateY(calc(${y}px ${yOffset}))`);

		if (transforms.length > 0) {
			popover.style.transform = transforms.join(" ");
		}

		// Add start and end styles
		if (position === "top-start" || position === "bottom-start") {
			popover.style["inset-inline-start"] = "calc(" + (popWidth / 2) + "px - var(--spectrum-popover-pointer-edge-offset))";
			popover.style["inset-block-start"] = "0px";
		}
		else if (position === "top-end" || position === "bottom-end") {
			popover.style["inset-inline-start"] = "calc(-1 *" + (popWidth / 2) + "px + var(--spectrum-popover-pointer-edge-offset))";
			popover.style["inset-block-start"] = "0px";
		}
		else if (position === "left-top" || position === "right-top" || position === "start-top" || position === "end-top") {
			popover.style["inset-block-start"] = "calc(" + (popHeight / 2) + "px - var(--spectrum-popover-pointer-edge-offset))";
			popover.style["inset-inline-start"] = "0px";
		}
		else if (position === "left-bottom" || position === "right-bottom" || position === "start-bottom" || position === "end-bottom") {
			popover.style["inset-block-start"] = "calc(-1 *" + (popHeight / 2) + "px + var(--spectrum-popover-pointer-edge-offset))";
			popover.style["inset-inline-start"] = "0px";
		}
		else {
			popover.style["inset-inline-start"] = "0px";
			popover.style["inset-block-start"] = "0px";
		}
	};

	window.addEventListener("DOMContentLoaded", () => {
		setTimeout(positionPopover, 100);
	});

	window.addEventListener("resize", () => {
		setTimeout(positionPopover, 100);
	});

	return html`
		${when(typeof trigger === "function", (passthroughs, context) => trigger({
			onclick: function() {
				updateArgs({ isOpen: !isOpen });
			},
			...passthroughs,
			isSelected: isNestedPopover ?? isOpen,
			isOpen: isNestedPopover ?? true,
			id: triggerId,
			popupId: id,
		}, context))}

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
			${renderContent(content)}
			${withTip
				? position && ["top", "bottom"].some((e) => position.startsWith(e))
					? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
					: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
				: ""}
		</div>
	`;
};
