import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Swatch",
	size = "m",
	isSelected = false,
	isDisabled = false,
	rounding = "regular",
	customClasses = [],
	swatchColor,
	customStyles = {},
	id = getRandomId("swatch"),
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--rounding${capitalize(
							lowerCase(rounding)
						)}`]: typeof rounding !== "undefined" && rounding !== "regular",
				"is-selected": !isDisabled && isSelected,
				"is-disabled": isDisabled,
				"is-nothing": !isDisabled && (typeof swatchColor === "undefined" || swatchColor === "transparent"),
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap({
				"--spectrum-picked-color": swatchColor,
				...customStyles,
			}))}
			tabindex="0"
			@click=${function() {
				updateArgs({ isSelected: !isSelected });
			}}
			@focusout=${function() {
				updateArgs({ isSelected: false });
			}}
			@keypress=${function(e) {
				if (e.key !== "Enter" && e.key !== " ") return;
				updateArgs({ isSelected: !isSelected });
			}}
		>
			${OpacityCheckerboard({
				customClasses: [`${rootClass}-fill`],
				content: [
					...(isDisabled ? [Icon({
						customClasses: [`${rootClass}-disabledIcon`],
						setName: "workflow",
						iconName: "Cancel",
					}, context)] : []),
				]
			}, context)}
		</div>
	`;
};
