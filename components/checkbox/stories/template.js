import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/preview-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

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
	...globals
}) => {
	const [, updateArgs] = useArgs();


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
			style=${ifDefined(styleMap(customStyles))}
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
					...globals,
					size,
					iconName: `Checkmark${iconSize}`,
					setName: "ui",
					customClasses: [`${rootClass}-checkmark`],
				})}
				${Icon({
					...globals,
					size,
					iconName: `Dash${iconSize}`,
					setName: "ui",
					customClasses: [`${rootClass}-partialCheckmark`],
				})}
			</span>
			${when(
				label,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
		</label>
	`;
};
