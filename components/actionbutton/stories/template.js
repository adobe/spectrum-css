import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";

/**
 * @todo load order should not influence the icon size but it is; fix this
*/
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

/**
 * @typedef API
 * @property {string} [rootClass="spectrum-ActionButton"]
 * @property {string} [size="m"]
 * @property {string|undefined} [iconName]
 * @property {string|undefined} [iconSet]
 * @property {string|undefined} [label]
 * @property {boolean} [isQuiet=false]
 * @property {boolean} [isSelected=false]
 * @property {boolean} [isEmphasized=false]
 * @property {boolean} [isHovered=false]
 * @property {boolean} [isFocused=false]
 * @property {boolean} [isActive=false]
 * @property {boolean} [isDisabled=false]
 * @property {"false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"} [hasPopup="false"]
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup
 * @property {string} [popupId]
 * @property {boolean} [hideLabel=false]
 * @property {"white"|"black"|undefined} [staticColor]
 * @property {string[]} [customClasses=[]]
 */

/**
 *
 * @param {API} args
 * @param {import('@storybook/types').StoryContext<import('@storybook/web-components').WebComponentsRenderer, API>} context
 * @returns {import('lit').TemplateResult}
 */
export const Template = ({
	rootClass = "spectrum-ActionButton",
	size = "m",
	iconName,
	iconSet = "workflow",
	label,
	isQuiet = false,
	isSelected = false,
	isEmphasized = false,
	isHovered = false,
	isFocused = false,
	isActive = false,
	isDisabled = false,
	hasPopup = "false",
	popupId,
	hideLabel = false,
	staticColor,
	customClasses = [],
	customStyles = {},
	customIconClasses = [],
	onclick,
	id = getRandomId("actionbutton"),
	testId,
	role = "button",
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<button
			aria-label=${ifDefined(hideLabel ? label : undefined)}
			aria-haspopup=${ifDefined(hasPopup && hasPopup !== "false" ? hasPopup : undefined)}
			aria-controls=${hasPopup && hasPopup !== "false" ? popupId : undefined}
			aria-pressed=${isSelected ? "true" : "false"}
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--static${capitalize(staticColor)}`]:
					typeof staticColor !== "undefined",
				["is-disabled"]: isDisabled,
				["is-selected"]: isSelected,
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
				["is-active"]: isActive,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${id}
			data-testid=${testId ?? id}
			role=${ifDefined(role)}
			style=${styleMap(customStyles)}
			?disabled=${isDisabled}
			@click=${onclick ?? function() {
				updateArgs({
					isSelected: !isSelected
				});
			}}
			@focusin=${function() {
				updateArgs({ isFocused: true });
			}}
			@focusout=${function() {
				updateArgs({ isFocused: false });
			}}
		>
			${when(hasPopup && hasPopup !== "false", () =>
				Icon({
					size,
					iconName: "CornerTriangle",
					setName: "ui",
					customClasses: [`${rootClass}-hold`],
				}, context)
			)}
			${when(iconName, () =>
				Icon({
					size,
					iconName,
					setName: iconSet,
					customClasses: [`${rootClass}-icon`, ...customIconClasses],
				}, context)
			)}
			${when(
				label && !hideLabel,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
		</button>
	`;
};

export const ActionButtonsWithIconOptions = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
			iconName: undefined,
		}, context)}
		${Template({
			...args,
		}, context)}
		${Template({
			...args,
			hideLabel: true,
		}, context)}
		${Template({
			...args,
			hideLabel: true,
			hasPopup: "true",
		}, context)}
		${Template({
			...args,
			iconName: undefined,
			hasPopup: "true",
		}, context)}
	`
}, context);

export const IconOnlyOption = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
			hideLabel: true,
			hasPopup: "true",
		}, context)}
		${Template({
			...args,
			hideLabel: true,
			isQuiet: true,
			hasPopup: "true",
		}, context)}
	`
}, context);

export const TreatmentTemplate = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${[
		{ isSelected: false, isDisabled: false, heading: "Default" },
		{ isSelected: true, isDisabled: false, heading: "Selected" },
		{ isSelected: false, isDisabled: true, heading: "Disabled" },
		{ isSelected: true, isDisabled: true, heading: "Selected + disabled" }
	].map(({ isSelected, isDisabled, heading }) => Container({
		withBorder: false,
		heading: heading,
		content: ActionButtonsWithIconOptions({
			...args,
			isSelected,
			isDisabled,
		})
	}, context))}`,
}, context);
