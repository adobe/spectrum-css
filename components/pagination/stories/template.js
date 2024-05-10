import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Pagination",
	size = "m",
	customClasses = [],
	variant,
	items,
}) => {
	if (variant === "explicit") {
		return html`
			<nav
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--explicit`]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${ActionButton({
					size,
					isQuiet: true,
					iconSet: "ui",
					iconName: "ChevronLeft",
					customClasses: [`${rootClass}-prevButton`],
				})}
				${Textfield({
					size,
					value: "1",
					customClasses: [`${rootClass}-textfield`],
				})}
				<span class="${rootClass}-counter">of 89 pages</span>
				${ActionButton({
					size,
					isQuiet: true,
					iconSet: "ui",
					iconName: "ChevronRight",
					customClasses: [`${rootClass}-nextButton`],
				})}
			</nav>
		`;
	}

	return html`
		<nav
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${Button({
				size,
				variant: "primary",
				treatment: "outline",
				label: "Prev",
				customClasses: [`${rootClass}-prevButton`],
			})}
			${repeat(
				items,
				(item) => item.id,
				(item) => {
					if (typeof item === "object") {
						return ActionButton({
							...item,
							size,
							isQuiet: true,
						});
					}
 else return item;
				}
			)}
			${Button({
				size,
				variant: "primary",
				treatment: "outline",
				label: "Next",
				customClasses: [`${rootClass}-nextButton`],
			})}
		</nav>
	`;
};
