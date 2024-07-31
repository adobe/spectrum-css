import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-DropZone",
	isDragged = false,
	isFilled = false,
	customClasses = [],
	customStyles = {},
	heading,
	description,
	label,
	id = getRandomId("dropzone"),
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
			[rootClass]: true,
			"is-dragged": isDragged,
			"is-filled": isFilled,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="region"
			tabindex="0"
			style=${styleMap(customStyles)}
		>
			${IllustratedMessage({ heading, description }, context)}

			<div class="${rootClass}-content">
			${ActionButton(
				{
				label,
				customClasses: [`${rootClass}-button`],
				},
				context
			)}
			</div>
		</div>
	`;
};
