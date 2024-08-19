import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const Template = (
	{
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
	} = {},
	context = {},
) => {
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
				${renderContent(items, { args: { isReadOnly, isRequired }, context })}
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
