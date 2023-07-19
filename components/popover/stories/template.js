import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/client-api";

import "@spectrum-css/popover";

// const showPopover = (evt) => {
// 	const button = evt.target;
// 	const popover = getPopover(button);
// 	if (!popover) return;
// 	popover.style.zIndex = 1;
// 	var rect = getTriggerPositions(button);
// 	var transformTranslate = getPopoverPlacement(popover, rect);
// 	const style ={
//     top: "0px",
//     left: "0px",
// 		transform: transformTranslate,
// 	}
// 	Object.assign(popover.style, style);
// 	popover.classList.toggle("is-open");
// }

// function getPopover(button) {
// 	return button &&
// 	button.nextElementSibling &&
// 	button.nextElementSibling.matches(".spectrum-Popover")
// 		? button.nextElementSibling
// 		: null;
// }

// function getTriggerPositions(element) {
// 	const rect = element.getBoundingClientRect();
// 	const rectObject = {};

// 	for (const prop in rect) {
//     rectObject[prop] = rect[prop]
//   }

// 	/* Get centers of the trigger */
// 	rectObject.xCenter = (rect.left + rect.right) / 2;
// 	rectObject.yCenter = (rect.top + rect.bottom) / 2;
// 	return rectObject;
// }

// function getPopoverPlacement(popover, rect) {
// 	const classes = popover.className.split(' ');
// 	console.log(rect.right);
// 	let placement; 
// 	const transforms = {
// 		"spectrum-Popover--top": `translate(${rect.xCenter - popover.offsetWidth / 2}px, ${rect.top - popover.offsetHeight}px)`, 	
// 		"spectrum-Popover--bottom": `translate(${rect.xCenter - popover.offsetWidth / 2}px, ${rect.bottom}px)`,
// 		"spectrum-Popover--left": `translate(${rect.left - popover.offsetWidth}px, ${rect.yCenter - popover.offsetHeight / 2}px)`,
// 		"spectrum-Popover--right": `translate(${rect.right}px, ${rect.yCenter - popover.offsetHeight / 2}px)`,
// 		"aliases": {
// 			"spectrum-Popover--top-start": "spectrum-Popover--top",
// 			"spectrum-Popover--top-end": "spectrum-Popover--top",
// 			"spectrum-Popover--bottom-start": "spectrum-Popover--bottom",
// 			"spectrum-Popover--bottom-end": "spectrum-Popover--bottom",
// 			"spectrum-Popover--left-start": "spectrum-Popover--left",
// 			"spectrum-Popover--left-end": "spectrum-Popover--left",
// 			"spectrum-Popover--right-start": "spectrum-Popover--right",
// 			"spectrum-Popover--right-end": "spectrum-Popover--right",
// 		}
// 	}
	
// 	classes.forEach((item) => {
// 		if (transforms[item]) {
// 			placement = item;
// 		} else if (transforms["aliases"][item]) {
// 			placement = transforms["aliases"][item];
// 		}
// 	});
// 	return transforms[placement];
// }


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
	customStyles = {},
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
				// No trigger? Nothing to do.
				if (!trigger || !position) return [];

				// Get trigger element and popover
				const element = document.querySelector(`#${triggerId}`);
				console.log(triggerId);

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
				let x, y;
				if (position.includes("top") || position.includes("bottom")) {
					x = triggerXCenter - (popWidth > 0 ? popWidth / 2 : popWidth);
				} else if (position.includes("left") || position.includes("right")) {
					y = triggerYCenter - (popHeight > 0 ? popHeight / 2 : popHeight);
				}
				if (position.includes("top")) {
					y = rect.top - popHeight;
				} else if (position.includes("bottom")) {
					y = rect.bottom;
				} else if (position.includes("left")) {
					x = rect.left - popWidth;
				} else if (position.includes("right")) {
					x = rect.right;
				}
				if (x) transforms.push(`translateX(calc(var(--flow-direction) * ${parseInt(x, 10)}px))`);
				if (y) transforms.push(`translateY(${parseInt(y, 10)}px)`);

				console.log(transforms);
				// Add start and end styles

				if (position === "top-start") {
					additionalStyles["inset-inline-start"] = "calc(" + (popWidth / 2) + "px - var(--spectrum-popover-pointer-edge-offset))";
				} else if (position.includes("end")) {
					additionalStyles["inset-inline-start"] = "calc(" + (popWidth / 2) + "px - var(--spectrum-popover-pointer-edge-spacing))";
				}

				updateArgs({
					isOpen: !isOpen,
					customStyles: {
						transform: transforms.join(" "),
						...additionalStyles,
					}
				});
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
