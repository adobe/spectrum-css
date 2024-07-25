import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
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
	id,
} = {}, context = {}) => {
	const { updateArgs } = context;

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

export const SwatchGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined,
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-wrap": "wrap",
		"gap": "16px",
	})}>
		${Template(args, context)}
		${Template({ ...args, swatchColor: "rgba(174, 216, 230, 0.3)" }, context)}
		${Template({ ...args, swatchColor: undefined }, context)}
		${Template({ ...args, rounding: "none" }, context)}
		${Template({ ...args, rounding: "full" }, context)}
	</div>
`;

export const States = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined,
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"gap": "16px",
	})}>
		${SwatchGroup(args, context)}
		${SwatchGroup({ ...args, isDisabled: true }, context)}
		${SwatchGroup({ ...args, isSelected: true }, context)}
	</div>
`;
