import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-FieldGroup",
	customClasses = [],
	layout = "vertical",
	inputType = "radio",
	isReadOnly = false,
	isRequired = false,
	label,
	labelPosition,
	isInvalid,
	helpText,
	items = [],
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${labelPosition}label`]:
					typeof labelPosition !== "undefined",
				[`${rootClass}--${layout}`]: typeof layout !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-invalid=${ifDefined(isInvalid ? "true" : undefined)}
			type=${ifDefined(inputType)}
			aria-readonly=${ifDefined(isReadOnly ? "true" : undefined)}
			aria-required=${ifDefined(isRequired ? "true" : undefined)}
		>
			${when(label, () =>
				FieldLabel(
					{
						size: "m",
						label,
						alignment: labelPosition === "side" ? "right" : "top",
					},
					context,
				),
			)}
			<div
				class=${classMap({
					[`${rootClass}InputLayout`]: true,
				})}
			>
				${repeat(
					items,
					(item) => item.id,
					(item) => {
						if (typeof item === "function") {
							return item({}, context);
						}
						return item;
					},
				)}
				${when(helpText, () =>
					HelpText(
						{
							size: "m",
							text: helpText,
							variant: isInvalid ? "negative" : "neutral",
						},
						context,
					),
				)}
			</div>
		</div>
	`;
};

export const FieldGroupSet = (args, context) => html`
	<div
		style=${styleMap({
			display: window.isChromatic() ? "none" : "contents",
		})}
	>
		${Template(args, context)}
	</div>
	<div
		style=${styleMap({
			display: window.isChromatic() ? "flex" : "none",
			"flex-direction": "column",
			"align-items": "flex-start",
			gap: "32px",
		})}
	>
		${[
			{},
			{
				heading: "Horizontal",
				layout: "horizontal",
				items: [
					Checkbox({
						id: "apple",
						label: "Apples are best",
						customClasses: ["spectrum-FieldGroup-item"],
					}),
					Checkbox({
						id: "banana",
						label: "Bananas forever",
						customClasses: ["spectrum-FieldGroup-item"],
					}),
					Checkbox({
						id: "cherry",
						label: "Cherries ftw",
						customClasses: ["spectrum-FieldGroup-item"],
					}),
				],
			},
			{
				heading: "Label Position: Side",
				label: "Pick one:",
				labelPosition: "side",
				helpText: "Select an option to continue.",
			},
			{
				heading: "Invalid",
				isInvalid: true,
				helpText: "Select an option to continue.",
			},
		].map(
			({ heading, ...item }) => html`
				<div>
					${Typography(
						{
							semantics: "heading",
							size: "l",
							content: [heading],
							customClasses: ["chromatic-ignore"],
						},
						context,
					)}
					<div
						style=${styleMap({
							padding: "12px",
							border: "1px solid var(--spectrum-gray-200)",
							"border-radius": "4px",
						})}
					>
						${Template(
							{
								...args,
								...item,
							},
							context,
						)}
					</div>
				</div>
			`,
		)}
	</div>
`;
