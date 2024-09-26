import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Switch",
	size = "m",
	label = "Switch label",
	isDisabled = false,
	isChecked = false,
	isEmphasized = false,
	customClasses = [],
	customStyles = {},
	id = getRandomId("switch"),
} = {}) => {
	// ID attribute value for the input element.
	const inputId = getRandomId("switch-input");

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
			style=${styleMap(customStyles)}
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

export const DocsSwitchGroup = (args, context) => Container({
	withBorder: false,
	content: html`
	${Container({
		heading: "Not selected",
		content: html`
			${Template({
				...args,
				context,
				isChecked: false,
			})}
		`
	})}
	${Container({
		heading: "Selected",
		content: html`
			${Template({
				...args,
				context,
				isChecked: true,
			})}
		`
	})}`
});
