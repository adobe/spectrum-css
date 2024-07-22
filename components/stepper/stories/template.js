import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Stepper",
	size = "m",
	isQuiet = false,
	isFocused = false,
	isKeyboardFocused = false,
	isInvalid = false,
	isDisabled = false,
	hideStepper = false,
	customClasses = [],
	id,
	style = {
		"--mod-actionbutton-icon-size": "10px",
	},
} = {}, context = {}) => {
	let iconSize = "75";
	switch (size) {
		case "s":
			iconSize = "50";
			break;
		case "l":
			iconSize = "100";
			break;
		case "xl":
			iconSize = "200";
			break;
		default:
			iconSize = "75";
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				"is-focused": isFocused,
				"is-keyboardFocused": isKeyboardFocused,
				"is-invalid": isInvalid,
				"is-disabled": isDisabled,
				"hide-stepper": hideStepper,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(style)}
		>
			${Textfield({
				size,
				type: "number",
				min: "-2",
				max: "2",
				step: "0.5",
				value: "0",
				isDisabled,
				isQuiet,
				id: id ? `${id}-input` : undefined,
				customClasses: [`${rootClass}-textfield`],
				customInputClasses: [`${rootClass}-input`],
			}, context)}
			${when(!hideStepper, () => html`
				<span class="${rootClass}-buttons">
					${InfieldButton({
						size,
						customClasses: [`${rootClass}-button`],
						iconName: `ChevronUp${iconSize}`,
						isDisabled,
						isQuiet,
						position: "top",
						tabIndex: "-1"
					}, context)}
					${InfieldButton({
						size,
						customClasses: [`${rootClass}-button`],
						iconName: `ChevronDown${iconSize}`,
						isDisabled,
						isQuiet,
						position: "bottom",
						tabIndex: "-1"
					}, context)}
				</span>
			`)}
		</div>
	`;
};

export const SizingTemplate = (args, context) => 
	html` ${["s", "m", "l", "xl"].map((size) => {
		return html`
			<style>
				.spectrum-Detail { 
					display: inline-block;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: [
						{
							s: "Small",
							m: "Medium",
							l: "Large",
							xl: "Extra-large",
						}[size],
					],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					size,
				}, context)}
			</div>
		`;
	})}`;

export const DefaultTemplate = (args, context) => html`
	<style>
		.spectrum-Detail { 
			display: inline-block;
			/* Why seafoam? Because it separates it from the component styles. */
			--mod-detail-font-color: var(--spectrum-seafoam-900);
		}
	</style>
	<div style="display: flex;">

		<div style="display: grid; grid-template-columns: max-content">
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Default"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
				}, context)}
			</div>
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Invalid"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isInvalid: true,
				}, context)}
			</div>
		</div>

		<div style="display: grid; grid-template-columns: max-content">
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isFocused: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Invalid, focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isInvalid: true,
					isFocused: true,
				}, context)}
			</div>
		</div>

		<div style="display: grid; grid-template-columns: max-content;">
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Invalid, keyboard focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isInvalid: true,
					isKeyboardFocused: true,
				}, context)}
			</div>
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Keyboard focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isKeyboardFocused: true,
				}, context)}
			</div>
		</div>
		
	</div>
`;

export const QuietTemplate = (args, context) => html`
	<style>
		.spectrum-Detail { 
			display: inline-block;
			/* Why seafoam? Because it separates it from the component styles. */
			--mod-detail-font-color: var(--spectrum-seafoam-900);
		}
	</style>
	<div style="display: flex;">

		<div style="display: grid; grid-template-columns: max-content">
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Default"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isQuiet: true,
				}, context)}
			</div>
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Invalid"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isQuiet: true,
					isInvalid: true,
				}, context)}
			</div>
		</div>

		<div style="display: grid; grid-template-columns: max-content">
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isQuiet: true,
					isFocused: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Invalid, focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isQuiet: true,
					isInvalid: true,
					isFocused: true,
				}, context)}
			</div>
		</div>

		<div style="display: grid; grid-template-columns: max-content;">
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Invalid, keyboard focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isQuiet: true,
					isInvalid: true,
					isKeyboardFocused: true,
				}, context)}
			</div>
			<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Keyboard focused"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isQuiet: true,
					isKeyboardFocused: true,
				}, context)}
			</div>
		</div>

	</div>
`;

export const DisabledTemplate = (args, context) => html`
	<style>
		.spectrum-Detail { 
			display: inline-block;
			/* Why seafoam? Because it separates it from the component styles. */
			--mod-detail-font-color: var(--spectrum-seafoam-900);
		}
	</style>
	<div style="display: flex">
		<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
		})}>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled default"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				isDisabled: true,
			}, context)}
		</div>

		<div style=${styleMap({
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "flex-start",
				"gap": "8px",
				"padding": "16px",
		})}>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled quiet"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				isDisabled: true,
				isQuiet: true,
			}, context)}
		</div>
	</div>
`;

export const StepperGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Hide Stepper",
			hideStepper: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Keyboard Focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Invalid, focused",
			isInvalid: true,
			isFocused: true,
		},
		{
			testHeading: "Invalid, keyboard focused",
			isInvalid: true,
			isKeyboardFocused: true,
		}
	],
});
