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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const gulp = require("gulp");
const pug = require("gulp-pug");
const data = require("gulp-data");
const through = require("through2");

const browserSync = require("browser-sync");

const lunr = require("lunr");
const pugCompiler = require("pug");
const yaml = require("js-yaml");
const ext = require("replace-ext");
const npmFetch = require("npm-registry-fetch");
const depSolver = require("dependency-solver");

const dirs = {
	components: path.join(__dirname, "../components"),
	site: __dirname,
	dist: path.join(__dirname, "../dist"),
};

const paths = {
	metadata: (dir) => path.join(dirs.components, `${dir}/metadata/*.yml`),
};

const templateData = {
	nav: [],
	pkg: JSON.parse(fs.readFileSync("package.json", "utf8")),
};

/**
 * Given a list of package paths, solve the dependency order
 * @param {string[]} packages - package directories
 * @return {Promise<string[]>} The solved dependency order
 */
async function solveDependencies(packages) {
	async function getDependenciesForSolver(package) {
		let { name, dependencies } = await getDependencies(package);
		if (dependencies.length === 0) return null;
		return { [name]: dependencies };
	}

	let depArray = (
		await Promise.all(packages.map(getDependenciesForSolver))
	).filter(Boolean);

	let dependencies = {};
	depArray.forEach((dep) => {
		Object.assign(dependencies, dep);
	});

	return Promise.resolve(depSolver.solve(dependencies));
}

/**
 * Given a package path, get its dependencies
 * @param {string} packages - package directory
 * @return {Object} An object mapping the package name to its dependencies, or null if no dependencies
 */
async function getDependencies(package) {
	const pkg = await fsp
		.readFile(path.join(package, "package.json"))
		.then(JSON.parse);
	let dependencies = [];

	if (pkg.devDependencies) {
		dependencies = Object.keys(pkg.devDependencies).filter((dep) => {
			return (
				dep.startsWith("@spectrum-css") &&
				!dep.endsWith("builder") &&
				!dep.endsWith("builder-simple")
			);
		});
	}

	return { name: pkg.name, dependencies };
}

/**
 * Get the list of all packages in given directory
 * @param {string} packageDir - package directory
 * @return {Object} An array of package names in dependency order
 */
async function getPackageDependencyOrder(packageDir) {
	const { dependencies } = await getDependencies(packageDir);
	return solveDependencies(
		dependencies.map((dep) =>
			path.join(path.dirname(require.resolve(dep)), "..")
		)
	);
}

/**
 * Get the list of all packages in given directory
 * @param {string} packagesDir - directory of packages
 * @return {Object} An array of package names in dependency order
 */
async function getFolderDependencyOrder(packagesDir) {
	// Get list of all packages
	let packages = (await fsp.readdir(packagesDir, { withFileTypes: true }))
		.filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
		.map((dirent) => path.join(packagesDir, dirent.name));

	let solution = await solveDependencies(packages);

	// Nobody relies on it, so it gets clipped, weird
	solution.push("@spectrum-css/expressvars");

	// Build tokens first
	// This is because not every package relies on tokens, but the builder needs tokens to bake vars
	solution = solution.filter((p) => p !== "@spectrum-css/tokens");
	solution.unshift("@spectrum-css/tokens");

	return solution;
}

