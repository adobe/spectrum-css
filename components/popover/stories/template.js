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
	customStyles = {},
	id = getRandomId("popover"),
	testId,
	triggerId = getRandomId("popover-trigger"),
	trigger,
	content = [],
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;
	const textDir = globals.textDirection ?? "ltr";
	const isNestedPopover = id === "popover-nested" || id === "popover-nested-2";

	const positionParts = position.split("-");

	let templateAreas = "'trigger'";
	if (isOpen) {
		templateAreas = "'popover' 'trigger'";
		switch (positionParts[0]) {
			case "top":
				templateAreas = "'popover' 'trigger'";
				break;
			case "bottom":
				templateAreas = "'trigger' 'popover'";
				break;
			case "right":
				templateAreas = "'trigger popover'";
				break;
			case "left":
				templateAreas = "'popover trigger'";
				break;
			case "start":
				templateAreas = textDir === "ltr" ? "'popover trigger'" : "'trigger popover'";
				break;
			case "end":
				templateAreas = textDir === "ltr" ? "'trigger popover'" : "'popover trigger'";
				break;
		}
	}

	let placeItems = "center";
	switch (positionParts[1]) {
		case "left":
		case "start":
		case "top":
			placeItems = "flex-start";
			break;
		case "right":
		case "end":
		case "bottom":
			placeItems = "flex-end";
			break;
	}

	return html`
		<div style=${styleMap({
			"display": trigger ? "grid" : undefined,
			"grid-template-areas": trigger ? templateAreas : undefined,
			"place-items": trigger ? placeItems : undefined,
			"gap": trigger ? "var(--spectrum-popover-pointer-edge-offset)" : undefined
		})}>
			${when(typeof trigger === "function", (passthroughs) => trigger({
				onclick: function() {
					updateArgs({ isOpen: !isOpen });
				},
				...passthroughs,
				isSelected: isNestedPopover ?? isOpen,
				isOpen: isNestedPopover ?? true,
				id: triggerId,
				popupId: id,
				customStyles: {
					...passthroughs.customStyles,
					"grid-area": "trigger",
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
					"position": trigger ? "relative" : undefined,
					"grid-area": trigger ? "popover" : undefined,
					"display": trigger ? (isOpen ? "block" : "none") : undefined,
					// Fit-content to the popover content
					"inline-size": "fit-content",
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
