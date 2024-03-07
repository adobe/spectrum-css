import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Swatch",
	size = "m",
	borderStyle = "default",
	shape = "square",
	imageUrl,
	isMixedValue = false,
	isSelected = false,
	isDisabled = false,
	rounding = "regular",
	customClasses = [],
	swatchColor,
	customStyles = {},
	id = getRandomId("swatch"),
} = {}, context = {}) => {
	const { updateArgs } = context;

	switch (borderStyle) {
		case "none":
			borderStyle = "noBorder";
			break;
		case "light":
			borderStyle = "lightBorder";
			break;
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--rounding${capitalize(
							lowerCase(rounding)
						)}`]: typeof rounding !== "undefined" && rounding !== "regular",
				[`${rootClass}--${borderStyle}`]: typeof borderStyle !== "undefined" && borderStyle !== "default",
				"is-selected": !isDisabled && isSelected,
				"is-disabled": isDisabled,
				"is-image": isMixedValue || typeof imageUrl !== "undefined",
				"is-mixedValue": !isDisabled && isMixedValue,
				[`${rootClass}--rectangle`]: typeof shape !== "undefined" && shape !== "square",
				"is-nothing": !isDisabled && (typeof swatchColor === "undefined" || swatchColor === "transparent"),
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap({
				"--spectrum-picked-color": isMixedValue ? "var(--spectrum-gray-50)" : swatchColor,
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
			${when((typeof imageUrl !== "undefined") && !isDisabled && !isMixedValue, () => html`
				${when(imageUrl, () => html`
					<div class="${rootClass}-fill" >
						<img src="${imageUrl}" alt="" class="${rootClass}-image" />
					</div>
				`)}
			`,
			() => html`
				${OpacityCheckerboard({
						customClasses: [`${rootClass}-fill`],
						content: [
							...(isDisabled ? [Icon({
								customClasses: [`${rootClass}-disabledIcon`],
								setName: "workflow",
								iconName: "Cancel",
							}, context)] : []),
							...(isMixedValue ? [Icon({
								customClasses: [`${rootClass}-mixedValueIcon`],
								setName: "ui",
								iconName: "Dash",
							}, context)] : []),
						]
					})}
				`
			)}
	`;
};

/* Shows a single group of swatches with all rounding options. */
export const RoundingGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Regular",
			containerStyles: { "gap": "8px" },
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Full",
			containerStyles: { "gap": "8px" },
			content: Template({...args, rounding: "full", }, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "None",
			containerStyles: { "gap": "8px" },
			content: Template({...args, rounding: "none", }, context),
		}, context)}
	`
}, context);

/* Shows a single group of swatches with all border options. */
export const BorderGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Default",
			containerStyles: { "gap": "8px" },
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "No border",
			containerStyles: { "gap": "8px" },
			content: Template({...args, borderStyle: "noBorder"}, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Light Border",
			containerStyles: { "gap": "8px" },
			content: Template({...args, borderStyle: "lightBorder"}, context),
		}, context)}
	`
}, context);

/* Shows a single group of swatches that are empty/nothing in various shapes and rounding. */
export const EmptyGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			containerStyles: { "gap": "8px" },
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: { "gap": "8px" },
			content: Template({...args, rounding: "full", }, context),
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: { "gap": "8px" },
			content: Template({...args, shape: "rectangle", }, context),
		}, context)}
	`
}, context);

/* Shows a single group of disabled swatches. */
export const DisabledGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			withHeading: false,
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			withHeading: false,
			content: Template({...args, rounding: "full", }, context),
		}, context)}
	`
}, context);

export const SizingGroup = (args, context) =>Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			withHeading: false,
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			withHeading: false,
			content: Template({...args, swatchColor: "rgba(174, 216, 230, 0.25)"}, context),
		}, context)}
	`
});
