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
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
			[`${rootClass}--sideLabel`]: fieldLabelPosition === "side",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
	>
		${when(fieldLabel, () => html`
			${FieldLabel({
				size,
				label: fieldLabel,
				customClasses: [`${rootClass}-label`],
			}, context)}
		`)}
		<div
			class=${`${rootClass}-tags`}
			role="list"
			aria-label=${ifDefined(ariaLabel)}
		>
			${generatedItems.map((i) => Tag({
				...i,
				...args,
				size,
				hasClearButton: isRemovable,
				customClasses: [`${rootClass}-tag`],
			}, context))}
		</div>
		${when(actionButtonText, () => html`
			${ActionButton({
				size,
				isQuiet: true,
				label: actionButtonText,
				customClasses: [`${rootClass}-actionButton`],
			}, context)}
		`)}
		${when(helpText, () => html`
			${HelpText({
				size,
				text: helpText,
				variant: isInvalid ? "negative" : undefined,
				customClasses: [`${rootClass}-helpText`],
			}, context)}
		`)}
		</div>
	`;
};
