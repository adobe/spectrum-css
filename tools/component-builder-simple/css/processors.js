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

function getProcessors({ noFlatVariables = false, noSelectors = false, keepComments = false } = {}) {
	return [
		require("postcss-import"),
		require("postcss-nested"),
		require("postcss-extend"),
		require("postcss-splitinator")({
			processIdentifier: (identifier) => {
				if (identifier === "express") {
					return "spectrum--express";
				}
				return identifier;
			},
			noFlatVariables,
			noSelectors,
		}),
		require("./plugins/postcss-custom-properties-passthrough")(),
		require("postcss-calc"),
		require("postcss-dropunusedvars")({ fix: false }),
		require("postcss-dropdupedvars"),
		require("postcss-discard-empty"),
		!keepComments ? require("postcss-discard-comments")({ removeAllButFirst: true }) : null,
		require("autoprefixer")({}),
	].filter(Boolean);
}

exports.getProcessors = getProcessors;
exports.processors = getProcessors();
