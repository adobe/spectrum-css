import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Radio } from "@spectrum-css/radio/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-FieldGroup",
	customClasses = [],
	customStyles = {},
	isHorizontal = false,
	label = "Field group label",
	helpText,
	isAsideLabel = false,
	isInvalid = false,
	items = [],
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--toplabel`]: !isAsideLabel,
				[`${rootClass}--sidelabel`]: isAsideLabel,
				[`${rootClass}--horizontal`]: isHorizontal,
				[`${rootClass}--vertical`]: !isHorizontal,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-invalid=${ifDefined(isInvalid ? "true" : undefined)}
			style=${styleMap(customStyles)}
		>
			${when(label, () => FieldLabel({ label }))}

			<div
				class=${classMap({
					[`${rootClass}InputLayout`]: true,
				})}
			>
				${repeat(
					items,
					(item) => Radio({ ...item, customClasses: [`${rootClass}-item`] }),
				)}
				${when(isInvalid && helpText, () => HelpText({ text: helpText, variant: "negative" }))}
			</div>
		</div>
	</div>
	`;
};
