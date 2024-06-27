import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

/**
 * @todo load order should not influence the icon size but it is; fix this
*/
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

export const Template = ({
	rootClass = "spectrum-ActionButton",
	size = "m",
	iconName,
	iconSet,
	label,
	isQuiet = false,
	isSelected = false,
	isEmphasized = false,
	isHovered = false,
	isFocused = false,
	isActive = false,
	isDisabled = false,
	hasPopup = false,
	hideLabel = false,
	staticColor,
	customClasses = [],
	customStyles = {},
	customIconClasses = [],
	onclick,
	id,
	testId,
	role,
}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") {
		import("../themes/express.css");
	}
	else if (globals.context === "legacy") {
		import("../themes/legacy.css");
	}

	return html`
		<button
			aria-label=${ifDefined(label)}
			aria-haspopup=${hasPopup ? "true" : "false"}
			aria-pressed=${isSelected ? "true" : "false"}
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				["is-disabled"]: isDisabled,
				["is-selected"]: isSelected,
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
				["is-active"]: isActive,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
			role=${ifDefined(role)}
			style=${ifDefined(styleMap(customStyles))}
			?disabled=${isDisabled}
			@click=${onclick}
		>
			${when(hasPopup, () =>
				Icon({
					size,
					iconName: "CornerTriangle",
					setName: "ui",
					customClasses: [`${rootClass}-hold`],
				}, context)
			)}
			${when(iconName, () =>
				Icon({
					size,
					iconName,
					setName: iconSet,
					customClasses: [`${rootClass}-icon`, ...customIconClasses],
				}, context)
			)}
			${when(
				label && !hideLabel,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
		</button>
	`;
};

const ActionButtons = (args, context) => html` <div
	style=${styleMap({
		"display": "flex",
		"gap": "16px",
	})}
	id="render-root"
>
	${Template({
		...args,
		label: "More",
		iconName: undefined,
	}, context)}
	${Template({
		...args,
		label: "More",
	}, context)}
	${Template(args, context)}
	${Template({
		...args,
		hasPopup: true,
	}, context)}
	<!-- Save truncation for VRTs -->
	${Template({
		...args,
		label: "Truncate this long content",
		iconName: undefined,
		customStyles: {
			display: window.isChromatic() ? undefined : "none",
			maxInlineSize: "100px"
		},
	}, context)}
	${Template({
		...args,
		label: "Truncate this long content",
		customStyles: {
			display: window.isChromatic() ? undefined : "none",
			maxInlineSize: "100px"
		},
	}, context)}
</div>`;

const States = (args, context) =>
	html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons(args, context)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Selected"],
				customClasses: ["chromatic-ignore"],
			})}
			${ActionButtons({
				...args,
				isSelected: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Focused"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons({
				...args,
				isFocused: true,
			}, context)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Hovered"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons({
				...args,
				isHovered: true,
			}, context)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Active"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons({
				...args,
				isActive: true,
			}, context)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons({
				...args,
				isDisabled: true,
			}, context)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled + selected"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons({
				...args,
				isSelected: true,
				isDisabled: true,
			}, context)}
		</div>`;

const Sizes = (args, context) =>
	html` ${["s", "m", "l", "xl"].map((size) => {
		return html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						xxs: "Extra-extra-small",
						xs: "Extra-small",
						s: "Small",
						m: "Medium",
						l: "Large",
						xl: "Extra-large",
						xxl: "Extra-extra-large",
					}[size],
				],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${ActionButtons({
				...args,
				size,
			}, context)}
		</div>`;
	})}`;

export const Variants = (args, context) => html`
	<style>
		.spectrum-Detail { display: inline-block; }
		.spectrum-Typography > div {
			border: 1px solid var(--spectrum-gray-200);
			border-radius: 4px;
			padding: 0 1em 1em;
			/* Why seafoam? Because it separates it from the component styles. */
			--mod-detail-font-color: var(--spectrum-seafoam-900);
		}
	</style>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"align-items": "flex-start",
		"gap": "16px",
		"--mod-detail-margin-end": "4.8px",
	})}>
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Standard"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			<div style=${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "4.8px",
			})}>
				${States(args, context)}
			</div>
		</div>
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Emphasized"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			<div style=${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "4.8px",
			})}>
				${States({
					...args,
					isEmphasized: true,
				}, context)}
			</div>
		</div>
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Quiet"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			<div style=${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "4.8px",
			})}>
				${States({
					...args,
					isQuiet: true,
				}, context)}
			</div>
		</div>
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Sizing"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			<div style=${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "4.8px",
			})}>
				${Sizes(args, context)}
			</div>
		</div>
	</div>
	<div style=${styleMap({
		display: window.isChromatic() ? "none" : undefined,
	})}>
		${ActionButtons(args, context)}
	</div>
`;
