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

const { join, sep, basename } = require("path");

module.exports = ({
	file,
	to,
	// cwd = process.cwd(),
	splitinatorOptions = {
		noSelectors: false,
		noFlatVariables: false,
	},
	combine = false,
	keepComments = false,
	lint = true,
	verbose = true,
	additionalPlugins = {},
	env = process.env.NODE_ENV ?? "development",
	...options
} = {}) => {
	if (env === "development" && !options.map) {
		options.map = { inline: false };
	}
	else options.map = false;

	/* themes/*.css */
	if (
		(to && to.split(sep)?.includes("themes")) ||
		(file && file.split(sep)?.includes("themes"))
	) {
		splitinatorOptions.noSelectors = true;

		/* themes/express.css */
		if (
			(to && basename(to, ".css") === "express") ||
			(file && basename(file, ".css") === "express")
		) {
			combine = true;
		}
	}

	/* index-theme.css */
	if (
		(to && basename(to, ".css") === "index-theme") ||
		(file && basename(file, ".css") === "index-theme")
	) {
		splitinatorOptions.noSelectors = true;
	}

	/* index-base.css */
	if (
		to && basename(to, ".css") === "index-base" ||
		file && basename(file, ".css") === "index-base"
	) {
		splitinatorOptions.noFlatVariables = true;
	}

	/*
		This deconstruction has to do with how options are passed
		to the postcss config via webpack's postcss-loader
	*/
	if (options?.options?.additionalPlugins) {
		additionalPlugins = {
			...additionalPlugins,
			...options.options.additionalPlugins,
		};
	}

	return {
		...options,
		plugins: {
			"postcss-import": {},
			"postcss-extend": {},
			"postcss-nested": {},
			"postcss-splitinator": {
				processIdentifier: (identifier) => identifier === "express" ? "spectrum--express" : identifier,
				...splitinatorOptions,
			},
			"postcss-hover-media-feature": {},
			"postcss-calc": {},
			"postcss-combininator": combine ? {} : false,
			...additionalPlugins,
			"postcss-discard-empty": {},
			"at-rule-packer": {},
			"postcss-discard-comments": !keepComments ? { removeAllButFirst: true } : false,
			"autoprefixer": {},
			"stylelint": lint ? {
				cache: true,
				configFile: join(__dirname, "stylelint.config.js"),
				quiet: !verbose,
			} : false,
			"postcss-reporter": verbose ? {} : false,
		},
	};
}
