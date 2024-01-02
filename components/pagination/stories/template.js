import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as SplitButton } from "@spectrum-css/splitbutton/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Pagination",
	size = "m",
	customClasses = [],
	variant,
	items,
	...globals
}) => {
	const classList = {
		[rootClass]: true,
		[`${rootClass}--${variant}`]: typeof variant !== "undefined",
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};

	if (variant === "explicit") {
		return html`
			<nav class=${classMap(classList)}>
				${ActionButton({
					...globals,
					size,
					isQuiet: true,
					iconName: "ChevronLeft",
					customClasses: [`${rootClass}-prevButton`],
				})}
				${Textfield({
					...globals,
					size,
					value: "1",
					customClasses: [`${rootClass}-textfield`],
				})}
				<span class="${rootClass}-counter">of 89 pages</span>
				${ActionButton({
					...globals,
					size,
					isQuiet: true,
					iconName: "ChevronRight",
					customClasses: [`${rootClass}-nextButton`],
				})}
			</nav>
		`;
	}

	if (variant === "button") {
		return SplitButton({
			...globals,
			position: "left",
			variant: "accent",
			label: "Next",
			iconName: "ChevronLeft100",
			labelIconName: "ChevronRight100",
			customFirstButtonClasses: [`${rootClass}-prevButton`],
			customLastButtonClasses: [`${rootClass}-nextButton`],
		});
	}

	return html`
		<nav class=${classMap(classList)}>
			${Button({
				...globals,
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
							...globals,
							...item,
							size,
							isQuiet: true,
						});
					} else return item;
				}
			)}
			${Button({
				...globals,
				size,
				variant: "primary",
				treatment: "outline",
				label: "Next",
				customClasses: [`${rootClass}-nextButton`],
			})}
		</nav>
	`;
};
