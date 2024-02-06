/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require("path");

const varDir = path.join(
	path.dirname(
		require.resolve("@spectrum-css/vars", {
			paths: [
				process.cwd(),
				path.join(process.cwd(), "../../")
			],
		})
	),
	".."
);

/**
 * Spectrum CSS PostCSS Processor
 *
 * Generates Sass Mixins by automatic classnames with DNA tokens.
 * Provides support for v4 (t-shirt based) typography
 * and the legacy v3 (numeric based) typography.
 *
 * processes output also with task like:
 * SVG scaling, stripping of comments, post-css-focus-ring
 * and auto-prefixing for specific browsers.
 *
 * Lastly all the post-processing.
 *
 */

/**
 * Add postcss mixins
 *
 * @param {boolean} [keepVars=false] keeps DNA variables
 * @param {boolean} [notNested=true] nest or don't nest
 * @param {boolean} [secondNotNested=true]  catch stray
 * @param {boolean} [diff=false]  perform a diff
 */
function getProcessors(
	keepVars = false,
	notNested = true,
	secondNotNested = true,
	diff = false
) {
	return [
		require("postcss-import"),
		require("postcss-extend"),
		require("postcss-nested"),
		diff ? require("postcss-varsonly")() : null,
		require("postcss-dir-pseudo-class")(),
		require("postcss-hover-media-feature"),
		require("postcss-calc"),
		keepVars ? require("postcss-custom-properties-mapping")({
			tokenDir: varDir,
			staticFiles: [
				"css/globals/spectrum-staticAliases.css",
				"css/globals/spectrum-fontGlobals.css",
				"css/globals/spectrum-dimensionGlobals.css",
				"css/globals/spectrum-colorGlobals.css",
				"css/globals/spectrum-animationGlobals.css",
			],
			extendedFiles: [
				`css/components/*.css`,
				`custom.css`,
			],
		}) : null,
		notNested
			? require("postcss-notnested")({ replace: ".spectrum" })
			: null,
		require("legacy-postcss-dropunusedvars"),
		require("legacy-postcss-dropdupedvars"),
		require("postcss-droproot"),
		secondNotNested ? require("postcss-notnested")() : null, // Second one to catch all stray &
		require("postcss-discard-empty"),
		require("at-rule-packer"),
		require("postcss-discard-comments")({ removeAllButFirst: true }),
		require("autoprefixer")({}),
	].filter(Boolean);
}

exports.getProcessors = getProcessors;
exports.processors = getProcessors(true);
exports.legacyProcessors = getProcessors();
