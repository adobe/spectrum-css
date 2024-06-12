import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators/utilities.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Textfield",
	size = "m",
	customClasses = [],
	customInputClasses = [],
	customIconClasses = [],
	customProgressCircleClasses = [],
	isInvalid = false,
	isValid = false,
	multiline = false,
	grows = false,
	isQuiet = false,
	isFocused = false,
	isDisabled = false,
	isRequired = false,
	isReadOnly = false,
	isKeyboardFocused = false,
	isLoading = false,
	displayLabel = false,
	labelPosition = "top",
	labelText,
	iconName,
	iconSet,
	pattern,
	placeholder,
	name,
	id,
	value,
	type = "text",
	autocomplete = true,
	onclick,
	customStyles = {},
}, context) => {
	if (isInvalid) {
		iconName = "Alert";
		iconSet = "workflow";
	}
	else if (isValid) {
		iconName = "Checkmark";
		iconSet = "ui";
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--multiline`]: multiline,
				[`${rootClass}--grows`]: grows,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--sideLabel`]: labelPosition === "side",
				"is-invalid": isInvalid,
				"is-valid": isValid,
				"is-focused": isFocused,
				"is-keyboardFocused": isKeyboardFocused,
				"is-disabled": isDisabled,
				"is-readOnly": isReadOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
			@click=${onclick}
			@focusin=${(e) => {
				const focusClass = e.target?.classList?.contains("focus-ring");
				e.target.classList.toggle("is-keyboardFocused", focusClass);
				e.target.classList.toggle("is-focused", focusClass);
			}}
			@focusout=${(e) => {
				const focusClass = e.target?.classList?.contains("focus-ring");
				e.target.classList.toggle("is-keyboardFocused", focusClass);
				e.target.classList.toggle("is-focused", focusClass);
			}}
			id=${ifDefined(id)}
		>
		${when(displayLabel, () => FieldLabel({
			size,
			label: labelText,
		}, context))}
		${when(iconName, () => Icon({
			size,
			iconName,
			setName: iconSet,
			customClasses: [
				isInvalid || isValid
					? `${rootClass}-validationIcon`
					: `${rootClass}-icon`,
				...customIconClasses,
			],
		}, context))}
		${when(multiline,
			() => html`<textarea
				placeholder=${ifDefined(placeholder)}
				name=${ifDefined(name)}
				id=${ifDefined(id ? `${id}-input` : undefined)}
				.value=${ifDefined(value)}
				autocomplete=${autocomplete ? undefined : "off"}
				?required=${isRequired}
				?disabled=${isDisabled}
				?readonly=${ifDefined(isReadOnly)}
				pattern=${ifDefined(pattern)}
				class=${classMap({
					[`${rootClass}-input`]: true,
					...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			/>`,
			() => html`<input
				type=${ifDefined(type)}
				placeholder=${ifDefined(placeholder)}
				name=${ifDefined(name)}
				id=${ifDefined(id ? `${id}-input` : undefined)}
				.value=${ifDefined(value)}
				autocomplete=${autocomplete ? undefined : "off"}
				?required=${isRequired}
				?disabled=${isDisabled}
				?readonly=${ifDefined(isReadOnly)}
				pattern=${ifDefined(pattern)}
				class=${classMap({
					[`${rootClass}-input`]: true,
					...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			/>`
		)}
		${when(isLoading, () => ProgressCircle({
			isIndeterminate: true,
			size: "s",
			customClasses: customProgressCircleClasses,
		}, context))}
	</div>
	`;
};


export const TextFieldGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "With field label",
		displayLabel: true,
		labelText: "Username",
	},
	{
		testHeading: "With side label",
		displayLabel: true,
		labelText: "Username",
		labelPosition: "side",
	},
	{
		testHeading: "With value",
		displayLabel: true,
		labelText: "Username",
		value: "username@reallylongemail.com"
	},
	{
		testHeading: "Text area",
		multiline: true,
	},
	{
		testHeading: "Text area with label",
		displayLabel: true,
		labelText: "Username",
		multiline: true,
	},
	{
		testHeading: "Text area with value",
		displayLabel: true,
		labelText: "Username",
		multiline: true,
		value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	}],
	stateData: [{
		testHeading: "Invalid",
		isInvalid: true,
	}, {
		testHeading: "Valid",
		isInvalid: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}, {
		testHeading: "Keyboard focused",
		isKeyboardFocused: true,
	}, {
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Required",
		isRequired: true,
	}, {
		testHeading: "Read-only",
		isReadOnly: true,
	}, {
		testHeading: "Loading",
		isLoading: true,
	}]
});
