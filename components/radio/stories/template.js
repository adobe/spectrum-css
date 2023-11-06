import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "@spectrum-css/radio";

export const Template = ({
	rootClass = "spectrum-Radio",
	size = "m",
	label,
	name,
	isEmphasized,
	isChecked,
	isDisabled,
	isReadOnly,
	idx = 0,
	id = `radio-${idx}`,
	customClasses = [],
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--emphasized`]: isEmphasized,
			"is-readOnly" : isReadOnly,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		data-testid=${ifDefined(testId)}
	>
		<input
			type="radio"
			name=${name}
			class="${rootClass}-input"
			id=${id}
			readOnly=${isReadOnly ? 'readonly' : ""}
			?checked=${isChecked}
			?disabled=${isDisabled}
		/>
		<span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
		<label class="${rootClass}-label ${rootClass}-label--sizeS" for="${id}"
			>${label}</label
		>
	</div>
`;
