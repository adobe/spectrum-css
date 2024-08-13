import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
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
	hasActionButton,
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
			style=${styleMap(customStyles)}
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
				${when(hasActionButton, () =>
					Button({
						size: "m",
						staticColor: "white",
						treatment: "outline",
						label: "Action",
					}, context)
				)}
			</div>
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
		</div>
	`;
};
