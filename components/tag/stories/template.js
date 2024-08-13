import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tag",
	size = "m",
	iconName,
	avatarUrl,
	label,
	isSelected = false,
	isEmphasized = false,
	isDisabled = false,
	isInvalid = false,
	hasClearButton = false,
	id = getRandomId("tag"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	if(isInvalid) iconName = "Alert";

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-emphasized": isEmphasized,
				"is-disabled": isDisabled,
				"is-invalid": isInvalid,
				"is-selected": isSelected,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			tabindex=${isDisabled ? "-1" : "0"}
			style=${styleMap(customStyles)}
		>
			${when(avatarUrl && !isInvalid, () =>
				Avatar({
					image: avatarUrl,
					size: "50",
				}, context)
			)}
			${when(iconName || isInvalid, () =>
				Icon({
					size,
					iconName,
					customClasses: [`${rootClass}-itemIcon`],
				}, context)
			)}
			<span class="${rootClass}-itemLabel">${label}</span>
			${when(hasClearButton, () =>
				ClearButton({
					size,
					customClasses: [`${rootClass}-clearButton`],
					onclick: (evt) => {
						const el = evt.target;
						if (!el) return;

						const wrapper = el.closest(rootClass);
						wrapper.parentNode.removeChild(wrapper);
					},
				}, context)
			)}
		</div>
	`;
};
