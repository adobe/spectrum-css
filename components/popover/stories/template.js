import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
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
	popoverWrapperStyles = {},
	popoverHeight = 142,
	popoverWidth = 89,
	popoverAlignment = {},
	skipAlignment = false,
	trigger,
	content = [],
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	// We need to wait for the popover to render before we can get the actual height and width
	// of the popover to set the custom properties. This is a temporary solution until we can
	// set up anchor positioning successfully via CSS.
	document.addEventListener("DOMContentLoaded", function() {
		if (typeof popoverHeight !== "undefined" && typeof popoverWidth !== "undefined") {
			return;
		}

		setTimeout(() => {
			// Get the actual height and width of the popover
			const popover = document.getElementById(id);
			const rect = popover.getBoundingClientRect();

			let shouldChange = false;
			if (popoverHeight !== parseInt(rect.height, 10)) {
				shouldChange = true;
			}
			else if (popoverWidth !== parseInt(rect.width, 10)) {
				shouldChange = true;
			}

			// Do nothing if the height and width are the same; prevent loops
			if (!shouldChange) return;

			// Write the actual height and width of the popover to the CSS custom properties
			updateArgs({
				popoverWidth: parseInt(rect.width, 10),
				popoverHeight: parseInt(rect.height, 10),
			});
		}, 500);
	});

	if (!skipAlignment) {
		switch (position) {
			case "top":
				popoverWrapperStyles["inline-size"] = "var(--spectrum-popover-width)";
				popoverAlignment["inset-block-end"] = "100%";
				popoverAlignment["inset-inline-start"] = "0";
				break;
			case "top-left":
				// Ignore the width of the popover and make it left-aligned
				popoverAlignment["inset-block-end"] = "100%";
				popoverAlignment["left"] = "0";
				break;
			case "top-right":
				// Ignore the width of the popover and make it right-aligned
				popoverAlignment["inset-block-end"] = "100%";
				popoverAlignment["right"] = "0";
				break;
			case "top-start":
				// Ignore the width of the popover and make it start-aligned
				popoverAlignment["inset-block-end"] = "100%";
				popoverAlignment["inset-inline-start"] = "0";
				break;
			case "top-end":
				// Ignore the width of the popover and make it end-aligned
				popoverAlignment["inset-block-end"] = "100%";
				popoverAlignment["inset-inline-end"] = "0";
				break;
			case "bottom":
				popoverWrapperStyles["inline-size"] = "var(--spectrum-popover-width)";
				popoverAlignment["inset-block-start"] = "100%";
				popoverAlignment["inset-inline-start"] = "0";
				break;
			case "bottom-left":
				// Ignore the width of the popover and make it left-aligned
				popoverAlignment["inset-block-start"] = "100%";
				popoverAlignment["left"] = "0";
				break;
			case "bottom-right":
				// Ignore the width of the popover and make it right-aligned
				popoverAlignment["inset-block-start"] = "100%";
				popoverAlignment["right"] = "0";
				break;
			case "bottom-start":
				// Ignore the width of the popover and make it start-aligned
				popoverAlignment["inset-block-start"] = "100%";
				popoverAlignment["inset-inline-start"] = "0";
				break;
			case "bottom-end":
				// Ignore the width of the popover and make it end-aligned
				popoverAlignment["inset-block-start"] = "100%";
				popoverAlignment["inset-inline-end"] = "0";
				break;
			case "right":
				popoverAlignment["left"] = withTip ? "100%" : "100%";
				break;
			case "right-top":
				popoverAlignment["left"] = withTip ? "100%" : "100%";
				popoverAlignment["top"] = "0";
				break;
			case "right-bottom":
				popoverAlignment["left"] = withTip ? "100%" : "100%";
				popoverAlignment["bottom"] = "0";
				break;
			case "left":
				popoverAlignment["right"] = withTip ? "100%" : "100%";
				break;
			case "left-top":
				popoverAlignment["right"] = withTip ? "100%" : "100%";
				popoverAlignment["top"] = "0";
				break;
			case "left-bottom":
				popoverAlignment["right"] = withTip ? "100%" : "100%";
				popoverAlignment["bottom"] = "0";
				break;
			case "start":
				popoverAlignment["inset-inline-end"] = withTip ? "100%" : "100%";
				break;
			case "start-top":
				popoverAlignment["inset-inline-end"] = withTip ? "100%" : "100%";
				popoverAlignment["top"] = "0";
				break;
			case "start-bottom":
				popoverAlignment["inset-inline-end"] = withTip ? "100%" : "100%";
				popoverAlignment["bottom"] = "0";
				break;
			case "end":
				popoverAlignment["inset-inline-start"] = withTip ? "100%" : "100%";
				break;
			case "end-top":
				popoverAlignment["inset-inline-start"] = withTip ? "100%" : "100%";
				popoverAlignment["top"] = "0";
				break;
			case "end-bottom":
				popoverAlignment["inset-inline-start"] = withTip ? "100%" : "100%";
				popoverAlignment["bottom"] = "0";
				break;
		}
	}

	return html`
		<div style=${styleMap({
			"--spectrum-popover-height": `${popoverHeight}px`,
			"--spectrum-popover-width": `${popoverWidth}px`,
			"position": "relative",
			"display": "inline-flex",
			"align-items": "center",
			"justify-content": "center",
			...popoverWrapperStyles,
		})}>
			${when(typeof trigger === "function", (passthroughs) => trigger({
				...passthroughs,
				isSelected: isOpen,
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
					[`${rootClass}--size${size?.toUpperCase()}`]:
						typeof size !== "undefined",
					[`${rootClass}--withTip`]: withTip,
					[`${rootClass}--${position}`]: typeof position !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${ifDefined(styleMap({
					...popoverAlignment,
					...customStyles
				}))}
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
		</div>
	`;
};
