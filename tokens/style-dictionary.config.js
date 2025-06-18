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
	AttributeSetsTransform,
	CSSBorderRoundingTransform,
	CSSOpenTypeTransform,
	CSSSetsFormatter,
	DataJsonFormatter,
	NameKebabTransfom,
} from "./utilities/index.js";

StyleDictionary.registerTransform(CSSOpenTypeTransform);
StyleDictionary.registerTransform(CSSBorderRoundingTransform);
StyleDictionary.registerTransform(NameKebabTransfom);
StyleDictionary.registerTransform(AttributeSetsTransform);

StyleDictionary.registerFormat(CSSSetsFormatter);
StyleDictionary.registerFormat(DataJsonFormatter);

/**
 * @note This references the package.json because we want the root folder and
 * not a nested folder which might be returned if the `main` property
 * in the package.json is present.
 */
const tokensPath = import.meta.resolve("@adobe/spectrum-tokens/package.json")?.replace(/file:\/\//, "");
const tokensDir = dirname(tokensPath);

export default {
	source: [join(tokensDir, "src", "*.json")],
	hooks: {
		transforms: {
			[AttributeSetsTransform.name]: AttributeSetsTransform,
			[NameKebabTransfom.name]: NameKebabTransfom,
			[CSSOpenTypeTransform.name]: CSSOpenTypeTransform,
			[CSSBorderRoundingTransform.name]: CSSBorderRoundingTransform,
		},
	},
	platforms: {
		css: {
			buildPath: join("dist", "css") + sep,
			transforms: [
				AttributeSetsTransform.name,
				NameKebabTransfom.name,
				CSSOpenTypeTransform.name,
				CSSBorderRoundingTransform.name,
			],
			prefix: "spectrum",
			files: [
				{
					format: "css/sets",
					options: { showFileHeader: false, outputReferences: true },
					destination: "global-vars.css",
					filter: (token, platform) => {
						const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (tokenSets.includes("wireframe")) return false;
						if (tokenSets.length === 0) return true;
						return false;
					},
				},
				{
					format: "css/sets",
					options: {
						showFileHeader: false,
						outputReferences: true,
						sets: ["desktop"],
					},
					destination: "medium-vars.css",
					filter: (token) => {
						const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (tokenSets.includes("wireframe")) return false;
						if (!tokenSets.includes("desktop")) return false;
						if (tokenSets.length === 1) return true;
						return false;
					},
				},
				{
					format: "css/sets",
					options: {
						showFileHeader: false,
						outputReferences: true,
						sets: ["mobile"],
					},
					destination: "large-vars.css",
					filter: (token) => {
						// Fetch the sets for this token
						const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (tokenSets.includes("wireframe")) return false;
						if (!tokenSets.includes("mobile")) return false;
						if (tokenSets.length === 1) return true;
						return false;
					},
				},
				{
					format: "css/sets",
					options: {
						showFileHeader: false,
						outputReferences: true,
						sets: ["light"],
					},
					destination: "light-vars.css",
					filter: (token) => {
						const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (tokenSets.includes("wireframe")) return false;
						if (!tokenSets.includes("light")) return false;
						if (tokenSets.length === 1) return true;
						return false;
					},
				},
				{
					format: "css/sets",
					options: {
						showFileHeader: false,
						outputReferences: true,
						sets: ["dark"],
					},
					destination: "dark-vars.css",
					filter: (token) => {
						const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (tokenSets.includes("wireframe")) return false;
						if (!tokenSets.includes("dark")) return false;
						if (tokenSets.length === 1) return true;
						return false;
					},
				},
			],
		},
		JSON: {
			buildPath: join("dist", "json") + sep,
			transforms: [
				AttributeSetsTransform.name,
				NameKebabTransfom.name,
				CSSOpenTypeTransform.name,
				CSSBorderRoundingTransform.name,
			],
			prefix: "spectrum",
			files: [
				{
					format: "json/sets",
					destination: "tokens.json",
					filter: (token) => {
						const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (tokenSets.includes("wireframe")) return false;
						return true;
					},
					options: {
						showFileHeader: false,
						outputReferences: true,
					},
				},
			],
		},
	},
};
