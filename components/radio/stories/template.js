import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

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
			style=${styleMap(customStyles)}
		>
			<input
				type="radio"
				name=${name}
				class="${rootClass}-input"
				id=${inputId}
				?checked=${isChecked}
				?disabled=${isDisabled}
				aria-disabled=${ifDefined(isReadOnly ? "true" : undefined)}
				@change=${(e) => {
					if (isDisabled || isReadOnly) return;
					updateArgs?.({ isChecked: e.target.checked });
				}}
				@click=${(e) => {
					if (!isReadOnly) return;

					// Make checked value immutable for read-only.
					e.preventDefault();
				}}
			/>
			<span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
			<label class="${rootClass}-label ${rootClass}-label--sizeS" for=${inputId}
				>${label}</label
			>
		</div>
	`;
};

/**
 * Displays two radios; one unselected, and one selected.
 */
export const BasicGroupTemplate = (args, context) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		rowGap: "0px",
		alignItems: "flex-start",
	},
	content: html`
		${Template({
			...args,
			label: "Example label",
			name: "radio-example-" + (args?.name ?? "default"),
		}, context)}
		${Template({
			...args,
			isChecked: true,
			label: "Initially selected radio button that has wrapping label text",
			customStyles: {
				"max-width": "220px",
			},
			name: "radio-example-" + (args?.name ?? "default"),
		}, context)}
	`,
}, context);
