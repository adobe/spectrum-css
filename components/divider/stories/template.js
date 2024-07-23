import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase, upperCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Divider",
	size = "m",
	tag = "hr",
	staticColor,
	vertical = false,
	customClasses = [],
	customStyles = {},
}) => {
	if (tag === "hr") {
		return html` <hr
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
				[`${rootClass}--vertical`]: vertical === true,
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"block-size": vertical ? "auto" : undefined,
				"inline-size": !vertical ? "100%" : undefined,
				"align-self": vertical == true ? "stretch" : undefined,
				...customStyles,
			})}
			role="separator"
		/>`;
	}

	return html` <div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--vertical`]: vertical === true,
			[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
				typeof staticColor !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap({
			"min-height": vertical == true ? "20px" : undefined,
			height: vertical == true ? "auto" : undefined,
			"align-self": vertical == true ? "stretch" : undefined,
			...customStyles,
		})}
		role="separator"
	></div>`;
};

export const DividerGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			vertical: false,
			customStyles: {
				"min-inline-size": "200px",
			},
		},
		{
			testHeading: "Non-HR",
			tag: "div",
			customStyles: {
				"min-inline-size": "200px",
			},
		},
		{
			testHeading: "Vertical",
			vertical: true,
			customStyles: {
				"min-block-size": "100px",
			},
		}
	],
});
