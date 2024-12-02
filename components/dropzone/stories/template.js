import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
<<<<<<< HEAD
import { styleMap } from "lit/directives/style-map.js";
=======

import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
<<<<<<< HEAD
import { when } from "lit/directives/when.js";
>>>>>>> fac121db1 (feat(illustratedmessage): new mods)
=======
>>>>>>> da506c0eb (feat(dropzone): adding dropzone migration)

import "../index.css";

export const Template = ({
	rootClass = "spectrum-DropZone",
	isDragged = false,
	isFilled = false,
	customClasses = [],
<<<<<<< HEAD
	customStyles = {},
	title,
	description,
	label,
	id = getRandomId("dropzone"),
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
=======
	heading,
	description,
	label,
	id,
	size = "m",
	...globals
}) => html`
	<div
		class=${classMap({
>>>>>>> da506c0eb (feat(dropzone): adding dropzone migration)
			[rootClass]: true,
			"is-dragged": isDragged,
			"is-filled": isFilled,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
<<<<<<< HEAD
			})}
			id=${ifDefined(id)}
			role="region"
			tabindex="0"
			style=${styleMap(customStyles)}
		>
			${IllustratedMessage({ title, description }, context)}

			<div class="${rootClass}-content">
			${ActionButton(
				{
				label,
				customClasses: [`${rootClass}-button`],
				},
				context
			)}
			</div>
=======
		})}
		id=${ifDefined(id)}
		role="region"
		tabindex="0"
		style="width: 300px;"
	>
		${IllustratedMessage({
			...globals,
			heading: heading,
			description: description,
			customIllustration: customSvg,
			size: size
		})}
		<div class="${rootClass}-actions">
			${Button({
					label: label ?? "Drop file to replace",
					size: size
				})}
>>>>>>> da506c0eb (feat(dropzone): adding dropzone migration)
		</div>
	`;
};
