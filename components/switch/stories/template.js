import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "@spectrum-css/switch";

export const Template = ({
	rootClass = "spectrum-Switch",
	size = "m",
	label = "Switch label",
	isDisabled,
	isChecked,
	isEmphasized,
	customClasses = [],
	id,
}) => {
	// ID attribute value for the input element.
	const inputId = id ? `${id}-input` : 'switch-onoff-0';

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--disabled`] : isDisabled,
				[`${rootClass}--emphasized`] : isEmphasized,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				id=${inputId}
				?disabled=${isDisabled}
				?checked=${isChecked}
			/>
			<span class="${rootClass}-switch"></span>
			${label
				? html`<label class="${rootClass}-label" for=${inputId}
						>${label}</label
				  >`
				: ""}
		</div>
	`;
};
