import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { useEffect } from "@storybook/preview-api";
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
	customWrapperClasses = [],
	popoverWrapperStyles = {},
	popoverHeight = 272,
	popoverWidth = 180,
	triggerWidth = 70,
	triggerHeight = 32,
	popoverAlignment = {},
	skipAlignment = false,
	trigger,
	content = [],
} = {}, context = {}) => {
	// We need to wait for the popover to render before we can get the actual height and width
	// of the popover to set the custom properties. This is a temporary solution until we can
	// set up anchor positioning successfully via CSS.
	const calculateDimensions = ({ id, triggerId, popoverHeight, popoverWidth, triggerWidth, triggerHeight }) => {
		// Get the actual height and width of the popover
		const popover = id ? document.getElementById(id) : null;
		// If the popover is not found, do nothing
		if (!popover) return;

		const trigger = triggerId ? document.getElementById(triggerId) : null;

		const popoverRect = popover.getBoundingClientRect();
		const triggerRect = trigger?.getBoundingClientRect() ?? { width: 0, height: 0 };

		const popoverDimensions = {
			width: parseInt(popoverRect?.width ?? 0, 10),
			height: parseInt(popoverRect?.height ?? 0, 10),
		};
		const triggerDimensions = {
			width: parseInt(triggerRect?.width ?? 0, 10),
			height: parseInt(triggerRect?.height ?? 0, 10),
		};

		let shouldChange = false;
		if (popoverHeight !== popoverDimensions.height) {
			shouldChange = true;
		}
		else if (popoverWidth !== popoverDimensions.width) {
			shouldChange = true;
		}
		else if (triggerWidth !== triggerDimensions.width) {
			shouldChange = true;
		}
		else if (triggerHeight !== triggerDimensions.height) {
			shouldChange = true;
		}

		// Do nothing if the height and width are the same; prevent loops
		if (!shouldChange) return;

		// Write the actual height and width of the popover to the CSS custom properties
		context.updateArgs({
			popoverWidth: popoverDimensions.width === 0 ? undefined : popoverDimensions.width,
			popoverHeight: popoverDimensions.height === 0 ? undefined : popoverDimensions.height,
			triggerWidth: triggerDimensions.width === 0 ? undefined : triggerDimensions.width,
			triggerHeight: triggerDimensions.height === 0 ? undefined : triggerDimensions.height,
		});
	};

	if (!skipAlignment) {
		switch (position) {
			case "top":
				popoverAlignment["inset-block-end"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["inset-inline-start"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "center";
				break;
			case "top-left":
				// Ignore the width of the popover and make it left-aligned
				popoverAlignment["inset-block-end"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["left"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "top-right":
				// Ignore the width of the popover and make it right-aligned
				popoverAlignment["inset-block-end"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["right"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "top-start":
				// Ignore the width of the popover and make it start-aligned
				popoverAlignment["inset-block-end"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["inset-inline-start"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "top-end":
				// Ignore the width of the popover and make it end-aligned
				popoverAlignment["inset-block-end"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["inset-inline-end"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "bottom":
				popoverAlignment["inset-block-start"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["inset-inline-start"] = "0";
				popoverWrapperStyles["align-items"] = "start";
				popoverWrapperStyles["justify-content"] = "center";
				break;
			case "bottom-left":
				// Ignore the width of the popover and make it left-aligned
				popoverAlignment["inset-block-start"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["left"] = "0";
				break;
			case "bottom-right":
				// Ignore the width of the popover and make it right-aligned
				popoverAlignment["inset-block-start"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["right"] = "0";
				popoverWrapperStyles["align-items"] = "start";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "bottom-start":
				// Ignore the width of the popover and make it start-aligned
				popoverAlignment["inset-block-start"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["inset-inline-start"] = "0";
				break;
			case "bottom-end":
				// Ignore the width of the popover and make it end-aligned
				popoverAlignment["inset-block-start"] = "var(--spectrum-popover-trigger-height)";
				popoverAlignment["inset-inline-end"] = "0";
				popoverWrapperStyles["align-items"] = "start";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "right":
				popoverAlignment["left"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "center";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "right-top":
				popoverAlignment["left"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "start";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "right-bottom":
				popoverAlignment["left"] = "var(--spectrum-popover-trigger-width)";
				popoverAlignment["bottom"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "left":
				popoverAlignment["right"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "center";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "left-top":
				popoverAlignment["right"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "left-bottom":
				popoverAlignment["right"] = "var(--spectrum-popover-trigger-width)";
				popoverAlignment["bottom"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "start":
				popoverAlignment["inset-inline-end"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "center";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "start-top":
				popoverAlignment["inset-inline-end"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "start";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "start-bottom":
				popoverAlignment["inset-inline-end"] = "var(--spectrum-popover-trigger-width)";
				popoverAlignment["bottom"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "end";
				break;
			case "end":
				popoverAlignment["inset-inline-start"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "center";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "end-top":
				popoverAlignment["inset-inline-start"] = "var(--spectrum-popover-trigger-width)";
				popoverWrapperStyles["align-items"] = "start";
				popoverWrapperStyles["justify-content"] = "start";
				break;
			case "end-bottom":
				popoverAlignment["inset-inline-start"] = "var(--spectrum-popover-trigger-width)";
				popoverAlignment["bottom"] = "0";
				popoverWrapperStyles["align-items"] = "end";
				popoverWrapperStyles["justify-content"] = "start";
				break;
		}
	}

	useEffect(() => {
		setTimeout(() => {
			calculateDimensions({ id, triggerId, popoverHeight, popoverWidth, triggerWidth, triggerHeight });
		}, 1000);
	}, [id, triggerId, popoverHeight, popoverWidth, triggerWidth, triggerHeight]);

	return html`
		<div style=${styleMap({
			"--spectrum-popover-height": `${popoverHeight}px`,
			"--spectrum-popover-width": `${popoverWidth}px`,
			"--spectrum-popover-trigger-height": `${triggerHeight}px`,
			"--spectrum-popover-trigger-width": `${triggerWidth}px`,
			"position": "relative",
			"display": "flex",
			"min-block-size": ["top", "bottom"].some(p => position.startsWith(p)) ? "calc(var(--spectrum-popover-height) + var(--spectrum-spacing-100) + var(--spectrum-popover-trigger-height))" : "var(--spectrum-popover-height)",
			"min-inline-size": ["top", "bottom"].some(p => position.startsWith(p)) ? "var(--spectrum-popover-width)" : "calc(var(--spectrum-popover-width) + var(--spectrum-spacing-100) + var(--spectrum-popover-trigger-width))",
			...popoverWrapperStyles,
		})} class=${classMap(customWrapperClasses.reduce((a, c) => ({ ...a, [c]: true }), {}))} @resize=${() => calculateDimensions({ id, triggerId, popoverHeight, popoverWidth, triggerWidth, triggerHeight })}>
			${when(typeof trigger === "function", (passthroughs) => trigger({
				...passthroughs,
				isSelected: isOpen,
				isOpen,
				id: triggerId,
				popupId: id,
				onclick: function() {
					context.updateArgs({ isOpen: !isOpen });
				},
			}, context))}

			<div
				class=${classMap({
					[rootClass]: true,
					"is-open": isOpen,
					[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
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
			trigger: () => null,
		}, context)}
	</div>
`;
