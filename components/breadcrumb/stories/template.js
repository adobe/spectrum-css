import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Breadcrumbs",
	customClasses = [],
	items = [],
	variant,
	isDragged = false,
} = {}, context) => {
	return html`
		<nav>
			<ul
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${items.map((item, idx, arr) => {
					const { label, isDisabled, iconName } = item;
					return html` <li
						class=${classMap({
							[`${rootClass}-item`]: true,
							"is-disabled": isDisabled,
							"is-dragged": isDragged && item.isDragged,
						})}
					>
						${when(
							iconName,
							() =>
								ActionButton({
									iconName,
									isDisabled,
									isQuiet: true,
									customIconClasses: [`${rootClass}-folder`],
									size: "m",
								}, context),
							() =>
								when(
									idx !== arr.length - 1,
									() =>
										html`<div
											class="${rootClass}-itemLink"
											role="link"
											tabindex="0"
										>
											${label}
										</div>`,
									() =>
										html`<a class="${rootClass}-itemLink" aria-current="page"
											>${label}</a
										>`
								)
						)}
						${when(idx !== arr.length - 1, () =>
							Icon({
								iconName: "ChevronRight100",
								customClasses: [`${rootClass}-itemSeparator`],
							}, context)
						)}
					</li>`;
				})}
			</ul>
		</nav>
	`;
};
