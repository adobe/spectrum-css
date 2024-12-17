/*!
 * Copyright 2024 Adobe. All rights reserved.
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

const fs = require("fs");
// const fsp = fs.promises;
const postcss = require("postcss");

// Read the CSS file
const CSS_FILE_PATH = "tokens/dist/index.css";
const css = fs.readFileSync(CSS_FILE_PATH, "utf8");

// Get tokens and root data
const	extractTokenData = (css) => {
	const root = postcss.parse(css);
	const tokens = {};

	// Collect all custom properties
	root.walkDecls(decl => {
		const { prop, value } = decl;

		/* Determine if this property is a custom property */
		const isCustomProp = prop.startsWith("--");

		if (isCustomProp) {
			tokens[prop] = value;
		}
	});

	return {root, tokens};
};

// Creates new custom properties if the value references a `--spectrum-transparent-*` token
const	createNewCustomProps = (tokens) => {
	const newCustomProps = {};

	/* Determine if this property has already been processed */
	const isProcessed = (prop) => {
		if (prop.endsWith("rgb") || prop.endsWith("opacity")) {
			return true;
		}
		return false;
	};

	Object.entries(tokens).forEach(([prop, value]) => {

		// Check if the value references a "transparent" token
		const match = value.match(/var\((--spectrum-transparent-[^\s)]+)\)/);
		if (match && (isProcessed(prop) === false)) {
			const referencedToken = match[1];

			// Check if we have the required "-rgb" and "-opacity" tokens
			const rgbToken = `${referencedToken}-rgb`;
			const opacityToken = `${referencedToken}-opacity`;

			if (tokens[rgbToken] && tokens[opacityToken]) {
				// create the new custom properties
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

	return newCustomProps;
};


// Puts the newly derived tokens before the original and replaces the original value with the new tokens
const	injectDerivedTokens = (cssRoot, derivedTokens) => {
	cssRoot.walkDecls(decl => {
		const { prop } = decl;

		if (derivedTokens[prop]) {
			const { rgbProp, rgbValue, opacityProp, opacityValue, newPropValue } = derivedTokens[prop];

			// Insert derived tokens before the original declaration
			decl.before(`\n\t${rgbProp}: ${rgbValue};`);
			decl.before(`\n\t${opacityProp}: ${opacityValue};`);

			// Replace the old prop with the new values
			decl.value = newPropValue;
		}
	});

	return cssRoot;
};

function transparentTokenMapping () {
	return {
		postcssPlugin: "postcss-transparent-mapping",

		// Main function
		async () {
			try {

				// Extract token data
				const { root, tokens } = extractTokenData(css);

				// Generate derived tokens
				const derivedTokens = createNewCustomProps(tokens);

				if (Object.keys(derivedTokens).length === 0) {
					console.log("No derived tokens found.");
				}
				else {
					// Inject derived tokens before their original declarations
					const updatedRoot = injectDerivedTokens(root, derivedTokens);

					// Save to a file or log to console
					fs.writeFileSync(CSS_FILE_PATH, updatedRoot.toString(), "utf8");
					console.log("Derived tokens written to dist/index.css");
				}
			}
			catch (error) {
				console.error("Error:", error);
			}
		},
	}
}

transparentTokenMapping.postcss = true;
module.exports = transparentTokenMapping;
