import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Tag } from "@spectrum-css/tag/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-TagGroup",
	ariaLabel,
	numberOfTags = 3,
	isRemovable = false,
	customClasses = [],
	customStyles = {},
	size = "m",
	actionButtonText = "",
	fieldLabel,
	fieldLabelPosition = "top",
	helpText,
	isInvalid = false,
	...args
} = {}, context = {}) => {
	const generatedItems = Array.from({ length: numberOfTags }, (_, i) => ({
		label: `Tag ${i + 1}`
	}));

	return html`
		${when(fieldLabel, () => html`
			<div class=${classMap({
				[`${rootClass}-label`]: true,
				[`${rootClass}-label--side`]: fieldLabelPosition === "side",
			})}>
				${FieldLabel({
					size,
					label: fieldLabel,
				}, context)}
			</div>
		`)}
		<div
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			role="list"
			aria-label=${ifDefined(ariaLabel)}
		>
			${generatedItems.map((i) => Tag({
				...i,
				...args,
				size,
				hasClearButton: isRemovable,
				customClasses: [`${rootClass}-item`],
			}, context))}
		</div>
		${when(actionButtonText, () => html`
			<div class="${rootClass}-actionButtonArea">
			${ActionButton({
				size,
				isQuiet: true,
				label: actionButtonText,
			}, context)}
			</div>
		`)}
		${when(helpText, () => html`
			<div class="${rootClass}-helpText">
				${HelpText({
					size,
					text: helpText,
					variant: isInvalid ? "negative" : undefined,
				}, context)}
			</div>
		`)}
	`;
};
