/*!
 * Copyright 2024 Adobe. All rights reserved.
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

import { dirname, join, sep } from "path";

import StyleDictionary from "style-dictionary";
import {
	CSSBorderRoundingTransform,
	CSSOpacityPercentTransform,
	CSSOpenTypeTransform,
	CSSSetsFormatter,
	DataJsonFormatter,
} from "./utilities/index.js";

StyleDictionary.registerTransform(CSSOpenTypeTransform);
StyleDictionary.registerTransform(CSSBorderRoundingTransform);
StyleDictionary.registerTransform(CSSOpacityPercentTransform);
StyleDictionary.registerFormat(CSSSetsFormatter);
StyleDictionary.registerFormat(DataJsonFormatter);

/**
 * @note This references the package.json because we want the root folder and
 * not a nested folder which might be returned if the `main` property
 * in the package.json is present.
 */
const tokensPath = import.meta.resolve("@adobe/spectrum-tokens/package.json")?.replace(/file:\/\//, "");
const tokensDir = dirname(tokensPath);

/**
 * @type {import('style-dictionary').Config}
 */
export default {
	source: [join(tokensDir, "src", "*.json"), "custom-tokens.json"],
	hooks: {
		transforms: {
			[CSSOpenTypeTransform.name]: CSSOpenTypeTransform,
			[CSSBorderRoundingTransform.name]: CSSBorderRoundingTransform,
			[CSSOpacityPercentTransform.name]: CSSOpacityPercentTransform,
		},
	},
	platforms: {
		css: {
			buildPath: join("dist", "css") + sep,
			prefix: "spectrum",
			outputReferences: true,
			outputReferenceFallbacks: false,
			showFileHeader: false,
			transforms: [
				"name/kebab",
				CSSOpenTypeTransform.name,
				CSSBorderRoundingTransform.name,
				CSSOpacityPercentTransform.name,
			],
			files: [
				{
					format: "css/sets",
					filter: (token) => {
						// filter out tokens that are in the local components folder
						if (token.filePath?.split(sep)?.includes("components")) return false;
						if (token.name.includes("android-")) return false;
						if (token.path.includes("sets") && token.path.includes("mobile")) return false;
						return true;
					},
					destination: "index.css",
				},
				{
					format: "css/sets",
					destination: "mobile.css",
					filter: (token) => {
						// filter out tokens that are in the local components folder
						if (token.filePath?.split(sep)?.includes("components")) return false;
						if (token.name.includes("android-")) return false;
						if (token.path.includes("sets") && token.path.includes("mobile")) return true;
						return false;
					},
				},
			],
		},
		JSON: {
			buildPath: join("dist", "json") + sep,
			prefix: "spectrum",
			transforms: [
				"name/kebab",
				CSSOpenTypeTransform.name,
				CSSBorderRoundingTransform.name,
				CSSOpacityPercentTransform.name,
			],
			files: [
				{
					format: "json/sets",
					destination: "tokens.json",
					options: {
						showFileHeader: false,
						outputReferences: true,
					},
				},
			],
		},
	},
};
