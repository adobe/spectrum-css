/*!
 * Copyright 2023 Adobe. All rights reserved.
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

const path = require("path");

const generateFileConfig = require("./utilities/generate-file-config.js");
const CSSSetsFormatter = require("./utilities/css-sets-formatter.js");

const StyleDictionary = require("style-dictionary");

const NameKebabTransfom = require("style-dictionary-sets").NameKebabTransfom;
const AttributeSetsTransform =
	require("style-dictionary-sets").AttributeSetsTransform;
const CSSOpenTypeTransform =
	require("style-dictionary-sets").CSSOpenTypeTransform;


StyleDictionary.registerTransform(CSSOpenTypeTransform);
StyleDictionary.registerTransform(NameKebabTransfom);
StyleDictionary.registerTransform(AttributeSetsTransform);
StyleDictionary.registerFormat(CSSSetsFormatter);

/**
 * @note This references the package.json because we want the root folder and
 * not a nested folder which might be returned if the `main` property
 * in the package.json is present.
 */
const tokensPath = require.resolve("@adobe/spectrum-tokens/package.json");
const tokensDir = path.dirname(tokensPath);

module.exports = {
	source: [`${tokensDir}/dist/json/variables.json`],
	platforms: {
		CSS: {
			buildPath: "dist/css/",
			transforms: [
				AttributeSetsTransform.name,
				NameKebabTransfom.name,
				CSSOpenTypeTransform.name,
			],
			prefix: "spectrum",
			files: [
				// Shared tokens
				generateFileConfig(),
				// Spectrum && Express-specific tokens
				...["spectrum", "express"].map((theme) =>
						generateFileConfig({ theme }),
				),
				...["light", "dark"].map((color) =>
					[
						// Shared tokens
						generateFileConfig({ color }),
						// Spectrum-only tokens
						generateFileConfig({
							color,
							theme: "spectrum",
						}),
						// Express-only tokens
						generateFileConfig({
							color,
							theme: "express",
						})
					]
				).flat(),
				...["desktop", "mobile"].map((scale) =>
					[
						// Shared tokens
						generateFileConfig({ scale }),
						// Spectrum-only tokens
						generateFileConfig({
							scale,
							theme: "spectrum",
						}),
						// Express-only tokens
						generateFileConfig({
							scale,
							theme: "express",
						})
					]
				).flat(),
			],
		},
	},
};
