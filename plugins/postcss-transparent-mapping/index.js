/*!
 * Copyright 2025 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-console */

function transparentMappingFunction() {
	return (cssRoot) => {
		const tokens = {};

		// Collect all custom properties
		cssRoot.walkDecls(decl => {
			const { prop, value } = decl;

			// Determine if this property is a custom property
			const isCustomProp = prop.startsWith("--");

			if (isCustomProp) {
				tokens[prop] = value;
			}
		});

		const newCustomProps = {};

		// Determine if this property has already been processed
		const isProcessed = (prop) => {
			return prop.endsWith("rgb") || prop.endsWith("opacity");
		};

		Object.entries(tokens).forEach(([prop, value]) => {
			// Check if the value references a "transparent" token
			const match = value.match(/var\((--spectrum-transparent-[^\s)]+)\)/);
			if (match && !isProcessed(prop)) {
				const referencedToken = match[1];

				// Check if we have the required "-rgb" and "-opacity" tokens
				const rgbToken = `${referencedToken}-rgb`;
				const opacityToken = `${referencedToken}-opacity`;

				if (tokens[rgbToken] && tokens[opacityToken]) {
					// Create the new custom properties
					newCustomProps[prop] = {
						rgbProp: `${prop}-rgb`,
						rgbValue: tokens[rgbToken],
						opacityProp: `${prop}-opacity`,
						opacityValue: tokens[opacityToken],
						newPropValue: `rgba(var(${prop}-rgb), var(${prop}-opacity))`
					};
				}
				else {
					console.log(`Missing -rgb or -opacity tokens for ${referencedToken}`);
				}
			}
		});

		cssRoot.walkDecls(decl => {
			const { prop } = decl;

			if (newCustomProps[prop]) {
				const { rgbProp, rgbValue, opacityProp, opacityValue, newPropValue } = newCustomProps[prop];

				// Insert derived tokens before the original declaration
				decl.cloneBefore({ prop: rgbProp, value: rgbValue });
				decl.cloneBefore({ prop: opacityProp, value: opacityValue });

				// Replace the old prop with the new values
				decl.value = newPropValue;
			}
		});
	};
}

transparentMappingFunction.postcss = true;
module.exports = transparentMappingFunction;
