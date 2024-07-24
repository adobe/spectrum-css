import { Variants, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Radio",
	size = "m",
	label,
	name,
	isEmphasized = false,
	isChecked = false,
	isDisabled = false,
	isReadOnly = false,
	id = getRandomId("radio"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

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
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
		>
			<input
				type="radio"
				name=${name}
				class="${rootClass}-input"
				id="radio-0"
				?readOnly=${isReadOnly}
				?checked=${isChecked}
				?disabled=${isDisabled}
				@change=${() => {
					if (isDisabled) return;
					updateArgs({ isChecked: !isChecked });
				}}
			/>
			<span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
			<label class="${rootClass}-label ${rootClass}-label--sizeS" for="radio-0"
				>${label}</label
			>
		</div>
	`;
};

export const RadioGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default"
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Truncation",
			withStates: false,
			label: "Emphasized radio button label that is so long it has to wrap",
			customStyles: {
				"max-width": "220px",
			}

		}
	],
	stateData: [
		{
			testHeading: "Checked",
			isChecked: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Read Only",
			isReadOnly: true,
		},
	]
});
