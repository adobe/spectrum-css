import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/client-api";

import "@spectrum-css/popover";

export const Template = ({
	rootClass = "spectrum-Popover",
	size = "m",
	isOpen = false,
	withTip = false,
	position = "top",
	customClasses = [],
	id = "popover-1",
	testId,
	triggerId = "trigger",
	customStyles = {
		"--spectrum-popover-offset": "8px",
		"inset-inline-start": "0px",
		"inset-block-start": "0px",
	},
	trigger,
	content = [],
	...globals
}) => {
	const [, updateArgs] = useArgs();

	if (content.length === 0) {
		console.warn("Popover: No content provided.");
		return html``;
	}

	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		${when(typeof trigger === "function", () => trigger({
			...globals,
			isSelected: isOpen,
			onclick: () => {
				setTimeout(() => {
				// No trigger? Nothing to do.
				if (!trigger || !position) return [];

				// Get trigger element and popover
				const element = document.querySelector(`#${triggerId}`);

				if (!element) return [];
				const rect = element.getBoundingClientRect();
				const popover = document.querySelector(`#${id}`);
				if (!popover) return [];

				const transforms = [];
				const additionalStyles = {};
				const triggerXCenter = (rect.left + rect.right) / 2;
				const triggerYCenter = (rect.top + rect.bottom) / 2;
				const popWidth = popover.offsetWidth ?? 0;
				const popHeight = popover.offsetHeight ?? 0;
				const textDir = getComputedStyle(document.querySelector('html')).direction;
				let x, y;
				let xOffset = "+ 0px";
				let yOffset = "+ 0px";
				if (position.includes("top") || position.includes("bottom") && !(position.includes("-top") || position.includes("-bottom"))) {
					x = triggerXCenter - (popWidth > 0 ? popWidth / 2 : popWidth);
				} 
				if (position.includes("left") || position.includes("right")) {
					y = triggerYCenter - (popHeight > 0 ? popHeight / 2 : popHeight);
				}
				if (position.includes("top") && !position.includes("-top")) {
					y = rect.top - popHeight;
					yOffset = "- var(--spectrum-popover-offset)";
				} else if (position.includes("bottom") && !position.includes("-bottom")) {
					y = rect.bottom;
					yOffset = "+ var(--spectrum-popover-offset)";
				} else if (position.includes("left")) {
					if (textDir == 'rtl') {
						x = rect.right;
						xOffset = "+ var(--spectrum-popover-offset)";
					} else {
						x = rect.left - popWidth;
						xOffset = "- var(--spectrum-popover-offset)";
					}
				} else if (position.includes("right")) {
					if (textDir == 'rtl') {
						x = rect.left - popWidth;
						xOffset = "- var(--spectrum-popover-offset)";
					} else {
						x = rect.right;
						xOffset = "+ var(--spectrum-popover-offset)";
					}
				}

				if (x) transforms.push(`translateX(calc(var(--flow-direction) * calc(${parseInt(x, 10)}px ${xOffset})))`);
				if (y) transforms.push(`translateY(calc(${y}px ${yOffset}))`);

				// Add start and end styles
				if (position === "top-start" || position === "bottom-start") {
					additionalStyles["inset-inline-start"] = "calc(" + (popWidth / 2) + "px - var(--spectrum-popover-pointer-edge-offset))";
				} else if (position === "top-end" || position === "bottom-end") {
					additionalStyles["inset-inline-start"] = "calc(-1 *" + (popWidth / 2) + "px + var(--spectrum-popover-pointer-edge-offset))";
				} else if (position === "left-top" || position === "right-top") {
					additionalStyles["inset-block-start"] = "calc(" + (popHeight / 2) + "px - var(--spectrum-popover-pointer-edge-offset))";
				} else if (position === "left-bottom" || position === "right-bottom") {
					additionalStyles["inset-block-start"] = "calc(-1 *" + (popHeight / 2) + "px + var(--spectrum-popover-pointer-edge-offset))";
				}

				updateArgs({
					isOpen: !isOpen,
					customStyles: {
						...customStyles,
						transform: transforms.join(" "),
						...additionalStyles,
					}
				});
			}, 100)
			}
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
			data-testid=${ifDefined(testId)}
		>
			${content.map((c) => (typeof c === "function" ? c({}) : c))}
			${withTip
				? position && ["top", "bottom"].some((e) => position.startsWith(e))
					? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
					: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
				: ""}
		</div>
	`;
};
