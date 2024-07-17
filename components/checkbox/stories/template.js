import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
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
	id,
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
				@change=${() => {
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

export const CheckboxGroup = (args, context) => html`
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
			label: "Checkbox with an extraordinarily long label. Please don't do this but if you did, it should wrap text when it gets longer than the container that houses the checkbox with the unacceptably long label",
      customStyles: { "max-inline-size": "200px" },
		})}
	</div>
`;

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
