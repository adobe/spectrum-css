import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "@spectrum-css/switch/dist/index-base.css";

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
		>
			<input type="checkbox" class="${rootClass}-input" id="switch-onoff-0" ?disabled=${isDisabled} ?checked=${isChecked}/>
			<span class="${rootClass}-switch"></span>
			${label
				? html`<label class="${rootClass}-label" for="switch-onoff-0"
						>${label}</label
				  >`
				: ""}
		</div>
	`;
};
