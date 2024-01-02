import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { useArgs, useGlobals } from "@storybook/client-api";

import "../index.css";

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
	// User-provided styles
	customStyles = {},
	trigger,
	content = [],
	...globals
}) => {
	const [, updateArgs] = useArgs();
	const [{ textDirection }] = useGlobals();

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

	const nestedPopover = id === 'popover-nested' || id === 'popover-nested-2';

	document.addEventListener("DOMContentLoaded", () => {
		// Get trigger element and popover
		const triggerEl = document.querySelector(`#${triggerId}`);
		const popoverEl = document.querySelector(`#${id}`);

		if (!triggerEl || !popoverEl) return;

		setTimeout(() => {
			// Nested popover is static and open, so we don't need transforms for it
			if (nestedPopover || !triggerId || !id) return;

			const popWidth = popoverEl.offsetWidth ?? 0;
			const popHeight = popoverEl.offsetHeight ?? 0;
			popoverEl.style.setProperty("--spectrum-popover-actual-width", `${popWidth}px`);
			popoverEl.style.setProperty("--spectrum-popover-actual-height", `${popHeight}px`);

			const trigWidth = triggerEl.offsetWidth ?? 0;
			const trigHeight = triggerEl.offsetHeight ?? 0;

			popoverEl.style.setProperty("--spectrum-popover-trigger-actual-width", `${trigWidth}px`);
			popoverEl.style.setProperty("--spectrum-popover-trigger-actual-height", `${trigHeight}px`);
		}, 0);

		if (!position) return;

		const top = "-1 * var(--spectrum-popover-actual-height)";
		const left = "-1 * var(--spectrum-popover-trigger-actual-width)";
		const bottom = "var(--spectrum-popover-trigger-actual-height)";

		const blockCenter = "-1 * var(--spectrum-popover-trigger-actual-width) / 2 - var(--spectrum-popover-actual-width) / 2";
		const blockEnd = "-1 * var(--spectrum-popover-actual-width)";

		const inlineCenter = "translateY(calc(-1 * (var(--spectrum-popover-actual-height) - var(--spectrum-popover-trigger-actual-height)) / 2))";

		// Determine if we're in RTL mode
		const isRTL = Boolean(textDirection === "rtl");

		switch (position) {
			case "top":
				popoverEl.style.transform = `translateX(calc(${blockCenter})) translateY(calc(${top} - var(--spectrum-popover-tip-height)))`;
				break;
			case "top-start":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * ${left})) translateY(calc(${top} - var(--spectrum-popover-tip-height)))`;
				break;
			case "top-end":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * ${blockEnd})) translateY(calc(${top} - var(--spectrum-popover-tip-height)))`;
				break;
			case "bottom":
				popoverEl.style.transform = `translateX(calc(${blockCenter})) translateY(calc(${bottom} + var(--spectrum-popover-tip-height)))`;
				break;
			case "bottom-start":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * ${left})) translateY(calc(${bottom} + var(--spectrum-popover-tip-height)))`;
				break;
			case "bottom-end":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * ${blockEnd})) translateY(calc(${bottom} + var(--spectrum-popover-tip-height)))`;
				break;
			case "start":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * (${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)))) ${inlineCenter}`;
				break;
			case "start-top":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * (${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height))))`;
				break;
			case "start-bottom":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * (${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)))) translateY(calc(-1 * var(--spectrum-popover-actual-height) + var(--spectrum-popover-trigger-actual-height)))`;
				break;
			case "left":
				popoverEl.style.transform = `translateX(calc(${isRTL ? `-1 * var(--spectrum-popover-tip-height)` : `${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)`})) ${inlineCenter}`;
				break;
			case "left-top":
				popoverEl.style.transform = `translateX(calc(${isRTL ? `-1 * var(--spectrum-popover-tip-height)` : `${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)`}))`;
				break;
			case "left-bottom":
				popoverEl.style.transform = `translateX(calc(${isRTL ? `-1 * var(--spectrum-popover-tip-height)` : `${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)`})) translateY(calc(-1 * var(--spectrum-popover-actual-height) + var(--spectrum-popover-trigger-actual-height)))`;
				break;
			case "right":
				popoverEl.style.transform = `translateX(${isRTL ? `calc(-1 * (${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)))` : "var(--spectrum-popover-tip-height)"}) ${inlineCenter}`;
				break;
			case "right-top":
				popoverEl.style.transform = `translateX(${isRTL ? `calc(-1 * (${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)))` : "var(--spectrum-popover-tip-height)"})`;
				break;
			case "right-bottom":
				popoverEl.style.transform = `translateX(${isRTL ? `calc(-1 * (${left} - var(--spectrum-popover-actual-width) - var(--spectrum-popover-tip-height)))` : "var(--spectrum-popover-tip-height)"}) translateY(calc(-1 * var(--spectrum-popover-actual-height) + var(--spectrum-popover-trigger-actual-height)))`;
				break;
			case "end":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * var(--spectrum-popover-tip-height))) ${inlineCenter}`;
				break;
			case "end-top":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * var(--spectrum-popover-tip-height)))`;
				break;
			case "end-bottom":
				popoverEl.style.transform = `translateX(calc(var(--flow-direction) * var(--spectrum-popover-tip-height))) translateY(calc(-1 * var(--spectrum-popover-actual-height) + var(--spectrum-popover-trigger-actual-height)))`;
				break;
		}
	});

	return html`
		${when(typeof trigger === "function", () => trigger({
			...globals,
			isSelected: isOpen,
			isOpen: nestedPopover ?? isOpen,
			id: triggerId,
			onclick: () => {
				updateArgs({ isOpen: !isOpen });
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
			style=${ifDefined(styleMap({
				...customStyles,
				...(!withTip ? { "--spectrum-popover-tip-height": "2px" } : {}),
			}))}
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
