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

exports.builder = path.resolve(__dirname, "..");
exports.siteResources = path.resolve(
	__dirname,
	"..",
	"node_modules",
	"@spectrum-css",
	"site"
);
exports.topLevel = path.resolve(exports.builder, "..", "..");
exports.isTopLevel = process.cwd() === exports.topLevel;
exports.site = path.resolve(exports.topLevel, "site");

if (exports.isTopLevel) {
	exports.components = path.join(exports.topLevel, "components");
} else {
	exports.components = path.join(
		process.cwd(),
		"node_modules",
		"@spectrum-css"
	);
}

exports.resolve = function (component) {
	if (exports.isTopLevel) {
		return path.join(exports.components, component.split("/").pop());
	}

	return path.dirname(
		require.resolve(component, {
			paths: [path.join(process.cwd(), "node_modules")],
		})
	);
};
