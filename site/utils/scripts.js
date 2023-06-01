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

module.exports = {
	compiler: async function (content, path) {
		// Only compile the main script, skip the others (they're dependencies)
		if (!/^\.\/content\/scripts\/(.*?)\.js$/.test(path)) return content;

		return async (data) => {
			const components =
				data?.collections?.component?.reduce((obj, c) => {
					if (!c.package) return;
					obj[c.package.name] = join(__dirname, "../components", c);
					return obj;
				}, {}) ?? {};

			// This is a module so we're importing it and using the default export
			const svg = (await import("esbuild-plugin-svg"))?.default;

			// @todo need to register dependencies somehow; debug later
			const result = await require("esbuild").build({
				entryPoints: [path],
				sourcemap: "inline",
				bundle: true,
				write: false,
				outdir: "out",
				target: "es2020",
				format: "esm",
				alias: {
					...components,
					// Helpful alias for importing assets
					assets: join(__dirname, "/assets/"),
				},
				loader: {
					".json": "json",
				},
				plugins: typeof svg === "function" ? [svg()] : [],
			});

			return result.outputFiles.map((content) => content.text).join("\n");
		};
	},
};
