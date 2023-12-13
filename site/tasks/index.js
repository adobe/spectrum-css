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

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const chokidar = require("chokidar");
const browserSync = require("browser-sync");
const fg = require("fast-glob");

require("colors");

const { default: builder } = require("../../tasks/component-builder.js");
const { build, buildSite_resources } = require("./build.js");

const siteDir = path.join(__dirname, "../");
const rootDir = path.join(siteDir, "../");

const defaultOutputDir = path.join(siteDir, "dist");
const componentDir = path.join(rootDir, "components");

const verbose = process.env.NX_VERBOSE_LOGGING === "true" ? true : false;

/* -------------- UTILITIES -------------- */
/**
 * Fetches the component's folder name from the file path or returns undefined if not found
 * @param {string} filePath
 * @returns {string|undefined}
 */
function getPackageFromPath(filePath) {
	if (!filePath) return;
	const matches = filePath.match(/\/(components|@spectrum-css)\/(.*?)\//);
	if (!matches || matches.length < 3) return;
	return matches[2];
}

/* -------------- LIVE-SERVER -------------- */
function serve(outputDir = defaultOutputDir) {
	let PORT = 3000;

	if (process.env.BROWSERSYNC_PORT) {
		PORT = process.env.BROWSERSYNC_PORT;
	}

	browserSync({
		startPath: "index.html",
		server: outputDir,
		notify: process.env.BROWSERSYNC_NOTIFY === "true" ? true : false,
		open: process.env.BROWSERSYNC_OPEN === "true" ? true : false,
		port: PORT,
	});
}

/* -------------- WATCHER -------------- */
function watch() {
	for (const component of fg.sync(["*"], {
		cwd: componentDir,
		onlyDirectories: true,
	})) {
		if (!fs.existsSync(path.join(componentDir, component, "package.json")))
			continue;

		if (verbose) {
			console.log(`Watching ${`@spectrum-css/${component}`.magenta}`.gray);
		}

		/* hardcoding a manual list of legacy components */
		if (
			[
				"asset",
				"coachmark",
				"cyclebutton",
				"icon",
				"quickaction",
				"searchwithin",
				"site",
				"splitbutton",
				"statuslight",
			].includes(component)
		) {
			chokidar
				.watch(
					path.join(componentDir, component, "index.css"),
					{
						ignoreInitial: true,
					}
				)
				.on("all", async (_, path) => {
					const packagePath = getPackageFromPath(path);
					await builder(packagePath);
					browserSync.reload();
				});
		} else {
			chokidar
				.watch(
					["index.css", "themes/spectrum.css", "themes/express.css"].map(
						(file) => path.join(componentDir, component, file)
					),
					{
						ignoreInitial: true,
					}
				)
				.on("all", async (_, path) => {
					const packagePath = getPackageFromPath(path);
					await builder(packagePath);
					browserSync.reload();
				});
		}
	}

	chokidar
		.watch(
			[
				`${componentDir}/*/metadata/*.yml`,
				`${siteDir}/patterns/*.yml`,
				`${siteDir}/*.pug`,
				`${siteDir}/includes/*.pug`,
				`${siteDir}/templates/siteComponent.pug`,
				`${siteDir}/tasks/*.js`,
			],
			{
				ignoreInitial: true,
			}
		)
		.on("all", async () => {
			await build();
			browserSync.reload();
		});

	chokidar
		.watch([`${siteDir}/resources/**/*`], {
			ignoreInitial: true,
		})
		.on("all", async () => {
			await buildSite_resources();
			browserSync.reload();
		});
}

/* -------------- EXPORTS -------------- */
exports.default = exports.build = build;
exports.watch = watch;
exports.serve = serve;

/* eslint-enable no-console */