async function buildDocs_forDep(dep) {
	const metadata = require("@spectrum-css/vars");

	const dependencyOrder = await getPackageDependencyOrder(
		path.join(dirs.components, dep)
	);

	return gulp
		.src(paths.metadata(dep), {
			allowEmpty: true,
		})
		.pipe(
			data(async function (file) {
				let componentDeps = dependencyOrder.map((dep) => dep.split("/").pop());
				componentDeps.push(dep);

				let pkg = JSON.parse(
					await fsp.readFile(path.join(dirs.components, dep, "package.json"))
				);

				const docsDeps = [
					...new Set([
						"icon",
						"statuslight",
						"link",
						"page",
						"site",
						"typography",
						"tooltip",
						"sidenav",
						"actionbutton",
						"button",
						"textfield",
						"clearbutton",
						"search",
						"menu",
						"fieldlabel",
						"picker",
						"popover",
						"underlay",
						"card",
						"divider",
						"illustratedmessage",
						"accordion",
						"table",
						...componentDeps,
					]),
				];

				let date;
				try {
					const data = await npmFetch.json(pkg.name);
					date = data.time[pkg.version];
					date = new Date(date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					});
				} catch (err) {
					date = "Unreleased";
					console.warn(
						`Could not determine date of release for ${pkg.name}@${pkg.version}`
					);
				}

				return {
					util: require(`${dirs.site}/util`),
					dnaVars: metadata,
					...templateData,
					pageURL: path.basename(file.basename, ".yml") + ".html",
					dependencyOrder: docsDeps,
					releaseDate: date,
					pkg,
				};
			})
		)
		.pipe(
			through.obj(function compilePug(file, _, cb) {
				if (!file || !file.contents) return cb(null, file);

				const component = yaml.load(String(file.contents));

				if (!component.id) {
					// Use the example file name
					component.id = path.basename(file.basename, ".yml");
				}

				file.path = ext(file.path, ".html");

				const templatePath = `${dirs.site}/templates/siteComponent.pug`;
				const compiled = pugCompiler.renderFile(templatePath, {
					component,
					...(file.data ?? {}),
				});
				file.contents = Buffer.from(compiled);
				cb(null, file);
			})
		)
		.pipe(gulp.dest(dirs.dist));
}

function buildSite_copyDep(dep) {
	return gulp
		.src(
			[
				`${dep}/package.json`,
				`${dep}/dist/*.{css,svg,js,json}`,
				`${dep}/dist/**/*.{css,svg,js,json}`,
			],
			{
				allowEmpty: true,
				cwd: dirs.components,
				cwdbase: true,
			}
		)
		.pipe(
			through.obj(function (file, _, cb) {
				file.path = file.path.replace("dist/", "");
				cb(null, file);
			})
		)
		.pipe(gulp.dest(path.join(dirs.dist, "components")));
}

// Combined
async function buildDocs_individualPackages() {
	const dependencies = await getFolderDependencyOrder(dirs.components);
	return Promise.all(
		dependencies
			.map((dep) => {
				// Drop package org
				dep = dep.split("/").pop();
				return [buildDocs_forDep(dep), buildSite_copyDep(dep)];
			})
			.flat()
	);
}

function buildSite_generateIndex() {
	return gulp
		.src(paths.metadata("*"))
		.pipe(
			(function () {
				let docs = [];
				let store = {};
				let latestFile = null;
				function readYML(file, _, cb) {
					const componentData = yaml.load(String(file.contents));

					const componentName = file.dirname
						.replace("/metadata", "")
						.split("/")
						.pop();

					const href = path.basename(file.basename, ".yml") + ".html";

					docs.push({
						href,
						...componentData,
					});

					store[href] = {
						href,
						component: componentName,
						...componentData,
					};

					latestFile = file;

					cb();
				}

				function endStream(cb) {
					let indexFile = latestFile.clone({ contents: false });
					indexFile.path = path.join(latestFile.base, "index.json");

					let index = lunr(function () {
						this.ref("href");
						this.field("name", { boost: 10 });
						this.field("description");

						docs.forEach(function (doc) {
							this.add(doc);
						}, this);
					});

					// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript

					indexFile.contents = Buffer.from(JSON.stringify(index));
					this.push(indexFile);

					let storeFile = latestFile.clone({ contents: false });
					storeFile.path = path.join(latestFile.base, "store.json");
					storeFile.contents = Buffer.from(JSON.stringify(store));
					this.push(storeFile);

					cb();
				}

				return through.obj(readYML, endStream);
			})()
		)
		.pipe(gulp.dest(dirs.dist));
}

function buildSite_getData() {
	let nav = [];
	return gulp
		.src(paths.metadata("*"))
		.pipe(
			through.obj(function readYML(file, _, cb) {
				const componentName = file.dirname
					.replace("/metadata", "")
					.split("/")
					.pop();

				const componentData = yaml.load(String(file.contents));
				const href = path.basename(file.basename, ".yml") + ".html";

				nav.push({
					component: componentName,
					href,
					...componentData,
				});

				cb(null, file);
			})
		)
		.on("end", function () {
			templateData.nav = nav.sort(function (a, b) {
				return a.name <= b.name ? -1 : 1;
			});
		});
}

