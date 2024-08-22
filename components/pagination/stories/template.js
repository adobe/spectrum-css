import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Pagination",
	size = "m",
	customClasses = [],
	variant,
	items
} = {}, context = {}) => {
	const explicitVariant = html`
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
			}, context)}
			${Textfield({
				size,
				value: "1",
				customClasses: [`${rootClass}-textfield`],
			}, context)}
			<span class="${rootClass}-counter">of 89 pages</span>
			${ActionButton({
				size,
				isQuiet: true,
				iconSet: "ui",
				iconName: "ChevronRight",
				customClasses: [`${rootClass}-nextButton`],
			}, context)}
		</nav>
	`;

	// @todo This variant should be deprecated, as it uses the deprecated SplitButton component. 
	const buttonVariant = SplitButton({
		position: "left",
		variant: "accent",
		label: "Next",
		iconName: "ChevronLeft100",
		labelIconName: "ChevronRight100",
		customFirstButtonClasses: ["spectrum-Pagination-prevButton"],
		customLastButtonClasses: ["spectrum-Pagination-nextButton"]
	}, context);

	const listingVariant = html`
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
			}, context)}
			${repeat(
				items,
				(item) => item.id,
				(item) => {
					if (typeof item === "object") {
						return ActionButton({
							...item,
							size,
							isQuiet: true,
						}, context);
					}
					else {
						return item;
					}
				}
			)}
			${Button({
				size,
				variant: "primary",
				treatment: "outline",
				label: "Next",
				customClasses: [`${rootClass}-nextButton`],
			}, context)}
		</nav>
	`;

	if (variant === "explicit") {
		return explicitVariant;
	}
	else if (variant == "button") {
		return buttonVariant;
	}
	return listingVariant;
};
