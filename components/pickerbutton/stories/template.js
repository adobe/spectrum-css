import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-PickerButton",
	id = getRandomId("picker-button"),
	size = "m",
	iconSet = "ui",
	workflowIconName = "Calendar",
	uiIconName = "ChevronDown",
	isActive = false,
	isHovered = false,
	isDisabled = false,
	isOpen = false,
	isQuiet = false,
	customClasses = [],
	customStyles = {},
	onclick,
	tabindex,
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--workflowicon`]: iconSet !== "ui",
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-active": isActive,
				"is-hover": isHovered,
				"is-disabled": isDisabled,
				"is-open": isOpen && !isDisabled,
				[`${rootClass}--quiet`]: isQuiet,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			aria-haspopup="listbox"
			?disabled=${isDisabled}
			@click=${onclick ??
			function () {
				if (isDisabled) return;
				updateArgs({ isOpen: !isOpen });
			}}
			tabindex=${ifDefined(tabindex)}
			type="button"
		>
			<div class="${rootClass}-fill">
				${Icon({
					iconName: iconSet === "ui" ? (uiIconName ?? "ChevronDown") : iconSet === "workflow" ? (workflowIconName ?? "ChevronDown") : "ChevronDown",
					setName: iconSet,
					size,
					customClasses: [`${rootClass}-icon`],
				}, context)}
			</div>
		</button>
	`;
};

export const PickerIconOptions = ({
	uiIconName,
	workflowIconName,
	...args
}, context ) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
			iconSet: "ui",
			uiIconName: uiIconName ?? "ChevronDown",
		}, context)}
		${Template({
			...args,
			iconSet: "workflow",
			workflowIconName: workflowIconName ?? "Calendar",
		}, context)}
	`,
});
