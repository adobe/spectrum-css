import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	isDisabled = false,
	isHover = false,
	isDown = false,
	size = "m",
	isFocusable = true,
	id = getRandomId("clearbutton"),
	onclick = () => {},
	customClasses = [],
	customStyles = {},
}, context) => html`
	<button
		type="reset"
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			"is-disabled": isDisabled,
			"is-hover": isHover,
			"is-active": isDown,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		style=${styleMap(customStyles)}
		?disabled=${isDisabled}
		tabindex=${isFocusable ? 0 : -1}
		aria-hidden=${isFocusable}
		@click=${onclick}
	>
		<div class="${rootClass}-fill">
			${Icon({
				size,
				iconName: "Cross",
				setName: "ui",
				customClasses: [`${rootClass}-icon`],
			}, context)}
		</div>
	</button>
`;
