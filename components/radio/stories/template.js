import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { useArgs } from "@storybook/preview-api";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Radio",
	size = "m",
	label,
	name,
	isEmphasized,
	isChecked,
	isDisabled,
	isReadOnly,
	id,
	customClasses = [],
	customStyles = {},
}) => {
	const [, updateArgs] = useArgs();

	// Create a unique ID for the input field and its associated label.
	// Tack onto any existing id or name arg being set.
	const inputId = typeof id !== "undefined" ? id += "-input"
		: typeof name !== "undefined" ? id = name + "-input"
			: "radio-0";

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--emphasized`]: isEmphasized,
				"is-readOnly" : isReadOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
			id=${ifDefined(id)}
		>
			<input
				type="radio"
				name=${name}
				class="${rootClass}-input"
				id=${inputId}
				?checked=${isChecked}
				?disabled=${isDisabled}
				@change=${() => {
					if (isDisabled) return;
					updateArgs({ isChecked: !isChecked });
				}}
			/>
			<span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
			<label class="${rootClass}-label ${rootClass}-label--sizeS" for=${inputId}
				>${label}</label
			>
		</div>
	`;
};
