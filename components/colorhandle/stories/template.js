import { Template as ColorLoupe } from "@spectrum-css/colorloupe/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isWithColorLoupe = false,
	selectedColor = "rgba(255 0 0 / 50%)",
	customStyles = {},
} = {}, context = {}) => {
	return OpacityCheckerboard({
		customClasses: [
			`${rootClass}`,
			...!isDisabled && isFocused ? ["is-focused"] : [],
			...isDisabled ? ["is-disabled"] : [],
			...customClasses,
		],
		content: [html `
			<div class="${rootClass}-inner"></div>
			${when(isWithColorLoupe, () => html`
				${ColorLoupe({
					isOpen: true,
					isDisabled,
					customStyles: {
						"inset-inline-start": "unset",
						"inset-block-start": "unset",
					}
				})}
			`)}
		`],
		customStyles: {
			"position": isWithColorLoupe ? "absolute" : undefined,
			"inset-block": isWithColorLoupe ? "75%" : undefined,
			"inset-inline": isWithColorLoupe ? "50%" : undefined,
			...customStyles,
			"--spectrum-picked-color": selectedColor,
		},
	}, context);
};
