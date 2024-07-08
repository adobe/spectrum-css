import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

export const Template = ({
	rootClass = "spectrum-Switch",
	size = "m",
	label = "Switch label",
	isDisabled,
	isChecked,
	isEmphasized,
	customClasses = [],
	customStyles = {},
	id,
}) => {
	// ID attribute value for the input element.
	const inputId = id ? `${id}-input` : "switch-onoff-0";

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
			style=${ifDefined(styleMap(customStyles))}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				id=${inputId}
				?disabled=${isDisabled}
				?checked=${isChecked}
			/>
			<span class="${rootClass}-switch"></span>
			${when(label, () => html`
				<label class="${rootClass}-label" for=${inputId}>
					${label}
				</label>
			`)}
		</div>
	`;
};
