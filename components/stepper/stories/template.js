import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-NumberField",
	size = "m",
	displayLabel = true,
	label,
	labelPosition = "top",
	isFocused = false,
	isHovered = false,
	isKeyboardFocused = false,
	isReadOnly = false,
	isInvalid = false,
	isDisabled = false,
	hideStepper = false,
	helpText,
	value = "0",
	step = "1",
	id = getRandomId("numberfield"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

	/* these functions work on the story page, not the docs page. */
	const incrementValue = () => {
		const newValue = String(parseFloat(value) + parseFloat(step));
		updateArgs?.({ value: newValue });
		return newValue;
	};

	const decrementValue = () => {
		const newValue = String(parseFloat(value) - parseFloat(step));
		updateArgs?.({ value: newValue });
		return newValue;
	};

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined" && size !== "m",
				[`${rootClass}--sideLabel`]: labelPosition === "side",
				[`${rootClass}--hiddenStepper`]: hideStepper,
				"is-focused": isFocused,
				"is-hover": isHovered,
				"is-keyboardFocused": isKeyboardFocused,
				"is-readOnly": isReadOnly && !isDisabled,
				"is-invalid": isInvalid,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			@keyup=${function(e) {
				// Tab key was used.
				if (e.keyCode === 9) {
					// The element that was focused when the key was released is this textfield / input.
					if (e.target == this || e.target?.parentNode == this) {
						updateArgs?.({ isKeyboardFocused: true });
						// Manually add class since updateArgs doesn't always work on the Docs page.
						this.classList.add("is-keyboardFocused");
					}
				}
			}}
			@focusout=${function() {
				updateArgs?.({
					isFocused: false,
					isKeyboardFocused: false,
				});
				// Manually remove class since updateArgs doesn't always work on the Docs page.
				this.classList.remove("is-keyboardFocused");
			}}
			id=${ifDefined(id)}
			style=${styleMap({
				...customStyles
			})}
		>
			${when(displayLabel && label, () => html`
				${FieldLabel({
					size,
					label: label,
					labelPosition: labelPosition,
					isDisabled,
					customClasses: [`${rootClass}-fieldLabel`],
				}, context)}
			`)}
			<div class="${rootClass}-inputs">
				${Textfield({
					size,
					type: "number",
					min: "-10",
					max: "10",
					step,
					value,
					isInvalid,
					isFocused,
					isDisabled,
					isReadOnly,
					id: id ? `${id}-input` : undefined,
					customClasses: [`${rootClass}-textfield`],
					customInputClasses: [`${rootClass}-input`],
				}, context)}
				${when(!hideStepper, () => html`
					<span class="${rootClass}-buttons">
						${InfieldButton({
							isInline: true,
							size,
							onAdd: incrementValue,
							onSubtract: decrementValue,
							customClasses: [`${rootClass}-button`],
							isDisabled: isDisabled || isReadOnly,
						}, context)}
					</span>
				`)}
			</div>
			${when(helpText, () => html`
				<div class="${rootClass}-helpText">
					${HelpText({
						size,
						text: helpText,
						variant: isInvalid ? "negative" : undefined,
						hideIcon: true,
						isDisabled: isDisabled || isReadOnly,
					}, context)}
				</div>
			`)}
		</div>
	`;
};

/* Shows all of the number field states in one grouping. */
export const AllDefaultVariantsGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Default",
			content: Template(args, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Hovered",
			content: Template({...args, isHovered: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Focused",
			content: Template({...args, isFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Focused, hovered",
			content: Template({...args, isHovered: true, isFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Keyboard-focused",
			content: Template({...args, isKeyboardFocused: true}, context)
		}, context)}
	`
}, context);

/* Shows the disabled states of the default and hidden stepper stories one grouping. */
export const DisabledVariantsGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Default",
			content: Template(args, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Hidden stepper buttons",
			content: Template({...args, hideStepper: true}, context)
		}, context)}
	`
}, context);
