import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { Template as Typography} from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Swatch",
	size = "m",
	withBorder = "default",
	isRectangle = false,
	isImage = false,
	imageUrl,
	isGradient = false,
	isMixedValue = false,
	isSelected = false,
	isDisabled = false,
	rounding = "regular",
	customClasses = [],
	swatchColor,
	gradient,
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
				[`${rootClass}--${withBorder}`]: typeof withBorder !== "undefined" && withBorder !== "default",
				"is-selected": !isDisabled && isSelected,
				"is-disabled": isDisabled,
				"is-image": (isImage || isGradient)
				&& (typeof gradient !== "undefined" || gradient !== "transparent" || imageUrl !== "undefined"),
				"is-mixedValue": !isDisabled && isMixedValue,
				[`${rootClass}--rectangle`]: typeof isRectangle !== "undefined" && isRectangle !== false,
				"is-nothing": !isDisabled && (typeof swatchColor === "undefined" || swatchColor === "transparent"),
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap({
				"--spectrum-picked-color": swatchColor,
				"--spectrum-gradient": gradient,
				"--spectrum-background": `url(${imageUrl})`,
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
					...(isMixedValue ? [Icon({
						customClasses: [`${rootClass}-mixedValueIcon`],
						setName: "ui",
						iconName: "Dash",
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

export const SizingGroup = (args, context) => html`
	${["xs", "s", "m", "l"].map((size) => html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						xs: "Extra-small",
						s: "Small",
						m: "Medium (default)",
						l: "Large",
					}[size]
				],
				customClasses: ["chromatic-ignore"],
			})}
			<div style="display: flex; gap: 8px; padding: 8px 0;">
				${Template({
					...args,
					size},
				context)}
				${Template({
					...args,
					size,
					swatchColor: "rgba(174, 216, 230, 0.3)",
					}, context)}
			</div>
		</div>
	`)}
`;

export const RoundingGroup = (args, context) => html`
	<div style=${styleMap({
		"display": "flex",
		"flex-direction": "column",
		"flex-wrap": "wrap",
		"gap": "8px",
	})}>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Default"],
			customClasses: ["chromatic-ignore"],
		})}
		${Template({
			...args,
			rounding: "default",
		}, context)}
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Full"],
			customClasses: ["chromatic-ignore"],
		})}
		${Template({
			...args,
			rounding: "full",
		}, context)}
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["None"],
			customClasses: ["chromatic-ignore"],
		})}
		${Template({
			...args,
			rounding: "none",
		}, context)}
`;

export const BorderGroup = (args, context) => html `
	<div style="display: flex; gap: 8px; padding: 8px 0;">
		<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Default"],
			customClasses: ["chromatic-ignore"],
		})}
		${Template({
			...args,
			}, context)}
		</div>
		<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["None"],
			customClasses: ["chromatic-ignore"],
		})}
		${Template({
			...args,
			withBorder: "noBorder",
			}, context)}
		</div>
	</div>
`;

export const NothingGroup = (args, context) => html`
${["xs", "s", "m", "l"].map((size) => html`
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: [
				{
					xs: "Extra-small",
					s: "Small",
					m: "Medium (default)",
					l: "Large",
				}[size]
			],
			customClasses: ["chromatic-ignore"],
		})}
		<div style="display: flex; gap: 8px; padding: 8px 0;">
			${Template({
				...args,
				size,
				swatchColor: "transparent",
				}, context)}
			${Template({
				...args,
				size,
				rounding: "full",
				swatchColor: "transparent",
				}, context)}
				${Template({
				...args,
				size,
				swatchColor: "transparent",
				isRectangle: true,
				}, context)}
		</div>
	</div>
`)}
`;

export const DisabledGroup = (args, context) => html`
${["xs", "s", "m", "l"].map((size) => html`
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: [
				{
					xs: "Extra-small",
					s: "Small",
					m: "Medium (default)",
					l: "Large",
				}[size]
			],
			customClasses: ["chromatic-ignore"],
		})}
		<div style="display: flex; gap: 8px; padding: 8px 0;">
			${Template({
				...args,
				size,
				isDisabled: true, 
				}, context)}
			${Template({
				...args,
				size,
				isDisabled: true,
				rounding: "full",
				}, context)}
		</div>
	</div>
`)}
`;
