import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "@spectrum-css/popover";

const showPopover = (evt) => {
	const button = evt.target;
	const popover = getPopover(button);
	if (!popover) return;
	popover.style.zIndex = 1;
	var rect = getTriggerPositions(button);
	var transformTranslate = getPopoverPlacement(popover, rect);
	const style ={
    top: "0px",
    left: "0px",
		transform: transformTranslate,
	}
	Object.assign(popover.style, style);
	popover.classList.toggle("is-open");
}

function getPopover(button) {
	return button &&
	button.nextElementSibling &&
	button.nextElementSibling.matches(".spectrum-Popover")
		? button.nextElementSibling
		: null;
}

function getTriggerPositions(element) {
	const rect = element.getBoundingClientRect();
	const rectObject = {};

	for (const prop in rect) {
    rectObject[prop] = rect[prop]
  }

	/* Get centers of the trigger */
	rectObject.xCenter = (rect.left + rect.right) / 2;
	rectObject.yCenter = (rect.top + rect.bottom) / 2;
	return rectObject;
}

function getPopoverPlacement(popover, rect) {
	const classes = popover.className.split(' ');
	console.log(rect.right);
	let placement; 
	const transforms = {
		"spectrum-Popover--top": `translate(${rect.xCenter - popover.offsetWidth / 2}px, ${rect.top - popover.offsetHeight}px)`, 	
		"spectrum-Popover--bottom": `translate(${rect.xCenter - popover.offsetWidth / 2}px, ${rect.bottom}px)`,
		"spectrum-Popover--left": `translate(${rect.left - popover.offsetWidth}px, ${rect.yCenter - popover.offsetHeight / 2}px)`,
		"spectrum-Popover--right": `translate(${rect.right}px, ${rect.yCenter - popover.offsetHeight / 2}px)`,
		"aliases": {
			"spectrum-Popover--top-start": "spectrum-Popover--top",
			"spectrum-Popover--top-end": "spectrum-Popover--top",
			"spectrum-Popover--bottom-start": "spectrum-Popover--bottom",
			"spectrum-Popover--bottom-end": "spectrum-Popover--bottom",
			"spectrum-Popover--left-start": "spectrum-Popover--left",
			"spectrum-Popover--left-end": "spectrum-Popover--left",
			"spectrum-Popover--right-start": "spectrum-Popover--right",
			"spectrum-Popover--right-end": "spectrum-Popover--right",
		}
	}
	
	classes.forEach((item) => {
		if (transforms[item]) {
			placement = item;
		} else if (transforms["aliases"][item]) {
			placement = transforms["aliases"][item];
		}
	});
	return transforms[placement];
}


export const Template = ({
	rootClass = "spectrum-Popover",
	size = "m",
	isOpen = false,
	withTip = false,
	position = "top",
	customClasses = [],
	id,
	customStyles = {},
	content = [],
	testId,
	...globals
}) => {
	if (content.length === 0) {
		console.warn("Popover: No content provided.");
	}

	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		${ActionButton({
			label: "Open Popover",
			size: "m",
			onclick: showPopover
		})}
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
