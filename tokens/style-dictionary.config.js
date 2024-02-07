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

import { createRequire } from "node:module";
import { dirname, join, sep } from "node:path";

import generateFileConfig from "./utilities/style-dictionary.utils.js";

import StyleDictionary from "style-dictionary";

import AttributeSetsTransform from "./utilities/attribute-sets-transform.js";
import CSSOpenTypeTransform from "./utilities/css-font-open-type-transform.js";
import CSSSetsFormatter from "./utilities/css-sets-formatter.js";
import NameKebabTransfom from "./utilities/name-kebab-transform.js";

StyleDictionary.registerTransform(CSSOpenTypeTransform);
StyleDictionary.registerTransform(NameKebabTransfom);
StyleDictionary.registerTransform(AttributeSetsTransform);
StyleDictionary.registerFormat(CSSSetsFormatter);

/**
 * @note This references the package.json because we want the root folder and
 * not a nested folder which might be returned if the `main` property
 * in the package.json is present.
 */
const require = createRequire(import.meta.url);
const tokensPath = require.resolve(join("@adobe", "spectrum-tokens", "package.json"));
const tokensDir = dirname(tokensPath);
const setNames = ["desktop", "mobile", "light", "dark", "darkest"];

export default {
	source: [join(tokensDir, "src", "*.json")],
	platforms: {
		css: {
			buildPath: join("dist", "css") + sep,
			transforms: [
				AttributeSetsTransform.name,
				NameKebabTransfom.name,
				CSSOpenTypeTransform.name,
			],
			prefix: "spectrum",
			files: [
				generateFileConfig(),
				...["spectrum", "express"].map((subSystemName) => generateFileConfig({ subSystemName })),
				...setNames.map((context) => generateFileConfig({ setName: context })),
				...setNames.map((context) => generateFileConfig({
					setName: context,
					subSystemName: "spectrum",
				})),
				...setNames.map((context) => generateFileConfig({
					setName: context,
					subSystemName: "express",
				})),
			],
		},
	},
};
