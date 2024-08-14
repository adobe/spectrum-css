import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
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
				["is-disabled"]: isDisabled|| isReadOnly,
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
				?checked=${isChecked}
				?disabled=${isDisabled || isReadOnly}
				title=${ifDefined(title)}
				value=${ifDefined(value)}
				@change=${function() {
					if (isDisabled) return;
					updateArgs({ isChecked: !isChecked });
				}}
				id=${ifDefined(id ? `${id}-input` : undefined)}
			/>
			<span class="${rootClass}-box">
				${Icon({
					size,
					iconName: `Checkmark${iconSize}`,
					customClasses: [`${rootClass}-checkmark`],
				}, context)}
				${Icon({
					size,
					iconName: `Dash${iconSize}`,
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
const CheckboxGroup = (args, context) => html`
	<div style="display: flex; flex-direction: column; padding: 16px">
		${Template({
			...args,
			context,
			iconName: undefined,
		})}
		${Template({
			...args,
			context,
			isChecked: true,
		})}
		${Template({
			...args,
			context,
			isIndeterminate: true,
		})}
		${Template({
			...args,
			context,
			isDisabled: true,
		})}
		${Template({
			...args,
			context,
			label: "Checkbox with a long label that should wrap.",
      customStyles: { "max-inline-size": "200px" },
		})}
	</div>
`;

/* This template group showcases mulitple CheckboxGroups in various states of disabled, read-only, invalid, etc. */
export const AllVariantsCheckboxGroup = (args, context) => {
	return html`
		<div style="display: flex;">
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Default</h4>
				${CheckboxGroup({
					...args,
				}, context)}
			</div>
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Invalid</h4>
				${CheckboxGroup({
					...args,
					isInvalid: true,
				}, context)}
			</div>
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Disabled</h4>
				${CheckboxGroup({
					...args,
					isDisabled: true,
				}, context)}
			</div>
			<div style="display: flex; flex-direction: column;">
				<h4 style="margin: 0; padding-left: 16px;">Read-Only</h4>
				${CheckboxGroup({
					...args,
					isReadOnly: true,
				}, context)}
			</div>
		</div>
	`;
};

// TODO: refactor this SizingGroup to use the sizing decorator instead for standardized sizing story styles
export const SizingGroup = (args, context) => {
	// Color for heading that shows the name of the size.
	let headingColor = "var(--spectrum-seafoam-900)";

	return html`
		${["s", "m", "l", "xl"].map((size) => html`
			<div style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "flex-start",
				})}
			>
			${Typography({
				semantics: "heading",
				size: "xs",
				content: [{
					s: "Small",
					m: "Medium (default)",
					l: "Large",
					xl: "Extra-large",
				}[size]],
				customClasses: ["chromatic-ignore"],
				customStyles: {
					"white-space": "nowrap",
					"--mod-heading-font-color": headingColor,
				},
			})}
			${CheckboxGroup({
					...args,
					size,
			}, context)}
		`)}
	`;
};
