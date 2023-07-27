import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	colorHandleStyle = {
		"--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
	},
	...globals
}) => {

	const checkerboardContent = html `<div class="${rootClass}-inner"></div>`

	return html`
		${OpacityCheckerboard({
			...globals,
			componentOnly: true,
			customClasses: [`${rootClass}`],
			content: checkerboardContent,
			checkerBoardStyles: colorHandleStyle,
		})}`


}
