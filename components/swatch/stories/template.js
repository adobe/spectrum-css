import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html, svg } from "lit";
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
	isAddSwatch = false,
	isSelected = false,
	isDisabled = false,
	isHovered = false,
	isActive = false,
	isKeyboardFocused = false,
	rounding = "partial",
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
		case "border":
			borderStyle = "border";
			break;
		case "light":
			borderStyle = "lightBorder";
			break;
	}

	let pickedColor = swatchColor;

	if (isMixedValue) pickedColor = "var(--spectrum-gray-25)";
	if (isAddSwatch) pickedColor = undefined;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--rounding${capitalize(
							lowerCase(rounding)
						)}`]: typeof rounding !== "undefined" && rounding !== "partial",
				[`${rootClass}--${borderStyle}`]: typeof borderStyle !== "undefined" && borderStyle !== "default",
				"is-selected": !isDisabled && isSelected,
				"is-disabled": isDisabled,
				"is-hover": isHovered,
				"is-active": isActive,
				"is-keyboardFocused": isKeyboardFocused,
				"is-image": (isMixedValue || isAddSwatch) || typeof imageUrl !== "undefined",
				"is-mixedValue": !isDisabled && !isAddSwatch && isMixedValue,
				"is-addSwatch": !isDisabled && !isMixedValue && isAddSwatch,
				[`${rootClass}--rectangle`]: typeof shape !== "undefined" && shape !== "square",
				"is-nothing": !isDisabled && (typeof swatchColor === "undefined" || swatchColor === "transparent"),
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap({
				"--spectrum-picked-color": pickedColor,
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
			${when((typeof imageUrl !== "undefined") && !isDisabled && !isMixedValue && !isAddSwatch, () => html`
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
							// disabled icon requires custom markup	to render separate paths for border and fill
							// the custom prop fills in the paths are a fallback, styling should be handled by css
							...(isDisabled ? [svg`
								<svg
										xmlns="http://www.w3.org/2000/svg"
										class="${rootClass}-disabledIcon"
										viewBox="0 0 20 20"
								>
										<path
												d="M9.889,1a8.889,8.889,0,1,0,8.889,8.889A8.889,8.889,0,0,0,9.889,1Zm6.667,8.889a6.635,6.635,0,0,1-1.233,3.863l-9.3-9.3A6.667,6.667,0,0,1,16.556,9.889Zm-13.333,0A6.636,6.636,0,0,1,4.455,6.026l9.3,9.3A6.667,6.667,0,0,1,3.222,9.889Z"
												stroke="none"
												fill="var(--spectrum-swatch-disabled-icon-color)"
										/>
										<path
												d="M 9.888889312744141 1 C 4.979689598083496 1 1 4.979689598083496 1 9.888889312744141 C 1 14.7980899810791 4.979689598083496 18.77777862548828 9.888889312744141 18.77777862548828 C 14.7980899810791 18.77777862548828 18.77777862548828 14.7980899810791 18.77777862548828 9.888889312744141 C 18.77777862548828 4.979689598083496 14.7980899810791 1 9.888889312744141 1 M 15.32277870178223 13.75166893005371 L 6.02610969543457 4.454998970031738 C 8.059318542480469 3.009572982788086 10.72937774658203 2.820217132568359 12.9462194442749 3.964249610900879 C 15.16304969787598 5.10828971862793 16.55568885803223 7.394259452819824 16.5555591583252 9.888889312744141 C 16.55776977539062 11.27357959747314 16.126708984375 12.62425994873047 15.32277870178223 13.75166893005371 M 9.888258934020996 16.55648612976074 C 8.843273162841797 16.55648612976074 7.794573783874512 16.31111145019531 6.831318855285645 15.8139591217041 C 4.614439010620117 14.66977882385254 3.221879959106445 12.38361930847168 3.222219467163086 9.888889312744141 C 3.220088958740234 8.504219055175781 3.651140213012695 7.153559684753418 4.454998970031738 6.02610969543457 L 13.75166893005371 15.32333946228027 C 12.60186290740967 16.14075088500977 11.24825286865234 16.55648612976074 9.888258934020996 16.55648612976074 M 9.888889312744141 0 C 15.34163951873779 0 19.77777862548828 4.436139106750488 19.77777862548828 9.888889312744141 C 19.77777862548828 15.34163951873779 15.34163951873779 19.77777862548828 9.888889312744141 19.77777862548828 C 4.436139106750488 19.77777862548828 0 15.34163951873779 0 9.888889312744141 C 0 4.436139106750488 4.436139106750488 0 9.888889312744141 0 Z M 15.10232830047607 12.11699867248535 C 15.40205764770508 11.41858959197998 15.55679702758789 10.66494941711426 15.5555591583252 9.89048957824707 C 15.5556697845459 7.759209632873535 14.38009929656982 5.829549789428711 12.48761940002441 4.852889060974121 C 11.68764972686768 4.440059661865234 10.78924942016602 4.22184944152832 9.889529228210449 4.22184944152832 C 9.114802360534668 4.22184944152832 8.360831260681152 4.377038955688477 7.661839485168457 4.676509857177734 L 15.10232830047607 12.11699867248535 Z M 12.11597919464111 15.10181331634521 L 4.675475120544434 7.660861015319824 C 4.375750541687012 8.359296798706055 4.221027374267578 9.112875938415527 4.222219467163086 9.887349128723145 C 4.221929550170898 12.01874923706055 5.397418975830078 13.94855880737305 7.289958953857422 14.92533874511719 C 8.08997917175293 15.3382396697998 8.988459587097168 15.55648994445801 9.888258934020996 15.55648994445801 C 10.66298007965088 15.55648994445801 11.41698551177979 15.40128421783447 12.11597919464111 15.10181331634521 Z"
												stroke="none"
												fill="var(--spectrum-swatch-disabled-icon-border-color)"
										/>
								</svg>
						`] : []),
							...(isMixedValue ? [Icon({
								customClasses: [`${rootClass}-icon`],
								setName: "ui",
								iconName: "Dash" + ({
									xs: "75",
									s: "75",
									m: "100",
									l: "200",
								}[size] || "100"),
								useRef: false,
							}, context)] : []),
							...(isAddSwatch ? [Icon({
								customClasses: [`${rootClass}-icon`],
								setName: "workflow",
								size,
								iconName: "Add",
								useRef: false,
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
