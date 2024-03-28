import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	customStyles = {
		"--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
	},
	...globals
}) => OpacityCheckerboard({
	...globals,
	customClasses: [
		`${rootClass}`,
		...!isDisabled && isFocused ? ["is-focused"] : [],
		...isDisabled ? ["is-disabled"] : [],
		...customClasses,
	],
	content: [html `<div class="${rootClass}-inner"></div>`],
	customStyles,
});