function buildSite_html() {
	return gulp
		.src(`${dirs.site}/*.pug`)
		.pipe(
			data(function (file) {
				return {
					util: require(`${dirs.site}/util`),
					pageURL: path.basename(file.basename, ".pug") + ".html",
					dependencyOrder: [
						"icon",
						"statuslight",
						"link",
						"page",
						"site",
						"typography",
						"tooltip",
						"sidenav",
						"actionbutton",
						"button",
						"textfield",
						"clearbutton",
						"search",
						"menu",
						"fieldlabel",
						"picker",
						"popover",
						"underlay",
						"card",
						"divider",
						"illustratedmessage",
						"accordion",
						"table",
					],
				};
			})
		)
		.pipe(
			pug({
				locals: templateData,
			})
		)
		.pipe(gulp.dest(dirs.dist));
}

function copySiteWorkflowIcons() {
	return gulp
		.src(
			path.join(
				path.dirname(require.resolve("@adobe/spectrum-css-workflow-icons")),
				"spectrum-icons.svg"
			)
		)
		.pipe(gulp.dest(`${dirs.dist}/img/`));
}

function buildSite_resources() {
	return gulp
		.src(path.join(dirs.site, "resources/**"))
		.pipe(gulp.dest(dirs.dist));
}

function buildSite_loadicons() {
	return gulp
		.src(require.resolve("loadicons"))
		.pipe(gulp.dest(path.join(dirs.dist, "js/loadicons/")));
}

function buildSite_lunr() {
	return gulp
		.src(require.resolve("lunr"))
		.pipe(gulp.dest(path.join(dirs.dist, "js/lunr/")));
}

function buildSite_prism() {
	return gulp
		.src([
			`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
			`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
		])
		.pipe(gulp.dest(path.join(dirs.dist, "css/prism/")));
}

function buildSite_prism() {
	return gulp
		.src([
			`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
			`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
		])
		.pipe(gulp.dest(path.join(dirs.dist, "css/prism/")));
}

exports.default = exports.build = gulp.parallel(
	buildSite_resources,
	buildSite_loadicons,
	buildSite_lunr,
	buildSite_prism,
	gulp.series(
		buildSite_getData,
		gulp.parallel(
			buildSite_generateIndex,
			buildDocs_individualPackages,
			copySiteWorkflowIcons,
			buildSite_html
		)
	)
);

exports.watch = function () {
	browserSync({
		startPath: "index.html",
		server: dirs.dist,
		notify: false,
		open: true,
		port: process.env.PORT ?? 8000,
	});

	function reload(cb) {
		browserSync.reload();
		if (cb) cb();
	}

	gulp.watch(paths.metadata("*"), (_, changedFile) => {
		if (!changedFile) return;

		return gulp.series(
			buildSite_getData,
			function () {
				const package = changedFile.match(`${dirs.components}\/(.*?)\/`)[1];
				return buildDocs_forDep(package);
			},
			reload
		);
	});

	gulp.watch(
		[
			"*/package.json",
			"*/dist/*.{css,svg,js,json}",
			"*/dist/**/*.{css,svg,js,json}",
		],
		{
			allowEmpty: true,
			cwd: dirs.components,
		},
		gulp.series(buildSite_copyDep, reload)
	);

	gulp.watch(
		`${dirs.site}/*.pug`,
		gulp.series(gulp.series(buildSite_getData, buildSite_html), reload)
	);

	gulp.watch(
		[
			`${dirs.site}/includes/*.pug`,
			`${dirs.site}/templates/siteComponent.pug`,
			`${dirs.site}/util.js`,
		],
		gulp.series(exports.build, reload)
	);

	gulp.watch(
		`${dirs.site}/resources/**`,
		gulp.series(buildSite_resources, reload)
	);
};

exports.dev = gulp.series(exports.build, exports.watch);
