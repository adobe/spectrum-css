import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

/**
 * @typedef API
 * @property {string} [rootClass="spectrum-Textfield"]
 * @property {string} [size="m"]
 * @property {string[]} [customClasses=[]]
 * @property {string[]} [customInputClasses=[]]
 * @property {string[]} [customIconClasses=[]]
 * @property {string[]} [customProgressCircleClasses=[]]
 * @property {Record<string, string>} [customStyles={}]
 * @property {boolean} [isInvalid=false]
 * @property {boolean} [isValid=false]
 * @property {boolean} [multiline=false]
 * @property {boolean} [grows=false]
 * @property {boolean} [isQuiet=false]
 * @property {boolean} [isFocused=false]
 * @property {boolean} [isDisabled=false]
 * @property {boolean} [isRequired=false]
 * @property {boolean} [isReadOnly=false]
 * @property {boolean} [isKeyboardFocused=false]
 * @property {boolean} [isLoading=false]
 * @property {boolean} [displayLabel=false]
 * @property {"top"|"side"} [labelPosition="top"]
 * @property {string} [labelText]
 * @property {string} [iconName]
 * @property {string} [iconSet]
 * @property {string} [pattern]
 * @property {string|undefined} [placeholder]
 * @property {string|undefined} [name]
 * @property {string|undefined} [id]
 * @property {HTMLInputElement[value]|HTMLTextAreaElement[value]} [value]
 * @property {HTMLInputElement[type]} [type="text"]
 * @property {boolean} [autocomplete=true]
 * @property {Function} [onclick]
 */

/**
 *
 * @param {API} args
 * @param {import('@storybook/types').StoryContext<import('@storybook/web-components').WebComponentsRenderer, API>} context
 * @returns {import('lit').TemplateResult}
 */
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
	characterCount,
	iconName,
	iconSet,
	pattern,
	placeholder,
	name,
	helpText = "",
	id = getRandomId("textfield"),
	value = "",
	type = "text",
	autocomplete = true,
	onclick,
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

	// Override icon name and set if the field is invalid or valid
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
			style=${styleMap(customStyles)}
			@click=${onclick}
			@focusin=${function() {
				updateArgs({
					isFocused: true,
					isKeyboardFocused: true
				});
			}}
			@focusout=${function() {
				updateArgs({
					isFocused: false,
					isKeyboardFocused: false
				});
			}}
			id=${ifDefined(id)}
		>
		${when(displayLabel, () => FieldLabel({
			size,
			label: labelText,
		}, context))}
		${when(typeof characterCount !== "undefined", () => html`
			<span class="${rootClass}-characterCount">${characterCount}</span>`)}
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
				.value=${value}
				autocomplete=${ifDefined(autocomplete ? undefined : "off")}
				?required=${isRequired}
				?disabled=${isDisabled}
				?readonly=${isReadOnly}
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
				.value=${value}
				autocomplete=${ifDefined(autocomplete ? undefined : "off")}
				?required=${isRequired}
				?disabled=${isDisabled}
				?readonly=${isReadOnly}
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
	${when(helpText, () =>
		HelpText({
			text: helpText,
			variant: isInvalid ? "negative" : "neutral",
			size,
			hideIcon: true,
			isDisabled
		}, context ))}
	`;
};

export const HelpTextOptions = (args, context) => Container({
	direction: "column",
	withBorder: false,
	withHeading: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Description",
			content: Template({...args, isRequired: true, labelText: "Username", value: "lisawilson24", helpText: "Username must be at least 8 characters."}, context),
		})}
		${Container({
			withBorder: false,
			heading: "Error message",
			content: Template({...args, isRequired: true, labelText: "Email address", value: "abc@adobe.com", helpText: "Enter your email address", isInvalid: true }, context),
		})}
	`
});

export const TextFieldOptions = (args, context) => Container({
	direction: "row",
	withBorder: false,
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Default",
			content: Template({...args, context})
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid",
			content: Template({...args, isInvalid: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Focused",
			content: Template({...args, isFocused: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid, focused",
			content: Template({...args, isInvalid: true, isFocused: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Keyboard-focused",
			content: Template({...args, isKeyboardFocused: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid, keyboard-focused",
			content: Template({...args, isInvalid: true, isKeyboardFocused: true}, context)
		})}
	`
});
