#!/usr/bin/env node

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

const browserSync = require("browser-sync");

require("colors");

const uiIcons = require.resolve("@spectrum-css/ui-icons");

const { dirs, getPackageFromPath } = require("./utilities");

const {
	fetchData_forGlobal,
	build_forSite,
	build_forPackage,
	copy_Assets,
	copy_Resources,
	watch_Styles,
} = require("./builder");

async function main() {
	// Create the browser-sync instance
	const bs = browserSync.create();

	// Then spin up the server
	return bs.init({
		server: dirs.publish,
		startPath: "index.html",
		notify: true,
		open: true,
		port: process.env.PORT ?? 3000,
		files: [
			{
				match: ["*/stories/*.js", "*/package.json"],
				options: {
					cwd: dirs.components,
				},
				fn: async (event, file) => {
					if (!["add", "change"].includes(event)) return;

					const componentName = getPackageFromPath(path.join(dirs.components, file));
					if (!componentName) {
						return Promise.reject(new Error(`${"✗".red}  No package found for ${file}`));
					}

					const packagePath = path.join(dirs.components, componentName);
					const assetPath = path.relative(packagePath, file);

					return copy_Assets([assetPath], {
						cwd: path.join(packagePath, "stories"),
						ignore: ["*.stories.js"],
						outputDir: path.join("components", componentName),
					});
				},
			},
			{
				match: ["*/index.css", "*/themes/*.css"],
				options: {
					cwd: dirs.components,
					ignore: ["*/dist/*"],
				},
				fn: async (event, file) => {
					if (!["add", "change"].includes(event)) return;
					return watch_Styles(path.join(dirs.components, file));
				},
			},
			{
				match: ["*/metadata/*.yml"],
				options: {
					cwd: dirs.components,
				},
				fn: async (event, file) => {
					if (!["add", "change"].includes(event)) return;

					const componentName = getPackageFromPath(path.join(dirs.components, file));
					if (!componentName) return;

					const globalData = await fetchData_forGlobal();
					return build_forPackage(path.join(dirs.components, componentName), globalData);
				},
			},
			{
				match: ["*.pug", "includes/*.pug", "templates/*.pug"],
				options: {
					cwd: dirs.site,
				},
				fn: async (event) => {
					if (!["add", "change"].includes(event)) return;

					const globalData = await fetchData_forGlobal();
					return build_forSite(globalData);
				},
			},
			{
				match: ["resources/**"],
				options: {
					cwd: dirs.site,
				},
				fn: async (event) => {
					if (!["add", "change"].includes(event)) return;

					return copy_Resources();
				},
			},
			{
				match: ["**"],
				options: {
					cwd: path.dirname(uiIcons),
				},
				fn: async (event, file) => {
					if (!["add", "change"].includes(event)) return;

					return copy_Assets([file], {
						cwd: path.dirname(uiIcons),
						outputDir: "img",
					});
				},
			},
		]
	}, (err, bs) => {
		if (err) {
			console.error(err.message ?? err);
			bs.exit();
		}
	})
};

module.exports = main;
