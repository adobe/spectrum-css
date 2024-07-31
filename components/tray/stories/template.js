import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = [],
	customStyles = {},
	id = getRandomId("tray"),
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[`${rootClass}-wrapper`]: true,
			})}
			style=${styleMap(customStyles)}
		>
		${Modal({
			customClasses: [rootClass, ...customClasses],
			isOpen,
			content,
			id,
			skipWrapper: true,
		}, context)}
		</div>
	`;
};
