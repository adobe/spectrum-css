import { Template as ColorLoupe } from "@spectrum-css/colorloupe/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isWithColorLoupe = false,
	customStyles = {
		"--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
	},
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
					customStyles: {
						"inset-inline-start": "unset",
						"inset-block-start": "unset",
					}
				})}
			`)}
		`],
		customStyles: {
			...customStyles,
			"position": isWithColorLoupe ? "absolute" : undefined,
			"inset-block": isWithColorLoupe ? "75%" : undefined,
			"inset-inline": isWithColorLoupe ? "50%" : undefined,
		},
	}, context);
};
