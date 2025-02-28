/*!
 * Copyright 2024. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
*/

const valuesParser = require("postcss-values-parser");

/** @typedef {object} Options */

/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} options
 * @returns {import('postcss').Plugin}
 */
function rgbMappingFunction ({
	colorFunctionalNotation = false,
}) {

	return {
		postcssPlugin: "postcss-rgb-mapping",
		/** @type {import('postcss').RootProcessor} */
		Root(root) {
			/* Gather all the custom properties that reference "unprocessed" transparent tokens (i.e. transparent-white-200) */
			const transparentTokens = new Set();
			root.walkDecls(decl => {
				if (decl.prop.startsWith('--spectrum-transparent-') && !decl.prop.endsWith('rgb') && !decl.prop.endsWith('opacity')) {
					transparentTokens.add(decl.prop);
				}
			});

			root.walkDecls(decl => {
				const { prop, value } = decl;

				/* Determine if this property is a custom property */
				const isCustomProp = prop.startsWith("--");

				/* Determine if this property has already been processed */
				const isProcessed = prop.endsWith("rgb") || prop.endsWith("opacity");

				/* Check for transparent token reference */
				const transparentMatch = value.match(/var\((--spectrum-transparent-[^\s)]+)\)/);
				if (isCustomProp && !isProcessed && transparentMatch) {
					const referencedToken = transparentMatch[1];

					if (transparentTokens.has(referencedToken)) {
						/* Create the new RGB and opacity properties */
						decl.cloneBefore({
							prop: `${prop}-rgb`,
							value: `var(${referencedToken}-rgb)`
						});
						decl.cloneBefore({
							prop: `${prop}-opacity`,
							value: `var(${referencedToken}-opacity)`
						});

						/* Update the original declaration */
						decl.value = `rgba(var(${prop}-rgb)${colorFunctionalNotation ? " / " : ", "}var(${prop}-opacity))`;
					}
				}
				return;
			});
		},

		/** @type {import('postcss').DeclarationProcessor} */
		Declaration(decl, { Warning }) {
			const { prop, value } = decl;

			/* Determine if this property is a custom property */
			const isCustomProp = prop.startsWith("--");

			/* Determine if this property has already been processed */
			const isProcessed = prop.endsWith("rgb") || prop.endsWith("opacity");

			/* Parse the value for its parts */
			const parsedValue = valuesParser.parse(value) || [];

			/* Determine if the value has an rgb or rgba value */
			const hasRGBValue = parsedValue.nodes.length ? parsedValue.nodes.some((node) => node.type === "func" && (["rgb", "rgba"].some(func => node.name === func))) : false;

			/*
            * If the property is not a custom prop, or
            * if the property is a custom prop and ends with 'rgb', or
            * if the value is not an rgb or rgba value, or
            * if the value is an rgba value with a var() function
            * then return without processing.
            */
			if (!isCustomProp || isProcessed || !hasRGBValue || parsedValue.nodes.length === 0) return;

			const rgba = parsedValue.nodes.find((node) => node.type === "func" && (["rgb", "rgba"].some(func => node.name === func)));

			const [r,g,b,a] = rgba.nodes.reduce((acc, node) => {
				if (node.type === "numeric" && node.value) {
					if (node?.unit && node.unit === "%") {
						acc.push((node.value / 100).toFixed(2));
					}
					else {
						acc.push(node.value);
					}
				}
				return acc;
			}, []);

			/* If any of the values are undefined, return without processing */
			if (!r || !g || !b) {
				return new Warning(`Unable to parse out rgb values: ${value}`, { node: decl });
			}

			/* Create a new declaration with the rgb values separated out */
			decl.cloneBefore({
				prop: `${prop}-rgb`,
				value: colorFunctionalNotation ? `${r} ${g} ${b}` : `${r}, ${g}, ${b}`,
			});

			/* Update the original declaration value to point to the new variable */
			if (a) {
				if (colorFunctionalNotation) {
					if (typeof a === "string" && a.endsWith("%")) {
						decl.cloneBefore({
							prop: `${prop}-opacity`,
							value: a,
						});
					}
					else if (typeof a === "string" && a.startsWith("0.")) {
						decl.cloneBefore({
							prop: `${prop}-opacity`,
							value: `${parseFloat(a) * 100}%`,
						});
					}
					else {
						decl.cloneBefore({
							prop: `${prop}-opacity`,
							value: `${parseFloat(a) * 100}%`,
						});
					}
				}
				else {
					if (typeof a === "string" && a.endsWith("%")) {
						decl.cloneBefore({
							prop: `${prop}-opacity`,
							value: `${parseFloat(a) / 100}`,
						});
					}
					else {
						decl.cloneBefore({
							prop: `${prop}-opacity`,
							value: a,
						});
					}
				}
			}
			decl.assign({
				value: `rgba(var(${prop}-rgb)${a ? `${colorFunctionalNotation ? " /" : ","} var(${prop}-opacity)` : ""})`,
			});
			return;
		},
	};
}

rgbMappingFunction.postcss = true;
module.exports = rgbMappingFunction;
