import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Checkbox",
	size = "m",
	label,
	isChecked = false,
	isEmphasized = false,
	isIndeterminate = false,
	isDisabled = false,
	isInvalid = false,
	isReadOnly = false,
	title,
	value,
	id = getRandomId("checkbox"),
	ariaLabelledby,
	customStyles = {},
	customClasses = [],
} = {}, context = {}) => {
	const { updateArgs } = context;

	let iconSize = "75";
	switch (size) {
		case "s":
			iconSize = "50";
			break;
		case "l":
			iconSize = "100";
			break;
		case "xl":
			iconSize = "200";
			break;
		default:
			iconSize = "75";
	}

	return html`
		<label
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--emphasized`]: isEmphasized,
				["is-indeterminate"]: isIndeterminate,
				["is-disabled"]: isDisabled,
				["is-invalid"]: isInvalid,
				["is-readOnly"]: isReadOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				aria-labelledby=${ifDefined(ariaLabelledby)}
				aria-disabled=${ifDefined(isReadOnly ? "true" : undefined)}
				?checked=${isChecked}
				?disabled=${isDisabled}
				title=${ifDefined(title)}
				value=${ifDefined(value)}
				@change=${(e) => {
					if (isReadOnly) {
						// Make checked value immutable for read-only.
						e.preventDefault();
						e.target.checked = !e.target.checked;
					}
					if (isDisabled || isReadOnly) return;
					updateArgs?.({ isChecked: e.target.checked });
				}}
				id=${ifDefined(id ? `${id}-input` : undefined)}
			/>
			<span class="${rootClass}-box">
				${Icon({
					size,
					iconName: `Checkmark${iconSize}`,
					setName: "ui",
					customClasses: [`${rootClass}-checkmark`],
				}, context)}
				${Icon({
					size,
					iconName: `Dash${iconSize}`,
					setName: "ui",
					customClasses: [`${rootClass}-partialCheckmark`],
				}, context)}
			</span>
			${when(
				label,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
		</label>
	`;
};

/* Shows multiple checkboxes in various states of selected, unselected, indeterminate, etc. */
export const DocsCheckboxGroup = (args, context) => Container({
	direction: "column",
	withBorder: false,
	content: html`
		${Template({
			...args,
			context,
			iconName: undefined,
			label: "Unchecked",
		})}
		${Template({
			...args,
			context,
			isChecked: true,
			label: "Checked",
		})}
		${Template({
			...args,
			context,
			isIndeterminate: true,
			label: "Indeterminate",
		})}
		${Template({
			...args,
			context,
			label: "Checkbox with a long label that should wrap.",
			customStyles: { "max-inline-size": "200px" },
		})}
	`
}, context);

/* This template group showcases multiple CheckboxGroups in various states of disabled, read-only, invalid, etc. */
export const AllVariantsCheckboxGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Default",
			content: DocsCheckboxGroup(args, context)
		}, context)}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Invalid",
			content: DocsCheckboxGroup({...args, isInvalid: true }, context)
		}, context)}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Disabled",
			content: DocsCheckboxGroup({...args, isDisabled: true }, context)
		}, context)}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Read-only",
			content: DocsCheckboxGroup({...args, isReadOnly: true }, context)
		}, context)}
	`
}, context);
