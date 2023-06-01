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

const { join } = require("path");

const postcss = require("postcss");
const postcssrc = require("postcss-load-config");

module.exports = {
	compiler: async function (content, path) {
		// Only compile the main stylesheet
		if (path !== "./content/styles/index.css") return;

		// Run the entrypoint through postcss
		const { plugins, options } = await postcssrc({
			cwd: join(__dirname, "../"),
			env: process.env.NODE_ENV || "development",
			file: path,
		}).catch((error) => Promise.reject(error));

		const output = await postcss(plugins).process(content, {
			...options,
			from: path,
		});

		const deps = [
			...new Set([
				...output.messages
					.filter((m) => m.type === "dependency")
					.map((m) => m.file),
			]),
		];
		// @todo this doesn't seem to be working; debug this later
		if (deps.length) this.addDependencies(path, deps);

		return async () => output.css;
	},
};
