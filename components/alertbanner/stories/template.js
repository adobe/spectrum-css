import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-AlertBanner",
	id = getRandomId("alertbanner"),
	testId,
	isOpen = true,
	text,
	variant,
	actionButtonText = "Action",
	showCloseButton = true,
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"min-inline-size": "500px",
				...customStyles,
			})}
			id=${id}
			data-testid=${ifDefined(testId)}
		>
			<div class=${classMap({
				[`${rootClass}-body`]: true
			})}>
				<div class=${classMap({
					[`${rootClass}-content`]: true
				})}>
					${when(
						["negative", "info"].some(type => variant === type),
						() => Icon({
							iconName: variant === "negative" ? "Alert" : "Info",
							customClasses: [`${rootClass}-icon`],
						}, context)
					)}
					${when(text, () => html`
						<p class=${classMap({
							[`${rootClass}-text`]: true
						})}>${text}</p>
					`)}
				</div>
				${when(actionButtonText, () =>
					Button({
						size: "m",
						staticColor: "white",
						treatment: "outline",
						label: actionButtonText,
					}, context)
				)}
			</div>
			${when(showCloseButton, () => html`
				<div class=${classMap({
					[`${rootClass}-end`]: true
				})}>
					${Divider({
						vertical: true,
						size: "s",
						tag: "div",
					}, context)}
					${CloseButton({
						size: "m",
						staticColor: "white",
						onclick,
					}, context)}
				</div>
			`)}
		</div>
	`;
};

/**
 * Examples of all text overflow (wrapping) scenarios.
 */
export const TextOverflowTemplate = (args) => html`
	<div
		style=${styleMap({
			display: "flex",
			flexDirection: "column",
			gap: "12px",
		})}
	>
		${Template({
			...args,
			variant: "info",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
		})}
		${Template({
			...args,
			variant: "neutral",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			actionButtonText: "",
		})}
	</div>
`;

/**
 * Examples of options for contextual action button and close button.
 */
export const ActionableOptionsTemplate = (args, context) => Container({
	withBorder: false,
	direction: "column",
	containerStyles: { alignItems: "stretch" },
	wrapperStyles: { alignItems: "stretch" },
	content: html`
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Action button and close button",
			containerStyles: { alignItems: "stretch" },
			wrapperStyles: { alignItems: "stretch" },
			content: Template({
					...args,
					variant: "neutral",
					text: "Your trial has expired",
					actionButtonText: "Buy now",
			}, context),
		})}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Action button only",
			containerStyles: { alignItems: "stretch" },
			wrapperStyles: { alignItems: "stretch" },
			content: Template({
					...args,
					variant: "neutral",
					text: "Your trial has expired",
					actionButtonText: "Buy now",
					showCloseButton: false,
			}, context),
		})}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Close button only",
			containerStyles: { alignItems: "stretch" },
			wrapperStyles: { alignItems: "stretch" },
			content: Template({
				...args,
				variant: "neutral",
				text: "Your trial has expired",
				actionButtonText: "",
			}),
		})}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Text only",
			containerStyles: { alignItems: "stretch" },
			wrapperStyles: { alignItems: "stretch" },
			content: Template({
					...args,
					variant: "neutral",
					text: "Your trial has expired",
					actionButtonText: "",
					showCloseButton: false,
			}, context),
		})}
	`,
});
