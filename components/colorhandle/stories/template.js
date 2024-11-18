import { Template as ColorLoupe } from "@spectrum-css/colorloupe/stories/template.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isWithColorLoupe = false,
	selectedColor = "rgba(255, 0, 0, 50%)",
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div style=${styleMap({
			// Why 67px? That's the height of the color loupe element
			"padding-block-start": isWithColorLoupe ? "67px" : 0,
			"padding-inline": isWithColorLoupe ? "6px" : 0,
		})}>
			${OpacityCheckerboard({
				customClasses: [
					`${rootClass}`,
					...!isDisabled && isFocused ? ["is-focused"] : [],
					...isDisabled ? ["is-disabled"] : [],
					...customClasses,
				],
				customStyles: {
					...customStyles,
					"--spectrum-picked-color": selectedColor,
				},
				content: [
					html `
						<div class="${rootClass}-inner"></div>
						${when(isWithColorLoupe, () => html`
							${ColorLoupe({
								isOpen: true,
								isDisabled,
								selectedColor,
							})}
						`)}
					`
				],
			}, context)}
		</div>
	`;
};
