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

const path = require("node:path");

const StyleDictionary = require("style-dictionary");

const CSSSetsFormatter = require("style-dictionary-sets").CSSSetsFormatter;
const NameKebabTransfom = require("style-dictionary-sets").NameKebabTransfom;
const AttributeSetsTransform = require("style-dictionary-sets").AttributeSetsTransform;
const CSSOpenTypeTransform = require("style-dictionary-sets").CSSOpenTypeTransform;

StyleDictionary.registerTransform(CSSOpenTypeTransform);
StyleDictionary.registerTransform(NameKebabTransfom);
StyleDictionary.registerTransform(AttributeSetsTransform);
StyleDictionary.registerFormat(CSSSetsFormatter);

const JsonSetsFormatter = require("./utilities/data-json-formatter.js");

StyleDictionary.registerFormat(JsonSetsFormatter);

/**
 * @note This references the package.json because we want the root folder and
 * not a nested folder which might be returned if the `main` property
 * in the package.json is present.
 */
const tokensPath = require.resolve("@adobe/spectrum-tokens/package.json");
const tokensDir = path.dirname(tokensPath);

module.exports = {
	source: [`${tokensDir}/src/*.json`],
	platforms: {
		CSS: {
			buildPath: "dist/css/",
			transforms: [
				AttributeSetsTransform.name,
				NameKebabTransfom.name,
				CSSOpenTypeTransform.name,
			],
			prefix: "spectrum",
			files: [{
				format: "css/sets",
				options: {
					showFileHeader: false,
					outputReferences: true,
					selector: ".spectrum"
				},
				destination: "global-vars.css",
				filter: (token) => {
					// Fetch the sets for this token
					const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
					if (tokenSets.length === 0) return true;
					return false;
				},
			}, {
				format: "css/sets",
				options: {
					showFileHeader: false,
					outputReferences: true,
					selector: ".spectrum--medium",
					sets: [ "desktop" ]
				},
				destination: "medium-vars.css",
				filter: (token) => {
					// Fetch the sets for this token
					const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");

					if (tokenSets.includes("wireframe")) return false;
					if (!tokenSets.includes("desktop")) return false;
					if (tokenSets.length === 1) return true;
				},
			}, {
				format: "css/sets",
				options: {
					showFileHeader: false,
					outputReferences: true,
					selector: ".spectrum--large",
					sets: [ "mobile" ]
				},
				destination: "large-vars.css",
				filter: (token) => {
					// Fetch the sets for this token
					const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");

					if (tokenSets.includes("wireframe")) return false;
					if (!tokenSets.includes("mobile")) return false;
					if (tokenSets.length === 1) return true;
				},
			}, {
				format: "css/sets",
				options: {
					showFileHeader: false,
					outputReferences: true,
					selector: ".spectrum--light",
					sets: [ "light" ]
				},
				destination: "light-vars.css",
				filter: (token) => {
					// Fetch the sets for this token
					const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");

					if (tokenSets.includes("wireframe")) return false;
					if (!tokenSets.includes("light")) return false;
					if (tokenSets.length === 1) return true;
				},
			}, {
				format: "css/sets",
				options: {
					showFileHeader: false,
					outputReferences: true,
					selector: ".spectrum--dark",
					sets: [ "dark" ]
				},
				destination: "dark-vars.css",
				filter: (token) => {
					// Fetch the sets for this token
					const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");

					if (tokenSets.includes("wireframe")) return false;
					if (!tokenSets.includes("light")) return false;
					if (tokenSets.length === 1) return true;
				},
			}],
		},
		JSON: {
			buildPath: "dist/json/",
			transforms: [
				AttributeSetsTransform.name,
				NameKebabTransfom.name,
				CSSOpenTypeTransform.name,
			],
			prefix: "spectrum",
			files: [
				{
					format: "json/sets",
					destination: "tokens.json",
					filter: (token) => {
						// Fetch the sets for this token
						const sets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
						if (sets.includes("wireframe")) return false;
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
