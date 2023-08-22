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
	id,
	customClasses = [],
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express)
			import(
				/* webpackPrefetch: true */ "@spectrum-css/radio/dist/themes/spectrum.css"
			);
		else
			import(
				/* webpackPrefetch: true */ "@spectrum-css/radio/dist/themes/express.css"
			);
	} catch (e) {
		console.warn(e);
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--emphasized`]: isEmphasized,
				"is-readOnly": isReadOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			<input
				type="radio"
				name=${name}
				class="${rootClass}-input"
				id="radio-0"
				readonly=${isReadOnly ? "readonly" : ""}
				?checked=${isChecked}
				?disabled=${isDisabled}
			/>
			<span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
			<label class="${rootClass}-label ${rootClass}-label--sizeS" for="radio-0"
				>${label}</label
			>
		</div>
	`;
};
