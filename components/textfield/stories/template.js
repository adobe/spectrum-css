import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Textfield",
	size = "m",
	customClasses = [],
	customCharacterCountClasses = [],
	customHelpTextClasses = [],
	customInputClasses = [],
	customIconClasses = [],
	customProgressCircleClasses = [],
	isInvalid = false,
	isValid = false,
	multiline = false,
	grows = false,
	hasCharacterCount = false,
	helpText,
	isFocused = false,
	isDisabled = false,
	isRequired = false,
	isReadOnly = false,
	isKeyboardFocused = false,
	isLoading = false,
	characterCount,
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
	...globals
}) => {
	const [, updateArgs] = useArgs();

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
				const focusClass = e.target?.classList?.contains("focus-ring")
					? { isKeyboardFocused: true }
					: { isFocused: true };
				updateArgs(focusClass);
			}}
			@focusout=${(e) => {
				const focusClass = e.target?.classList?.contains("focus-ring")
					? { isKeyboardFocused: false }
					: { isFocused: false };
				updateArgs(focusClass);
			}}
			id=${ifDefined(id)}
		>
		${when(displayLabel, () => FieldLabel({
			...globals,
			size,
			label: labelText,
		}))}
		${when(hasCharacterCount, () => html`
				<span
					id=${ifDefined(id ? `character-count-${id}` : undefined)}
					class=${classMap({
						[`${rootClass}-characterCount`]: true,
						...customCharacterCountClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
					})}
				>
					${characterCount}
				</span>
			`)}
		${when(iconName, () => Icon({
			...globals,
			size,
			iconName,
			setName: iconSet,
			customClasses: [
				isInvalid || isValid
					? `${rootClass}-validationIcon`
					: `${rootClass}-icon`,
				...customIconClasses,
			],
		}))}
		${when(multiline,
			() => html`<textarea
				placeholder=${ifDefined(placeholder && placeholder.trim() ? placeholder : undefined)}
				name=${ifDefined(name)}
				id=${ifDefined(id ? `${id}-input` : undefined)}
				.value=${ifDefined(value)}
				autocomplete=${ifDefined(autocomplete ? undefined : "off")}
				?required=${isRequired}
				?disabled=${isDisabled}
				?readonly=${ifDefined(isReadOnly)}
				pattern=${ifDefined(pattern && pattern.trim() ? pattern : undefined)}
				class=${classMap({
					[`${rootClass}-input`]: true,
					...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			/>`,
			() => html`<input
				type=${ifDefined(type)}
				placeholder=${ifDefined(placeholder && placeholder.trim() ? placeholder : undefined)}
				name=${ifDefined(name)}
				id=${ifDefined(id ? `${id}-input` : undefined)}
				.value=${ifDefined(value)}
				autocomplete=${ifDefined(autocomplete ? undefined : "off")}
				?required=${isRequired}
				?disabled=${isDisabled}
				?readonly=${ifDefined(isReadOnly)}
				pattern=${ifDefined(pattern && pattern.trim() ? pattern : undefined)}
				class=${classMap({
					[`${rootClass}-input`]: true,
					...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			/>`
		)}
		${when(helpText, () => HelpText({
			...globals,
			size,
			hideIcon: true,
			text: helpText,
			variant: isInvalid ? "negative" : "neutral",
			id: ifDefined(`helptext-${id}`),
			customClasses: customHelpTextClasses,
		}))}
		${when(isLoading, () => ProgressCircle({
			isIndeterminate: true,
			size: "s",
			customClasses: customProgressCircleClasses,
		}))}
	</div>
	`;
};

const renderDataWithHeading = (data) => html`
	${data.map(item => html`
		<div>
			${item.testHeading ? html`
				<div
					style=${styleMap({
						marginBottom: "10px",
					})}
				>
					${Typography({
						semantics: "detail",
						size: "l",
						content: [item.testHeading]
					})}
				</div>
			` : ""}
			${Template({...item})}
		</div>
	`)}
`;

const Variants = ({ testData, stateData }) => (args) => html`
	<div style="display: flex; flex-direction: column; gap: 32px;">
		${window.isChromatic() ?
			html`
				${renderDataWithHeading(testData)}
				${renderDataWithHeading(stateData)}
			`
			: html`
				${Template({...args})}
				${Template({
					...args,
					multiline: true,
				})}
			`
		}
	</div>
`;

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
		value: "UsernameWiderThanInput@ReallyLongEmail.com"
	},
	{
		testHeading: "With help text",
		displayLabel: true,
		labelText: "Username",
		helpText: "Please enter a username between 8 and 16 characters",
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
	},
	{
		testHeading: "Text area with character count",
		displayLabel: true,
		labelText: "Comments",
		multiline: true,
		hasCharacterCount: true,
		characterCount: 400,
		value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	}],
	stateData: [{
		testHeading: "Invalid",
		isInvalid: true,
	},
	{
		testHeading: "Valid",
		isValid: true,
	},
	{
		testHeading: "Focused",
		isFocused: true,
	},
	{
		testHeading: "Keyboard focused",
		isKeyboardFocused: true,
	},
	{
		testHeading: "Disabled",
		isDisabled: true,
	},
	{
		testHeading: "Required",
		isRequired: true,
	},
	{
		testHeading: "Read-only",
		value: "UsernameWiderThanInput@ReallyLongEmail.com",
		isReadOnly: true,
	}]
});
