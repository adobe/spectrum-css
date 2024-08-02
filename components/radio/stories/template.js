import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

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
			id=${ifDefined(id)}
		>
			<input
				type="radio"
				name=${name}
				class="${rootClass}-input"
				id=${inputId}
				?checked=${isChecked}
				?disabled=${isDisabled}
				@change=${function() {
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

export const ChromaticGroupTemplate = (args, context) => html`
	<div style="display: flex; flex-direction: column; align-items: flex-start;">
		${Template({
			...args,
			label: "Default, not selected",
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-1",
		}, context)}
		${Template({
			...args,
			isChecked: true,
			isEmphasized: false,
			label: "Default, selected",
			customStyles: {
				"max-width": "220px",
			},
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-2",
		}, context)}
		${Template({
			...args,
			isChecked: true,
			isEmphasized: true,
			label: "Emphasized, selected",
			customStyles: {
				"max-width": "220px",
			},
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-3",
		}, context)}
		${Template({
			...args,
			isDisabled: true,
			label: "Disabled",
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-4",
		}, context)}
		${Template({
			...args,
			isDisabled: true,
			isReadOnly: true,
			label: "Read-only",
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-5",
		}, context)}
	</div>
`;

export const BasicGroupTemplate = (args, context) => html`
	<div style="display: flex; flex-direction: column; align-items: flex-start;">
		${Template({
			...args,
			label: "Example label",
			id: "radio-1-" + args?.id ?? "default",
			name: "radio-example-" + args?.name ?? "default",
		}, context)}
		${Template({
			...args,
			isChecked: true,
			label: "Initially selected radio button that has wrapping label text",
			customStyles: {
				"max-width": "220px",
			},
			id: "radio-2-" + args?.id ?? "default",
			name: "radio-example-" + args?.name ?? "default",
		}, context)}
	</div>
`;