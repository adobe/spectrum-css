import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-FieldLabel",
	customClasses = [],
	customStyles = {},
	size = "m",
	label,
	id,
	testId,
	forInput,
	alignment,
	isDisabled,
	isRequired,
}, context) => {
	if (!label) {
		console.warn("FieldLabel: please provide a label for the field label.");
	}

	let iconName = "Asterisk100";
	switch (size) {
		case "s":
			iconName = "Asterisk100";
			break;
		case "l":
			iconName = "Asterisk200";
			break;
		case "xl":
			iconName = "Asterisk300";
			break;
		default:
			iconName = "Asterisk100";
	}

	const icon = Icon({ size, iconName, setName: "ui", customClasses: [`${rootClass}-UIIcon`, `${rootClass}-requiredIcon`] }, context);

	return html`
		<label
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${alignment}`]: typeof alignment !== "undefined",
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
			for=${ifDefined(forInput)}
		>
			${label}
			${when(isRequired, () => icon)}
		</label>
	`;
};

export const FieldLabelGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : "contents"
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"align-items": "flex-start",
		"gap": "32px",
		"border": "1px solid var(--spectrum-gray-200)",
		"border-radius": "4px",
		"padding": "12px",
		"margin-block-end": "32px",
	})}>
		${[{},
		{
			heading: "Right alignment",
			alignment: "right",
			customStyles: { width: "200px" },
		},
		{
			heading: "Disabled",
			isDisabled: true,
			customStyles: { width: "200px" },
		},
		{
			heading: "Required",
			isRequired: true,
			customStyles: { width: "200px" },
		},
		{
			heading: "Wrapped",
			label: "Label example with longer text that will wrap to the next line. And with an asterisk that marks it as required.",
			customStyles: { width: "200px" },
		}].map(({ heading, ...item }) => html`
			<div>
				${Typography({
					semantics: "heading",
					size: "xs",
					content: [heading],
				}, context)}
				${Template({
					...args,
					...item,
				}, context)}
			</div>
		`)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "row",
		"align-items": "flex-start",
		"gap": "60px",
		"border": "1px solid var(--spectrum-gray-200)",
		"border-radius": "4px",
		"padding": "12px",
	})}>
		${Sizes(args, context)}
	</div>
`;

const Sizes = (args, context) => ["s", "m", "l", "xl"].map((size) => html`
	<div>
		${Typography({
			semantics: "heading",
			size: "xs",
			content: [
				{
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size]
			],
			customClasses: ["chromatic-ignore"],
		}, context)}
		<div>
			${Template({...args, size}, context)}
		</div>
	</div>
`);
